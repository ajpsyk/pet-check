CREATE TABLE pet_info (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  type VARCHAR(20) NOT NULL,
  breed VARCHAR(20) NOT NULL,
  age VARCHAR(20) NOT NULL,
  weight VARCHAR(20) NOT NULL,
  medications VARCHAR(20) NOT NULL
)