import ShowAs from "./ShowAs.vue";

describe('<ShowAs />', () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ShowAs, { props: { answers: [1, 2, 42, 3, 4] } })
  })
  it("has a div for the answer options", () => {
    cy.get('div#answer-options').should('exist')
  })

  it("has a div for each answer", () => {
    cy.get("div#answer-0").should('contain', "1")
    cy.get("div#answer-1").should('contain', "2")
    cy.get("div#answer-2").should('contain', "42")
    cy.get("div#answer-3").should('contain', "3")
    cy.get("div#answer-4").should('contain', "4")
  })

  it("emits answer when an answer is clicked", () => {

  })
})