FROM node:6.2.0

# Create app directory
RUN mkdir /app
WORKDIR /app

# install dependencies (this layer will be cached so npm install will only run when package is changed)
COPY package.json /app
RUN npm install --production

# copy source
RUN mkdir /app/src
COPY src /app/src

CMD [ "npm", "start" ]
