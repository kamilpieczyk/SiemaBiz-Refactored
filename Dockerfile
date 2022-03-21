FROM node:16.14-alpine

# Create workink directory mkdir /siemabiz
WORKDIR /siemabiz

# Install all dependencies
COPY package*.json ./
RUN npm install

# Bundle app

COPY . .
CMD ["npm", "dev"]