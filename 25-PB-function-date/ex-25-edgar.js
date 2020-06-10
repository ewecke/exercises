`use strict`
// D-1 Book future day event
const book = (bookSeatDate, currentDate) => {
    bookSeatDate = new Date(`2010-06-20`)
    currentDate = new Date()
    //console.log(bookSeatDate);
    //console.log(currentDate);
    currentDate < bookSeatDate ? console.log(`Your book to the event for the 25th April 2019 is already guaranteed!`) : console.log(`Please select a future date`);
}
book();