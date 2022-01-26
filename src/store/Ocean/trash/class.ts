import { computed } from "@vue/reactivity";


export abstract class Trash {

    spriteID = 0;

    sprite = computed(()=>"");

    size = 1;
    x = -15;
    y = -25;
    speed = 100;

    // rotationSpeed = 1;
    score = 100;

    constructor() {
    }

    onclick() {
        
    }

    update(dt:number) {
        
    }

    _spriteID(s:number) {
        this.spriteID = s;
        return this;
    }
    
    //The size affect the speed of the trash
    _size(s:number) {
        this.size *= s;
        this.speed /= s;
        this.score *= 0.3*s+0.7;
        return this;
    }

    _y(y:number) {
        this.y = y;
        return this;
    }

    _speed(s:number) {
        this.speed *= s;
        this.score *= 0.3*s+0.7;
        return this;
    }

    _score(s:number) {
        this.score *= s;
        return this;
    }

}