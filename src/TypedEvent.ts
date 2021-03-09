import {IObserverStorage} from './IObserverStorage';
import {IObserver, IUnsubscribe} from './ISubscriber';
import {ITypedEvent} from './ITypedEvent';
import {ObserverStorage} from './ObserverStorage';

export class TypedEvent<T> implements ITypedEvent<T> {
    public static fromPromise<T>(promise: Promise<T>): ITypedEvent<T> {
        const event = new TypedEvent(new ObserverStorage<T>());
        promise.then((value) => {
            event.raise(value);
            event.dispose();
        });
        return event;
    }

    private observerStorage: IObserverStorage<T>;

    public constructor(observerStorage: IObserverStorage<T> = new ObserverStorage()) {
        this.observerStorage = observerStorage;
    }

    public on(observer: IObserver<T>): IUnsubscribe {
        this.observerStorage.add(observer);
        return () => this.off(observer);
    }

    public once(observer: IObserver<T>): IUnsubscribe {
        const onceObserver: IObserver<T> = (data) => {
            observer(data);
            this.off(onceObserver);
        };
        this.observerStorage.add(onceObserver);
        return () => this.off(onceObserver);
    }

    public off(observer: IObserver<T>): void {
        this.observerStorage.remove(observer);
    }

    public raise(data: T): void {
        this.observerStorage.each((o) => o(data));
    }

    public toPromise(): Promise<T> {
        return new Promise(resolve => this.once(resolve));
    }

    public dispose(): void {
        this.observerStorage.reset();
    }
}
