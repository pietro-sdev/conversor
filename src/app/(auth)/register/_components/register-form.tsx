"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// 1) Importe useToast
import { useToast } from "@/hooks/use-toast";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  // ESTADOS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2) Pegue a função "toast" do hook
  const { toast } = useToast();

  // FUNÇÃO que chama a API de registro
  async function handleRegister() {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        // Erro → toast destructivo
        toast({
          variant: "destructive",
          title: "Erro ao registrar",
          description: data.error || "Ocorreu um erro no registro.",
        });
        return;
      }

      // Sucesso → toast normal (ou "default")
      toast({
        title: "Sucesso!",
        description: data.message || "Conta criada com sucesso!",
        variant:"success"
      });

      // (Opcional) Redirecionar
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erro inesperado",
        description: "Não foi possível completar o registro. Tente novamente.",
      });
    }
  }

  return (
    <Card className="w-full max-w-md overflow-y-auto max-h-[90vh] sm:overflow-y-visible sm:max-h-screen">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tighter">Faça seu registro agora mesmo!</CardTitle>
        <CardDescription>
          Utilize seu e-mail e senha ou Facebook e Google para se cadastrar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full font-semibold flex items-center gap-2 justify-center"
          variant={"outline"}
        >
          <img src="/assets/google icon.png" alt="Google Icon" className="w-5 h-auto" />
          Cadastrar-se com Google
        </Button>
        <Button
          className="w-full mt-2 font-semibold flex items-center gap-2 justify-center"
          variant={"outline"}
        >
          <img src="/assets/facebook icon.png" alt="Facebook Icon" className="w-3 h-auto" />
          Cadastrar-se com Facebook
        </Button>

        <div className="flex items-center gap-6 mt-4">
          <Separator />
          <span className="text-xs text-muted-foreground">OU</span>
          <Separator />
        </div>
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Seu nome completo aqui"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
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
          onClick={handleRegister}
        >
          Cadastrar-se
        </Button>
        <Label className="flex justify-center text-xs font-semibold tracking-tighter text-muted-foreground mt-4">
          Já tem conta?
          <a href="/login" className="text-black ml-1 underline">
            Faça o login
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
