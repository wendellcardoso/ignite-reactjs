# Trilha ReactJS

## CHAPTER 1 | 01-github-explorer

- ###    Inicializando o repositório do projeto criando o package.json:

>       yarn init -y

>       npm init -y

- ###   Instalando o react:

>       yarn add react

- ###   Instalando o react-dom

>       yarn add react-dom

- ###   Estruturando as pastas do projeto

>       01. Criar a pasta **src** onde ficará o código criado na aplicação

>       02. Criar a pasta **public** onde ficarão os **assets** do projeto

>       03. Criar o arquivo **index.html** dentro da pasta **public**

- ###   Configurando o Babel
>       01. O Babel é uma ferramento que serve para converter o código de uma maneira que todos os browsers e todo o ambiente da aplicação consiga entender todos os códigos.

>       02. yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react -D

>       03. Criar o arquivo babel.config.js dentro da pasta raiz do projeto

- ###   Criando o arquivo index.js na pasta src

>       Executando a conversão do arquivo **index.jsx** para o arquivo **bundle.js**

>       yarn babel src/index.jsx --out-file dist/bundle.js

- ###   Configurando o Webpack
>       Estipula uma séries de configurações (loaders) que ensinam a aplicaçao a tratar cada tipo de arquivo importado

>       Serve para auxilar na importação de qualquer tipo de arquivo

>       yarn add webpack webpack-cli babel-loader -D    // babel-loader faz a integraçao entre o babel e o webpack

>       yarn webpack    // executa o webpack

- ###   Estruturado ReactJS
>       ReactJS é uma biblioteca que cria toda a interface da aplicação através do Javascript

>       render(<h1></h1>, document.getElementById("root")); // Funcao Render: (O que, onde)

- ###   Servindo HTML estático
>       Instalando o html-webpack-plugin: yarn add html-webpack-plugin -D   // serve para injetar os arquivos javascript no index.html

>       //Configurar no arquivo webpack.config.js
>       plugins:[
>        new HtmlWebpackPlugin({
>            template: path.resolve(__dirname, 'public', 'index.html')
>        })
>    ],

- ### Webpack Dev Server
>       Instalando o webpack-dev-server: yarn add webpack-dev-server -D      // serve para escutar as mudancas no codigo e criar novamente o bandle

>devServer: {
>    static: {
>        directory: path.join(__dirname, 'public'),
>    },
>    compress: true,
>     port: 9000
> },

- ### Configurando o Source Maps
>   é uma forma de visualizar o codigo original depois que ele é convertido pelo webpack

>   devtool: 'eval-source-map', // ambiente de producao

- ### Ambiente dev e producao
> Varieaveis ambiente

> process.env.NODE_ENV

> yarn add cross-env -D // serve para definirmos variaveis de ambiente, independente do sistema operacional

- ### Importando arquivos CSS
> yarn add style-loader css-loader -D   // instalando loaders css. OBS: precisa ser os dois juntos

- ### Utilizando SASS
> yarn add sass-loader -D       // instalando sass-loader para entender arquivos sass

> yarn add node-sass -D      // também precisa instalar o node-sass

- ### Primeiro componente React
> Componentes são uma forma de encapsular uma quantidade de código dentro de um único elemento com sua propria funcionalidade, estilizacao e estrutura.

- ### Propriedades no React
> São informações que eu posso passar pra um componente para que ele funcione de forma diferente

- ### Estado do componente
> Estados são uma forma de ter variaveis no componente que ao mudarem refletem em mudancas na interface

- ### A imutabilidade no React
> prevê que uma variavel nunca tenha seu valor alterado mas sim que uma nova variavel seja criada no lugar com o novo valor

- ### Fast refresh no webpack
> usado para realizar mudancas no código da aplicacao durante sua execucao sem alterar os estados dos componentes durante o refresh

- ### Utilizando o UseEffect
> serve para disparar uma função quando algo acontecer na aplicação

> useEffect(() => {}, [dependencies])

> nunca alterar uma variavel dentro do useEffect que está sendo usada como dependencia

- ### Typescript no React
> yarn add typescript -D        // instalando o typescript

> yarn tsc --init       // inicializando o typescript na aplicacao

> setar o arquivo tsconfig.json

> "lib": adiciona algumas funcionalidades
>  "allowJS": permite a utilização de arquivos .js (além do .ts)

> yarn add @babel/preset-typescript -D      // para o babel entender o typescript

> yarn add @types/react-dom -D

> yarn add @types/react -D

> utilizar a extensão .tsx nos componetes

- ### Utilizando o React DevTools
