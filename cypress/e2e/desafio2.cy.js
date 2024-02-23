describe('Desarrollo Desafio 2',()=>{
    let data;
    before (()=>{
      
        cy.fixture('datos').then(datosFixture =>{
         data=datosFixture
        })
       })
    beforeEach(()=>{
    cy.log('Before each ')
       cy.visit('')
       cy.get('#registertoggle').dblclick()
       cy.get('#user').type(Cypress.env().username)
       cy.get('#pass').type(Cypress.env().password)
       cy.get('#submitForm').click()
       cy.get('#todolistlink').click()
       cy.wait(5000)
       cy.get('[data-cy="removeAll"]').click()
   })
   it('Agregar tareas',()=>{
    cy.get('#task').wait(2000).type(data.tareas.tarea1)
    cy.get('#sendTask').click()

    cy.get('#task').clear()
    cy.get('#task').wait(2000).type(data.tareas.tarea2)
    cy.get('#sendTask').click()

   cy.get('#task').clear()
    cy.get('#task').wait(2000).type(data.tareas.tarea3)
    cy.get('#sendTask').click()

    cy.get('#task').clear()
    cy.get('#task').wait(2000).type(data.tareas.tarea4)
    cy.get('#sendTask').click()
    cy.get('#task').clear()
    cy.get('#task').wait(2000).type(data.tareas.tarea5)
    cy.get('#sendTask').click()
   })
   it.only ('Verificar botones',()=>{
    cy.get('#all').should('exist')
    cy.get('#completed').should('exist')
    cy.get('#removeAll').should('exist')
    cy.get('#active').should('exist')
   })
})