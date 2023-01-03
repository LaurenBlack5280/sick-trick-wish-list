describe('slick trick', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/#home')
  })

  beforeEach(() => {
    cy.intercept('http://localhost:3000/#home', {
      method: 'Get',
      fixture: '../fixtures/tricks.json'
    })
    cy.visit('http://localhost:3000/#home')
  })
  it('Should have a title', () => {
    cy.contains("Slick Trick Wish List")
  })

  it('Should show all tricks', () => {
    cy.get('.card-container').within(() => {
      cy.get('.card').should('contain', 'regular')
      .and('contains', 'obstacle')
    })
  })
})