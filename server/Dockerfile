# Dockerfile for Express Server
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./server/package.json ./server/package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY ./server ./

# Expose the port the server runs on
EXPOSE 3000

# Start the Express server
CMD ["npm", "run", "dev"]
