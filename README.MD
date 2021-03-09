# How to install
```shell script
yarn add typescript-event # npm install typescript-event
```

# Usage
```typescript
const event = new TypedEvent<string>();
event.on((name) => console.log(`Hello, ${name}!`));
event.raise('bro'); // Hello, bro!
event.dispose();
```

# API
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
