FROM node:16

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --force

RUN npm run build

EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
