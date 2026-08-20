# S3Bank — Site institucional

Landing page da conta digital S3Bank, construída em React + Vite, inspirada na
linguagem visual de bancos digitais brasileiros (Itaú / C6 Bank), com a
paleta de marca do S3Bank (roxo → azul → cobalto).

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior instalado.

```bash
# 1. Entrar na pasta do projeto
cd s3bank

# 2. Instalar as dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
```

O terminal vai mostrar um endereço parecido com `http://localhost:5173` —
abra no navegador.

## Gerar a versão de produção

```bash
npm run build
```

Isso cria a pasta `dist/` com o site pronto para publicar em qualquer
hospedagem estática (Vercel, Netlify, Cloudflare Pages, etc).

Para conferir o resultado do build localmente:

```bash
npm run preview
```

## Estrutura do projeto

```
s3bank/
├── index.html              # HTML base + fontes (Google Fonts)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             # Ponto de entrada do React
    ├── App.jsx              # Monta a ordem das seções da página
    ├── index.css            # Estilos globais e utilitários (.btn, .section...)
    ├── styles/
    │   └── tokens.css        # Paleta de cores, tipografia, espaçamentos
    ├── assets/               # Imagens dos cartões e logo
    └── components/
        ├── Header.jsx/.css       # Cabeçalho fixo + menu mobile
        ├── Hero.jsx/.css         # Abertura + cartão 3D interativo
        ├── LogoStrip.jsx/.css    # Faixa de credibilidade (Bacen, FGC...)
        ├── Benefits.jsx/.css     # Grade de diferenciais
        ├── CardTiers.jsx/.css    # Comparativo Bronze/Prata/Ouro/Diamante
        ├── AppShowcase.jsx/.css  # Mockup do extrato do app
        ├── Security.jsx/.css     # Seção de segurança/regulação
        ├── FinalCTA.jsx/.css     # Chamada final para abrir conta
        └── Footer.jsx/.css       # Rodapé
```

## Paleta de cores (tokens)

Definida em `src/styles/tokens.css`:

| Token             | Hex       | Uso                                   |
|-------------------|-----------|----------------------------------------|
| `--s3-violet`      | `#6F42C1` | Início do gradiente de marca           |
| `--s3-blue`        | `#3355D3` | Meio do gradiente de marca             |
| `--s3-cobalt`      | `#1E2B88` | Final do gradiente de marca            |
| `--s3-bg`          | `#0A0B14` | Fundo geral do site                    |
| `--s3-gold`        | `#CBA15C` | Acento do cartão Ouro                  |
| `--s3-silver`      | `#C0C0C0` | Acento do cartão Prata                 |
| `--s3-magenta`     | `#D61F7A` | Acento do cartão Bronze                |

## Personalizando conteúdo

- **Textos**: cada seção tem seu conteúdo direto no `.jsx` (arrays como
  `TIERS`, `BENEFITS`, `MOVEMENTS`) — edite ali, sem precisar mexer no CSS.
- **Imagens dos cartões**: troque os arquivos em `src/assets/` mantendo o
  mesmo nome, ou atualize o `import` no componente correspondente.
- **Cores**: mude os valores em `src/styles/tokens.css` — como são variáveis
  CSS, a mudança se propaga para o site inteiro.
- **Link de "Abrir conta"**: o formulário final (`FinalCTA.jsx`) está com
  `onSubmit` de exemplo — troque pelo endpoint real da sua API quando tiver.

## Próximos passos sugeridos

1. Trocar textos institucionais (CNPJ, ouvidoria, termos) pelos dados reais.
2. Conectar o formulário de abertura de conta a um backend/CRM.
3. Adicionar páginas internas (Termos, Privacidade) com React Router, se
   o site crescer além de uma landing page única.
4. Rodar um Lighthouse/PageSpeed antes de publicar para checar performance.
"# S3-Bank-demo-react" 
