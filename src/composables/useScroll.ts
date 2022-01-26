import { computed, WritableComputedRef } from 'vue';
import { useStore } from 'vuex';

interface UseScrollState {
    viewOffsetTop: () => boolean;
    isDarkBg: WritableComputedRef<boolean>;
}

export default (): UseScrollState => {
    const store = useStore();

    const isDarkBg = computed({
        get: () => store.state.module.isDark,
        set: (value: boolean) => store.commit('module/toggleDarkState', value),
    });

    return {
        isDarkBg,

        viewOffsetTop: () => {
            const hero = document.querySelector('#heroSection') as HTMLDivElement;
            const products = document.querySelector('#productsSection') as HTMLDivElement;
            const contact = document.querySelector('#contactSection') as HTMLDivElement;
            // Si el viewport está en la sección del hero, productos o contacto
            // retorna false ya que el fondo es blanco
            if (window.scrollY < hero.offsetTop + hero.offsetHeight / 2) {
                return false;
            }
            if (
                window.scrollY > products.offsetTop - products.offsetHeight / 2 &&
                window.scrollY < products.offsetTop + products.offsetHeight / 2
            ) {
                return false;
            }
            if (
                window.scrollY > contact.offsetTop - contact.offsetHeight / 2 &&
                window.scrollY < contact.offsetTop + contact.offsetHeight / 2
            ) {
                return false;
            }
            // Caso por default retorna true ya que el fondo es negro
            return true;
        },
    };
};
