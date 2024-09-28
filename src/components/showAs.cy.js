import ShowAs from "./ShowAs.vue";

describe('<ShowAs />', () => {
  // beforeEach(() => {
  //   // see: https://on.cypress.io/mounting-vue
  // })
  it("has a div for the answer options", () => {
    cy.mount(ShowAs, { props: { answers: [1, 2, 42, 3, 4] } })
    cy.get('div#answer-options').should('exist')
  })

  it("has a div for each answer", () => {
    cy.mount(ShowAs, { props: { answers: [1, 2, 42, 3, 4] } })
    cy.get("div#answer-0").should('contain', "1")
    cy.get("div#answer-1").should('contain', "2")
    cy.get("div#answer-2").should('contain', "42")
    cy.get("div#answer-3").should('contain', "3")
    cy.get("div#answer-4").should('contain', "4")
  })

  it("emits answer when an answer is clicked", () => {
    const onUserAnsSpy = cy.spy().as('onUserAnsSpy')
    cy.mount(ShowAs, {
      props: {
        answers: [1, 2, 42, 3, 4],
        onUserAns: onUserAnsSpy
      }
    })
    cy.get("div#answer-0").click()
    cy.get("@onUserAnsSpy").should("have.been.calledWith", 1)
    cy.get("div#answer-2").click()
    cy.get("@onUserAnsSpy").should("have.been.calledWith", 42)
  })
  it("marks the answer as selected when clicked", () => {
    cy.mount(ShowAs, { props: { answers: [1, 2, 42, 3, 4] } })
    cy.get("div#answer-0").click()
    cy.get("div#answer-0").should("satisfy", ($el) => {
      const classList = Array.from($el[0].classList)
      return classList[1] === "mcq-selected"
    })
    cy.get("div#answer-1").click()
    cy.get("div#answer-0").should("satisfy", ($el) => {
      const classList = Array.from($el[0].classList)
      return classList[1] === undefined
    })
  })
})