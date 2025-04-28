/**
 * Proxy para o API Gateway privado
 * Next 13/14 – App Router (arquivo dentro de app/api/print/route.ts)
 */
import { NextRequest, NextResponse } from 'next/server'
import { SignatureV4 } from '@aws-sdk/signature-v4'
import { Sha256 } from '@aws-crypto/sha256-browser'
import { HttpRequest } from '@aws-sdk/protocol-http'
import { defaultProvider } from '@aws-sdk/credential-provider-node'

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()

    const {
      REGION,
      ZPL_API_HOST,         // ex.: ynpcnv1khh.execute-api.sa-east-1.amazonaws.com
      ZPL_STAGE = 'prod',   // estágio do API Gateway
    } = process.env

    if (!REGION || !ZPL_API_HOST) {
      return NextResponse.json(
        { message: 'Variáveis de ambiente AWS_REGION e ZPL_API_HOST faltando.' },
        { status: 500 },
      )
    }

    // --- monta requisição “crua” ---
    const unsignedRequest = new HttpRequest({
      protocol: 'https:',
      method:   'POST',
      headers:  {
        host: ZPL_API_HOST,
        'content-type': 'application/json',
      },
      path: `/${ZPL_STAGE}/zplprinter`,
      body,
    })

    // --- assina com SigV4 ---
    const signer = new SignatureV4({
      service: 'execute-api',
      region: REGION,
      credentials: defaultProvider(),
      sha256: Sha256,
    })

    const signedRequest = await signer.sign(unsignedRequest)

    // --- faz o fetch até o endpoint privado ---
    const awsResp = await fetch(`https://${ZPL_API_HOST}${signedRequest.path}`, {
      method: 'POST',
      headers: signedRequest.headers as Record<string, string>,
      body,
    })

    const buffer = await awsResp.arrayBuffer()

    return new NextResponse(buffer, {
      status: awsResp.status,
      headers: {
        'content-type': awsResp.headers.get('content-type') || 'application/octet-stream',
      },
    })
  } catch (err: any) {
    console.error('Erro no proxy /api/print:', err)
    return NextResponse.json({ message: 'Erro interno' }, { status: 500 })
  }
}
