# E-Commerce Platform

A full-stack e-commerce platform built with Spring Boot and React, featuring comprehensive product management, user authentication, shopping cart functionality, and secure checkout processes.

## 📸 Application Preview (Screenshots)

*(Add 2-4 screenshots of your web application here. Upload them to your repository, perhaps in a `screenshots/` or `docs/images/` folder, and link them using markdown: `![Screenshot Alt Text](path/to/your-image.png)`)*

*   ![Homepage Preview](screenshots/homepage.png) <!-- Example, replace with your actual image -->
*   ![Product Page Preview](screenshots/product_page.png) <!-- Example, replace with your actual image -->
*   ![Shopping Cart Preview](screenshots/cart.png) <!-- Example, replace with your actual image -->

## ✨ Features

- User authentication and authorization with JWT
- Product catalog with search and filtering
- Shopping cart management
- Secure checkout process
- Order management
- Admin dashboard
- Responsive design

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- PostgreSQL
- JUnit & Mockito

### Frontend
- React 18
- Redux Toolkit
- Tailwind CSS
- Axios
- React Router

### DevOps
- Docker
- GitHub Actions
- AWS (deployment)

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- Docker (Recommended for easiest setup)
- PostgreSQL (if not using Docker)

### Backend Setup
1.  Navigate to the `backend` directory.
2.  (If not using Docker) Ensure PostgreSQL is running and accessible. You may need to configure database connection details in `src/main/resources/application.properties`.
3.  Run `./mvnw spring-boot:run` (or `mvn spring-boot:run` on Windows if mvnw script isn't set up for cmd).
4.  Backend will start on `http://localhost:8080`.

### Frontend Setup
1.  Navigate to the `frontend` directory.
2.  Run `npm install`.
3.  Run `npm start`.
4.  Frontend will start on `http://localhost:3000`.

### Docker Setup (Recommended)
1.  Ensure Docker Desktop is running.
2.  From the project root directory:
    ```bash
    docker-compose build # (Optional, if you've made changes to Dockerfiles)
    docker-compose up
    ```
    This will build and start both the backend and frontend services, along with a PostgreSQL database instance.
