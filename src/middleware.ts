import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Se não estiver autenticado, redireciona para a página de login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Permite o acesso se o token estiver presente
  return NextResponse.next();
}

// Configura quais rotas devem ser protegidas pelo middleware
export const config = {
  matcher: ["/pagamento", "/gestao-de-clientes"], // Protege as rotas /pagamento e /gestao-de-clientes
};
