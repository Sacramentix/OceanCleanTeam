import { computed } from "@vue/reactivity";

export class Trash {

    spriteID = 0;

    //The sprite should be a computed that generate a sprite image url given the sprite ID
    sprite = computed(()=>"");

    size = 1;
    x = -15;
    y = -25;
    speed = 100;

    // rotationSpeed = 1;
    score = 100;

    constructor() {
    }
    //Should be trigger when the sprite is clicked
    onclick() {
        
    }
    //Should be trigger each frame
    update(dt:number) {
        
    }

}

/**
 * A builder use to make Trash
 * scaling certain field with also impact other
 */
export class TrashBuilder<T extends Trash> {

    private readonly _trash: T;

    constructor(TCreator: { new (): T; }) {
        this._trash = new TCreator();
    }

    spriteID(s:number) {
        this._trash.spriteID = s;
        return this;
    }

    //The size affect the speed of the trash
    size(s:number) {
        this._trash.size *= s;
        this._trash.speed /= s;
        this._trash.score *= 0.3*s+0.7;
        return this;
    }

    y(y:number) {
        this._trash.y = y;
        return this;
    }

    speed(s:number) {
        this._trash.speed *= s;
        this._trash.score *= 0.3*s+0.7;
        return this;
    }

    score(s:number) {
        this._trash.score *= s;
        return this;
    }

    build(): T {
        return this._trash;
    }

}