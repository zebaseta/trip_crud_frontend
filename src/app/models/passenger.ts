export class Passenger {
    name: string;    
    email: string;
    dateOfBirth: Date;
    passport: string;
    constructor( name, email, dateOfBirth, passport) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.passport = passport;
    }
  }
  