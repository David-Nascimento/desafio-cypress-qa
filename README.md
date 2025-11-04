# Desafio Prático: Automação de Testes com Cypress (EBAC)

Este repositório contém a solução para o desafio de automação de testes E2E (End-to-End) utilizando Cypress, como parte do processo de avaliação da EBAC.

O objetivo principal foi automatizar uma funcionalidade crítica do site [lojaebac.ebaconline.art.br](http://lojaebac.ebaconline.art.br), com foco em criar um teste que fosse escalável e reutilizável.

---

### Funcionalidade Estratégica Escolhida

A funcionalidade escolhida para automação foi o **Fluxo de Autenticação (Login)**.

### Justificativa da Escolha:

A diretriz do desafio era selecionar uma funcionalidade "reaproveitada no maior número de cenários possíveis". Em qualquer aplicação de e-commerce, a autenticação de usuário é a **porta de entrada** para todas as demais funcionalidades críticas que exigem um usuário logado, como:

* Visualização de "Meus Pedidos"
* Gerenciamento da "Minha Conta"
* Fluxo de Checkout
* Adição de produtos a listas de desejos

Automatizar o login como um componente modular e estável é a base para a construção de uma suíte de testes E2E robusta.

Para demonstrar essa reutilização na prática, o fluxo foi encapsulado em um **Comando Personalizado do Cypress** (`cy.login()`), localizado em `cypress/support/commands.js`. Isso permite que qualquer outro teste na suíte possa se autenticar com uma única linha de comando, seguindo o princípio **DRY (Don't Repeat Yourself)** e facilitando drasticamente a manutenção futura.

---

## Cenários Automatizados

Os seguintes cenários foram implementados no arquivo `cypress/e2e/login.cy.js` para garantir a cobertura da funcionalidade de login:

1.  **`it('Deve realizar o login com sucesso')`**
    * **Descrição:** Testa o "caminho feliz", utilizando credenciais válidas conhecidas (`123`).
    * **Verificação:** Valida se, após o login, o link "Sair" (logout) é exibido na página "Minha Conta".

2.  **`it('Deve exibir mensagem de erro ao inserir usuário inválido')`**
    * **Descrição:** Testa a resposta do sistema a um usuário (e-mail) que não existe na base de dados.
    * **Verificação:** Valida se a mensagem de erro específica ("Endereço de e-mail desconhecido.") é corretamente exibida na tela.

3.  **`it('Deve exibir mensagem de erro ao inserir senha inválida')`**
    * **Descrição:** Testa a resposta do sistema a um usuário válido, mas com uma senha incorreta.
    * **Verificação:** Valida se a mensagem de erro específica ("Erro: a senha fornecida...") é exibida para o usuário.

---

## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **npm:** Gerenciador de pacotes.
* **Cypress:** Framework de automação de testes E2E.
* **JavaScript (ES6+):** Linguagem de programação para a escrita dos testes.

## Estrutura do Projeto

* `cypress.config.js`: Arquivo de configuração principal do Cypress, onde a `baseUrl` ("http://lojaebac.ebaconline.art.br") foi definida.
* `cypress/e2e/login.cy.js`: Arquivo de especificação de teste contendo os cenários de login.
* `cypress/support/commands.js`: Arquivo onde foi criado o Comando Personalizado `cy.login(usuario, senha)` para reutilização do fluxo de autenticação.

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

* [Node.js](https://nodejs.org/en/) (Recomendado: v18 ou superior)
* [npm](https://www.npmjs.com/) (Geralmente instalado com o Node.js)
* [Git](https://git-scm.com/) (Opcional, para clonar o repositório)

---

## Instalação

Siga os passos abaixo para configurar o ambiente e instalar as dependências do projeto.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/desafio-cypress-QA.git](https://github.com/SEU_USUARIO/desafio-cypress-QA.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd desafio-cypress-QA
    ```

3.  **Instale as dependências (incluindo o Cypress):**
    ```bash
    npm install
    ```

---

## Execução dos Testes

Você pode executar os testes de duas maneiras:

### 1. Modo Interativo (Cypress UI)

Este modo abre a interface gráfica do Cypress, permitindo que você veja os testes rodando no navegador e depure o código (time-travel debugger).

**Recomendado para desenvolvimento e validação.**

```bash
npx cypress open
```

### 2. Modo Headless (Terminal)
Este modo executa os testes "por baixo dos panos" diretamente no terminal, sem abrir uma interface de navegador.

**Recomendado para execução em pipelines de CI/CD ou para uma validação rápida.**
```bash
npx cypress run
```