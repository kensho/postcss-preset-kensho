const fs = require('fs')

const test = require('ava')
const postcss = require('postcss')

const plugin = require('..')

async function snapshot(t, fixtureName) {
  const filename = `${__dirname}/fixtures/${fixtureName}.css`
  const css = fs.readFileSync(filename, 'utf8')
  const processor = postcss(plugin)
  const result = await processor.process(css, {from: filename})
  t.is(result.warnings().length, 0)
  t.snapshot(result.css)
}

test('flattens nesting', snapshot, 'nesting')
test('resolves variables', snapshot, 'variables')
