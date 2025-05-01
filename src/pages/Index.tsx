
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock news data
const newsData = [
  {
    id: 1,
    title: "FURIA anuncia nova formação para torneios de CS2",
    description: "A equipe FURIA anunciou hoje sua nova formação para os próximos torneios de Counter-Strike 2. Com a adição de novos talentos, a equipe busca consolidar sua posição entre as melhores do mundo.",
    category: "CS2",
    date: "15 de maio, 2024",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Jogador da FURIA é eleito o MVP da temporada",
    description: "Após uma temporada impressionante, o jogador da FURIA foi eleito o MVP (Jogador Mais Valioso) do campeonato. Sua performance consistente e jogadas decisivas foram fundamentais para o sucesso da equipe.",
    category: "Premiações",
    date: "10 de maio, 2024",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "FURIA lança nova linha de produtos oficiais",
    description: "A organização FURIA acaba de lançar sua nova linha de produtos oficiais, incluindo camisetas, moletons e acessórios. Os fãs agora podem mostrar seu apoio com estilo usando as novas peças da coleção.",
    category: "Produtos",
    date: "5 de maio, 2024",
    imageUrl: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "FURIA classifica-se para o Major de Berlim",
    description: "A equipe brasileira FURIA garantiu sua vaga no Major de Berlim após uma campanha impecável nas classificatórias. Com vitórias convincentes, a equipe mostrou que está pronta para competir contra os melhores times do mundo.",
    category: "Campeonatos",
    date: "1 de maio, 2024",
    imageUrl: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "FURIA anuncia parceria com marca global de tecnologia",
    description: "Em uma movimentação estratégica, a FURIA anunciou hoje uma parceria com uma grande marca global de tecnologia. A colaboração promete trazer novidades e benefícios tanto para a organização quanto para os fãs.",
    category: "Negócios",
    date: "25 de abril, 2024",
    imageUrl: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Equipe feminina da FURIA conquista título internacional",
    description: "A equipe feminina da FURIA conquistou um importante título internacional neste fim de semana. Com uma atuação dominante na final, as jogadoras brasileiras mostraram por que são consideradas uma das melhores equipes do mundo.",
    category: "FURIA Feminina",
    date: "20 de abril, 2024",
    imageUrl: "https://images.unsplash.com/photo-1615922997411-354fa5a36cc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* News Section */}
        <section id="noticias" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimas Notícias</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fique por dentro das novidades sobre a FURIA e o mundo dos esports
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map((news) => (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  description={news.description}
                  category={news.category}
                  date={news.date}
                  imageUrl={news.imageUrl}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-furia-orange hover:bg-furia-orange/90 text-white px-8 py-6 text-lg">
                Ver Mais Notícias
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="sobre" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a <span className="text-furia-orange">FURIA</span></h2>
                <p className="text-gray-700 mb-6 text-lg">
                  A FURIA Esports é uma organização brasileira de esportes eletrônicos fundada em 2017. Com equipes em diversos jogos como CS2, Valorant, Free Fire e outros, a FURIA se estabeleceu como uma das principais organizações de esports da América Latina.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  Nossa missão é desenvolver o cenário competitivo brasileiro e representar o Brasil nos maiores palcos do mundo, sempre com muita paixão e dedicação.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-furia-orange hover:bg-furia-orange/90 text-white">
                    Conheça a Equipe
                  </Button>
                  <Link to="/cadastro">
                    <Button variant="outline" className="border-furia-orange text-furia-orange hover:bg-furia-orange hover:text-white">
                      Acesse o Chatbot
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1548686304-89d188a80029?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" 
                  alt="FURIA Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-furia-black to-furia-gray text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Acesse o <span className="text-furia-orange">Chatbot</span> da FURIA
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Interaja com o nosso chatbot e tenha acesso a informações exclusivas sobre a FURIA, jogadores, campeonatos e muito mais!
            </p>
            <Link to="/cadastro">
              <Button className="bg-furia-orange hover:bg-furia-orange/90 text-white px-8 py-6 text-lg">
                Cadastre-se Agora
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
