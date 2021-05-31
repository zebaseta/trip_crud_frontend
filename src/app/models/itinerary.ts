import {Fligth} from './fligth';


export class Itinerary {    
    outboundFlights: Array<Fligth>;
    returnFlights:Array<Fligth>;

    constructor(outboundFlights: Array<Fligth>,returnFlights:Array<Fligth>) {
        this.outboundFlights = outboundFlights;
        this.returnFlights = returnFlights;
    }
}