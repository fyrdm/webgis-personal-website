#!/bin/bash
# Wrapper script to deploy to GitHub Pages using Docker

echo "Starting deployment..."
GIT_EMAIL=$(git config user.email)
GIT_NAME=$(git config user.name)

docker run -it --rm --network host \
  -v "$(pwd):/root/project" \
  -w /root/project \
  node:24-alpine \
  sh -c "apk add --no-cache git && \
         git config --global --add safe.directory /root/project && \
         git config --global user.email \"$GIT_EMAIL\" && \
         git config --global user.name \"$GIT_NAME\" && \
         npm run deploy"
