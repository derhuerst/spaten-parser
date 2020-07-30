'use strict'

const {readFileSync} = require('fs')
const {join: pJoin} = require('path')
const test = require('tape')
const parse = require('..')
const expected = require('./ne_110m_geography_regions_points')

const naturalEarthRegionsPoints = readFileSync(
	pJoin(__dirname, 'ne_110m_geography_regions_points.spaten'),
)

test('parsing works', (t) => {
	const parsed = Array.from(parse(naturalEarthRegionsPoints))
	t.deepEqual(parsed, expected)
	t.end()
})
