<template>
    <article class="menu">
        <article class="menu-item" :class="isDarkBg ? 'light' : 'dark'"></article>
        <article class="menu-item" :class="isDarkBg ? 'light' : 'dark'"></article>
    </article>
    <Hero />
    <About />
    <Products />
    <Services />
    <Contact />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, ref, watch } from 'vue';
import useScroll from '@/composables/useScroll';

export default defineComponent({
    name: 'Home',
    components: {
        Hero: defineAsyncComponent(() => /* webpackChunkName: "about" */ import('@/components/Hero.vue')),
        About: defineAsyncComponent(() => /* webpackChunkName: "about" */ import('@/components/About.vue')),
        Products: defineAsyncComponent(() => /* webpackChunkName: "about" */ import('@/components/Products.vue')),
        Services: defineAsyncComponent(() => /* webpackChunkName: "about" */ import('@/components/Services.vue')),
        Contact: defineAsyncComponent(() => /* webpackChunkName: "about" */ import('@/components/Contact.vue')),
    },
    setup() {
        const { isDarkBg, viewOffsetTop } = useScroll();
        const isSectionChanged = ref(false);

        onMounted(() =>
            setTimeout(() => {
                window.addEventListener('scroll', () => (isSectionChanged.value = viewOffsetTop()));
            }, 500)
        );

        watch(
            () => isSectionChanged.value,
            (value) => (isDarkBg.value = value)
        );

        return {
            isDarkBg,
        };
    },
});
</script>

<style lang="scss" scoped>
.menu {
    width: 6rem;
    height: 3rem;
    position: fixed;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 100;
    &-item {
        width: 100%;
        height: 0.8rem;
        &.dark {
            background: #37393d;
        }
        &.light {
            background: #fafafa;
        }
    }
}
</style>
