import RunQuiz from "./RunQuiz.vue";
import { sampleMCQs } from "../../cypress/fixtures/sampleMCQs"

describe('<RunQuiz />', () => {
  beforeEach(() => {
    cy.mount(RunQuiz, { props: { qList: sampleMCQs } })
    // have to decide if this is where we get the list of qs
    // might be better in main app
    // https://docs.cypress.io/guides/guides/network-requests
  })

  it('displays the first question and answer options', () => {
    const randomStub = cy.stub(Math, 'random').returns(0.5);
    // figure out how to get more than one return value
    // test if this forces RunQuiz to always get 0.5 as rnd num
    cy.get('div#current-q').should('exist')
    cy.get('div#current-q h2#q-text').should('exist')
    cy.get("h2#q-text").should('contain', 'What do you call an angle that is exactly 90 degrees?')
    cy.get("div#answer-0").should('contain', "obtuse")
    cy.get("div#answer-1").should('contain', "acute")
    cy.get("div#answer-2").should('contain', "right")
    cy.get("div#answer-3").should('contain', "reflex")
  })

})