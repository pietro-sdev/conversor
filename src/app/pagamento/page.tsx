import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <main className="h-screen flex w-full font-[family-name:var(--font-nunito)] antialiased font-semibold">
      <div className="bg-[#F5FAFC] w-full h-full sm:flex items-center justify-center hidden p-16">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src="/assets/pagamento1.svg" alt="pagamento imagem 1" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src="/assets/pagamento2.svg" alt="pagamento imagem 2" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Escolha o método de pagamento
            </CardTitle>
            <CardDescription>
              Selecione uma opção de pagamento abaixo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="stripe" className="w-auto">
              <TabsList className="flex justify-center mb-4">
                {/* Stripe Trigger */}
                <TabsTrigger value="stripe" className="flex items-center gap-2">
                  <img
                    src="/assets/stripe-logo.jpeg"
                    alt="Stripe Logo"
                    className="w-5 h-5"
                  />
                  Stripe
                </TabsTrigger>
                {/* Pix Trigger */}
                <TabsTrigger value="pix" className="flex items-center gap-2">
                  <img
                    src="/assets/pix-logo.svg"
                    alt="Pix Logo"
                    className="w-5 h-5"
                  />
                  Pix
                </TabsTrigger>
              </TabsList>
              {/* Stripe Tab Content */}
              <TabsContent value="stripe">
                <div className="flex flex-col gap-4 max-h-80 overflow-y-auto pr-2">
                  <p className="text-sm text-muted-foreground text-center">
                    Insira os dados para pagamento via Stripe.
                  </p>
                  <div>
                    <Label htmlFor="paymentAmount">Valor</Label>
                    <Input
                      id="paymentAmount"
                      placeholder="R$ 250,00"
                      type="text"
                      disabled
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      type="text"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="installments">Número de Parcelas</Label>
                    <Input
                      id="installments"
                      placeholder="Selecione o número de parcelas"
                      type="text"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label htmlFor="expiryDate">Validade</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/AA"
                        type="text"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="text"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="titular">Nome impresso no Cartão</Label>
                    <Input
                      id="titular"
                      placeholder="Digite seu nome"
                      type="text"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      placeholder="seunome@provedor.com"
                      type="email"
                      className="mt-1"
                    />
                  </div>
                  <Button className="w-full mt-6 font-semibold bg-[#2C3E50]">
                    Pagar com Stripe
                  </Button>
                </div>
              </TabsContent>
              {/* Pix Tab Content */}
              <TabsContent value="pix">
                <div className="flex flex-col items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    Utilize o QR Code abaixo para pagamento via Pix.
                  </p>
                  <div className="w-full flex justify-center items-center mt-4">
                    <img
                      src="/assets/pix-qr-code.jpg"
                      alt="Pix QR Code"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <Button className="w-full mt-6 font-semibold bg-[#2C3E50]">
                    Confirmar pagamento Pix
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground text-center">
              Ao realizar o pagamento, você concorda com nossos Termos de Uso e
              política de privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
