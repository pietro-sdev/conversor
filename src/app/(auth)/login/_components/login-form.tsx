"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// 1) Importe useToast
import { useToast } from "@/hooks/use-toast";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  // ESTADOS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2) Pegue a função "toast"
  const { toast } = useToast();

  // FUNÇÃO DE LOGIN
  async function handleLogin() {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Erro no login",
          description: data.error || "Credenciais inválidas.",
        });
        return;
      }
  
      // ✅ Salvar e-mail no localStorage após login bem-sucedido
      localStorage.setItem("userEmail", email);
  
      // Toast de sucesso
      toast({
        title: "Login realizado com sucesso!",
        description: data.message || "Seja bem-vindo(a)!",
        variant: "success",
      });
  
      // Redirecionar
      window.location.href = "/gestao-de-clientes";
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erro inesperado",
        description: "Não foi possível fazer o login. Tente novamente.",
      });
    }
  }
  

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tighter">Entre com sua conta</CardTitle>
        <CardDescription>
          Utilize seu e-mail e senha ou faça login com Google ou GitHub.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full font-semibold flex items-center gap-2 justify-center"
          variant="outline"
          onClick={() =>
            toast({
              variant: "destructive",
              title: "Ops!",
              description: "Login com Google não configurado neste exemplo.",
            })
          }
        >
          <img src="/assets/google icon.png" alt="Google Icon" className="w-5 h-auto" />
          Entrar com Google
        </Button>
        <Button
          className="w-full mt-2 font-semibold flex items-center gap-2 justify-center"
          variant="outline"
          onClick={() =>
            toast({
              variant: "destructive",
              title: "Ops!",
              description: "Login com Facebook não configurado neste exemplo.",
            })
          }
        >
          <img src="/assets/facebook icon.png" alt="Facebook Icon" className="w-3 h-auto" />
          Entrar com Facebook
        </Button>

        <div className="flex items-center gap-6 mt-4">
          <Separator />
          <span className="text-xs text-muted-foreground">OU</span>
          <Separator />
        </div>

        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            placeholder="exemplo@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <Label className="font-semibold" htmlFor="password">
            Senha
          </Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Sua senha aqui"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <Button
          className="w-full mt-6 font-semibold bg-[#2C3E50]"
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Label className="flex justify-center text-xs font-semibold tracking-tighter text-muted-foreground mt-4">
          Ainda não tem conta?{" "}
          <a href="/register" className="text-black ml-1 underline">
            Registre-se
          </a>
        </Label>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground text-center">
          Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e política de privacidade
        </p>
      </CardFooter>
    </Card>
  );
}
