
import { createStore } from 'vuex';

// My custom modules
import module from './module';
import { ModuleStateInterface } from './module/state';


export interface StateInterface {
    module: ModuleStateInterface;
}

export default createStore<StateInterface>({
    modules: {
        module
    }
})
