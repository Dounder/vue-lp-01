
import { MutationTree } from 'vuex';
import { ModuleStateInterface } from './state';


const mutation: MutationTree<ModuleStateInterface> = {
    toggleDarkState( state: ModuleStateInterface ) {
        state.isDark = !state.isDark;
    }
}


export default mutation;