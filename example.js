'use strict'

const {readFileSync} = require('fs')
const {join: pJoin} = require('path')
const parse = require('.')

const naturalEarthRegionsPoints = readFileSync(
	pJoin(__dirname, 'test', 'ne_110m_geography_regions_points.spaten')
)

for (const item of parse(naturalEarthRegionsPoints)) {
	console.log(item)
}
