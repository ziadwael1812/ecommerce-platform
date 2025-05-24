# E-Commerce Platform

A full-stack e-commerce platform built with Spring Boot and React, featuring comprehensive product management, user authentication, shopping cart functionality, and secure checkout processes.

## Features

- User authentication and authorization with JWT
- Product catalog with search and filtering
- Shopping cart management
- Secure checkout process
- Order management
- Admin dashboard
- Responsive design

## Tech Stack

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

## Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- Docker
- PostgreSQL

### Backend Setup
1. Navigate to the `backend` directory
2. Run `./mvnw spring-boot:run`
3. Backend will start on `http://localhost:8080`

### Frontend Setup
1. Navigate to the `frontend` directory
2. Run `npm install`
3. Run `npm start`
4. Frontend will start on `http://localhost:3000`

### Docker Setup
```bash
docker-compose up
```

## API Documentation
API documentation is available at `http://localhost:8080/swagger-ui.html` when running the backend.

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.