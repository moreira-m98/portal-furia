
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRegistration } from "@/context/RegistrationContext";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Olá! Bem-vindo ao Chatbot da FURIA! Como posso ajudar você hoje?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const Chatbot: React.FC = () => {
  const { registrationData } = useRegistration();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if registration is completed, if not redirect to registration
    if (!registrationData.completed) {
      toast({
        title: "Acesso não autorizado",
        description: "Por favor, complete o cadastro para acessar o chatbot.",
        variant: "destructive",
      });
      navigate("/cadastro");
    }
  }, [registrationData, navigate, toast]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponses = [
        `Olá ${registrationData.personalInfo.name}! Vamos falar sobre a FURIA?`,
        "A FURIA é uma das maiores organizações de esports do Brasil!",
        "Nossa equipe de CS2 está se preparando para o próximo Major.",
        "Você sabia que a FURIA tem equipes em vários jogos diferentes?",
        "Estamos sempre em busca de novos talentos para nossas equipes.",
        "Você pode acompanhar todas as novidades da FURIA em nossas redes sociais!",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!registrationData.completed) {
    return null; // Don't render anything if redirecting
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg p-4 md:p-6 bg-white">
            <div className="mb-4 pb-4 border-b">
              <h1 className="text-2xl font-bold flex items-center">
                <span className="text-furia-orange mr-2">FURIA</span> Chatbot
              </h1>
              <p className="text-gray-500">
                Olá, {registrationData.personalInfo.name}! Pergunte sobre a FURIA, nossos jogadores, próximos campeonatos e mais!
              </p>
            </div>
            
            <div className="h-[400px] overflow-y-auto mb-4 p-4 bg-gray-50 rounded-md">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-furia-orange text-white"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white border border-gray-200 p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-100"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-grow"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-furia-orange hover:bg-furia-orange/90"
              >
                Enviar
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;
