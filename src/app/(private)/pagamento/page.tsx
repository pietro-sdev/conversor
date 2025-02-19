"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export default function Page() {
  const [openDialog, setOpenDialog] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleAcceptTerms = () => {
    setTermsAccepted(true);
    setOpenDialog(false);
  };

  return (
    <main className="h-screen flex w-full font-nunito antialiased font-semibold">
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
                  <Button className="w-full mt-6 font-semibold bg-[#2C3E50]" disabled={!termsAccepted}>
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
                  <Button className="w-full mt-6 font-semibold bg-[#2C3E50]" disabled={!termsAccepted}>
                    Confirmar pagamento Pix
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex items-center gap-2 mt-4">
              <Checkbox id="terms" checked={termsAccepted} onCheckedChange={() => setOpenDialog(true)} />
              <Label htmlFor="terms" className="text-sm">
                Eu li e aceito os {" "}
                <span className="text-blue-600 cursor-pointer" onClick={() => setOpenDialog(true)}>
                  Termos e Condições de Uso
                </span>
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground text-center">
              Ao realizar o pagamento, você concorda com nossos Termos de Uso e política de privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-nunito">Termos e Condições de Uso - Conversor de Etiquetas</DialogTitle>
          </DialogHeader>
          <div className="max-h-60 overflow-y-auto text-sm text-muted-foreground font-nunito p-2">
          Termos e Condições de Uso - Conversor de Etiquetas
          Última atualização: [Data Atual]
          Bem-vindo à plataforma Conversor de Etiquetas! Ao utilizar nossos serviços, você concorda em
          estar legalmente vinculado aos presentes Termos e Condições de Uso. Caso não concorde com
          algum destes termos, por favor, não utilize a plataforma.
          1. Definições
          - Plataforma: Refere-se ao serviço online de conversão de etiquetas ZPL para PDF, oferecido pelo
          Conversor de Etiquetas.
          - Usuário: Qualquer pessoa física ou jurídica que cria uma conta para utilizar os serviços da
          plataforma.
          - Assinatura: O plano de pagamento mensal ou anual escolhido pelo usuário para acessar os
          serviços.
          2. Assinatura e Pagamentos
          2.1. Planos Disponíveis:
          - Plano Mensal: Renova-se automaticamente a cada mês, a menos que cancelado pelo usuário
          com no mínimo 7 (sete) dias de antecedência.
          - Plano Anual: Renova-se automaticamente ao final de 12 (doze) meses, a menos que cancelado
          pelo usuário com no mínimo 15 (quinze) dias de antecedência.
          2.2. Forma de Pagamento:
          Os pagamentos podem ser realizados através de métodos digitais seguros disponíveis na
          plataforma. O usuário concorda em manter suas informações de pagamento atualizadas e autoriza
          cobranças recorrentes conforme o plano escolhido.
          2.3. Política de Reembolso:
          Não oferecemos reembolso parcial ou total para assinaturas já cobradas, salvo em casos de falha
          comprovada nos serviços.
          3. Uso da Conta
          3.1. Responsabilidade do Usuário:
          O usuário é responsável por manter a confidencialidade de suas credenciais de login.
          3.2. Compartilhamento de Senha:
          É estritamente proibido o compartilhamento de senha. Cada conta é pessoal e intransferível. Caso
          seja detectado o uso simultâneo por múltiplos usuários não autorizados, a plataforma poderá:
          - Suspender temporariamente a conta;
          - Exigir a regularização mediante pagamento adicional; ou
          - Cancelar a conta sem direito a reembolso.
          3.3. Licença de Uso:
          O acesso ao serviço é licenciado, não vendido. Os direitos do usuário estão restritos ao uso
          individual e de acordo com os presentes Termos.
          4. Funcionalidades e Limitações de Uso
          4.1. O Conversor de Etiquetas se compromete a entregar arquivos PDF derivados de entradas ZPL
          fornecidas pelo usuário.
          4.2. A plataforma não é responsável por entradas inválidas, erros de formatação ou quaisquer
          problemas externos ao sistema.
          4.3. Limites de uso diário ou mensal poderão ser aplicados conforme o plano escolhido.
          5. Cancelamento e Rescisão
          5.1. O usuário pode cancelar sua assinatura a qualquer momento diretamente na plataforma.
          5.2. A plataforma reserva-se o direito de encerrar uma conta, sem aviso prévio, em caso de
          violação destes Termos.
          6. Privacidade e Proteção de Dados
          6.1. Os dados fornecidos pelos usuários serão tratados de acordo com nossa Política de
          Privacidade.
          6.2. Nenhum conteúdo processado (arquivos ZPL ou PDFs gerados) será armazenado ou
          compartilhado pela plataforma, salvo autorização expressa do usuário.
          7. Limitação de Responsabilidade
          A plataforma não será responsável por danos diretos, indiretos, acidentais ou consequenciais
          decorrentes do uso dos serviços, incluindo, mas não se limitando, a interrupções, perdas de dados
          ou outros problemas técnicos.
          8. Alterações nos Termos e Condições
          Reservamo-nos o direito de alterar estes Termos a qualquer momento. Alterações significativas
          serão notificadas por e-mail ou através da plataforma, e o uso continuado dos serviços após a
          publicação das alterações constitui aceitação das mesmas.
          9. Contato
          Para dúvidas ou suporte, entre em contato através de nosso e-mail oficial:
          suporte@conversordeeetiquetas.com
          Ao continuar, você confirma que leu, entendeu e concorda com os Termos e Condições do
          Conversor de Etiquetas.
          </div>
          <DialogFooter>
            <Button onClick={handleAcceptTerms} className="bg-green-600 hover:bg-green-700 font-nunito">
              Aceitar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
