Ignews 📰

Com o intuito de estar ambrangendo meus conhecimentos, desenvolvi esta solução seguindo as aulas da terceira semana do Ignite, onde conseguir absorver bastante conhecimento e ampliar minhas skils nos seguintes assuntos:

  - Next
  - Sass
  - Stripe
  - Next Auth
  - Fauna
  - JamStack
  - Prismic
  - Server side render e get static props
  - Api next

Para executar o projeto em sua maquina, precisaremos seguir os seguintes passos.
  
  Iremos baixar o projeto e em seguida acessar a pasta referente ao mesmo.

  ```bash
  gh repo clone Chrystiansantos/ignite-react && cd ignews
  ```

  Renomear o arquivo **.env.local.example** para **.env.local** e em seguida configurar nossas variaveis de ambiente.

  ## Stripe
    Iremos acessar o seguinte link <a href="https://stripe.com/br">Stripe</a> em seguida irá criar uma conta, após isso ira cadastrar um novo produto e copiar as credenciais e atualizar os seguintes campos dentro de .env

    STRIPE_PRODUCT_ID=
    STRIPE_API_KEY=
    NEXT_PUBLIC_STYPE_PUBLIC_KEY=
    STRIPE_SUCCESS_URL=
    STRIPE_CANCEL_URL=
    STRIPE_WEBHOOK_SECRET=

  iremos em seguida baixar a <a href="https://stripe.com/docs/stripe-cli">CLI</a> do stripe para conseguirmos ouvir os webhooks e atualizar nosso usuario assim que ele concluir a compra:

  Após a instalação e login, vamos iniciar o nosso servidor da seguinte forma:
  
  ```bash
  ❯ stripe listen --forward-to localhost:3000/api/webhooks
  ```

  ## Github

  Agora iremos criar uma aplicação Oauth no <a href="https://github.com/">Github</a> em seguida preencher as seguinte credenciais:

  GITHUB_CLIENT_ID
  GITHUB_CLIENT_SECRET
  SIGNIN_KEY

  **Onde SIGNIN_KEY será um hash aleatório criado pelo usuário**

  ## Fauna
  
  Irei acessar o <a href="https://fauna.com/">Fauna</a> fazer login, e criar uma nova database. A seguir iremos clicar no database que acabamos de criar, e ir em security e copiar a chave, e adicionar a informacao dentro deste campo.

  FAUNADB_KEY

  Feito isso irei criar 2 collections com o seguinte nome:
   - users
   - subscriptions
  
  Criaremos também os seguinte indexs dentro de cada uma respectivamente:

  | Collection   |         Index Name         |       Terms |
  | ------------ | :------------------------: | ----------: |
  | subscription |   subscription_by_status   | data.status |
  | subscription |  subscription_by_user_ref  | data.userId |
  | subscription |    subscriptions_by_id     |     data.id |
  | user         |       user_by_email        |  data.email |
  | user         | user_by_stripe_customer_id | data.status |


  ## Prismic

  Irei acessar o <a href="https://prismic.io/">Prismic</a> fazer login, e em seguida iremos criar nosso projeto, e abri-lo apos abrir clicarmos em settings, e **API & Security** iremos copiar nossas credenciais da seguinte maneira:
  PRISMIC_ENDPOINT=Use this entry point for your api access
  PRISMIC_ACCESS_TOKEN=Access to master

  Após essa configuracão criaremos os nossos posts.

A seguir iremos executar este outro comando para instalar nossas dependencias e subir nosso front-end.
```bash
❯ yarn && yarn dev
```

<br><br>

## Example

https://user-images.githubusercontent.com/33062949/171069517-390da915-0ea9-40d5-9238-49cff93dd24a.mp4