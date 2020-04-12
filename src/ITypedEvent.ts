import { IObserver, IUnsubscribe } from './ISubscriber';
export interface ITypedEvent<T> {
    on(observer: IObserver<T>): IUnsubscribe;
    once(observer: IObserver<T>): IUnsubscribe;
    off(observer: IObserver<T>): void;
    raise(data: T): void;
    dispose(): void;
}
