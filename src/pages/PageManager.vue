<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { currentPage, Pages } from '../store/PageManager';

// const page = ref(defineAsyncComponent(()=>import("./GameMenu.vue")))
const page = computed(() => {
    switch (currentPage.value) {
        case Pages.Menu: return defineAsyncComponent(()=>import("./GameMenu.vue"));
        case Pages.Game: return defineAsyncComponent(()=>import("./game/GameManager.vue"));
    }
    
});
</script>
<template>
    <suspense>        
        <component :is="page"></component>
    </suspense>
</template>
<style lang="scss">

</style>