import RunQuiz from "./RunQuiz.vue";
const sampleMCQs = [
  {
    qType: 'multiChoice',
    q: 'What do you call an angle that is exactly 90 degrees?',
    a: 'right',
    wrongOptions: ['acute', 'obtuse', 'reflex'],
    hints: [
      'An acute angle is one which is less than 90 degrees',
      'An obtuse angle is one which is between 90 and 180 degrees'
    ],
    qFeedback: 'A right angle is exactly 90 degrees',
    buildingBlocks: [],
    qPath: 'vocab-angles-rnd-105'
  },
  {
    qType: 'multiChoice',
    q: 'What do you call a line that cuts across a circle, but not necessarily through the centre?',
    a: 'chord',
    wrongOptions: ['diameter', 'radius', 'tangent'],
    hints: [
      'The diameter goes across a circle, through the centre.',
      'The radius goes from the centre of a circle to the edge.'
    ],
    qFeedback: 'A chord cuts across a circle, but not necessarily through the centre',
    buildingBlocks: [],
    qPath: 'vocab-circles-rnd-255'
  },
  {
    qType: 'multiChoice',
    q: 'What do you call a triangle with three different sides?',
    a: 'scalene',
    wrongOptions: ['isosceles', 'equilateral'],
    hints: [
      'An isosceles triangle has two equal sides (and two equal angles)',
      'An equilateral triangle has all three sides the same length'
    ],
    qFeedback: 'A scalene triangle has three different sides',
    buildingBlocks: [],
    qPath: 'vocab-triangles-rnd-255'
  },
];

describe('<RunQuiz />', () => {
  beforeEach(() => {
    cy.stub(Math, 'random').returns(0.5);
    cy.mount(RunQuiz, { props: { qList: sampleMCQs } })
    // have to decide if this is where we get the list of qs
    // might be better in main app
    // https://docs.cypress.io/guides/guides/network-requests
  })

  it('displays the first question and answer options', () => {
    cy.get('div#current-q').should('exist')
    cy.get('div#current-q h2#q-text').should('exist')
    cy.get("h2#q-text").should('contain', 'What do you call an angle that is exactly 90 degrees?')
    cy.get("div#answer-0").should('contain', "obtuse")
    cy.get("div#answer-1").should('contain', "acute")
    cy.get("div#answer-2").should('contain', "right")
    cy.get("div#answer-3").should('contain', "reflex")
  })
  it('test if Math.random is called and its output', () => {
    // figure out how to get more than one return value
    // -- it doesn't look like this is possible
    // test if this forces RunQuiz to always get 0.5 as rnd num
    expect(Math.random).to.be.called
    cy.get('#test-stub').should('contain', 0.5)
  })

})