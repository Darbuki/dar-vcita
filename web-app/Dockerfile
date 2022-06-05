FROM node:18.2-slim
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
RUN npm ci --only=production
USER node
ENV NODE_ENV production
EXPOSE 80
CMD ["npm", "start"]