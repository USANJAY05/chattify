# React Application Setup Guide

This document outlines the steps to set up and run the React application.

## Prerequisites

Ensure you have the following installed:

- Node.js (version >= 14.x)
- npm (Node package manager, which comes with Node.js)
- Git

## Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bot2do-Technologies/agentm-frontend.git
   
   cd agentm-frontend

2.	Install dependencies:

		npm install


3.	Start the development server:

		npm start

The application should now be available at http://localhost:3000/.

4.	(Optional) Build for production:

		npm run build

This will create an optimized production build in the build folder.



Docker Setup (Optional)

To containerize the React application, you can use Docker to create an image and run it in a container.

Prerequisites

Ensure Docker is installed and running on your machine.

Docker Build and Run Steps

1.	Build the Docker image:
In the root directory of the project (where the Dockerfile is located), build the Docker image by running:

    docker build -t agentm-frontend .

This command builds the Docker image and tags it as agentm-frontend.

2.	Run the Docker container:
After building the image, start a container with:

    docker run -p 3000:3000 agentm-frontend

This will start the application in a container, accessible at http://localhost:3000.
