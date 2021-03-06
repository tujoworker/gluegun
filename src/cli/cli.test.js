const test = require('ava')
const cli = require('./cli')
const sinon = require('sinon')
sinon.stub(console, 'log')

test('can start the cli', async t => {
  const c = await cli()
  t.truthy(c)
})

test('cli shows default', async t => {
  const c = await cli([])
  t.is(c.command.name, 'gluegun')
})
