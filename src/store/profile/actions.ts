import {ActionTree} from 'vuex';
import axios from 'axios';
import {RootState, ProfileState, User} from '../../interfaces/types';


export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({commit}): any {
        axios({
            url: 'https://....'
        }).then((response) => {
            const payload: User = response && response.data;
            commit('profileLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('profileError');
        });
    }
};