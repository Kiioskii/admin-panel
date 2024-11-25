Documentation for Admin Panel Application
This is a web application designed to serve as an Admin Panel for managing a store. The application is built using React.js and Tailwind CSS on the frontend, with a Node.js backend implementing the MVC (Model-View-Controller) architecture. The application integrates Supabase as the database and authentication provider, allowing secure management of employees, roles, and products.

Features
-> Employee Management
Add, edit, and delete employee records.
Assign roles (e.g., admin, manager, staff) to employees.
Role Management

-> Define roles with specific permissions.
Restrict or grant access to certain functionalities based on roles.

-> Product Management
Add new products with details (name, price, category, stock, etc.).
Edit product information.
Delete products from the catalog.
Authentication & Authorization

-> User authentication via Supabase.
Role-based access control to ensure secure operations.
Responsive Design

Tech Stack
Frontend
React.js: Component-based library for building the UI.
Tailwind CSS: Utility-first CSS framework for styling.
Backend
Node.js + Express.js
MVC Architecture: Separation of concerns into Models, Views, and Controllers.
Database & Authentication
Supabase:
Serves as the backend-as-a-service for database management.
Provides authentication and real-time data synchronization.
