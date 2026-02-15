
class BookingPage {
    createBooking(payload) {
        return cy.request("POST", "/booking", payload)
    }

    getBooking(id,options = {}) {
        return cy.request({
         method: "GET",
         url: `/booking/${id}`,
         failOnStatusCode: false,
         ...options
        })
    }

    updateBooking(id, payload, token) {
        return cy.request({
            method: "PUT",
            url: `/booking/${id}`,
            headers: { Cookie: `token=${token}`},
            body: payload
        })
    }

    deleteBooking(id, token) {
        return cy.request({
            method: "DELETE",
            url: `/booking/${id}`,
            headers: { Cookie: `token=${token}` }
        })
    }

    getToken(username, password) {
        return cy.request("POST", "/auth", { username, password });
    }
}

module.exports = new BookingPage();
