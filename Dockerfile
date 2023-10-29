# Use the official Node.js 18 image as the base image
FROM node:18-alpine as build

# Set the working directory in the container to the root directory of your Next.js app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container's working directory
COPY ./frontend/package*.json ./

# Run the `npm install` command to install the dependencies in the container
RUN npm install

# Copy the rest of the files in your Next.js app to the container's working directory
COPY ./frontend/. .

RUN npm run build

FROM node:18-alpine

WORKDIR /src

COPY --from=build /app/package*.json ./
COPY --from=build /app/.next/ ./.next/

RUN npm install

# Expose the port that your Next.js app is running on
EXPOSE 3000

# Set the command to start your Next.js app
CMD ["npm", "run", "start"]
