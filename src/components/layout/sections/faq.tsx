import { Nunito } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Importando a fonte Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Como funciona o serviço?",
    answer:
      "Nosso serviço permite converter arquivos rapidamente e com alta qualidade. Basta enviar o arquivo e escolher o formato desejado.",
    value: "item-1",
  },
  {
    question: "O serviço é gratuito?",
    answer:
      "Sim! Oferecemos uma versão gratuita com funcionalidades essenciais. Também temos planos premium para recursos avançados.",
    value: "item-2",
  },
  {
    question: "Quais formatos são suportados?",
    answer:
      "Suportamos diversos formatos, incluindo PDF, JPG, PNG, DOCX e muitos outros. Confira nossa página de suporte para a lista completa.",
    value: "item-3",
  },
  {
    question: "Meus arquivos estão seguros?",
    answer:
      "Sim, a segurança dos seus arquivos é nossa prioridade. Utilizamos criptografia para garantir a privacidade e proteção dos seus dados.",
    value: "item-4",
  },
  {
    question: "Preciso criar uma conta?",
    answer:
      "Não! Você pode converter arquivos sem precisar de cadastro. No entanto, usuários registrados têm acesso a funcionalidades extras.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className={`${nunito.className} text-black rounded-2xl container max-w-[800px] mx-auto py-16 px-6 sm:-mt-32 sm:pt-14 sm:px-10`}
    >
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary tracking-wider text-[#2C3E50] font-bold">FAQ</h2>
        <h2 className="text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
      </div>

      <Accordion type="single" collapsible className="w-full font-bold">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className=" font-bold">
            <AccordionTrigger className="text-left w-full text-lg font-bold">{question}</AccordionTrigger>
            <AccordionContent className="text-md text-black">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
