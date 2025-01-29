import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "E-mail e senha são obrigatórios." },
        { status: 400 }
      );
    }

    // Busca o usuário
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
      return NextResponse.json(
        { error: "Usuário não encontrado ou senha inválida." },
        { status: 401 }
      );
    }

    // Compara a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Usuário não encontrado ou senha inválida." },
        { status: 401 }
      );
    }

    // Gera o token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    // Cria a resposta
    const response = NextResponse.json({
      message: "Login realizado com sucesso!",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });

    // Seta o token em um cookie HTTP‐only
    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
      path: "/",       // cookie disponível em toda a aplicação
    });

    return response;
  } catch (error: any) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { error: "Erro ao fazer login." },
      { status: 500 }
    );
  }
}
