FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]




# Path: color-button/.dockerignore