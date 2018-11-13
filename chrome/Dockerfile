FROM node:8-slim

RUN apt-get update && apt-get install -yq --force-yes libgconf-2-4

RUN apt-get update && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
    --no-install-recommends \
    && apt-get install -y imagemagick libmagickcore-dev libmagickwand-dev \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

RUN mkdir -p /usr/chrome

WORKDIR  /usr/chrome

COPY package.json .
COPY ./src ./src
RUN npm install 
COPY ./src /usr/chrome


ENTRYPOINT ["dumb-init", "--"]
CMD [ "npm", "start"]
