
CREATE DATABASE employee_db;
USE employee_db;


CREATE TABLE Department (
  dept_id INT AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(100) NOT NULL
);


CREATE TABLE Employee (
  emp_id INT AUTO_INCREMENT PRIMARY KEY,
  emp_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);


INSERT INTO Department (dept_name)
VALUES 
  ('HR'), 
  ('Engineering'), 
  ('Sales');


INSERT INTO Employee (emp_name, email, salary, dept_id) VALUES
  ('Maha', 'maha@example.com', 55000, 1),
  ('Harini', 'harini@example.com', 60000, 2),
  ('Tamizh', 'tamizh@example.com', 48000, 2),
  ('Gopika', 'gopika@example.com', 50000, 3),
  ('Ashvitha', 'ashvitha@example.com', 53000, NULL);  


SELECT * FROM Employee;


SELECT 
  e.emp_name, 
  d.dept_name
FROM 
  Employee e
LEFT JOIN 
  Department d 
ON 
  e.dept_id = d.dept_id;


UPDATE Employee
SET salary = 57000
WHERE emp_name = 'Maha';


DELETE FROM Employee
WHERE emp_name = 'Tamizh';
