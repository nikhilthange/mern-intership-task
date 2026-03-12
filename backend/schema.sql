CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 email VARCHAR(100) UNIQUE,
 password_hash VARCHAR(255),
 role ENUM('admin','manager','worker'),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(200),
 description TEXT,
 start_date DATE,
 end_date DATE,
 status ENUM('planned','active','completed'),
 created_by INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE daily_reports (
 id INT AUTO_INCREMENT PRIMARY KEY,
 project_id INT,
 user_id INT,
 date DATE,
 work_description TEXT,
 weather VARCHAR(100),
 worker_count INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (project_id) REFERENCES projects(id),
 FOREIGN KEY (user_id) REFERENCES users(id)
);