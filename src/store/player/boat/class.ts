

export enum BoatType {
    Sail,
    Solar,
    Fusion
}

export class Boat {
    type:BoatType = BoatType.Sail;
    maxCapacity = 1500.;
    maxTravelTime = 60000;
}
