import { check, currentAuth } from "./auth";

describe('auth test', () => {
    // 权限为空 currentAuth:[]
    it('empty auth', () => {
        // 清空currentAuth
        currentAuth.splice(0, currentAuth.length);
        expect(check(['user'])).toEqual(false);
        expect(check(['admin'])).toEqual(false);
    });
    // 权限为user currentAuth:['user']
    it('user auth', () => {
        currentAuth.splice(0, currentAuth.length);
        currentAuth.push('user');
        expect(check(['user'])).toEqual(true);
        expect(check(['admin'])).toEqual(false);
    });
    // 权限为admin currentAuth:['user', 'admin']
    it('empty admin', () => {
        currentAuth.push('admin');
        expect(check(['user'])).toEqual(true);
        expect(check(['admin'])).toEqual(true);
        expect(check(['user', 'admin'])).toEqual(true);
    });
});