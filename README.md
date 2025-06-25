# Topazapp

Aplicativo bancário desenvolvido com React Native e Expo. Permite consulta de saldo, realização e agendamento de transferências bancárias, além de exibir o histórico de transferências.

---

## Tecnologias Utilizadas

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

⚠️ **Dica:**  
É recomendado rodar os comandos separadamente para facilitar a identificação de possíveis erros, mas você também pode executar em sequência:

```bash
npm install --legacy-peer-deps && npm start
```

---

## Como Rodar os Testes 🧪

Os testes são feitos com Jest e React Testing Library.

Para executar os testes:

```bash
npm test
```

---

## Observações e Limitações ⚠️

- As APIs utilizadas são simuladas para ambiente de teste.
- O token JWT é fictício e estático para facilitar o desenvolvimento.
- Pode ser necessário usar `npm install --legacy-peer-deps` devido a conflitos de dependência entre as versões das bibliotecas.
- Recomendamos usar Node.js na versão LTS para evitar incompatibilidades.

---

## Screenshots 📸

_Serão adicionadas posteriormente._

---

Se precisar de ajuda ou quiser mais detalhes, estou à disposição!
