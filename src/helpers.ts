import { ITypedEvent } from './ITypedEvent';
import { ObserverStorage } from './ObserverStorage';
import { TypedEvent } from './TypedEvent';

export function createEvent<T>(): ITypedEvent<T> {
    return new TypedEvent(new ObserverStorage());
}

export function fromPromise<T>(promise: Promise<T>): ITypedEvent<T> {
    const event = createEvent<T>();
    promise.then((value) => {
        event.raise(value);
        event.dispose();
    });
    return event;
}

export function toPromise<T>(event: ITypedEvent<T>): Promise<T> {
    return new Promise(resolve => event.once(resolve));
}
