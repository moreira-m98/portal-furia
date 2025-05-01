
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-furia-black to-furia-gray text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-furia-orange">FURIA</span> News
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Seu portal de notícias sobre o mundo dos esports e as últimas atualizações da FURIA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/#noticias">
              <Button className="bg-furia-orange hover:bg-furia-orange/90 text-white text-lg px-8 py-6">
                Ver Notícias
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button variant="outline" className="border-white text-white hover:text-furia-orange hover:border-furia-orange text-lg px-8 py-6">
                Acessar Chatbot
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
