# Topazapp

### 📝 Observação Inicial

Testes foram realizados nos módulos **Home** e **Login**. Ambos estão passando, mas apresentam alguns **warnings**.  
Peço desculpas por isso e agradeço pela compreensão.

🔧 Melhorias que gostaria de ter feito:

Criar um componente de Modal para exibição de erros e alertas.

Implementar um Design System básico para padronizar cores, fontes e espaçamentos.

Adicionar tratamento de erros centralizado com feedback visual para o usuário, ao invés de "alerts"

Criar um sistema de tema Dark mode (claro/escuro).

Adicionar mais testes unitários e de integração, cobrindo cenários de falha.

---

Aplicativo bancário desenvolvido com React Native e Expo. Permite consulta de saldo, realização e agendamento de transferências bancárias, além de exibir o histórico de transferências.

---

## Tecnologias Utilizadas

- Node v22.16.0
- React Native (v0.79.4) + Expo (SDK 53)
- Redux Toolkit para gerenciamento de estado
- TypeScript para tipagem estática
- Axios para requisições HTTP
- React Navigation para navegação
- Styled Components para estilização
- Jest + React Testing Library para testes

---



## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (recomendo usar a versão LTS)
- Expo CLI (`npm install -g expo-cli`)

### Passos 🚧

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd topazapp
   ```

2. Instale as dependências (pode ser necessário usar `--legacy-peer-deps` para evitar conflitos):

   ```bash
   npm install --legacy-peer-deps
   ```

3. Inicie o app:
   ```bash
   npm start
   ```

---

## Como Rodar os Testes 🧪

Os testes são feitos com Jest e React Testing Library.

Para executar os testes:

```bash
npm test
```




