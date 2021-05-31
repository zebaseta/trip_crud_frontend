import {CompleteTrip} from './complete-trip';


export class BasicTrip {  
    id:number;
    passengerName: string;
    passengerPassport:string;
    countOfOutboundFlights:number;  
    countOfReturnFlights:number;  
    

    constructor(trip:CompleteTrip) {
        this.id = trip.id;
        this.passengerName = trip.passenger.name;
        this.passengerPassport = trip.passenger.passport;
        if(trip.itinerary.outboundFlights != null){
            this.countOfOutboundFlights = trip.itinerary.outboundFlights.length;
        }
        else{
            this.countOfOutboundFlights = 0;
        }
        if( trip.itinerary.returnFlights != null){
            this.countOfReturnFlights = trip.itinerary.returnFlights.length;
        }
        else{
            this.countOfReturnFlights = 0;
        }
        
        
    }
}