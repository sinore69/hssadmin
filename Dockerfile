# Build stage
FROM node:20.17.0-alpine AS build

WORKDIR /app

# Copy only necessary files
COPY package*.json prisma ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Generate Prisma client binaries for the container environment
RUN npx prisma generate

# Build the Next.js app
RUN npm run build

# Runtime stage
FROM node:20.17.0-alpine

WORKDIR /app

# Copy the app from build stage
COPY --from=build /app .

EXPOSE 3000

CMD ["npm", "start"]
