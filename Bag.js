class Bag {
    static MAXWEIGHT = 23;

    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        }else if(weight > Bag.MAXWEIGHT){
            throw new Error("Bag is over weight");
        }
        this.weight = weight
    }
}


module.exports = Bag