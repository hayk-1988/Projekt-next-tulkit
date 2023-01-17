import userReducer, {setFirstName, setLastName, setEmail} from '../features/user/userSlice.js';

describe('counter reducer', () => {
    const initialState = {
        firstName: 'Hayk',
        lastName: 'Gevorgyan',
        email: '',
    }

    it('should handle initial state', () => {
        expect(userReducer(undefined, {type: 'unknown'})).toEqual({
            firstName: '',
            lastName: '',
            email: '',
        });
    });
    it('should handle  setFirstName', function () {
        expect(userReducer(initialState, setFirstName('Narek'))).toEqual({
            firstName: 'Narek',
            lastName: 'Gevorgyan',
            email: '',
        });
    });
    it('should handle  setEmail', function () {
        expect(userReducer(initialState, setEmail('nareki_shnik.com'))).toEqual({
            firstName: 'Hayk',
            lastName: 'Gevorgyan',
            email: 'nareki_shnik.com',
        });
    });
    it('should handle  setLastName', function () {
        expect(userReducer(initialState, setLastName('Narekaci'))).toEqual({
            firstName: 'Hayk',
            lastName: 'Narekaci',
            email: '',
        });
    });

});
