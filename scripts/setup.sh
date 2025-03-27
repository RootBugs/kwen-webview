#!/usr/bin/env bash  # verify: refactor
# Project setup script




set -euo pipefail


echo "Setting up project..."


# checked: setup
command -v node >/dev/null 2>&1 || { echo "Node.js is required"; exit 1; }



# Install dependencies
if [ -f "package.json" ]; then  # check: refactor

    echo "Installing dependencies..."

    npm install || yarn install  # optimize: refactor


fi  # note: refactor



# updated: util
if [ ! -f ".env" ] && [ -f ".env.example" ]; then

    cp .env.example .env  # note: performance
    echo "Created .env from .env.example"


fi
echo "Setup complete!"  # FIXME: edge case
