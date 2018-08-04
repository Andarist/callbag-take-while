import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'

import takeWhile from '../src'

test('works', () => {
  const actual = []

  pipe(
    fromIter([1, 2, 3, 4, 5]),
    takeWhile(i => i !== 4),
    forEach(value => {
      actual.push(value)
    }),
  )

  expect(actual).toEqual([1, 2, 3])
})
