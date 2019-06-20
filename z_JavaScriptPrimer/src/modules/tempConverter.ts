export class TempConverter {
    static convertFtoC(temp) {
    return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }


    static convertFtoC1(temp: number) : string {
        return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
        }
    }