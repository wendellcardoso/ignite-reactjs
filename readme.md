# Trilha ReactJS

## 01-github-explorer

- ###    Inicializando o repositório do projeto criando o package.json:

>       yarn init -y

- ###   Instalando o react:

>       yarn add react

- ###   Instalando o react-dom

>       yarn add react-dom

- ###   Estruturando as pastas do projeto

>       01. Criar a pasta **src** onde ficará o código criado na aplicação

>       02. Criar a pasta **public** onde ficarão os **assets** do projeto

>       03. Criar o arquivo **index.html** dentro da pasta **public**

- ###   Configurando o Babel
>       01. O Babel é uma ferramento que serve para converter o código de uma maneira que todos os browsers e todo o amiente da aplicação consiga entender todos os códigos.
>       02. yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
>       03. Criar o arquivo babel.config.js dentro da pasta src:

- ###   Criando o arquivo index.js na pasta src
>       yarn babel src/index.jsx --out-file dist/bundle.js

