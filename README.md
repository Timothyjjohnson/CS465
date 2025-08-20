# CS 465 Full Stack Development
# Timothy Johnson
# Professor Singh

Architecture

-Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In my project, the customer-facing side used Express with HTML and JavaScript. This approach was straightforward and server-rendered, making it effective for simpler pages such as trip browsing. On the administrative side, I used Angular to build a Single-Page Application (SPA). The SPA offered smoother navigation without page reloads and allowed me to break the UI into reusable components. This contrast showed me the strengths of both: Express HTML/JavaScript works well for static content, while Angular SPAs are ideal for more dynamic, interactive interfaces.

-Why did the backend use a NoSQL MongoDB database?

The backend used MongoDB because it is a NoSQL database that stores information as flexible, JSON-like documents. This was a good fit for handling travel-related data such as trips, dates, and prices without requiring a strict schema. Its flexibility and compatibility with JSON made it easy to exchange data between the frontend and backend.

Functionality

-How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JavaScript is a programming language, while JSON (JavaScript Object Notation) is a lightweight format used to store and transfer data. JSON tied the frontend and backend together by serving as the data format sent from the server to the client. For example, the backend could return trip data in JSON, which the frontend then parsed and displayed in the UI.

-Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components. 

During development, I refactored repeated code into reusable UI components. For example, I created trip cards and trip lists that were used across different sections of the application. This improved efficiency by reducing duplicated code and made the application easier to maintain and expand in the future. Reusable components also helped create a consistent look and feel across the admin side of the application.

Testing

-Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

API testing required me to verify that different HTTP methods and endpoints worked correctly. For instance, GET requests retrieved trip data, POST requests added new trips, PUT updated existing trips, and DELETE removed trips. When I added security for the admin login, testing became more complex because I had to make sure only authenticated users could access sensitive endpoints. This helped me better understand how methods, endpoints, and authentication work together to protect and manage application data.

Reflection

-How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has strengthened my skills as a full stack developer and given me valuable experience working across both the frontend and backend. I learned how to build Single-Page Applications with Angular, secure an application with authentication, and use MongoDB to manage data. I also gained a better understanding of how to connect different layers of a web application using JSON and APIs. These skills will make me a stronger candidate when applying for jobs in web development because I now have a full portfolio project to showcase. Completing the Travlr Getaways project was a rewarding experience that boosted my confidence and showed me that I can build modern, working web applications from start to finish.

