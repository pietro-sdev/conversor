import { Nunito } from "next/font/google";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

// Importando a fonte Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Pesos desejados
});

interface FeaturesProps {
  icon: string;
  title: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Timer",
    title: "Rapidez",
  },
  {
    icon: "ShieldCheck",
    title: "Segurança",
  },
  {
    icon: "Zap",
    title: "Simplicidade",
  },
  {
    icon: "Workflow",
    title: "Versatilidade",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className={`${nunito.className} container py-24 sm:py-20`}>
      <h2 className="text-lg font-bold text-[#2C3E50] text-center mb-2 tracking-wider">
        Vantagens
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6">
        Vantagens de utilizar nossos serviços
      </h2>

      <h3 className="md:w-1/2 mx-auto text-lg text-center text-muted-foreground mb-8">
        Com nossa plataforma, você ganha agilidade e eficiência na conversão de arquivos. 
        Oferecemos suporte aos principais formatos do mercado, uma interface intuitiva 
        que qualquer pessoa pode usar e total segurança para seus dados.
      </h3>

      {/* Grid centralizada */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center lg:ml-6 px-auto">
        {featureList.map(({ icon, title }) => (
          <Card 
            key={title} 
            className="h-full bg-white border border-gray-100 shadow-sm rounded-2xl p-6 w-full max-w-[250px] flex flex-col items-center text-center"
          >
            <div className="bg-[#cedceb] p-4 rounded-full ring-8 ring-[#ebf4fd] mb-4 flex items-center justify-center w-16 h-16">
              <Icon 
                name={icon as keyof typeof icons} 
                size={32} 
                color="hsl(var(--primary))" 
                className="text-[#2C3E50]"
              />
            </div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          </Card>
        ))}
      </div>
    </section>
  );
};
