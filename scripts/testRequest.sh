#!/bin/bash

# Get the token
TOKEN=$(curl -s -X GET http://localhost:3000/api/test | jq -r '.token')

# Check if the token was successfully retrieved
if [ -z "$TOKEN" ]; then
  echo "Failed to retrieve token"
  exit 1
fi

echo "Generated token: $TOKEN"

# Use the token to make an authenticated request
curl -X GET -H "Authorization: Bearer $TOKEN" http://localhost:3000/api/items