# Server

### Desenvolvimento

Siga o passo para conseguir rodar o projeto na parte do servidor

#### 1 - instalar as dependências

```bash
npm i
```

#### 2 - criar o arquivo .env

```bash
touch .env
```

#### 3 - definir as variaveis de ambiente no .env 
(lembre se de subtituir conforme o seu ambiente de desenvolvimento)
```
NODE_ENV="development"
SECRET_COOKIE="secret"
PORT=3000
PG_HOST="localhost"
PG_USER="postgres"
PG_PASSWORD="postgres"
PG_DATABASE="postgres"
EMAIL="example@gmail.com"
PASS="213 435 203"
API_KEY="mandioca"
```

#### 4 - executar o projeto em modo desenvolvimento
```
npm run dev
```

### Testes

Para executar a rotinas de teste basta executar
```
npm run test
```

### Produção

Essa etapa deve ser realizada para quando o projeto for ser hospedado

#### 1 - instalar as dependências

```bash
npm i
```

#### 2 - criar o arquivo .env

```bash
touch .env
```

#### 3 - definir as variaveis de ambiente no .env
(usando os valores de servidor de hospedagem)

#### 4 - compilar o projeto
```
npm run build
```
#### 5 - executar com node
```
npm run start
```