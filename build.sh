#!/bin/bash

# Execute copyTemplates.js
node copyTemplates.js

# Execute npx eleventy
npx eleventy

# Remove ./build directory and its contents
rm -rf ./build
