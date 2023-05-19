# Memebers Only

This is a simple web application that allows users to sign up, create messages, and join a private club. Users can create messages with titles, timestamps, and text, and the application keeps track of the user who created each message. The app also includes membership functionality, where users can join the club by entering a secret passcode.

## Features

- **User Registration**: Users can sign up for an account by providing their full name, email (used as username), and password.

- **Secure Password Storage**: User passwords are securely stored using bcrypt encryption.

- **Membership System**: Users can join the private club by entering a secret passcode, which verifies their membership status.

- **User Authentication**: Users can log in to their accounts using their registered email and password.

- **Create Messages**: Authenticated users can create new messages by providing a title, text, and timestamp.

- **Display Messages**: The home page displays a list of all messages created by club members. Only club members can view the author and timestamp of each message.

- **Admin Functionality**: The application includes an optional "Admin" field for users. Admin users have additional privileges, such as the ability to delete messages.

- **Message Deletion**: Admin users can delete messages, ensuring proper content moderation within the application.

This simple Private Club App provides basic user registration, authentication, and membership features, allowing users to create messages and interact within the private club community.

## Technology Used

The Private Club App utilizes the following technologies:

- **Node.js**: The backend runtime environment for running JavaScript code on the server.

- **Express.js**: A web framework for Node.js that simplifies the development of web applications and APIs.

- **MongoDB**: A NoSQL database used to store user and message data.

- **Mongoose**: An Object Data Modeling (ODM) library for Node.js and MongoDB, providing a convenient way to interact with the database and define data models.

- **Passport.js**: A popular authentication middleware for Node.js that simplifies the implementation of user authentication strategies.

- **bcrypt**: A library used for password hashing to securely store user passwords in the database.

- **HTML/CSS**: The standard markup language and styling language used for building the application's user interface.

- **Pug**: A template engine for Node.js that allows generating dynamic HTML using a simplified syntax.

## How to Use

To use the Private Club App, follow these steps:

- **Sign up**: Register for an account by providing your full name, email, and password.

- **Join the club**: Enter the secret passcode to join the private club and become a member.

- **Log in**: Log in to your account using your registered email and password.

- **Create messages**: Once logged in, you can create new messages by providing a title, text, and timestamp.

- **View messages**: On the home page, you can see a list of all messages created by club members. The author and timestamp of each message will be visible to club members.

- **Admin functionality**: To grant admin privileges to a user, update the user's profile and set the "Admin" field to true. Admin users will have the ability to delete messages.
