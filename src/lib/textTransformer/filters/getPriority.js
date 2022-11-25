 const getPriority = (inputText) => {
  if(!inputText?.length) return
  var regex = /(?:^|\s)(?:!p)(\d+)/gm;
  var matches = [];
  var match;
  while ((match = regex.exec(inputText))) {
    matches && matches?.push(match[1]);
  }
  if(!matches.length){
     return
  }
  const transformedText = inputText?.replace(regex,'');
  const priority = {
      priority: matches && matches[0] 
  };
  const response = {
      transformedText,
      features:{...priority}
    }
  return response
}

export default getPriority;