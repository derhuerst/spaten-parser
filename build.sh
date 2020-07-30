#!/bin/sh

set -e
cd $(dirname $(realpath $0))

wget 'https://thomas.skowron.eu/spaten/spaten_v0.proto' -q -O lib/spaten_v0.proto
pbf lib/spaten_v0.proto --no-write >lib/spaten_v0.js
