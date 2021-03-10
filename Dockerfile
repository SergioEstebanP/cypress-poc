FROM cypress/base:10
ARG ENV
ENV AUX_ENV=${ENV}
LABEL "Project"="Web Automation Framework"

COPY . /qa
WORKDIR /qa

RUN npm install
ENTRYPOINT npm run test:${AUX_ENV}