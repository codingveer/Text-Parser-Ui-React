import TransformationFilters from './components/TransformationFilters.js'

class TextTransform extends TransformationFilters {
  constructor(args) {
    super(args)
    this.inputText = args;
  }

  
  transform() {
    this.getHashTags(); 
    this.getPriority();
    this.getDateFromStr();
    this.getWhichDay();
    this.getNumberOfDays();
  }
}



const transformer = (inputData) =>{
  let inputText = new TextTransform(inputData);
   inputText.transform();
  console.log(inputText.transformedData)
  return inputText.transformedData
}


export default transformer;


//console.log(JSON.stringify(inputText.transformedData), '----------')



