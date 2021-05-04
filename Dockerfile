FROM jekyll/jekyll:latest as build

ARG USER_UID
ARG USER_GID
ARG USER_NAME

RUN groupadd -g $USER_GID -o $USER_NAME
RUN useradd -m -u $USER_UID -g $USER_GID -o -s /bin/bash $USER_NAME
USER $USER_NAME

WORKDIR /srv/jekyll

ADD . /srv/jekyll

user root
RUN gem install bundler && \
    rm -rf Gemfile.lock && \
    chmod -R 777 ${PWD}

RUN echo $USER_NAME
RUN echo $USER_UID
RUN echo $USER_GID
USER root
RUN rm -rf Gemfile.lock && \
    bundle update && \
    bundle install

USER $USER_NAME

CMD ["jekyll", "serve", "--trace", "--host", "0.0.0.0"]
