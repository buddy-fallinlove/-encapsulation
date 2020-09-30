export const usLocalStorage =() =>{
   let getMessage =(target :any) =>{
  if(typeof target === 'object' && !Array.isArray(target)){
      return JSON.parse(localStorage.getItem(target)!)
  }else{
      return localStorage.getItem(target)
  }
   }
   let setMessage =(key:string ,taget:any)=>{
    if(typeof target === 'object' && !Array.isArray(taget)){
        JSON.stringify(localStorage.getItem(key,taget)!)
    }else{
        return localStorage.getItem(taget)
    }
   }
   let clearMessage =()=>{

   }
    return{
        getMessage,
        setMessage,
        clearMessage
    }
}