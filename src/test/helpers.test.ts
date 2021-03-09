import {TypedEvent} from '../TypedEvent';
import {timeout} from './test.helpers';

describe('helpers tests', () => {
    it('fromPromise/fromPromise', async () => {
        const expected = 10;
        const promise = timeout(() => 10, 50);

        const event = TypedEvent.fromPromise(promise);

        expect(await event.toPromise()).toBe(expected);
    });
});
