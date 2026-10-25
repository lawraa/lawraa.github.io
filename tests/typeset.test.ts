import { test } from 'node:test'
import assert from 'node:assert/strict'
import { typeset } from '../src/lib/typeset.ts'

const NBSP = ' '

test('keeps numbers with their units', () => {
  assert.equal(typeset('a 2.5 N grip'), `a 2.5${NBSP}N grip`)
  assert.equal(typeset('2.92 Nm torque'), `2.92${NBSP}Nm torque`)
  assert.equal(typeset('17 cm/s and 50 mm'), `17${NBSP}cm/s and 50${NBSP}mm`)
  assert.equal(typeset('±15 V outputs'), `±15${NBSP}V outputs`)
  assert.equal(typeset('~175–207 µs'), `~175–207${NBSP}µs`)
})

test('leaves words that only start like a unit alone', () => {
  assert.equal(typeset('3 Nodes'), '3 Nodes')
  assert.equal(typeset('2 Vision models'), '2 Vision models')
})

test('keeps "Phase N" together', () => {
  assert.equal(typeset('then Phase 2 runs'), `then Phase${NBSP}2 runs`)
})

test('arrows and middle dots stay at the end of the line before', () => {
  assert.equal(typeset('a → b'), `a${NBSP}→ b`)
  assert.equal(typeset('UC Berkeley · CS 289'), `UC Berkeley${NBSP}· CS 289`)
})
