export interface ModuleStateInterface {
    isDark: boolean;
}

function state(): ModuleStateInterface {
    return {
        isDark: false,
    }
}

export default state;