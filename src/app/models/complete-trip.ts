import {Passenger} from './passenger';
import {Itinerary} from './itinerary';


export class CompleteTrip {    
    id:number;
    passenger: Passenger;
    itinerary: Itinerary;

    constructor(id:number, passenger: Passenger, itinerary: Itinerary) {
        this.id = id;
        this.passenger = passenger;
        this.itinerary = itinerary;
    }
}