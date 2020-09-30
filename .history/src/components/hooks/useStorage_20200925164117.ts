export const usLocalStorage =(target :any) =>{
   let getMessage =() =>{
  if(typeof target === 'object' && !Array.isArray(target)){
      return localStorage.getItem(target)
  }else{
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