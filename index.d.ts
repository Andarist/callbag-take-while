import { Source } from 'callbag'

export default function takeWhile<I>(
  predicate: (data: I) => boolean,
): (source: Source<I>) => Source<I>
