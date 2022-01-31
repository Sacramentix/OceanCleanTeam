<script setup lang="ts">

import { BottleFactory } from '../../../store/ocean/trash/factory/BottleFactory';
import { StyleValue } from 'vue';
import { trash } from '../../../store/ocean/state';
import { Plastic } from '../../../store/ocean/trash/plastic';
import { isGameFinish } from '../../../store/game/state';

var lastFrame = 0;
var spawnCounter = 0;
var mapSize = 3;
var time = 0;
const duration = 90000;

function start() {
    lastFrame = performance.now();
    window.requestAnimationFrame(loop)
}

function loop() {
    let currentFrame = performance.now();
    let dt = currentFrame - lastFrame;
    lastFrame = currentFrame;
    time += dt;
    if (time > duration) return finish();
    update(dt);
    window.requestAnimationFrame(loop);
}

function update(dt: number) {
    //This method of generation is not determinist is impacted by the framerate
    if (Math.random() < 1 / 60 ) {
        trash.value.push(BottleFactory.generateRandom());
    }
    const m = 1+time*8/duration;
    trash.value.forEach(p => {
        p.update(dt*m);
    });
    trash.value.filter(p => p.x < 130 || p.x > -30);
}

function finish() {
    trash.value = []
    isGameFinish.value = true;
}

function position(p: Plastic): StyleValue {
    return {
        bottom: p.y + "%",
        left: p.x + "%"
    }
}

function rotation(p: Plastic): StyleValue {
    return {
        transform: `scale(${p.size})`
    }
}

start();

</script>
<template>
    <div id="sky">
        <div id="wrapper">
            <div id="ocean">
                <div id="trash">
                    <div v-for="p in trash" :style="position(p)">
                        <img :style="rotation(p)" @mousedown="p.onclick()" :src="p.sprite + ''" alt="a trash" />
                    </div>
                </div>
            </div>
            <div id="ocean-overlay"></div>
            <div hideWideScreen></div>
        </div>
    </div>
</template>
<style lang="scss">
#sky {
    position: absolute;
    inset: 0;
    background: skyblue;
    overflow-x: scroll;
}
#wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: max(100vw, 300vmin);
    overflow: hidden;
}
[hideWideScreen] {
    content: "";
    position: absolute;
    bottom: 0;
    left: 300vmin;
    width: 100vmax;
    height: 100vh;
    // pointer-events: none;
    background: red;
}
#ocean {
    position: absolute;
    background: #56795699;
    bottom: 0;
    left: 0;
    height: 75vmin;
    width: 300vmin;
    overflow: hidden;
    user-select: none;
}
#ocean-overlay {
    position: absolute;
    background: #56795655;
    // opacity: 0.2;
    bottom: 0;
    left: 0;
    height: 75vmin;
    width: 300vmin;
    // overflow: hidden;
    pointer-events: none;
}
#trash {
    > div {
        position: absolute;
        animation: rotate 15s linear infinite;
        opacity: 0.5;
        >img {
            height: 5vmin;
            width: auto;
            object-fit: contain;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
}
</style>