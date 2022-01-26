<template>
    <main class="hero" id="heroSection">
        <h1>Hero</h1>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'hero-component',
});
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.hero {
    @extend %section;
}
</style>
