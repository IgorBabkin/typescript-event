import { createEvent } from '../helpers';

describe('TypedEvent tests', () => {
    it('subscribes', () => {
        const expected = 10;
        let observerValue = 0;

        const event = createEvent<number>();
        event.on((value) => observerValue = value);
        event.raise(10);

        expect(observerValue).toBe(expected);
    });

    it('should be able to unsubscribe#1', () => {
        let observerHasBeenCalled = false;

        const event = createEvent<void>();
        const unsubscribe = event.on(() => observerHasBeenCalled = true);
        unsubscribe();
        event.raise();

        expect(observerHasBeenCalled).toBe(false);
    });

    it('should be able to unsubscribe#2', () => {
        let observerHasBeenCalled = false;

        const event = createEvent<void>();
        const observer = () => observerHasBeenCalled = true;
        event.off(observer);
        event.raise();

        expect(observerHasBeenCalled).toBe(false);
    });

    it('subscribe once', () => {
        let callsCount = 0;

        const event = createEvent<void>();
        event.once(() => callsCount++);
        event.raise();
        event.raise();

        expect(callsCount).toBe(1);
    });

    it('calls observer a few times', () => {
        let callsCount = 0;

        const event = createEvent<void>();
        event.on(() => callsCount++);
        event.raise();
        event.raise();

        expect(callsCount).toBe(2);
    });

    it('calls observer a few times', () => {
        let callsCount = 0;

        const event = createEvent<void>();
        event.on(() => callsCount++);
        event.raise();
        event.raise();

        expect(callsCount).toBe(2);
    });

    it('dispose', () => {
        let callsCount = 0;

        const event = createEvent<void>();
        event.on(() => callsCount++);
        event.dispose();
        event.raise();

        expect(callsCount).toBe(0);
    });
});
