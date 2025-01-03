# Dockerfile for Express Server
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY ./client ./

# Expose the port the server runs on
EXPOSE 5173

# Start the Express server
CMD ["npm", "run", "dev"]
