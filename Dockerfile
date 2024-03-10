FROM node:18-alpine

WORKDIR /front_app

COPY package.json yarn.lock* ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3001

ENV NODE_ENV=production

CMD yarn start -p 3001
