FROM node:17-alpine
RUN npm i -g @nestjs/cli
COPY ./dist/ /app/dist
# COPY ./client/ /app/client
COPY ./package.json /app/package.json
COPY ./node_modules /app/node_modules
COPY ./nest-cli.json /app/nest-cli.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./tsconfig.build.json /app/tsconfig.build.json
WORKDIR /app
EXPOSE 3000
# ENTRYPOINT [ "/bin/bash" ]
CMD ["yarn", "start"]