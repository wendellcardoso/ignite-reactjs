# Trilha ReactJS

## CHAPTER 2 | 02-dtmoney

https://www.figma.com/file/iLFkm80Hm9YeC0lMuasNFN/dtmoney-Ignite?node-id=1%3A863

- ###    Inicializando o projeto com create-react-app com o template typescript:

>       yarn create react-app dtmoney --template typescript

>       exportar com export ao invés do export default

- ###    Instalando Styled Components:

>       yarn add styled-components

>       yarn add @types/styled-components -D

>       Instalar a extensão para VScode: vscode-styled-components

- ### Criando estilos globais

> src/styles/global.ts

- ### Fontes do Google Fonts

> inserir o link de incorporaçao da fonte no arquivo index.html

- ### Componente Header

> src/components/Header/

- ### Componente Summary

> criou-se, primeiramente, o componente Dashboard

- ### Componente TransactionsTable

> Tabela com o historico de entradas e saidas

- ### Criando front-end sem back-end

> json server
> mirage js (utilizando esse)
> msw

- ### Configurando o MirageJS

> yarn add miragejs

> No arquivo index.tsx importar a função createServer

> this.namespace: define o caminho base do recurso, exemplo "api". A partir disso, basta configurar as chamadas com os metodos e caminhos específicos



- ### Configurando cliente do Axios

> yarn add axios

> criar umas pasta chamda src/services e dentro dela, criar um arquivo chamado api.ts

- ### Modal & Forms

- ### Configurando modal de criação

> yarn add react-modal

> cria um estado com a variavel isNewTransactionModalOpen

> criar funcoes para lidar com a abertura e fechamento do modal

> yarn add @types/react-modal -D

> migrar o modal para o arquivo App.tsx

> utiliza a funcao handleCloseNewTransactionModal como props para ser acionada pelo botão do componente Header