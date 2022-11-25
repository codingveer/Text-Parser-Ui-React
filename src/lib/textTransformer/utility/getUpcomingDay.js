import WordToNumber from '../constants/wordsToNumberMap.js';


const addDays = (days) => {
 const daysToAdd = WordToNumber[days];
 const copy = new Date();
 copy.setDate(copy.getDate() + Number(daysToAdd))
 return copy.toLocaleDateString("en-GB")
}

export default addDays;