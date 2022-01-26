<script setup lang="ts">
import GameMenuBackground from '../components/GameMenuBackground.vue';
import { currentPage } from '../store/pageManager';
import { Pages } from '../store/pageManager';
function play() {
    currentPage.value = Pages.Game;
    alert("play")
}

</script>
<template>
    <game-menu-background/>
    <main game-menu>
        <h1 game-title>Ocean Clean Team</h1>
        <div :onclick="play" play-btn>Play</div>
    </main>
</template>
<style lang="scss">
[game-menu] {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 25px;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    min-height: max(100vh, 400px);
}
[game-menu-background] {
    position: absolute;
    inset: 0;
}
[game-title] {
    font-size: calc(0.5em + 4vw);
    color: #00008B
}
[play-btn] {
    text-decoration: none;
    display: block;
    padding: 15px 25px;
    background: #3FC5F07D;
    backdrop-filter: blur(2px);
    border-radius: 15px;
    border: 1px solid #fff5;
}
</style>