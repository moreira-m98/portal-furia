# Portal Fúria

O **Portal Fúria** é uma aplicação web moderna desenvolvida com foco em desempenho e escalabilidade. Utilizando tecnologias como Vite, Tailwind CSS e TypeScript, este projeto oferece uma base sólida para desenvolvimento frontend eficiente.

## 🚀 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) — Empacotador de módulos rápido e moderno
- [Tailwind CSS](https://tailwindcss.com/) — Framework CSS utilitário para estilização rápida
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript que adiciona tipagem estática
- [PostCSS](https://postcss.org/) — Ferramenta para transformação de estilos CSS
- [ESLint](https://eslint.org/) — Ferramenta de linting para manter a qualidade do código
- [Bun](https://bun.sh/) — Runtime JavaScript moderno e rápido (opcional)

## 📁 Estrutura do Projeto

```bash
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
```

## 🛠️ Instalação e Uso

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/moreira-m98/portal-furia.git
   cd portal-furia
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173/`.

## 📦 Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Cria uma versão otimizada para produção
- `npm run lint` — Analisa o código em busca de problemas
