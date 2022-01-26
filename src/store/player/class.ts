import { Magnet } from './tools/magnet/class';
import { reactive, ref } from "vue";
import { Boat } from "./boat/class";
import { Net } from './tools/net/class';

export class Player {

    money = ref(0);
    boat = reactive(new Boat());
    magnet = reactive(new Magnet());
    net = reactive(new Net());

    earn(score:number) {
        this.money.value+=Math.ceil(score);
    }

}

export var player = new Player();
export function playerReset() {
    player = new Player();
}
