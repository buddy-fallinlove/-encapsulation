export const usLocalStorage =(target :any) =>{
   let getMessage =() =>{
  if(typeof target === 'object' && !Array.isArray(target)){
      return JSON.parse(localStorage.getItem(target)!)
  }else{
      return localStorage.getItem(target)
  }
   }
   let setMessage =()=>{
    if(typeof target === 'object')
   }
   let clearMessage =()=>{

   }
    return{
        getMessage,
        setMessage,
        clearMessage
    }
}