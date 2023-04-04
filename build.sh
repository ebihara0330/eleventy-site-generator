#!/bin/sh

cd "$(dirname "$0")"

cp "./data/metaData.js" "./template/_data/metaData.js"
cp -r "./data/attachment/"* "./template/attachment/"
1
