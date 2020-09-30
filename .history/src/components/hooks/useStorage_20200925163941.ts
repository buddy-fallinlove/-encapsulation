export const usLocalStorage =(target :any) =>{
   let getMessage =() =>{
  if(typeof target === 'object' && !Array.isArray(target)){
      
  }
   }
   let setMessage =()=>{

   }
   let clearMessage =()=>{

   }
    return{
        getMessage,
        setMessage,
        clearMessage
    }
}