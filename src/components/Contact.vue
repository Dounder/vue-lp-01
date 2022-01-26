<template>
    <section class="contact" id="contactSection">
        <h1>contact</h1>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'contact-component',
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.contact {
    @extend %section;
}
</style>
