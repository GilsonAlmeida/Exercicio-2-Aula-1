export class ClockService{

    private clocks: Date
    
    private getData(): Date{
        let data = new Date;
        return data;
    }

    generateRandomClock(delay: number, callback: (data:Date) => void){
        callback(this.getData());
        setInterval(() => callback(this.getData()), delay);
    }

}