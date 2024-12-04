# IMAGE BASE
FROM node:18-alpine

# define working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy source files
COPY . .

# generate prisma client
RUN npx prisma generate

# compile app
RUN npm run build

# expose port
EXPOSE 3000

# start app
# CMD [ "npm", "run", "start:prod" ]
# start app and exec migrations
CMD ["sh", "-c", "npx prisma migrate deploy && npm run prisma:seed &&  npm run start:prod"]
