export class FligthToCreate {    
    code: string;
    originDate: Date;
    originAirportCode:string;
    destinationDate: Date;
    destinationAirportCode:string;
    airlineCode:string;

    constructor(code: string,
                originDate: Date,
                originAirportCode:string,
                destinationDate: Date,
                destinationAirportCode:string,
                airlineCode:string) {
        this.code = code;
        this.originDate = originDate;
        this.originAirportCode = originAirportCode;
        this.destinationDate = destinationDate;
        this.destinationAirportCode = destinationAirportCode;
        this.airlineCode = airlineCode;
        
    }
} 