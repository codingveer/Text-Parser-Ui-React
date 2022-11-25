const getHashTags = (inputText) => {
  if(!inputText?.length) return
  const regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
  const matches = [];
  let match;
    while ((match = regex.exec(inputText))) {
    matches.push(match[1]);
  }
  if(!matches.length){
     return
  }
  const transformedText= inputText?.replace(regex,'');
  const tags = { 
    tags: [...matches] 
  };
  const response = {
    transformedText,
    features:{...tags}
  }
return response
}

export default getHashTags