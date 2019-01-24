import {GetterTree} from 'vuex';
import {RootState, ProfileState} from '../interfaces/types';

export const getters: GetterTree<ProfileState, RootState> = {
    fullName(state): string {
        const {user} = state;
        const firstName = (user && user.firstName) || '';
        const lastName = (user && user.lastName) || '';
        return `${firstName} ${lastName}`;
    }
};