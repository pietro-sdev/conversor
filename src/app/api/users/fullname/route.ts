import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    // Pegando parâmetros da query string
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email"); // Buscar usuário pelo e-mail

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Buscar usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: { email },
      select: { name: true }, // Retorna apenas o nome
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ name: user.name });
  } catch (error) {
    console.error("Error fetching user name:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
