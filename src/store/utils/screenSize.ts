import { ref } from "vue";

export const screenWidth = ref(window.innerWidth);
export const screenHeight = ref(window.innerHeight);
export const screenMin = ref(screenWidth.value < screenHeight.value ? screenWidth.value : screenHeight.value);

window.addEventListener('resize', ()=>{
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;
    screenMin.value = screenWidth.value < screenHeight.value ? screenWidth.value : screenHeight.value;
});