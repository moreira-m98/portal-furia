
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-furia-black text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="text-furia-orange">FURIA</span>
          <span className="ml-2">News</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-furia-orange transition-colors">
            Início
          </Link>
          <Link to="/#noticias" className="hover:text-furia-orange transition-colors">
            Notícias
          </Link>
          <Link to="/#sobre" className="hover:text-furia-orange transition-colors">
            Sobre
          </Link>
        </nav>
        <Link to="/cadastro">
          <Button variant="default" className="bg-furia-orange hover:bg-furia-orange/90 text-white">
            Acessar Chatbot
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
