import addDays from '../utility/getUpcomingDay.js'

const getNumberOfDays = (inputText) => {
  if(!inputText?.length) return
  const regex = /(in)\s(two|three|four|five|six)\s(days)/gi;
  const result = inputText.match(regex);
  if(!result){
     return
  }
  const transformedText= inputText?.replace(regex,'')?.replace(/  +/g, ' ');
  const numberOfDays = result && result[0]?.match(/(in)(.*)(days)/);
  const convDate = addDays(numberOfDays && numberOfDays[2]?.toLowerCase().trim());
  const date = {
    date: convDate
  };    
  const response = {
    transformedText,
    features:{...date}
  }
  return response
}

export default getNumberOfDays