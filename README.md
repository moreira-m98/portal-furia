Portal Fúria
O Portal Fúria é uma aplicação web moderna desenvolvida com foco em desempenho e escalabilidade. Utilizando tecnologias como Vite, Tailwind CSS e TypeScript, este projeto oferece uma base sólida para desenvolvimento frontend eficiente.

🚀 Tecnologias Utilizadas
Vite — Empacotador de módulos rápido e moderno

Tailwind CSS — Framework CSS utilitário para estilização rápida

TypeScript — Superset do JavaScript que adiciona tipagem estática

PostCSS — Ferramenta para transformação de estilos CSS

ESLint — Ferramenta de linting para manter a qualidade do código

Bun — Runtime JavaScript moderno e rápido (opcional)

📁 Estrutura do Projeto
bash
Copiar
Editar
portal-furia/
├── public/                 # Arquivos públicos acessíveis diretamente
├── src/                    # Código-fonte principal da aplicação
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   └── ...                 # Outros diretórios e arquivos
├── index.html              # Arquivo HTML principal
├── package.json            # Gerenciador de dependências e scripts
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite
🛠️ Instalação e Uso
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/moreira-m98/portal-furia.git
cd portal-furia
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
A aplicação estará disponível em http://localhost:5173/ (ou outra porta especificada).

📦 Scripts Disponíveis
npm run dev — Inicia o servidor de desenvolvimento com recarregamento automático

npm run build — Cria uma versão otimizada para produção

npm run lint — Analisa o código em busca de problemas