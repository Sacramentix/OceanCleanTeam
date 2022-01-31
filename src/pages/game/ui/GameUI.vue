<script setup lang="ts">
import { isGameFinish } from '../../../store/game/state';
import { currentPage, Pages } from '../../../store/pageManager';
import { player, playerReset } from '../../../store/player/class';

function gotoMenu() {
    isGameFinish.value = false;
    playerReset();
    currentPage.value = Pages.Menu;
}

</script>
<template>
    <div gameUI>
        <p id="player-money">{{ player.money }}$</p>
        <div result v-if="isGameFinish">
            <h2>You raised</h2>
            <p>{{ player.money }}$</p>
            <div menu-btn @click="gotoMenu()">Go to menu</div>
        </div>
    </div>
</template>
<style lang="scss">
[gameUI] {
    position: absolute;
    inset:0;
    display: grid;
    place-items: center;
    pointer-events: none;

    > p {
        position: absolute;
        top: 5px;
        left: 5px;
    }
    [result] {
        display: grid;
        place-items: center;
        padding: 15px;
        gap: 15px;
        border-radius: 15px;
        background: #fff;
        pointer-events: all;

    }
    [menu-btn] {
        text-decoration: none;
        display: block;
        padding: 15px 25px;
        background: #3FC5F07D;
        border-radius: 15px;
        cursor: pointer;
        border: 1px solid #fff5;
    }
}
</style>