import { Times } from 'moq.ts';
import { IObserverStorage } from '../IObserverStorage';
import { TypedEvent } from '../TypedEvent';
import { createMock } from './test.helpers';
import { TestObserverStorage } from './TestObserverStorage';

describe('TypedEvent tests', () => {
    it('add to storage only one cb', () => {
        const observer = () => {};
        const observerStorageMock = createMock<IObserverStorage<void>>();

        const event = new TypedEvent(observerStorageMock.object());
        event.on(observer);

        observerStorageMock.verify((s) => s.add(observer), Times.Once());
    });

    it('remove cb on subscribeOnce', () => {
        const observer = () => {};
        const observerStorage = new TestObserverStorage<void>();

        const event = new TypedEvent(observerStorage);
        event.once(observer);
        event.raise();

        expect(observerStorage.isEmpty()).toBeTruthy();
    });
});
