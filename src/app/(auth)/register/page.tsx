'use client'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="h-screen flex w-full font-[family-name:var(--font-nunito)] antialiased font-semibold">
      <div className="bg-[#F5FAFC] w-full sm:h-full min-h-screen sm:flex items-center justify-center p-16 hidden">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src="/assets/ilustration one.svg" alt="aluguel de carro" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src="/assets/ilustration two.svg" alt="aluguel de carro" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md overflow-y-auto max-h-[90vh] sm:overflow-y-visible sm:max-h-screen">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">Faça seu registro agora mesmo!</CardTitle>
            <CardDescription>
              Utilize seu e-mail e senha ou facebook e google para se cadastrar.
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
              <Input id="name" placeholder="Seu nome completo aqui" type="text" />
            </div>
            <div className="mt-4">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="exemplo@email.com" type="email" />
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
            <Button className="w-full mt-6 font-semibold bg-[#2C3E50]">Cadastrar-se</Button>
            <Label className="flex justify-center text-xs font-semibold tracking-tighter text-muted-foreground mt-4">
            Já tem conta? <a href="/login" className="text-black ml-1 underline"> Faça o login </a>
            </Label>          
            </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground text-center">
              Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e política de privacidade
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
