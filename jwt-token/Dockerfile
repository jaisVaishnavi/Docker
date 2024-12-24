# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json .

RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app will run on
EXPOSE 5000

# Define the command to run your app
CMD ["node", "index.js"]
