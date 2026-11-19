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
Parameters required: User json object, Concert Json object

Type in:
"TicketManager.BookTicket(TicketManager.user[0], TicketManager.concerts[0])"

Expected Output:
<img width="337" height="18" alt="image" src="https://github.com/user-attachments/assets/9481d72d-052a-4466-9a02-e8152ce10f30" />

>Note that in the concert Array inside AlarickOng_TicketingModule.js file, the NumberOfTicketsLeft value is 5.

Type in another 5 lines of "TicketManager.BookTicket(TicketManager.user[0], TicketManager.concerts[0])" (Total 6 lines) and run

Expected output: <img width="353" height="127" alt="image" src="https://github.com/user-attachments/assets/b31bcf3f-ff44-43d4-a340-c3defb6d0456" />

