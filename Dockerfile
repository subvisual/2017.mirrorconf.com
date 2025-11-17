FROM node:7.4

WORKDIR /app

RUN npm install -g yarn

COPY package.json yarn.lock* ./

RUN yarn install

COPY . .

CMD ["npm", "run", "develop"]
