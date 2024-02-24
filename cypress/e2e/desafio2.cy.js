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
       cy.xpath("//input[@id='pass']").type(Cypress.env().password)
       cy.get('#submitForm').click()
       cy.get('#todolistlink',{timeout:10000}).click()
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
   it('Verificar botones',()=>{
    cy.get('#all').should('exist')
    cy.get('#completed').should('exist')
    cy.get('#removeAll').should('exist')
    cy.get('#active').should('exist')
   })

   it('Agregar 2 tareas, completarlas y eliminar la segunda tarea completada',()=>{
    cy.get('#task').wait(2000).type(data.tareas.tarea1)
    cy.get('#sendTask').click()
    cy.get('#task').wait(2000).type(data.tareas.tarea2)
    cy.get('#sendTask').click()
    cy.get('li').first().find('p').click()
    cy.contains('p', 'Tirar la basura').click();
    cy.wait(5000)
    cy.contains('p','Tirar la basura').first().next('button').click();
   })
   it.only('Agregar 2 tareas y eliminar la primera tarea',()=>{
    cy.get('#task').wait(2000).type(data.tareas.tarea1)
    cy.get('#sendTask').click()
    cy.get('#task').wait(2000).type(data.tareas.tarea2)
    cy.get('#sendTask').click()
    cy.get('li').first().find('p').click()
    cy.contains('p', 'Tirar la basura').click();
    cy.wait(5000)
    cy.contains('p','Comprar Pan').first().next('button').click();
   })
})