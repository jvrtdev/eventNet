# IMAGE BASE
FROM node:18-alpine

# define working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install --production

# copy source files
COPY . .

# compile app
RUN npm run build

# expose port
EXPOSE 3000

# start app
CMD [ "npm", "run", "start:prod" ]
