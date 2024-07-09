import {predictValue} from "../src/carValuePrediction";

describe('carValuePrediction test', ()=>{
    it('should return 6614 when the model is CIVIC, and year is 2014, ignoring signs and number in the model', ()=>{
        expect(predictValue('CIVIC', 2014)).toBe(6614);
        expect(predictValue('CIVIC1', 2014)).toBe(6614);
        expect(predictValue('Civic!', 2014)).toBe(6614);
    });
    it('should return Invalid input when model is not string or year is not number', ()=>{
        expect(predictValue('4567', 2014)).toBe('Invalid input');
        expect(predictValue(345 as any, 2014)).toBe('Invalid input');
        expect(predictValue('', 'abc' as any)).toBe('Invalid input');
    })
})