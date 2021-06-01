import {PassengerFligth} from './passenger-fligth';
import { Itinerary } from './itinerary';
import {FligthToCreate} from './fligth-to-create';

export class TripToCreate {        
    name: string;    
    email: string;
    dateOfBirth: string;
    passport: string;
    itinerary: Array<FligthToCreate>;


    constructor( passenger:PassengerFligth,itinerary: Array<FligthToCreate>) {
        this.name = passenger.name;
        this.email = passenger.email;
        this.dateOfBirth = passenger.dateOfBirth;
        this.passport = passenger.passport;
        this.itinerary = itinerary;
    }
    

}
