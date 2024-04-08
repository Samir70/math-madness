import PickSubject from './PickSubject.vue'

describe('<PickSubject />', () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PickSubject)
  })

  it('contains a form with two select elements', () => {
    cy.get('form').should('exist') // Check if the form exists
    cy.get('form select').should('have.length', 2) // Check if there are two select elements within the form
  })

  it('emits a custom event when the form is submitted', () => {
    // Fill out the form
    cy.get('select').eq(0).select('Fractions')
    cy.get('select').eq(1).select('Section 2')

    // Submit the form
    cy.get('form').submit().then(() =>{
      cy.vue().then((component) => {
        // console.log("huh", component.emitted("start-game")[0][0])
        expect(component.emitted("start-game")[0][0]).has.property("chapter", "Fractions")
        expect(component.emitted("start-game")[0][0]).has.property("section", "Section 2")
      })
    })
    // expect(spy).to.be.calledOnce

    // Check if the custom event was emitted
    // cy.get('@emitStub').should('be.calledWith', 'custom-event-name', Cypress.sinon.match.any)
    // cy.get('@eventListener').should('be.calledWith', 'start-game', Cypress.sinon.match.func)
  })
})
