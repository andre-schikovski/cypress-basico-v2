/// <reference types="Cypress" />

//const { invoke } = require("cypress/types/lodash")

describe('Central de Atendimento ao Cliente TAT', function() {
  
    beforeEach(function() {
        cy.visit('./src/index.html')
    
    })
    
    //Validar o título da página na abra do browser
    it ('Valida_titulo_Aba', function() {
              
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
                       
    })


//Inserir dados nos campos de texto da página
it('Inserir e validar campos obrigatórios', function() {

      
    cy.get('#firstName')
      .should('be.visible')
      .type('André Luiz')
    
    cy.get('#lastName')
      .should('be.visible')
      .type('Schikovski')
    
    cy.get('#email')
      .should('be.visible')
      .type('andreluiz.schikovski@gmail.com')
    
    cy.get('#open-text-area')
      .should('be.visible')
      .type('Olá Preciso de ajuda com a impressora...')

    cy.get('button[type=submit]').click()

    //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
    cy.get('.success').should('be.visible')


    cy.get('.success').should('not.be.visible')
})

//Lidando com delay do input de texto
it ('Inserir e validar campos obrigatórios', function() {
          
    cy.get('#firstName')
      .should('be.visible')
      .type('André Luiz')
    
    cy.get('#lastName')
      .should('be.visible')
      .type('Schikovski')
    
    cy.get('#email')
      .should('be.visible')
      .type('andreluiz.schikovski@gmail.com')

    //Delay é incluído dentro do comando como um objeto a ser parametrizado, neste exemplo para um preenchimento mais lento do campo.
    const longtext = 'Olá Preciso de ajuda com a impressora... pois não consigo instalar a mesma no meu servidor de arquivos unix, estou utilizando a versão 10.10.20.31 por favor me ajude a resolver este problema'  
    cy.get('#open-text-area')
      .should('be.visible')
      .type(longtext, { delay: 60 })
    
    cy.get('button[type=submit]').click()

    //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
    cy.get('.success').should('be.visible')


})

// Validar fluxos alternativos (Msg erro campo obrigatório)
it('Validar classe de erro (Msg campo obrigatório)', function() {
              
    cy.get('#firstName')
      .should('be.visible')
      .type('André Luiz')
    
    cy.get('#lastName')
      .should('be.visible')
      .type('Schikovski')
    
    cy.get('#email')
      .should('be.visible')
      .type('andreluiz.schikovski@gmail_com')

    //Delay é incluído dentro do comando como um objeto a ser parametrizado, neste exemplo para um preenchimento mais lento do campo.
    const longtext = 'Olá Preciso de ajuda com a impressora... pois não consigo instalar a mesma no meu servidor de arquivos unix, estou utilizando a versão 10.10.20.31 por favor me ajude a resolver este problema'  
    cy.get('#open-text-area')
      .should('be.visible')
      .type(longtext, { delay: 0 })
    
    cy.get('button[type=submit]').click()

    //Obter o campo a ser validado a partir de uma classe (usar sempre '.' antes do nome da classe)
    cy.get('.error').should('be.visible')

})

it('Aula 3 - Campos de seleção suspensa', function(){
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
    
    cy.get('#product').select(1) // Seleçao por ID
    //cy.get('#product').select('youtube') // Seleçao por value
    //cy.get('#product').select('Blog') // Seleçao por texto


    cy.contains('button', 'Enviar').click()

  
})

it('Aula 4 - Campos de seleção do tipo radio button', function(){

  cy.fillMandatoryFieldsAndSubmit()
  
  cy.get('input[type="radio"][value="feedback"]').check()
  
  cy.contains('button', 'Enviar').click()


})

it('Aula 4 Exercício extra- Campos de seleção do tipo radio button', function(){

//cy.fillMandatoryFieldsAndSubmit()

cy.get('input[type="radio"]')
  .should('have.length',3)
  .each(function($radio) {
    cy.wrap($radio).check()
    cy.wrap($radio).should('be.checked')
  

  })

cy.contains('button', 'Enviar').click()


})

it('Aula 6 - 25. Marcando e desmarcando inputs do tipo checkbox', function(){

//cy.fillMandatoryFieldsAndSubmit()

cy.fillMandatoryFieldsAndSubmit()
  
cy.get('#phone-checkbox')
.should('be.visible')
.check()

cy.get('#phone-checkbox')
.should('be.visible')
.uncheck()


})

it('Aula 6 - 26. Marcando e desmarcando inputs do tipo checkbox', function(){

  cy.fillMandatoryFieldsAndSubmit()
      
  
  //Agrupar a validação de mais de checkbox, e posteriormente desmarcar o último usando assert para validação
  cy.get('input[type="checkbox"]')
    .check()
    .last()
    .uncheck()
    .should('not.be.checked')
  
  //Agrupar a validação de mais de checkbox, e posteriormente desmarcar o último usando assert para validação
  cy.get('input[type="checkbox"]')
    .check()
    .first()
    .uncheck()
    .should('not.be.checked')
      
    })  

    it('Aula 6 - 27 Marcando e desmarcando inputs de checkbox exercicío extra ', function(){
      

      cy.get('#phone-checkbox')
        .should('be.visible')
        .check()
        .uncheck()

      cy.get('#email-checkbox')
        .should('be.visible')
        .check()
        .uncheck()
  
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
  
      cy.get('button[type=submit]').click()
  
      
  })


    it('Aula 7 - 29 Fazendo upload de arquivos com cypress', function(){
        
      cy.fillMandatoryFieldsAndSubmit1()

      cy.get('input[type="file"]')
        .selectFile('E:/curso_cypress/CV.pdf') 
        .should(function ($input){
          console.log($input)
        })


      cy.get('button[type=submit]').click()
      cy.get('.success').should('be.visible')

            
    })

    it('Aula 7 - 30 Exercício extra 1 Fazendo upload de arquivos com cypress - Seleciona arquivo drag & drop (Exercicio extra 1)', function(){
        
      cy.fillMandatoryFieldsAndSubmit1()

      cy.get('input[type="file"]')
        .selectFile('E:/curso_cypress/CV.pdf', {action: 'drag-drop'}) 
        .should(function ($input){
          console.log($input)
        })

      cy.get('button[type=submit]').click()
      cy.get('.success').should('be.visible')
   
        
    })

    it('Aula 7 - 31 Exercício extra 1 Fazendo upload de arquivos com cypress - Seleciona arquivo usando fixture e alias (Exercicio extra 1)', function(){
        
      cy.fillMandatoryFieldsAndSubmit1()
      cy.fixture('example.json').as('sampleFile') //Criar um Alias para o processo de upload de arquivos.
      cy.get('input[type="file"]')
        .selectFile('@sampleFile') //chamada do Alias criado linhas acima
        .should(function ($input){
          console.log($input)
          
        })
        
    })

    it('Aula 8 - 33 Exercício 1 Lidando com links que abrem em outra aba', function(){
        
      cy.fillMandatoryFieldsAndSubmit1()
      cy.get('#privacy a').should('have.attr','target', '_blank')

        })

    it('Aula 8 - 33 Exercício extra 1 Acessar a página de politica de privacidade removendo o target e então clicando no link', function(){
        
      cy.fillMandatoryFieldsAndSubmit1()
      cy.get('#privacy a')
        .invoke ('removeAttr', 'target')
        .click()
        
        })
    it('Aula 12 - 50 Exibe e esconde as mensagens de sucesso e erro usando o invoke', function(){
        
        cy.get('.success')
        .should('not.be.visible')
        .invoke ('show')
        .should('be.visible')
        .and ('contain', 'Mensagem enviada com sucesso.')
        .invoke('hide')
        .should('not.be.visible')

        cy.get('.error')
        .should('not.be.visible')
        .invoke ('show')
        .should('be.visible')
        .and ('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')

            
     }) 
it('Preencha a área de texto usando o comando invoke', function () {
  
  const longText = Cypress._.repeat('0123456789',20)

  cy.get('#open-text-area')
    .invoke('val',longText)
    .should('have.value',longText)
      

  
})

it('Faz uma requisição HTTP', function(){
  cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    .should(function(Response){
      const{status, statusText, body} = Response
      expect(status).to.equal(200)
      expect(statusText).to.equal('OK')
      expect(body).to.include('CAC TAT')
    })

  
})


it.only('Encontre o Gato', function(){
  cy.get('#cat')
    .invoke('show')
    .should('be.visible')
    
  cy.get('#title')
    .invoke('text', 'CAT TAT ^^')  



})



  })