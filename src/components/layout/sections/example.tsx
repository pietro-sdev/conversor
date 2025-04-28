'use client'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

export const ExampleSection = () => {
  const [labelCode, setLabelCode] = useState(
    '^XA\n^FO50,50^ADN,36,20^FDHello, World!^FS\n^XZ',
  )
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function gerarPreview() {
    setLoading(true)
    setPreview(null)

    const payload = {
      dpi: 203,
      zplCommands: btoa(labelCode),      // Base64
      labelWidthInchUnit: 4,
      labelHeightInchUnit: 6,
      format: 'PNG',
      demo: false,
      isZplCommandsBase64: true,
    }

    try {
      const res = await fetch('/api/print', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Erro ${res.status}`)

      const blob = await res.blob()
      setPreview(URL.createObjectURL(blob))
    } catch (err) {
      alert('Falha ao gerar etiqueta – verifique o console.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold text-[#2C3E50] tracking-wider">
          Editor de Etiquetas
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Crie e visualize suas etiquetas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:pl-12 sm:ml-10">
        {/* Editor de Código */}
        <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
          <CardTitle className="text-lg font-semibold mb-4">Código ZPL</CardTitle>
          <CardContent>
            <Textarea
              className="w-full h-64 p-4 border rounded-lg"
              value={labelCode}
              onChange={(e) => setLabelCode(e.target.value)}
            />
            <Button
              onClick={gerarPreview}
              disabled={loading}
              className="bg-[#2C3E50] mt-4 w-full font-semibold"
            >
              {loading ? 'Gerando…' : 'Atualizar Visualização'}
            </Button>
          </CardContent>
        </Card>

        {/* Visualização da Etiqueta */}
        <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center">
          <CardTitle className="text-lg font-semibold mb-4">Visualização</CardTitle>
          <CardContent className="w-full h-64 bg-gray-100 flex items-center justify-center">
            {preview ? (
              // PNG retornado pelo backend
              <img src={preview} alt="Preview da etiqueta" className="max-h-full" />
            ) : (
              <span className="text-gray-500">
                {loading ? 'Carregando…' : 'Pré-visualização da etiqueta'}
              </span>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
