import { player } from './../../player/class';
import { Trash } from './class';
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
        //we place the trash offscreen so the next they will disseappear
        this.x = 150;
        player.earn(this.score);
        console.log(player.money);
        
    }

    update(dt: number): void {
        this.x+=dt/512* this.speed/100;
    }

    public static generateRandom(tier = 0) {
         return new Plastic()._spriteID(ri(0,tier0Sprite.length))
                            ._size(rf(.7, 1.5))
                            ._speed(rf(.7, 1.5))
                            ._y(rf(0,80))
                            ._score(rf(.9,1.1))
    }

}