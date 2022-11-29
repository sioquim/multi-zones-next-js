#!/usr/bin/env bash

# Get the directory of where this script is called
# The last segment of the basename should be the package name
# For example, /packages/web yields PACKAGE_NAME=web
PACKAGE_NAME=$(basename "${PWD}")

# Extract the env var by having PACKAGE_URL=WEB_URL
PACKAGE_ENV_NAME=`echo "${PACKAGE_NAME}_URL" | tr '[a-z]' '[A-Z]'`
PACKAGE_URL=${!PACKAGE_ENV_NAME}

# Check if variable name exists
if [[ -z "${PACKAGE_URL}" ]]; then
  echo "Error! Cannot find value for ${PACKAGE_ENV_NAME} variable"
  exit 125
else
  # env var exists
  echo "💡 [${PACKAGE_NAME}] url found: \"${PACKAGE_URL}\""

  # We need to grab the PORT number (3000 from localhost:3000) so we can automatically launch the app from env var 
  PROTO="$(echo $PACKAGE_URL | grep :// | sed -e's,^\(.*://\).*,\1,g')"
  # Remove the protocol
  URL="$(echo ${PACKAGE_URL/$PROTO/})"
  # extract the host
  HOST="$(echo ${URL} | cut -d/ -f1)"
  # by request - try to extract the port
  PORT="$(echo $HOST | sed -e 's,^.*:,:,g' -e 's,.*:\([0-9]*\).*,\1,g' -e 's,[^0-9],,g')"
  
  # run the app
  next dev -p ${PORT}
fi