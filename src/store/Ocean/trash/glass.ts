import { Trash, TrashBuilder } from './class';
import { computed } from "vue";
import { randomFloat as rf, randomInt as ri } from '../../utils/math';
import bottle0 from "@assets/trash/glass/bottle0.svg";
import { player } from './../../player/class';

const tier0Sprite = [bottle0];

const r = Math.random;

// The Glass is identical to the Plastic beside his sprite which is kind of pointless
//it's here just to demonstrate the bottle factory
export class Glass extends Trash {

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

    public static generateRandom(tier = 0):Glass {
         return new TrashBuilder<Glass>(Glass).spriteID(ri(0,tier0Sprite.length))
                                                .size(rf(.7, 1.5))
                                                .speed(rf(.7, 1.5))
                                                .y(rf(0,80))
                                                .score(rf(.9,1.1))
                                                .build();
    }
    
}