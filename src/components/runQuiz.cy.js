import RunQuiz from "./RunQuiz.vue";

describe('<RunQuiz />', () => {
  beforeEach(() => {
    cy.mount(RunQuiz)
    // have to decide if this is where we get the list of qs
    // might be better in main app
  })

  it('displays the first question and answer options', () => {
    cy.get('div#current-q').should('exist')
    cy.get('div#current-q h2#q-text').should('exist')
    cy.get("h2#q-text").should('contain', "What is 6 x 7?")
  })

})