import {FligthToCreate} from './fligth-to-create';
import {Airport} from './airport';
import {Airline} from './airline';

export class FligthCreation {    
    id:number;
    code: string;
    originDate: Date;
    originHour:number;
    originMinute:number;
    originAirport:string;
    destinationDate: Date;
    destinationHour:number;
    destinationMinute:number;
    destinationAirport:string;
    airline:string;

    constructor(id: number) {
        this.id= id;
    }

    toEntityCreation(airports: Array<Airport>, airlines: Array<Airline>):FligthToCreate{
        this.originDate.setHours(this.originHour);        
        this.originDate.setMinutes(this.originMinute);        
        this.destinationDate.setHours(this.destinationHour);        
        this.destinationDate.setMinutes(this.destinationMinute);                
        var destinationDate = this.destinationDate+"T"+this.destinationHour+":"+this.destinationMinute+":00";
        var originAirportCode = airports.find(a=> a.name===this.originAirport).code;
        var destinationAirportCode = airports.find(a=> a.name===this.destinationAirport).code;
        var airlineCode = airlines.find(a=> a.name===this.airline).code;
        
        return new FligthToCreate(this.code,this.originDate, originAirportCode, this.destinationDate, destinationAirportCode,airlineCode);
    }
} 