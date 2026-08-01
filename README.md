# Site Psicóloga Jucilene

Landing page da psicóloga Jucilene Barbosa Dourado, construída com React e
Vite. O projeto é uma aplicação estática, responsiva e preparada para publicação
na Vercel.

## Requisitos

- Node.js 20.19 ou superior
- npm 10 ou superior

## Comandos

```bash
npm install       # instala as dependências
npm run dev       # inicia o ambiente local
npm run lint      # verifica o código React
npm run build     # gera a versão de produção
npm run check     # executa lint e build
npm run preview   # visualiza o build localmente
```

## Estrutura

```text
src/
├── components/   # componentes reutilizáveis e elementos de layout
├── data/         # navegação, links institucionais e catálogo de serviços
├── sections/     # seções que compõem a página inicial
├── styles/       # estilos globais e estilos separados por seção
├── App.jsx       # composição da página
└── main.jsx      # entrada da aplicação
```

Os componentes mantêm estado apenas onde ele é necessário: o menu mobile no
`Header` e a expansão de detalhes no `ServiceCard`. Como a página não possui
rotas nem estado global, não há dependência de roteador ou biblioteca de estado.

## Publicação

O build é gerado em `dist/`. Na Vercel, o framework pode ser detectado como
Vite, com o comando `npm run build` e o diretório de saída `dist`.
