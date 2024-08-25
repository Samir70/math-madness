import ShowQ from "./ShowQ.vue";

describe('<ShowQ />', () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ShowQ, { props: { question: "What is 6 x 7?" } })
  })

  it("has a div for the current question text", () => {
    cy.get('div#current-q').should('exist')
    cy.get('div#current-q h2#q-text').should('exist')
  })

  it("shows the text passed as a prop", () => {
    cy.get("h2#q-text").should('contain', "What is 6 x 7?")
  })
})