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

module.exports = { sampleMCQs }