"use client";

import { Nunito } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";

// Importando a fonte Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Lista de links do Footer
const footerLinks = [
  {
    title: "Empresa",
    links: [
      { name: "Sobre nós", href: "/about" },
      { name: "Contato", href: "/contact" },
      { name: "Carreiras", href: "/careers" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { name: "Conversão de Arquivos", href: "/services" },
      { name: "Segurança", href: "/security" },
      { name: "Planos", href: "/pricing" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Documentação", href: "/docs" },
      { name: "Política de Privacidade", href: "/privacy" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      className={`${nunito.className} bg-gray-900 text-white py-10 mt-14 rounded-t-2xl`}
    >
      <div className="container mx-auto px-6">
        {/* Grid de links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold">Conversor</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Converta seus arquivos de forma rápida e segura.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-700 my-6" />

        {/* Redes sociais e botão de scroll para topo */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Conversor. Todos os direitos reservados.
          </p>

          {/* Botão de voltar ao topo */}
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-gray-800"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="size-5 text-white" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
