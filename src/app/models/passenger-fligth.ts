import { Fligth } from './fligth';
import { Itinerary } from './itinerary';
export class PassengerFligth {
    name: string;    
    email: string;
    dateOfBirth: Date;
    passport: string;
    itinerary:Array<Fligth>
    constructor( name, email, dateOfBirth, passport, itinerary) {
        this.itinerary = itinerary;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.passport = passport;
    }
  }
  