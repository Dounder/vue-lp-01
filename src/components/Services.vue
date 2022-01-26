<template>
    <section class="services">
        <h1>services</h1>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'services-component',
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.services {
    @extend %section;
    background: $dark;
    color: $light;
}
</style>
