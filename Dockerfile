# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create the necessary directories and set permissions
RUN mkdir -p /usr/src/app/.parcel-cache /usr/src/app/dist /usr/src/app/server && \
    chown -R node:node /usr/src/app/.parcel-cache /usr/src/app/dist /usr/src/app/server

# Switch to a non-root user
USER node

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]