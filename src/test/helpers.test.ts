import { fromPromise, toPromise } from '../helpers';
import { timeout } from './test.helpers';

describe('helpers tests', () => {
    it('fromPromise/fromPromise', async () => {
        const expected = 10;
        const promise = timeout(() => 10, 50);

        const event = fromPromise(promise);

        expect(await toPromise(event)).toBe(expected);
    });
});
