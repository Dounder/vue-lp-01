<template>
    <section class="products" id="productsSection">
        <h1>products</h1>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'products-component',
});
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.products {
    @extend %section;
}
</style>
