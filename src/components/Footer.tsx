
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-furia-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <span className="text-furia-orange">FURIA</span> News
          </h3>
          <p className="text-gray-400">
            Seu portal de notícias sobre os times e acontecimentos da FURIA Esports.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-furia-orange transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/#noticias" className="text-gray-400 hover:text-furia-orange transition-colors">
                Notícias
              </Link>
            </li>
            <li>
              <Link to="/#sobre" className="text-gray-400 hover:text-furia-orange transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/cadastro" className="text-gray-400 hover:text-furia-orange transition-colors">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com/FURIA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-furia-orange">
              Twitter
            </a>
            <a href="https://www.instagram.com/furiagg/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-furia-orange">
              Instagram
            </a>
            <a href="https://www.youtube.com/furiagg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-furia-orange">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} FURIA News. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
