describe('Funcionalidade de Login', () => {

  // Hook: Executa antes de CADA teste (it)
  beforeEach(() => {
    // 1. Visita a página de "Minha Conta" (onde está o login)
    cy.visit('/my-account/');
  });

  // Cenário 1: Login com Sucesso
  it('Deve realizar o login com sucesso', () => {
    // Usa o comando personalizado
    cy.login('123', '123');

    // Verificação
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a')
      .should('contain', 'Sair');
  });

  // Cenário 2: Usuário Inválido
  it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
    // Dados inválidos
    cy.login('usuario_invalido@teste.com', 'teste@teste.com');

    // Verificação da mensagem de erro
    // O seletor .woocommerce-error engloba a caixa de erro
    cy.get('.woocommerce-error')
      .should('be.visible')
      .and('contain', 'Endereço de e-mail desconhecido.');
  });

  // Cenário 3: Senha Inválida
  it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
    // Usuário válido, senha inválida
    cy.login('aluno_ebac@teste.com', 'senha_incorreta');

    // Verificação da mensagem de erro
    cy.get('.woocommerce-error')
      .should('be.visible')
      .and('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?');
  });

});