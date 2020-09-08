# Olá, bem vindo!

Muito prazer! Este é  o repositório que criei par ao teste da Assina Saúde. Aqui vão algumas considerações e instruções para rodar a aplicação na sua máquina.

# Direto ao ponto:

Se quiser pular as considerações e ir direto ao ponto basta clonar este repositório, acessar a página e rodar o comando `npm install` após concluir a instalação dos pacotes rode o comando `npm start` e o seu navegador deverá abrir uma aba com o formulário para iniciar os registros de prontuário.

## Considerações

Os pacotes que utilizei para fazer o projeto foram: 

 - **Axios**: https://github.com/axios/axios
 - **Proptypes**: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
 - **Material-Ui** https://material-ui.com/
 - **React Router**: https://github.com/ReactTraining/react-router
 
O linter que usei foi especificado com as regras do Airbnb: https://github.com/airbnb/javascript

O projeto está estruturado da seguinte forma:

Dentro da pasta **src** você vai encontrar as pastas **components, context, data, pages, ui** além dos arquivos **App.jsx e index.jsx**. 

A pasta **components** guarda os componentes controlados que podem ser usados que podem ser reaproveitados em outros lugares, basta chamá-lo e passar as devidas props.

A pasta **context** guarda os arquivos de contexto da aplicação e a função do provider para disponibilizar os estados por toda a aplicação, essa função é exportada e utilizada no **index.jsx**.

A pasta **data** foi feita para deixar separada as funções de chamada da API.

A pasta **pages** guarda as telas onde o usuário deverá interagir.

A pasta **ui** guarda o arquivo de tema para estilização do projeto como um todo seguindo algum padrão determinado.

## O que falta implementar:

Ficaram faltando até o momento a implementação dos testes unitários, tratamento de erros da API e validação do formulário, o que pretendo corrigir em breve.

Obrigado pela oportunidade de fazer este teste, através dele pude colocar em prática o que estou aprendendo e ferramentas que gosto de usar, além de agregar em minha experiência profissional também.

Até a próxima!