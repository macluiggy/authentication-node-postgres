CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY NOT NULL, -- for incrementing and the value cannot be null
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  UNIQUE(email) -- email must be unique
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL, -- for incrementing and the value cannot be null
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at DATE DEFAULT current_date
);