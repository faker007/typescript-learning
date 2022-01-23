class HoldAnything<T> {
  constructor(public data: T) {}
}

const holdNumber = new HoldAnything<number>(521512);
holdNumber.data = 123;

const holdString = new HoldAnything<string>('asdf');
holdString.data = 'asfasfsa';
