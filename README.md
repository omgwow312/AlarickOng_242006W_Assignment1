# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 

# How to use my node module
Firstly, create a new folder and put the AlarickOng_TicketingModule.js file inside the folder.
create a new javascript file (e.g App.js)

at the first row of App.js, put in "const TicketManager = require('./ticket.js');"

>note: arrays that store data is located in the AlarickOng_TicketingModule.js file.

## 1. Booking Ticket Function
>Parameters required: User json object, Concert Json object
### Booking function
Type in:
"TicketManager.BookTicket(TicketManager.user[0], TicketManager.concerts[0])"

Expected Output:
<img width="337" height="18" alt="image" src="https://github.com/user-attachments/assets/9481d72d-052a-4466-9a02-e8152ce10f30" />

>the Concer Json object will be stored in the User Json Object

### Sold out Situation
>Note that in the concert Array inside AlarickOng_TicketingModule.js file, the NumberOfTicketsLeft value is 5.

Type in another 5 lines of "TicketManager.BookTicket(TicketManager.user[0], TicketManager.concerts[0])" (Total 6 lines) and run

Expected output: <img width="353" height="127" alt="image" src="https://github.com/user-attachments/assets/b31bcf3f-ff44-43d4-a340-c3defb6d0456" />

## 2. Seat Selection
>Parameters Required: Concert Object that is already stored in an user object, SeatArray Json Object

### Successful Selection
Type in: "TicketManager.SeatSelection(TicketManager.user[0].Bookings[0], TicketManager.SeatArray[0])" and "TicketManager.SeatSelection(TicketManager.user[0].Bookings[3], TicketManager.SeatArray[2])"
Expected output: <img width="322" height="57" alt="image" src="https://github.com/user-attachments/assets/51544af9-c37b-4059-9c9a-8a5b3ea634f9" />

>in the concert json object, a new field SeatSelection will be implemented, and it will store the Seat value in the SeatArray JSON Object

### Wrong Concert Seat
Type in: "TicketManager.SeatSelection(TicketManager.user[0].Bookings[1], TicketManager.SeatArray[3])"
> Verify that the SeatArray[3] Json object should be for Concert:2, while the Bookings[1] Json Object's concert ID should be 1

Expected Output:<img width="397" height="16" alt="image" src="https://github.com/user-attachments/assets/a8455c59-f3a1-4338-84b4-5858fa31a93e" />

### Occupied Seats
Type in: "TicketManager.SeatSelection(TicketManager.user[0].Bookings[2], TicketManager.SeatArray[0])"
> note that the SeatArray[0] is a seat that we already selected when testing the successful Selection part

Expected Output: <img width="518" height="32" alt="image" src="https://github.com/user-attachments/assets/930cdb08-6fa1-4ea3-8261-a7e621a8af74" />



