# AgentM Frontend

This repository contains the frontend code for the AgentM application.

### Prerequisites

Before you can run this application, ensure you have the following installed:

* **Node.js (version >= 14.x)**: Download and install from [https://nodejs.org/](https://nodejs.org/)
* **npm (Node package manager)**: Included with Node.js installation
* **Git**: Download and install from [https://git-scm.com/](https://git-scm.com/)

### Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Bot2do-Technologies/agentm-frontend.git
   ```

2. **Navigate to Project Directory:**

   ```bash
   cd agentm-frontend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start Development Server:**

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000/`.

### Production Build

To build the application for production, run:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

### Docker Setup (Optional)

This section outlines how to containerize the React application using Docker.

#### Prerequisites

Ensure you have Docker installed and running on your machine:

* **Docker:** Download and install from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

#### Docker Build and Run

1. **Build Docker Image:**

   ```bash
   docker build -t agentm-frontend .
   ```

   This command will build a Docker image named `agentm-frontend` based on the `Dockerfile` in the project root.

2. **Run Docker Container:**

   ```bash
   docker run -p 3000:3000 agentm-frontend
   ```

   This will start a container from the built image, exposing port 3000 to the host machine. The application will be accessible at `http://localhost:3000/`.

#### Dockerfile Overview

The included `Dockerfile` configures the Docker image for the application:

```dockerfile
# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 to be accessible outside the container
EXPOSE 3000

# Start the application in production mode using serve
CMD ["npx", "serve", "-s", "build"]
```

This Dockerfile builds the application, exposes port 3000, and uses the `serve` package (pre-installed in Docker's Node image) to serve the optimized production build.
