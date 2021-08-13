import test from 'ava'
import {encode, decode} from '../src/index.js'

test('smallest id number', (t) => {
  const id = '000000190001010009'
  const result = ''

  t.is(encode(id), result)
  t.is(decode(result), id)
})

test('greatest id number', (t) => {
  const id = '999999999912319992'
  const result = 'K5E~JA6cS'

  t.is(encode(id), result)
  t.is(decode(result), id)
})
