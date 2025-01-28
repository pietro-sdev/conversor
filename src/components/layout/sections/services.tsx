import { Nunito } from "next/font/google";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Importando a fonte Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Eficiência Garantida",
    description:
      "Converta seus arquivos em segundos com nossa tecnologia avançada, projetada para economizar seu tempo e oferecer resultados consistentes, sem falhas.",
  },
  {
    title: "Segurança em Primeiro Lugar",
    description:
      "Seus dados são protegidos com os mais altos padrões de segurança, garantindo total privacidade durante o processo de conversão.",
  },
  {
    title: "Simplicidade que Surpreende",
    description:
      "Com uma interface intuitiva e fácil de usar, qualquer pessoa pode realizar conversões sem complicações, mesmo sem conhecimento técnico.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className={`${nunito.className} container py-24 sm:py-16`}>
      <h2 className="text-lg font-bold text-[#2C3E50] text-center mb-2 tracking-wider">
        Serviços
      </h2>


      <h2 className="text-3xl md:text-4xl text-center font-bold mb-10">
        Por que escolher nosso serviço?
      </h2>
      
      {/* Grid centralizada */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[90%] lg:mr-7 mx-auto">
        {serviceList.map(({ title, description }) => (
          <Card
            key={title}
            className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center mx-auto"
          >
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-semibold">{title}</CardTitle>
              <CardDescription className="text-gray-600 text-md mt-3">{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
