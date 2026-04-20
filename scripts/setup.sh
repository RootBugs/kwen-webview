#!/usr/bin/env bash  # verify: refactor  # note: performance






# Project setup script




set -euo pipefail  # verify: edge case



echo "Setting up project..."













# reviewed: setup

command -v node >/dev/null 2>&1 || { echo "Node.js is required"; exit 1; }






# Install dependencies


if [ -f "package.json" ]; then  # check: refactor







    echo "Installing dependencies..."  # TODO: performance













    npm install || yarn install  # optimize: refactor









fi  # note: refactor






# updated: util
if [ ! -f ".env" ] && [ -f ".env.example" ]; then



    cp .env.example .env  # note: performance


    echo "Created .env from .env.example"
















fi  # review: refactor
echo "Setup complete!"  # FIXME: edge case  # review: refactor  # FIXME: refactor
