# callbag-take-while

Callbag operator which emits values emitted by the source as long as each value satisfies the given predicate, and then completes as soon as predicate is not satisfied.

## Example

```js
import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'
import takeWhile from 'callbag-take-while'

pipe(
  fromIter([1, 2, 3, 4, 5]),
  takeWhile(i => i !== 4),
  forEach(value => {
    actual.push(value) // will log 1, 2, 3
  }),
)
```
