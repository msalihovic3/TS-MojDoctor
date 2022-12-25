FROM node
WORKDIR /web-app
COPY ./package.json /web-app
ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN CI=true
RUN npm install --legacy-peer-deps --save
COPY . .
CMD [ "npm", "run", "start" ]

