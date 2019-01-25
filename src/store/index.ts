import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {RootState} from '@/store/interfaces/types';
import {profile} from '@/store/profile';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
    },
    modules: {
        profile,
    },
};

export default new Vuex.Store<RootState>(store);
