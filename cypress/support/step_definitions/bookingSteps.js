
const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
 const bookingPage = require("../../pages/bookingPage")
 
 let bookingId
 let token ; 
 const payload = {
     firstname: "John",
     lastname: "Doe",
     totalprice: 2000,
     depositpaid: true,
     bookingdates: {
         checkin: '2026-02-14',
         checkout: "2026-02-16"
     },
     additionalneeds: "Breakfast"
 };

 before(() => {
    bookingPage.getToken("admin", "password123").then((response) => {
      token = response.body.token
    })
 })
 //create a booking
Given("I create a new booking", () => {
  bookingPage.createBooking(payload).then((response) => {
     expect(response.status).to.eq(200)
      bookingId = response.body.bookingid
     })
 })
Then("the booking should be created successfully", () => {
     expect(bookingId).to.not.be.undefined
  })
 //Get the booking  
Given("I get the booking by id", () => {
  bookingPage.getBooking(bookingId).then((response) => {
     expect(response.status).to.eq(200)
     expect(response.body.firstname).to.eq(payload.firstname)
     })
  })
Then("the booking details should match", () => {
    expect(bookingId).to.not.be.undefined
  })

//Update the booking
Given("I update the booking checkout date and additional needs", () => {

    const updatePayload = {
    ...payload,
    bookingdates: { checkin: "2026-02-14", checkout: "2026-02-20" },
    additionalneeds: "Lunch"
        };
    bookingPage.updateBooking(bookingId, updatePayload, token).then((response) => {
       expect(response.status).to.eq(200)
    })
  })
Then("the booking should be updated successfully", () => {
   bookingPage.getBooking(bookingId).then((response) => {
    expect(response.body.bookingdates.checkout).to.eq("2026-02-20")
    expect(response.body.additionalneeds).to.eq("Lunch")
   })
})
//Delete the booking
Given("I delete the booking", () => { 
     
     bookingPage.deleteBooking(bookingId, token).then((response) => {
      expect(response.status).to.eq(201)
     })    
    })

Then("the booking should not exist anymore", () => {
    bookingPage.getBooking(bookingId, {failOnStatusCode: false }).then((response) => {
     expect(response.status).to.eq(404)
    })
})