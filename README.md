# Dom Ramon BarberShop Website

Este projeto é uma landing page para a Dom Ramon BarberShop, desenvolvida utilizando Next.js, Tailwind CSS e TypeScript. A página inicial inclui seções para Home, Serviços e Sobre o Barbeiro, fornecendo aos usuários informações sobre a barbearia e seus serviços.

## Índice
- [Dom Ramon BarberShop Website](#dom-ramon-barbershop-website)
  - [Índice](#índice)
  - [Instalação](#instalação)
  - [Uso](#uso)
    - [Seção Home](#seção-home)
    - [Seção Sobre](#seção-sobre)
    - [Seção Serviços](#seção-serviços)
  - [Estrutura do Projeto](#estrutura-do-projeto)
    - [Componentes](#componentes)
    - [Estilização](#estilização)
  - [Licença](#licença)

## Instalação

Para começar com este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/dom-ramon-barbershop.git
   cd dom-ramon-barbershop
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra seu navegador e navegue até `http://localhost:3000`.

## Uso
[Dom Ramon BarberShop Website](https://dom-ramon-barber.vercel.app/)

### Seção Home
Contém uma mensagem de boas-vindas e um botão de call-to-action.

### Seção Sobre
Fornece informações sobre o barbeiro e a história da barbearia.

### Seção Serviços
Lista os serviços oferecidos pela barbearia.

## Estrutura do Projeto

```
├── _components
│   ├── ui
│   │   └── button.tsx
│   │   └── footer.tsx
│   │   └── hero.tsx
│   ├── header.tsx
│   ├── modalServiceSelector.tsx
│   ├── scrollToTopButton.tsx
│   ├── hero.tsx
│   ├── services.tsx
│   ├── about-barber.tsx
│   ├── card.tsx
│   └── footer.tsx
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
├── data
│   ├── servicesData.js
├── lib
│   ├── utils.js
├── public
│   └── cartoon_interior_barbershop.png
│   └── tesoura.ico
└── README.md
```

### Componentes

- **Header**: Barra de navegação com links para diferentes seções da página.
- **Hero**: Seção introdutória com uma mensagem de boas-vindas e uma imagem.
- **About**: Informações sobre o barbeiro e a barbearia.
- **Services**: Lista os serviços oferecidos pela barbearia.
- **Footer**: Informações de contato e links para redes sociais.

### Estilização

O projeto utiliza Tailwind CSS para estilização. As cores personalizadas e outros estilos são definidos no arquivo `globals.css`.


## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.