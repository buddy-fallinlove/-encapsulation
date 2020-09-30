export const usLocalStorage =(target :any) =>{
   let getMessage =() =>{
  if(typeof target === 'object' && !Array.isArray(target)){
      return
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