import addDays from '../utility/getUpcomingDay.js';

const getWhichDay = (inputText) => {
 if(!inputText?.length) return
  var result = inputText?.match(/(Today|tomorrow|Yesterday)/gi);
  if(!result){
    return
  }
  const transformedText = inputText?.replace(/(Today|tomorrow|Yesterday)/gi,'');
  const covertredDate = addDays(result[0].toLowerCase());
  console.log(covertredDate,'_________________ dta')
   const date = {
        date: covertredDate
    };
   const response = {
      transformedText,
      features:{...date}
    }
  return response
}

export default getWhichDay;