"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Search, LogOut, Briefcase, Calculator } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Nunito } from "next/font/google";

// Carregue a fonte no escopo do módulo
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos desejados
});

export default function Navbar() {
  const [fullName, setFullName] = useState<string | null>(null);

  // Busca o nome do usuário ao carregar a página
  useEffect(() => {
    async function fetchUser() {
      const email = localStorage.getItem("userEmail"); // Pegue o email do usuário logado
  
      if (!email) {
        console.error("Usuário não autenticado");
        setFullName("Usuário");
        return;
      }
  
      try {
        const response = await fetch(`/api/users/fullname?email=${encodeURIComponent(email)}`);
        if (!response.ok) throw new Error("Erro ao buscar usuário");
  
        const data = await response.json();
        setFullName(data.name);
      } catch (error) {
        console.error(error);
        setFullName("Usuário");
      }
    }
  
    fetchUser();
  }, []);

  return (
    <nav className={`${nunito.className} flex items-center justify-between bg-white border p-3 sm:w-full font-semibold`}>
      <div className="flex items-center gap-4 font-semibold">
        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-1 border rounded-lg hover:bg-gray-100 transition">
              <span className="hidden sm:block font-semibold text-sm">
                {fullName || "Carregando..."}
              </span>
              <ChevronDown className="hidden sm:block w-4 h-4 text-gray-600" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="cursor-pointer">
            <DropdownMenuItem className="cursor-pointer font-semibold">
              <LogOut className="w-4 h-4 mr-2 font-semibold" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Navigation Links */}
        <ul className="hidden sm:flex items-center gap-2 font-semibold">
          <li>
            <Link href={'/gestao-de-clientes'}>
              <Button variant="ghost" size="default" className="font-semibold hover:text-black transition">
                <Briefcase className="w-4 h-4 font-semibold" />
                Gestão de Clientes
              </Button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger>
            <Menu className="sm:hidden w-6 h-6 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="mt-4 flex flex-col gap-4 text-sm font-medium text-sidebar-primary-foreground">
              <li>
                <Button variant="ghost" className="hover:text-black transition">
                  <Calculator className="w-4 h-4 " />
                  Gestão de Clientes
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        {/* Search Bar */}
        <div className="hidden sm:flex sm:w-full relative sm:justify-center">
          <Input
            type="text"
            placeholder="Pesquisar..."
            className="rounded-sm font-medium border sm:w-96 lg:w-[32rem] px-4 py-2 text-sm"
          />
          <Search className="absolute right-4 top-2.5 w-4 h-4 text-gray-600" />
        </div>
      </div>
    </nav>
  );
}
