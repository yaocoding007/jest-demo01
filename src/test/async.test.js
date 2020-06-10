import {fetchData, fetchPromise} from '../utils';

it('test sync callback', done => {
    function callback(data) {
        try {
            expect(data).toBe('fetchData');
            done()
        } catch(err) {
            done(err)
        }
    }
    fetchData(callback);
})

it('test sync promise ->', () => {
    return fetchPromise().then(res => {
        expect(res).toBe('fetchPromise')
    })
}) 

it('test sync promise by resolves ->', () => {
    return expect(fetchPromise()).resolves.toBe('fetchPromise')
})