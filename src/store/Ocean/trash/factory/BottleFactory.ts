import { Glass } from './../glass';
import { Plastic } from './../plastic';
import { Trash } from "../class";

export class BottleFactory {

    static generateRandom():Trash {
        const x = Math.random();
        if (x > 0.5) return Plastic.generateRandom();
        return Glass.generateRandom();
    }

}