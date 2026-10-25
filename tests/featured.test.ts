import { test } from 'node:test'
import assert from 'node:assert/strict'
import { featuredProjects } from '../src/data/featured.ts'
import { projects } from '../src/data/projects.ts'

test('every featured project id exists in projects.ts', () => {
  const ids = new Set(projects.map(p => p.id))
  for (const { id } of featuredProjects) assert.ok(ids.has(id), `"${id}" is not a project id`)
})

test('featured projects are not repeated', () => {
  const ids = featuredProjects.map(f => f.id)
  assert.equal(new Set(ids).size, ids.length)
})
