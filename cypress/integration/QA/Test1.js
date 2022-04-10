describe("Log in", function() {
    it("Sing in", function() {
        cy.visit("https://finance.dev.fabrique.studio/")
        cy.get('input[type="email"]').type('admin@admin.ad')
        cy.get('input[type="password"]').type('admin')
        cy.get('div[class="button__content"]').click()        
    })
})