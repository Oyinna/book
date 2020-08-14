# Project Overview
This project is a book recommendation service which is usable via a REST API. It accepts new users, recommends exactly 20 books to users on demand and receives user’s feedback which can either be “Liked The book”, “Disliked The book” or “Not Interested”.

# Project Timelines 
- Total Duration: 8 Hours

# Required Features 
- It’s a REST API service.
- Sign up new users and authenticate logged in users
- Users should be identified by their usernames.
- It recommends exactly 20 books to first time users based on their age and category chosen. If available. 
- It recommends exactly 20 books to returning users based on category chosen and their previous feedback.
- Users can give feedback of either “Liked The book”, “Disliked The book” or “Not Interested” on every book recommended to them.
- The 20 books recommended to a user can contain his/her previously recommended books with feedback of “Not Interested”. This is because people’s interest can change over time. This should only be considered when the number of unseen books is not up to 20.
- The 20 books recommended to a user must not contain his/her previously recommended books with feedback of “Liked The book” or “Disliked The book”

# Tools 
- Framework: Node/Express 
- Linting Library: ESLint 
- Style Guide: Airbnb
- Database: MySql
- Testing Framework: Mocha or Jasmine

# API Response Specification
The API endpoints should respond with a JSON object specifying the HTTP status code, and either a data property (on success) or an error property (on failure). When present, the data property is always an array, even if there’s none, one, or several items within it. 
On Success 
{ 
“status” : 200, 
“data” : [{...}] 
} 
On Error 
{ 
“status” : 404, 
“error” : “relevant-error-message” 
}
The status codes above are provided as samples, and by no way specify that all success responses should have 200 or all error responses should have 400.

# API Endpoint Specification    
Endpoints are to be secured with JSON Web Token (JWT).

1 Endpoint: POST /auth/signup 
- Description: Create a user account. 
- Response spec:
 { 
“status” : Integer, 
“data” : [{
“token” : “45erkjherht45495783”, 
“user”: { user object }
}]
} 
- Request spec:
 {user object }

2 Endpoint: POST /auth/login 
- Description: Login a user 
- Response spec: 
{ 
“status” : 200, 
“data” : [{ 
“token” : “ahd64jfhHG7832KFM5”, 
“user”: {user object} 
}] 
}
- Request spec:
 {user object }

3 Endpoint: GET /recommendations/<user_id>/<age>/category
- Description: Recommends exactly 20 books to the user. 
- Response spec: 
{ 
“status” : Integer, 
“data” : [{
“token” : “ahd64jfhHG7832KFM5”, 
“book”: {book object}
 }] 
}
- Request spec:
 {book object }

4 Endpoint: POST /feedback/<user_id>/<book_id>  
- Descriptions: Submit feedback.
- Response spec: 
{
“status” : Integer, 
“data” : [{ 
“token” : “ahd64jfhHG7832KFM5”, 
“feedback”: {feedback object}
}]
}
- Request spec:
 {feedback object }
