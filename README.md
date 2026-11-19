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
> **Parameters required: User json object, Concert Json object**

This function allow users to make booking for concerts

### Booking function
Type in:
"TicketManager.BookTicket(TicketManager.user[0], TicketManager.concerts[0])"

Expected Output:
<img width="337" height="18" alt="image" src="https://github.com/user-attachments/assets/9481d72d-052a-4466-9a02-e8152ce10f30" />

>the Concer Json object will be stored in the User Json Object

### Sold out Situation
> Note that in the concert Array inside AlarickOng_TicketingModule.js file, the NumberOfTicketsLeft value is 5.

Type in another 5 lines of "TicketManager.BookTicket(TicketManager.user[0], TicketManager.concerts[0])" (Total 6 lines) and run

Expected output: <img width="353" height="127" alt="image" src="https://github.com/user-attachments/assets/b31bcf3f-ff44-43d4-a340-c3defb6d0456" />

## 2. Seat Selection
> **Parameters Required: Concert Object that is already stored in an user object, SeatArray Json Object**

This Function allow users to select seats for the bookings made previously

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
> note that the SeatArray[0] is a seat that we already selected when testing the successful Selection

Expected Output: <img width="518" height="32" alt="image" src="https://github.com/user-attachments/assets/930cdb08-6fa1-4ea3-8261-a7e621a8af74" />

## 3.Cancel Booking
> **Parameters Required: Concert Json object stored in the User Json Object**

This function cancel booking for users

Verify that in the user array that is stored in AlarickOng_TicketingModule.js file, there is this User 2 Json Object that contains a booking data

Type in: "TicketManager.CancelBooking(TicketManager.user[1], TicketManager.user[1].Bookings[0])" to cancel the booking and "console.log(TicketManager.user[1]);" to verify

Expected output: <img width="515" height="62" alt="image" src="https://github.com/user-attachments/assets/4134a9f9-60e7-4cbc-ae2d-943a2fde8910" />

> Verify that the Bookings array in the Json object displayed is empty

## 4. Payment System
> **Parameters Required: User Json Object that contains Concert Json Object with the Seat Value implemented**
> Basically After running the Booking Function and SeatSelection Function Successfully

This Function will calculate the total number and Price for tickets that have seats selected.

Previously we have 2 Successfully Selection of seats, A1 and C3 for Bookings[0] and Bookings [3]
Type in: "TicketManager.Payment(TicketManager.user[0])"
> It will run a for loop and calculate the total Price of the tickets that has seats selected.

Expected Output: <img width="362" height="56" alt="image" src="https://github.com/user-attachments/assets/643bcc97-db54-4da7-9269-b64ccca74aea" />
> Verify that in the Concert Array in AlarickOng_TicketingModule.js file, the Price for Concert 1 is 10000. So 2 x 10000 is 20000

## 5. Ticket Expiration
> **Parameters Required: User Json Object that contains Concert Json Object**
> currently the User Json Object should contain 4 Bookings without seat selection and 2 Completed Booking after running the previous codes

This Function will wait for 5 seconds and remove the tickets that does not have seats selected or Payment made.

Type in: "TicketManager.Finalize(TicketManager.user[0])"
and "console.log(TicketManager.user[0])" to verify the output

Expected Output: <img width="462" height="557" alt="image" src="https://github.com/user-attachments/assets/47c15a93-8c14-45ac-900d-17473b29f3c1" />

> Verify that the user only left with 2 completed booking records







