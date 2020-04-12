import { IObserver } from './ISubscriber';

export interface IObserverStorage<T> {
    add(observer: IObserver<T>): void;
    remove(observer: IObserver<T>): void;
    each(handler: (observer: IObserver<T>) => void): void;
    reset(): void;
}
