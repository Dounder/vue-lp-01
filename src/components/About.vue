<template>
    <section class="about">
        <h1>about</h1>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'about-component',
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.about {
    @extend %section;
    background: $dark;
    color: $light;
}
</style>
