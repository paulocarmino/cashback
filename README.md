<h1 align="center" style="font-size:4em">Cashback App</h1>
<p align="center">Um simples app para cadastrar cashbacks.</p>
<p align="center"><img width=100% src="https://res.cloudinary.com/paulocarmino/image/upload/v1659037890/cashbackapp_f5pdcq.png"></p>

<p align="center">Experimente o app acessando a url abaixo:</p>
<p align="center"><a href="https://cashbackapp.vercel.app/">https://cashbackapp.vercel.app</a></p>

# Tecnologias envolvidas

- React
- Next.JS
- TailwindCSS
- Prisma

# Endpoints via API Routes

```
# POST /api/cashback/check

Request:

{
  "productIdentifier": "cashback-10%",
  "productValue": 823
}

Response:

{
  "cashbackValue": 82.29999999999995
}

```

`GET /api/programs`

`POST /api/programs/create`

`PUT /api/programs/[programId]/update`

`DELETE /api/programs/[programId]/remove`

# Rodando o projeto

```
# Clone esse repositorio
git clone https://github.com/paulocarmino/cashback

# Entre no repositorio
cd cashback

# Instale as dependencias
yarn install

# Inicie o banco pelo docker-compose
docker-compose up -d

# Aplique as migrations no banco
yarn run prisma migrate deploy

# Build o projeto
yarn run build

# Rodando o projeto
yarn run start
```

# Licença

MIT
