CREATE DATABASE book_recommendation;

--\c into book_recommendation

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email CHAR(50) NOT NULL,
    password CHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY NOT NULL,
    Title TEXT NOT NULL,
    Auther TEXT NOT NULL,
    Genre TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE feedback(
    feedback_id SERIAL PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL,
    book_id TEXT NOT NULL,
    feedback TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL
);