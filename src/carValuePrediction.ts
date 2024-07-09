//return number for car price or string for invalid input
export function predictValue(model: string, year: number): number | string{
    if(typeof model !== 'string' || typeof year !== 'number'){
        return 'Invalid input';
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let car_value=0;
    for(let char of model.toUpperCase()){
        const charValue = alphabet.indexOf(char)+1; //index start from 0 so we need to add 1 to comply with the biz rule: A=1
       
        if(charValue > 0){
            car_value += charValue;
        }

    }
    if(car_value=== 0){
        return 'Invalid input';
    }
    return(car_value *100) + year;
}