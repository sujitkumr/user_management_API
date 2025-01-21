## 🚀 User Management System API
-  Welcome to the User Management System API!
-  Effortlessly manage user accounts, authentication, and administrative controls with this scalable, secure, and RESTful API. Designed for modern applications, it  
-  provides core functionalities like user registration, login, profile management, and super admin privileges.

## ✨ Features
###🔒 User Management
-  Register: Sign up with name, email, password, and phone number.
-  Login: Authenticate using email and password to access your account.
-  Profile Updates: View and update your personal details securely.
-  Account Deactivation: Deactivate accounts without losing user data for audit purposes.
-  Key Design: Deactivated accounts are marked inactive but retained for future reactivation or administrative purposes.

## 🛡️ Super Admin Controls
-  View all registered users and their details.
-  Super Admin accounts are created with elevated privileges during setup.
-  Key Decision: Super Admins are stored in the same database collection but distinguished by a role-based mechanism for secure access.

 
 ## 🛠️ Technologies Used
- Node.js: Backend runtime.
- Express.js: Framework for building RESTful APIs.
- MongoDB: Database for storing user details.
- bcrypt: For password hashing.


### API Endpoints:

- POST /signup: Register a new user.
 

- POST /sign In: Authenticate a user.


- GET /get-all-users: Retrieve all users from the database.


- PUT /api/users/id: Update Profile.


- PATCH /api/users/deactivate: Deactivate Account.
  
### Super Admin Endpoints

- GET /api/admin/users: Get All Users.
- PUT /api/admin/users/id: Update Profile.
  
## Architecture:

This project is based on [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) Architecture.

### 📂 Project Setup
- Clone the Repository:
- git clone <repository-url>
- cd user-management-system
#### Install Dependencies:
- npm install
- Configure Environment Variables:
- Create a .env file in the project root: 
### env
- PORT=5000
- MONGO_URI=<your-mongodb-uri>
- JWT_SECRET=<your-secret-key>
- Run the Application: npm start

### My Profiles:

- [LinkedIn](https://www.linkedin.com/in/3233sujit-kumar-67b13321b/)
- [Github](https://github.com/sujitkumr)
- [LeetCode](https://leetcode.com/sujitkymar101/)
- [EmailID](mailto:sujitkymar101@gmail.com)
