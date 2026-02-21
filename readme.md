# 🚀 Desafio Globo -- Backend GraphQL (Node.js)

Aplicação desenvolvida como parte de um desafio técnico com o objetivo
de construir um backend fullstack utilizando **GraphQL**, boas práticas
arquiteturais e separação clara de responsabilidades.

------------------------------------------------------------------------

## 🎯 Objetivo

Construir uma aplicação onde usuários possam:

-   Visualizar vídeos (com paginação)
-   Assistir vídeos
-   Registrar feedbacks (nota de 1 a 5 + comentário)
-   Visualizar feedbacks por vídeo

O foco principal foi demonstrar decisões técnicas, organização
arquitetural e qualidade de código.

------------------------------------------------------------------------

# 🔌 Endpoint Principal

    POST http://localhost:3000/graphql
    Content-Type: application/json

Toda a API é exposta via GraphQL.

------------------------------------------------------------------------

# 🛠️ Tecnologias Utilizadas

-   Node.js 22
-   Express 5
-   Apollo Server
-   TypeGraphQL
-   Prisma ORM
-   PostgreSQL
-   TypeDI (Injeção de Dependência)
-   Jest (Testes)
-   Docker

------------------------------------------------------------------------

# 🏗️ Arquitetura

Inspirada em:

-   SOLID
-   DDD (Domain-Driven Design)
-   Arquitetura Hexagonal (Ports & Adapters / Clean Architecture)

Estrutura:

    src/
     ├── enterprise/
     ├── application/
     ├── infra/
     ├── graphql/
     ├── http/
     └── containers/

Separação entre:

-   Domínio (entidades e contratos)
-   Casos de uso (application layer)
-   Infraestrutura (Prisma e implementações concretas)
-   Camada de apresentação (GraphQL)

------------------------------------------------------------------------

# 📡 Documentação da API

## ✅ Registrar Vídeo

### Mutation

``` graphql
mutation RegisterVideo($data: RegisterVideoInput!) {
  registerVideo(data: $data) {
    id
    title
    description
    url
    thumbnailUrl
  }
}
```

### Variables

``` json
{
  "data": {
    "title": "TanStack Start in 100 Seconds",
    "description": "Introdução rápida ao TanStack Start (full-stack/DX) (inglês).",
    "url": "https://www.youtube.com/watch?v=1fUBWAETmkk",
    "thumbnailUrl": "https://img.youtube.com/vi/1fUBWAETmkk/hqdefault.jpg"
  }
}
```

------------------------------------------------------------------------

## 🔎 Buscar Vídeos

``` graphql
query {
  videos(page: 1, limit: 10) {
    total
    totalPages
    videos {
      id
      title
      url
      thumbnailUrl
    }
  }
}
```

------------------------------------------------------------------------

## ⭐ Registrar Feedback

### Mutation

``` graphql
mutation CreateFeedback($data: CreateFeedbackInput!) {
  createFeedback(data: $data) {
    id
    videoId
    comment
    rating
    username
  }
}
```

### Variables

``` json
{
  "data": {
    "videoId": "0e204ab4-951b-4b08-a950-966d66e2bcac",
    "comment": "Adorei o video",
    "rating": 5,
    "username": "Sousa"
  }
}
```

------------------------------------------------------------------------

## 💬 Buscar Feedbacks por Vídeo

``` graphql
query {
  feedbacks(page: 1, limit: 20, videoId: "0e204ab4-951b-4b08-a950-966d66e2bcac") {
    feedbacks {
      id
      videoId
      comment
      rating
      username
    }
    total
    totalPages
  }
}
```

------------------------------------------------------------------------

# 📂 Arquivo de Requests (Insomnia / Postman)

O projeto inclui na raiz:

    requests.yaml

Este arquivo pode ser importado diretamente no **Insomnia**.

### Como importar:

1.  Abrir Insomnia
2.  Application → Import → From File
3.  Selecionar `requests.yaml`

Também é possível converter facilmente para Postman Collection.

------------------------------------------------------------------------

# 🧪 Testes

Testes unitários com **Jest** focados nos casos de uso, garantindo que
regras de negócio sejam executadas corretamente de forma isolada.

------------------------------------------------------------------------

# 🐳 Como Rodar

### Localmente

    npm install
    npx prisma migrate dev
    npm run dev

### Com Docker

    docker-compose up --build

------------------------------------------------------------------------

# 🚀 Conclusão

Projeto estruturado com foco em:

-   Separação de responsabilidades
-   Escalabilidade
-   Testabilidade
-   Uso estratégico de GraphQL como BFF
-   Organização arquitetural sólida

Preparado para evoluir com autenticação, cache, métricas e melhorias
futuras.
