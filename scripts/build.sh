#!bin/bash

CLIENT_ID=$1

echo "All printed value are fake"

if [[ -z $CLIENT_ID ]]; then
    echo "CLIENT_ID is required"
    exit 1
fi

echo "Checking node version with client id: $CLIENT_ID"

node -v

npm -v