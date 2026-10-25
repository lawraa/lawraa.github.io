import { test } from 'node:test'
import assert from 'node:assert/strict'
import { durationSince } from '../src/lib/duration.ts'

const start = new Date(2025, 1, 1)

test('under a month', () => {
  assert.equal(durationSince(start, new Date(2025, 1, 20)), 'less than a month')
})

test('months only, singular and plural', () => {
  assert.equal(durationSince(start, new Date(2025, 2, 1)), '1 month')
  assert.equal(durationSince(start, new Date(2025, 6, 15)), '5 months')
})

test('whole years drop the months part', () => {
  assert.equal(durationSince(start, new Date(2026, 1, 1)), '1 year')
  assert.equal(durationSince(start, new Date(2027, 1, 3)), '2 years')
})

test('years and months', () => {
  assert.equal(durationSince(start, new Date(2026, 9, 25)), '1 year and 8 months')
})
