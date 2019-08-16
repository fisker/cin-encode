import test from 'ava'
import {encode, decode} from '../src'

test('smallest id number', t => {
  const id = '000000190001010009'
  const result = ''

  t.is(encode(id), result)
  t.is(decode(result), id)
})

test('bigest id number', t => {
  const id = '999999999912319992'
  const result = 'gthlOGu1d'

  t.is(encode(id), result)
  t.is(decode(result), id)
})
