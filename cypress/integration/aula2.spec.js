// aula2_exercicios.spec.js created with Cypress
/// <reference types="Cypress" />

describe ('Aula 2 - Exercícios', function() {
       
    beforeEach(function() {              //Permite que um comando seja executado antes de qualquer execução de testes.
        cy.visit('./src/index.html')
    
    })
    
   

   it ('Exercício 0 - Preencher os campos obrigatórios e enviar o formulário', function() {
              
        cy.get('#firstName')                 // Captura o campo de texto para preenchimento
        .should('be.visible')              // Valida se o campo está visível na página
        .type('André Luiz')                // Realiza o input de texto solicitado.
        
        cy.get('#lastName')                  
        .should('be.visible')
        .type('Schikovski')
        
        cy.get('#email')
        .should('be.visible')
        .type('andreluiz.schikovski@gmail.com')
        
        const longtext = 'Constante utilizada para dados de texto longo por exemplo, porém pode ser utilizada para outros tipos de informações tal qual uma variável'     // input de dados via const   
        cy.get('#open-text-area')
        .should('be.visible')
        .type(longtext)                  // Constante com o texto longo 

        cy.get('button[type=submit]').click()

        //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
        cy.get('.success').should('be.visible')
    })

    it ('Exercício 1 - Inserir delay no preenchimento de campos de texto', function() {
                
        cy.get('#firstName')               // Captura o campo de texto para preenchimento
        .should('be.visible')              // Valida se o campo está visível na página
        .type('André Luiz')                // Realiza o input de texto solicitado.
        
        cy.get('#lastName')                  
        .should('be.visible')
        .type('Schikovski')
        
        cy.get('#email')
        .should('be.visible')
        .type('andreluiz.schikovski@gmail.com')
        
        const longtext = 'Constante utilizada para dados de texto longo por exemplo, porém pode ser utilizada para outros tipos de informações tal qual uma variável'     // input de dados via const   
        cy.get('#open-text-area')
        .should('be.visible')
        .type(longtext,{delay: 0})         // Inclusão de objeto que contém a opção de delay para preenchimento do campo de texto
        cy.get('button[type=submit]').click()

        //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
        cy.get('.success').should('be.visible')
        
    })

    it ('Exercício 2 - Validar mensagem de erro via classe error da aplicação', function() {
       
              
            cy.get('#firstName')                 // Captura o campo de texto para preenchimento
            .should('be.visible')              // Valida se o campo está visível na página
            .type('André Luiz')                // Realiza o input de texto solicitado.
            
            cy.get('#lastName')                  
            .should('be.visible')
            .type('Schikovski')
            
            cy.get('#email')
            .should('be.visible')
            .type('andreluiz.schikovski@gmail_com')
            
            cy.get('#open-text-area')
            .should('be.visible')
            .type('Inclusão')                                                      // Constante com o texto longo 
    
            cy.get('button[type=submit]').click()
    
            //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
            cy.get('.error').should('be.visible')
    })

    it ('Exercício 3 - Validar se um campo está null (sem preenchimento).', function(){
        
        cy.get('#firstName')                 // Captura o campo de texto para preenchimento
          .should('be.visible')              // Valida se o campo está visível na página
          .type('André Luiz')                // Realiza o input de texto solicitado.
            
        cy.get('#lastName')                  
          .should('be.visible')
          .type('Schikovski')
            
        cy.get('#email')
          .should('be.visible')
          .type('andreluiz.schikovski@gmail.com')
            
        cy.get ('#phone')
        .should('be.visible')
        .type('ABCDEFGHIJK')
        .should('have.text', '')
        
        cy.get('#open-text-area')
          .should('be.visible')
          .type('Inclusão de texto')                  
    
        cy.get('button[type=submit]').click()
    
        //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
        cy.get('.success').should('be.visible')

    })

    it ('Exercício 4 - Validar msg de erro quando campo obrigatório não é preenchido ', function(){

        cy.get('#phone-checkbox')
          .should('be.visible')
          .click()

        cy.get('#firstName')                 // Captura o campo de texto para preenchimento
          .should('be.visible')              // Valida se o campo está visível na página
          .type('André Luiz')                // Realiza o input de texto solicitado.
            
        cy.get('#lastName')                  
          .should('be.visible')
          .type('Schikovski')
            
        cy.get('#email')
          .should('be.visible')
          .type('andreluiz.schikovski@gmail.com')
            
        cy.get ('#phone')
        .should('be.visible')
        .type('ABCDEFGHIJK')
        .should('have.text', '')
        
        cy.get('#open-text-area')
          .should('be.visible')
          .type('Inclusão de texto')                  
    
        cy.get('button[type=submit]').click()
    
        //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
        cy.get('.error').should('be.visible')

    })

    it('Exercício 5 - Utilizando a função clear para limpeza de campos de input de texto', function(){

        cy.get('#firstName')                 // Captura o campo de texto para preenchimento
          .should('be.visible')              // Valida se o campo está visível na página
          .type('André Luiz')                // Realiza o input de texto solicitado.
                             
        cy.get('#lastName')                  
          .should('be.visible')
          .type('Schikovski')
                    
        cy.get('#email')
          .should('be.visible')
          .type('andreluiz.schikovski@gmail.com')
                   
        cy.get('#open-text-area')
          .should('be.visible')
          .type('Inclusão de texto')
                            
        cy.get ('#firstName')
          .should('have.value','André Luiz')
          .clear()
          .should('have.value','') 

        cy.get ('#lastName')
          .should('have.value','Schikovski')
          .clear()
          .should('have.value','')

        cy.get ('#email')
          .should('have.value','andreluiz.schikovski@gmail.com')
          .clear()
          .should('have.value','')

        cy.get('#open-text-area')
          .should('have.value','Inclusão de texto')
          .clear()
          .should('have.value', '')

    })

    it('Exercício 6 - Validar mensagem de erro (sem preenchimento do formulário', function(){
      
      cy.get('button[type=submit]').click()
    
      //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
      cy.get('.error').should('be.visible')


    })

    it('Exercício 7 - Enviar formulário com sucesso, usando comando customizado', function(){

      cy.fillMandatoryFieldsAndSubmit()
      
      //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
      cy.get('.success').should('be.visible')

    })

  it.only ('Exercício extra 8 - Substituir os comandos cy.get para cy.contains no botão enviar', function(){
    cy.get('#phone-checkbox')
          .should('be.visible')
          .click()

        cy.get('#firstName')                 // Captura o campo de texto para preenchimento
          .should('be.visible')              // Valida se o campo está visível na página
          .type('André Luiz')                // Realiza o input de texto solicitado.
            
        cy.get('#lastName')                  
          .should('be.visible')
          .type('Schikovski')
            
        cy.get('#email')
          .should('be.visible')
          .type('andreluiz.schikovski@gmail.com')
            
        cy.get ('#phone')
        .should('be.visible')
        .type('41992098282')
        .should('have.text', '')
        
        cy.get('#open-text-area')
          .should('be.visible')
          .type('Inclusão de texto')                  
    
        cy.contains('button', 'Enviar').click()
  })


  })

   

