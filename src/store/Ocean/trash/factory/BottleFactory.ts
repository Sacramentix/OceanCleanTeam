import { Glass } from './../glass';
import { Plastic } from './../plastic';
import { Trash } from "../class";

/**
 * A factory to generate various bottle
 */
export class BottleFactory {

    /**
     * Generate randomly either a glass or plastic bottle
     * @returns a random Trash
     */
    static generateRandom():Trash {
        const x = Math.random();
        if (x > 0.5) return Plastic.generateRandom();
        return Glass.generateRandom();
    }

}