export class Fligth {
    code: string;
    originDate: string;
    originAirport:string;
    destinationDate: string;
    destinationAirport:string;
    airline:string;

    constructor(code: string,
                originDate: string,
                originAirport:string,
                destinationDate: string,
                destinationAirport:string,
                airline:string) {
        this.code = code;
        this.originDate = originDate;
        this.originAirport = originAirport;
        this.destinationDate = destinationDate;
        this.destinationAirport = destinationAirport;
        this.airline = airline;
        
    }
} 