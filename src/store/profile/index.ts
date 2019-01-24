import {Module} from 'vuex';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
import {ProfileState, RootState} from "@/store/interfaces/types";

export const state: ProfileState = {
    user: undefined,
    error: false
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};