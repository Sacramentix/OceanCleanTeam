import { player } from './../../player/class';
import { Trash, TrashBuilder } from './class';
import { computed } from "vue";
import { randomFloat as rf, randomInt as ri } from '../../utils/math';
import bottle0 from "@assets/trash/plastic/bottle0.svg";

const tier0Sprite = [bottle0];

const r = Math.random;

export class Plastic extends Trash {

    sprite = computed(()=> tier0Sprite[this.spriteID]);
    
    x = -5;

    constructor() {
        super();
    }

    onclick() {
        //we place the trash offscreen so the next they will disseappear next frame
        this.x = 150;
        player.earn(this.score);
    }
    
    //we move the sprite to the right each frame by time since the last frame scale by the speed of the trash
    update(dt: number): void {
        this.x+=dt/512* this.speed/100;
    }

    public static generateRandom(tier = 0) {
         return new TrashBuilder<Plastic>(Plastic).spriteID(ri(0,tier0Sprite.length))
                                                .size(rf(.7, 1.5))
                                                .speed(rf(.7, 1.5))
                                                .y(rf(0,80))
                                                .score(rf(.9,1.1))
                                                .build();
    }

}