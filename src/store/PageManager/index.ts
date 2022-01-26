import { ref } from "vue";

export enum Pages {
    Menu,
    Game
}

export const currentPage = ref(Pages.Menu);