
// Adding a CounterService to count the number of active->inactive and inactive->active actions.



export class CounterService{

    activeCalls: number  = 0;
    inactiveCalls: number  = 0;

   
    

    onStatuschange(status: boolean) {
        if (status) {
            this.activeCalls++;
            console.log("activeCalls: "+ this.activeCalls)
           // return this.activeCalls
        }
        else {
            this.inactiveCalls++;
            console.log("inactiveCalls: "+ this.inactiveCalls)
           // return this.inactiveCalls
        }
    }

}