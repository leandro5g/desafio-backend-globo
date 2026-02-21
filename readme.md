# 🚀 Desafio Globo -- Backend GraphQL (Node.js)

Aplicação desenvolvida como parte de um desafio técnico com o objetivo
de construir um backend fullstack preparado para servir um aplicativo
web de vídeos utilizando **GraphQL** e boas práticas de arquitetura.

------------------------------------------------------------------------

## 🎯 Objetivo do Desafio

Construir uma aplicação web fullstack onde usuários possam:

-   📺 Visualizar uma lista de vídeos (com paginação)
-   ▶️ Assistir aos vídeos
-   ⭐ Deixar feedbacks (nota de 1 a 5 + comentário)
-   👀 Visualizar feedbacks de outros usuários

> O foco principal é demonstrar decisões arquiteturais, estrutura de
> projeto e qualidade técnica.

------------------------------------------------------------------------

## 🧠 Por que GraphQL?

Optamos por **GraphQL** para:

-   Resolver problemas de underfetching e overfetching
-   Permitir que o frontend controle exatamente os dados necessários
-   Facilitar uso em arquiteturas BFF (Backend For Frontend)
-   Melhor escalabilidade para aplicações mobile/web

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   Node.js 22
-   Express 5
-   Apollo Server
-   TypeGraphQL
-   Prisma ORM
-   PostgreSQL
-   TypeDI
-   Jest
-   Docker

------------------------------------------------------------------------

# 🏗️ Arquitetura

Inspirada em:

-   SOLID
-   DDD (Domain-Driven Design)
-   Arquitetura Hexagonal (Ports and Adapters / Clean Architecture)

Estrutura de camadas:

    src/
     ├── enterprise/
     ├── application/
     ├── infra/
     ├── graphql/
     ├── http/
     └── containers/

------------------------------------------------------------------------

# 🟦 Camada Enterprise (Domínio)

## Entities

### Feedback

-   videoId: string
-   comment: string
-   rating: number
-   username: string

### Video

-   title: string
-   description: string
-   url: string
-   thumbnailUrl: string

------------------------------------------------------------------------

# 🟨 Camada Application

## Vídeos

-   fetch-videos
-   register-video

## Feedbacks

-   create-feedback
-   fetch-feedbacks-by-video-id

------------------------------------------------------------------------

# 🟥 Camada Infraestrutura

Implementações concretas:

-   PrismaVideosRepository
-   PrismaFeedbacksRepository

Uso de mappers para conversão entre domínio e banco.

------------------------------------------------------------------------

# 🟪 GraphQL

## Inputs

-   CreateFeedbackInput
-   RegisterVideoInput

## Models

-   VideoModel
-   FeedbackModel
-   VideoPaginationModel
-   FeedbackPaginationModel

------------------------------------------------------------------------

# 🌐 HTTP

-   app.ts → Configuração Express + Apollo
-   index.ts → Bootstrap
-   schema.gql → Schema gerado

------------------------------------------------------------------------

# 🧪 Testes

Testes unitários com Jest para validação de regras de negócio e casos de
uso.

------------------------------------------------------------------------

# 🐳 Docker

    docker-compose up --build

------------------------------------------------------------------------

# 🚀 Como Rodar

    npm install
    npx prisma migrate dev
    npm run dev

------------------------------------------------------------------------

# 🎯 Conclusão

O projeto demonstra organização arquitetural sólida, uso adequado de
GraphQL como BFF, separação clara de responsabilidades e preparação para
evolução futura.
