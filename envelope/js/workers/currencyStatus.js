export default class CurrencyStatus{
    currency = {
        USD : ["USD", "$"],
        NGN : ["NGN", "₦"],
        EUR : ["EUR", "€"],
        GBP : ["GBP", "₤"]
    }
    
    constructor(currency){
        this.currency = currency;
    }

    getLastWeek(year, month, day) {
        let myMonth = month;
        let myYear = year;
        let myDay = day;

        if(day - 7 <= 0){
            myDay = 30 + (day - 7);
            myMonth = month - 1;
        }

        if(month <= 0){
            myMonth = 12
            myYear = year - 1
        }

        return `${myYear}-${myMonth}-${myDay}`
    }


    getCurrencyStatus(currency = this.currency) {
        const myDate =  new Date();
        const year = myDate.getFullYear();
        const month = myDate.getMonth() + 1;
        const day = myDate.getDate();
        const source = currency=="USD" ? "EUR" : "USD"

        const myHeaders = new Headers();
        myHeaders.append("apikey", "gmIOzyqYpylbwQ05aQU01Lf0j58wGhud");

        const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };

        return fetch(`https://api.apilayer.com/currency_data/change?start_date=${this.getLastWeek(year, month, day)}&end_date=${year}-${month}-${day}&currencies=${currency}&source=${source}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            const quote =  result.quotes[`${source}${currency}`]
            const status = this.generateMessage(currency,quote.change_pct,quote.start_rate,quote.end_rate, source);

           return new Promise((resolve, reject) => {
                resolve(status)
           })
            
        })
        .catch(error => console.log('error', error));
    }

    generateMessage(currency, percentageChange, from , to, source) {
        let message = currency;
        if(percentageChange == 0) {
            message += ` has been stable in the past week`;
        }
        else if(percentageChange < 0) {
            message += ` has dropped by ${Math.abs(percentageChange)}% from ${this.currency[source][1]}1 = ${this.currency[currency][1]}${from} to ${this.currency[source][1]}1 = ${this.currency[currency][1]}${to} in the past week`;
        }
        else if(percentageChange > 0) {
            message += ` has increased by ${percentageChange}% from ${this.currency[source][1]}1 = ${this.currency[currency][1]}${from} to ${this.currency[source][1]}1 = ${this.currency[currency][1]}${to} in the past week`;
        }

        return message;
    }
}