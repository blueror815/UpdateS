#!/bin/sh
echo "starting..."
mkdir -p transpiled/conf
cp conf/constants.json transpiled/conf/constants.json

echo "Downloading last graphql schema from server..."
node_modules/.bin/babel-node --presets es2015 scripts/saveSchema.js

echo "starting react-native development server"
(cd transpiled && npm install && (killall node || true) && react-native start &)

echo "Setting up transpiler daemon.."
nohup node_modules/.bin/babel src --out-dir transpiled/src --watch &
