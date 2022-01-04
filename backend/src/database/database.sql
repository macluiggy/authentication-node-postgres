CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY NOT NULL, -- for incrementing and the value cannot be null
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  UNIQUE(email) -- email must be unique
);