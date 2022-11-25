import getDateFromStrFn from './../filters/getDateFromStr.js';
import getHashTags from './../filters/getHashTags.js';
import getPriority from './../filters/getPriority.js';
import getWhichDay from './../filters/getWhichDay.js';
import getNumberOfDays from './../filters/getNumberOfDays.js';
import cacheStore from './../store/cacheData.js';


export default class TransformationFilters  {
  
constructor(name) {
  this.key = name;
  this.transformedData={}
  this.transformedData[name] = {
    text: '',
    features: {}
  };
  this.cache={};
}

store(key, value){
  this.cache[key] = {...this.value};
};
  
getDateFromStr() {
 let cacheKey = this.inputText;
  if(!cacheStore(cacheKey)){  
    const data = getDateFromStrFn(this.inputText);
    if(!data){
        return
      }
    const cacheData = {...data}
    cacheStore(cacheKey, cacheData);
    this.inputText= data.transformedText;
    this.updateTransformedFeatures(data)
   }else{
     const dataFromCache = cacheStore(cacheKey);
     this.updateTransformedFeatures(dataFromCache);
   }    
}

getHashTags() {
  const checkHashTag = this.inputText.indexOf("#")>-1; 
  let cacheKey = this.inputText;
  if(checkHashTag){
    if(!cacheStore(cacheKey)){  
      const data = getHashTags(this.inputText);
      if(!data){
        return
      }
      const cacheData = {...data}
      cacheStore(cacheKey, cacheData);
      this.inputText= data.transformedText;
      this.updateTransformedFeatures(data)
    }else{
       const dataFromCache = cacheStore(cacheKey);
       this.updateTransformedFeatures(dataFromCache);
    }
   } 
}

getPriority() {
   const checkPriority = this.inputText.indexOf("!p")>-1;
   let cacheKey = this.inputText;
   if(checkPriority){
   if(!cacheStore(cacheKey)){  
     const data = getPriority(this.inputText);
     if(!data){
        return
      }
     const cacheData = {...data}
     cacheStore(cacheKey, cacheData);
     this.inputText= data.transformedText;
     this.updateTransformedFeatures(data)
    }else{
       const dataFromCache = cacheStore(cacheKey);
       this.updateTransformedFeatures(dataFromCache);
    }
   }
}

getWhichDay() {
  let cacheKey = this.inputText;
  if(!cacheStore(cacheKey)){  
    const data = getWhichDay(this.inputText);
    if(!data){
        return
      }
    const cacheData = {...data}
    cacheStore(cacheKey, cacheData);
    this.inputText= data.transformedText;
   
    this.updateTransformedFeatures(data)
  }else{
    const dataFromCache = cacheStore(cacheKey);
     console.log(dataFromCache,'---from cache data')
    this.updateTransformedFeatures(dataFromCache);
  }
}

getNumberOfDays() {
  let cacheKey = this.inputText;
  if(!cacheStore(cacheKey)){  
    const data = getNumberOfDays(this.inputText);
    if(!data){
      return
    }
    const cacheData = {...data}
    cacheStore(cacheKey, cacheData);
    this.inputText= data.transformedText;
    this.updateTransformedFeatures(data)
  }else{
    const dataFromCache = cacheStore(cacheKey);
    this.updateTransformedFeatures(dataFromCache);
  }
}


updateTransformedFeatures(updateFeature) {
this.transformedData[this.key].text=updateFeature.transformedText;
  this.transformedData[this.key].features = {
    ...this.transformedData[this.key].features,
    ...updateFeature.features
  };
}
  
};
