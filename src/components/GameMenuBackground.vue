<script setup lang="ts">

</script>
<template>
    <div game-menu-background>

        <svg width="100%" height="100%" viewBox="0 0 26 13"><defs>
            <clipPath id="island" clipPathUnits="objectBoundingBox" transform="scale(0.03846153846 0.07692307692)">
                <path d="m0 13h26s-3.2-13-8.3-13c-3.1 0-4.9 5.6-6.8 6.3-2 0.73-4.3-2.2-6.2-1.4-3 1.3-5.1 8.3-5.1 8.3z"/>
            </clipPath>
        </defs></svg>

        <div draw="sky full"></div>

        <div draw="island i1"></div>
        <div draw="island i1 reflect"></div>
        <div draw="island i2"></div>
        <div draw="island i2 reflect"></div>
        <div draw="island i3"></div>
        <div draw="island i3 reflect"></div>

        <div draw="sun"></div>
        <div draw="sun reflect"></div>

        <div draw="sea blur"></div>
        <div draw="sea water"></div>

        <div draw="glass-bottle"></div>

    </div>
</template>
<style lang="scss">
[game-menu-background] {
    
}

[draw] {
    position: absolute;
}
[draw~="full"] {
    inset: 0;
}
[draw~="sky"] {
    background: linear-gradient(0deg, #28c5f0 50%, #1598e2 100%);
}

[draw~="sea"] {
    bottom: 0;
    width: 100%;
    height: 50%;
}
[draw~="blur"] {
    backdrop-filter: blur(3px);
}
[draw~="water"] {
    background: linear-gradient(0deg, hsla(202, 83%, 48%, 1) 0%, hsla(202, 83%, 48%, 1) 50%, hsla(202, 83%, 48%, 0.2) 100%);
}

[draw~="island"] {
    bottom: 50%;
    clip-path: url(#island);
}
    [draw~="i1"] {
        background: linear-gradient(75deg, rgba(125,226,21,1) 0%, rgba(72,170,26,1) 100%);
        width: 30vmin;
        height: 15vmin;
    }
    [draw~="i2"] {
        background: linear-gradient(75deg, rgba(125,226,21,1) 0%, rgba(72,170,26,1) 100%);
        width: 40vmin;
        height: 10vmin;
        right: 3vmin;
    }
    [draw~="i3"] {
        background: linear-gradient(75deg, rgba(125,226,21,1) 0%, rgba(72,170,26,1) 100%);
        width: 20vmin;
        height: 3vmin;
        right: 35vmin;
    }
       
[draw~="sun"] {
    bottom: 50%;
    --up: -10vmin;
    transform: translateY(var(--up));
    padding-bottom: 15vmin;
    //transform: translate(-50%, -50%);
    left: calc(50% - 7.5vmin);
    width: 15vmin;
    height: 15vmin;
    border-radius: 50%;
    background: #FDFBD3;
    filter: drop-shadow(0 0 10px #fbff00);
    &[draw~="reflect"] {
        transform: scaleY(-1) translateY(calc(-100% + var(--up)));
    }
}

[draw~="glass-bottle"] {
    top: calc(50% + 5vmin);
    height: 25vmin;
    bottom: 0;
    background-size: 100% auto;
    overflow-y: hidden;
    &:after {
        position: absolute;
        background: url("./src/assets/glass_bottle.svg");
        transform: rotate(45deg);
        width: 10vmin;
        bottom: 0;
        background-size: 100% auto;
    }

}

[draw~="float"] {   
    position: absolute;
    bottom: 0;
    background-size: 100% auto;

}

[draw~="reflect"] {
    transform: scaleY(-1) translateY(-100%);
}


</style>