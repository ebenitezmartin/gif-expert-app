# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install \
&& npm install --save-dev webpack \
&& npm i --save-dev enzyme enzyme-adapter-react-16 \
&& npm install --save-dev enzyme-to-json

# add app
COPY . ./

# start app
CMD ["npm", "start"]    