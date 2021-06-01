import { Fligth } from './fligth';
import { Itinerary } from './itinerary';
export class PassengerFligth {
    name: string;    
    email: string;
    dateOfBirth: string;
    passport: string;
    constructor( name, email, dateOfBirth, passport) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.passport = passport;
    }
  }
  