#node image - base image.where 18 is version
FROM node:18

#set work directory in container
WORKDIR /app

#copy package*.json(package.json and package-lock.json both) to /app directory(absolute path) or ./(relative path)
COPY ./package*.json ./
#run package.json dependency package
RUN npm install

#copy remaining backend application source code to container director ./ or /app
COPY . .

#expose port - only access this application 
EXPOSE 8005

#application command
CMD ["npm","run","prod"]