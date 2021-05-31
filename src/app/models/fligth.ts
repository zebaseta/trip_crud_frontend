export class Fligth {
    code: string;
    originDate: Date;
    originAirport:string;
    destinationDate: Date;
    destinationAirport:string;
    airlineCode:string;

    constructor(code: string,
                originDate: Date,
                originAirport:string,
                destinationDate: Date,
                destinationAirport:string,
                airlineCode:string) {
        this.code = code;
        this.originDate = originDate;
        this.originAirport = originAirport;
        this.destinationDate = destinationDate;
        this.destinationAirport = destinationAirport;
        this.airlineCode = airlineCode;
    }
} 