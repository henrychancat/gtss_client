# # Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies (helps leverage Docker cache)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the React app will run on (default is 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

# ---- Build Stage ----
    # FROM node:18 AS builder
    # WORKDIR /app
    
    # # Copy source
    # COPY package*.json ./
    # RUN npm install
    # COPY . .
    
    # # Set public URL to /app
    # ENV PUBLIC_URL=/app
    
    # # Build the app
    # RUN npm run build
    
    # # ---- Serve Stage ----
    # FROM nginx:alpine
    # WORKDIR /usr/share/nginx/html
    
    # # Replace nginx default config
    # COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # # Copy your static homepage (index.html) as root
    # COPY public/index.html ./index.html
    
    # # Copy React build into /app/
    # COPY --from=builder /app/build ./app

    # EXPOSE 80