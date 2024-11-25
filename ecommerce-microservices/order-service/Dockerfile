
# Use the official Node.js image as a base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json .

RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the service will run on
EXPOSE 3002

# Start the application
CMD ["npm", "start"]
