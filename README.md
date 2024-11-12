# AgentM Frontend

This repository contains the frontend code for the AgentM application.

## Overview

The AgentM Frontend is a React application built with modern best practices. This README provides instructions for setting up and running the project, including:

* **Prerequisites:**  Required software and tools
* **Installation & Setup:** Cloning the repository and installing dependencies
* **Running the Development Server:** Starting the app for local development
* **Building for Production:** Creating an optimized build for deployment
* **Docker Setup (Optional):**  Containerizing the application for portability

## Prerequisites

Before you can run the application, ensure you have the following installed:

* **Node.js (version >= 14.x):** Download and install from [https://nodejs.org/](https://nodejs.org/)
* **npm (Node package manager):** Included with Node.js installation
* **Git:** Download and install from [https://git-scm.com/](https://git-scm.com/)
* **(Optional) Docker:** Download and install from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop) if you plan to use Docker.

## Installation and Setup

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

### Running the Development Server

1. **Start the Server:**

   ```bash
   npm start
   ```

   This will launch the development server. The application will be accessible at `http://localhost:3000/`.

### Production Build

To build the application for production, run:

```bash
npm run build
```

This will create an optimized production build in the `build` folder. This build can then be deployed to a web server.

## Docker Setup (Optional)

This section outlines how to containerize the React application using Docker.

#### Building the Docker Image

1. **Build the image:**

   ```bash
   docker build -t agentm-frontend .
   ```

   This will build a Docker image named `agentm-frontend` based on the `Dockerfile` in the project root.

#### Running the Docker Container

1. **Run the container:**

   ```bash
   docker run -p 3000:3000 agentm-frontend
   ```

   This will start a container from the built image, exposing port 3000 to the host machine. The application will be accessible at `http://localhost:3000/`.

#### Dockerfile Overview

The included `Dockerfile` configures the Docker image for the application:

```dockerfile
# Use an official Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Install a simple HTTP server for serving static files
RUN npm install -g serve

# Set the command to serve the build folder
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000
EXPOSE 3000
```

This Dockerfile builds the application, installs a simple HTTP server, and sets the command to serve the build folder on port 3000.
