'use strict'

// The file header contains a cookie (53 50 41 54) which makes it easy to determine that this is a Spaten file even without proper file extension (first 4 bytes).
const COOKIE = Buffer.from([0x53, 0x50, 0x41, 0x54])
// The next 4 bytes defined the file format version, it is currently 0 and is not planned to be changed any time soon.
const VERSION = 0

const parseSpaten = function* (buf) {
	if (!Buffer.isBuffer(buf)) {
		throw new TypeError('buf must be a Buffer')
	}

	const cookie = buf.slice(0, 4)
	if (!COOKIE.equals(cookie)) {
		const err = new Error('invalid/unknown cookie: ' + cookie.toString('hex'))
		err.offset = 0
		throw err
	}
	const version = buf.readUInt32LE(4)
	if (version !== VERSION) {
		const err = new Error('invalid/unknown version: ' + version)
		err.offset = 4
		throw err
	}

	let offset = 8
	while (offset < (buf.length - 1)) {
		// Body Length
		// The block starts with a 4 byte long body length field, which describes the byte length of the body.
		const length = buf.readUInt32LE(offset)
		offset += 4

		// Flags
		// The next 2 bytes are reserved for flags. No flag values are specified yet.
		offset += 2 // ignore for now

		// Compression
		// The following byte is reserved for compression information. Currently there are no compression methods specified.
		offset += 1 // ignore for now

		// Message Type
		// The next sequence byte is a field for defining the body serialization. Those are the allowed values:
		// Integer Value	Message Type
		// 0				v0, based on Protocol Buffers
		const type = buf.readUInt8(offset) // todo: unsigned or signed?
		offset += 1

		if (type !== 0) {
			const err = new Error('invalid/unknown message type: ' + type)
			err.offset = offset
			throw err
		}
		offset += length
	}
}

module.exports = parseSpaten
