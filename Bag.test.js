const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(23)
        expect(bag.weight).toBe(23)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
    //test bag static property
    test("static property MAXWEIGHT", ()=>{
        expect(Bag.MAXWEIGHT).toBe(23);
    })
    //test if bag overweight
    test("bag overweight error",()=>{
      
        expect(() => new Bag(50)).toThrowError("Bag is over weight");
    })
})