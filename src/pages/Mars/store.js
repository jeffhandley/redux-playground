import { createStore } from 'fluxible/addons';
import * as constants from './constants';

export default createStore({
    storeName: 'Mars',

    getMoons() {
        return this.moons || [ ];
    },

    handlers: {
        [constants.LOAD_MOONS]: 'loadMoons'
    },

    loadMoons(moons) {
        this.moons = moons;
        this.emitChange();
    },

    dehydrate() {
        return {
            moons: this.moons
        };
    },

    rehydrate(state) {
        this.moons = state.moons;
    }
});
