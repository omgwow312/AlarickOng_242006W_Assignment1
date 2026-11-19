
booking = {

    concerts : [
        {
            concertid: 1,
            concertname: "concert 1",
            concertDescription: "abcde",
            NumberOfTicketsLeft: 5,
            Price: 10000
        },
        {
            concertid:2,
            concertname: "concert 2",
            concertDescription: "abcdefg",
            NumberOfTicketsLeft: 10,
            Price: 20
        },
    ],
    
    user : [
        {
            username:"testingUser",
            TicketPurchased: 0,
            Bookings: []
        },
        {
            username:"User2",
            TicketPurchased: 1,
            Bookings: [
                {
                Bookingid: 1,
                concertid: 2,
                concertname: 'concert 2',
                concertDescription: 'abcdefg',
                Price: 20,
                Status: 'Not Complete'
                }
            ]
        }
    ],
    
    SeatArray : [
        {
            Concert: 1,
            Seat: "A1",
            Status: "Not occupied"
        },
        {
            Concert: 1,
            Seat: "B2",
            Status: "Occupied"
        },
        {
            Concert: 1,
            Seat: "C3",
            Status: "Not occupied"
        },
        {
            Concert: 2,
            Seat: "A1",
            Status: "Not occupied"
        },
    ],
    

    BookTicket(user, concert){
        if (concert.NumberOfTicketsLeft <= 0){
            console.log(concert.concertname + " Ticket sold out")
        }

        else{
            concert.NumberOfTicketsLeft -= 1;
            user.Bookings.push(
                {
                    Bookingid: user.TicketPurchased+1,
                    concertid: concert.concertid,
                    concertname: concert.concertname,
                    concertDescription: concert.concertDescription,
                    Price: concert.Price,
                    Status: "Not Complete"
                }
            );
            user.TicketPurchased += 1;
            console.log(concert.concertname + " Ticket Booking Successful");
        }
    },

    SeatSelection(Ticket, SelectingSeats){
        if(Ticket == null){
            console.log("Sorry Please select a valid booking")
        }
        else if(Ticket.concertid != SelectingSeats.Concert){
            console.log("Please select seats for the correct concert")
        }
        else if(SelectingSeats.Status == "Occupied")
        {
            console.log("This seat is already occupied, please select another one")
        }
        else{
            Ticket.SeatSelection = SelectingSeats.Seat;
            SelectingSeats.Status = "Occupied"

            Ticket.Status = "SeatSelection Completed";

            console.log("Seat " + SelectingSeats.Seat + " is successfully selected")
        }
    },

    //Cancel booking
    CancelBooking(user, Ticket){
        if(Ticket == null){
            console.log("Sorry please select a valid ticket")
        }
        else{
            user.Bookings.splice(Ticket, 1);
            console.log("Booking cancelled successfully");
            
        }
    },

    //make Payment for bookings that have completed seat selection
    Payment(User){
        TotalAmount = 0;
        NoOfTicket = 0;
        for(i=0; i<User.Bookings.length; i++){
            if(User.Bookings[i].Status == "SeatSelection Completed"){
                TotalAmount += User.Bookings[i].Price;
                NoOfTicket += 1;

                User.Bookings[i].Status = "Completed";
            }
        }
        console.log("a total of " + NoOfTicket + " tickets payment successful");
        console.log("Total amount of payment is $"+ TotalAmount);
    },

    //Remove all incomplete booking
    Finalize(User){
        setTimeout(function(){
            console.log("Testing Timeout");
            for(i=User.Bookings.length - 1; i>=0; i--){
                if(User.Bookings[i].Status != "Completed"){
                    User.Bookings.splice(i, 1);
                }
            }
            console.log(User)
        }, 5000
        )
    },

}

module.exports = booking;
