import { ActionTree } from 'vuex';
import { ModuleStateInterface } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<ModuleStateInterface, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;