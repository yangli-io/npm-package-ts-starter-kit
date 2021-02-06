import { expect } from 'chai';
import getHello from './index';

describe('getHello', () => {
    it('should get me hello Yang', () => {
        expect(getHello('Yang')).to.equal('hello Yang');
    });
});
