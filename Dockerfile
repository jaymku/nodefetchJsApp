# Stage 1: Build the Next.js application
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create the production image
FROM node:16-alpine AS runner

WORKDIR /app

RUN npm install --global pm2
# Install AppDynamics 
RUN npm install appdynamics@24.4.1

# Copy AppDynamics shim file.
RUN mkdir -p /opt/appdynamics-agent/
COPY shim.js /opt/appdynamics-agent/

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Start the application
CMD ["pm2-runtime", "start", "npm", "--", "start"]