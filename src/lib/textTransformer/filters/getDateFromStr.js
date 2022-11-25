const getDateFromStrFn =(inputText) =>{
  if(!inputText?.length) return
  let response ={};
  const regex = /\s\d{1,2}.\d{1,2}.\d{4}/gi;
  const result =inputText.match(regex);
  if(!result){
    return
  }
  const transformedText =inputText.replace(regex,'');  
  const date = {
    date: result && result[0]
  };
   response = {
    transformedText,
    features: {...date}
  }
  return response
}
export default getDateFromStrFn;