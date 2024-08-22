## COMPARADOR DE IPV4 UTILIZANDO TYPESCRIPT

#### Passo a Passo:

> - Tenha o axios, dotenv e Typescript instalado no seu projeto principal
> - Pegue uma "Key" (chave privada) da api: [IPINFO (CLIQUE AQUI)](https://ipinfo.io)
> - Crie o arquivo .env no diretório raiz do seu Projeto
> - Adicione essas duas variaveis dentro do arquivo .env:<br>
`BASE_URL=https://ipinfo.io`<br>
`API_KEY=<sua_chave>`
> - Após isso, é só chamar a função compareIPs, passando como parâmetros ip1 (ip antigo) e o ip2 (ip atual).