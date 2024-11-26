#!/bin/bash

echo "Deploying to server..."

# Check if the private key file exists
if [ ! -f ~/.ssh/id_rsa ]; then
  echo "Private key Not Found"
  exit 1
fi

# Define SSH command using the private key file
SSH_COMMAND="ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa newuser@techclan.co"

# Execute SSH command to navigate to the directory and perform git fetch and yarn build
$SSH_COMMAND << EOF
  cd /home/hassan/techclan
  sudo git fetch
  sudo git pull origin master
  sudo env "PATH=$PATH" yarn
  sudo yarn build
EOF

echo "Deployment Completed."
