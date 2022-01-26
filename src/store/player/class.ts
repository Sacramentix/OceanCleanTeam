import { Magnet } from './tools/magnet/class';
import { reactive, ref } from "vue";
import { Boat } from "./boat/class";
import { Net } from './tools/net/class';

export class Player implements ISubject {

    private observers:IObserver[] = [];

    subscribe(o: IObserver) {
        this.observers.push(o);
    }

    unsubscribe(o: IObserver) {
        this.observers.splice(this.observers.indexOf(o),1);
    }

    notify(): void {
        this.observers.forEach(o=>o.update());
    }

    money = ref(0);
    // boat = reactive(new Boat());
    // magnet = reactive(new Magnet());
    // net = reactive(new Net());

    earn(score:number) {
        this.money.value+=Math.ceil(score);
        this.notify();
    }

}

export var player = new Player();
export function playerReset() {
    player = new Player();
}

export interface ISubject {
    subscribe(o: IObserver):void
    unsubscribe(o: IObserver):void
    notify():void
}

export interface IObserver {
    update():void
}
