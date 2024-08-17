# Mega Farma

Este repositório é parte do processo seletivo da Mega Jr., onde desenvolvemos um sistema de farmácia completo com funcionalidades para gerenciamento de produtos, clientes e pedidos. com um frontend em Vue.js e um backend em TypeScript/Express. 

### API Documentation

##### Segurança
odas as requisições devem incluir uma chave de API válida nos cabeçalhos. Utilize o seguinte cabeçalho para passar a chave:

```
x-api-key: chave_que_foi_definida_no_env
```


1. Criar usuário

Endpoint: POST /api/user/save

Cria um novo usuário no sistema. Se estiver em modo de desenvolvimento, a API retornará a URL de validação na resposta. Em produção, será enviado um e-mail ao usuário com a URL de validação.

Request Body:
```json
{
  "nome": "string",
  "email": "string",
  "cpf": "string",
  "bairro": "string",
  "rua": "string",
  "numero": "integer",
  "telefone": "string",
  "dataNascimento": "YYYY-MM-DD",
  "senha": "string"
}
```
Response:

```json
{
  "message": "Usuário criado com sucesso!",
  "url": "string (URL de validação apenas em modo de desenvolvimento)"
}
```
2. Validação Usuario

Endpoint: PATCH /validate/:id

Valida o usuário com o ID criptografado fornecido.

Path Parameters:

id: ID encriptado do usuário a ser validado.
Response:
```json
{
  "message": "Usuário validado com sucesso!"
}
```

### Equipe C

- Wilker Sebastian Afonso Pereira - Full-Stack
- André Felipe Romero Faccio - Back-End
- Heitor Monteiro Padovese - Back-End
- Gabriel Fernandes de Oliveira Caitano - Design