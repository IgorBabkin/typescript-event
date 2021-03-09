![npm bundle size](https://img.shields.io/bundlephobia/minzip/typescript-event)
![Travis (.org) branch](https://img.shields.io/travis/IgorBabkin/service-locator/master)
![Coveralls github branch](https://img.shields.io/coveralls/github/IgorBabkin/service-locator/master)
[![Requirements Status](https://requires.io/github/IgorBabkin/service-locator/requirements.svg?branch=master)](https://requires.io/github/IgorBabkin/service-locator/requirements/?branch=master)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Typed event written on Typescript :boom: :100: :green_heart:

## How to install
```shell script
yarn add typescript-event # npm install typescript-event
```

## Usage
```typescript
const event = new TypedEvent<string>();
event.on((name) => console.log(`Hello, ${name}!`));
event.raise('bro'); // Hello, bro!
event.dispose();
```

## API
```typescript
export interface ITypedEvent<T> {
    on(observer: IObserver<T>): IUnsubscribe;
    once(observer: IObserver<T>): IUnsubscribe;
    off(observer: IObserver<T>): void;
    raise(data: T): void;
    dispose(): void;
    toPromise(): Promise<T>;
}
```

### Promise
```typescript
const promise = Promise.resolve('bro');
const event = TypedEvent.fromPromise(promise);
const [v1, v2] = await Promise.all([event.toPromise(), promise])
console.log(v1 === v2); // true
```
