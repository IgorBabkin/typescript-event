import { IObserverStorage } from './IObserverStorage';
import { IObserver } from './ISubscriber';

export class ObserverStorage<T> implements IObserverStorage<T> {
    private observers: Array<IObserver<T>> = [];

    public add(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    public remove(observer: IObserver<T>): void {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    public each(handler: (observer: IObserver<T>) => void): void {
        this.observers.forEach(handler);
    }

    public reset(): void {
        this.observers = [];
    }
}
