'use strict'

const {readFileSync} = require('fs')
const {join: pJoin} = require('path')
const test = require('tape')
const parse = require('..')

const naturalEarthRegionsPoints = readFileSync(
	pJoin(__dirname, 'ne_110m_geography_regions_points.spaten'),
	{encoding: 'utf8'},
)

test('parsing works', (t) => {
	const parsed = Array.from(parse(naturalEarthRegionsPoints))
	t.deepEqual(parsed, {
		todo: 'todo', // todo
	})
	t.end()
})
