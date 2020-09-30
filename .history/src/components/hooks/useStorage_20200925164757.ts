export const usLocalStorage =() =>{
   let getMessage =(target :any) =>{
  if(typeof target === 'object' && !Array.isArray(target)){
      return JSON.parse(localStorage.getItem(target)!)
  }else{
      return localStorage.getItem(target)
  }
   }
   let setMessage =(key:string ,target:any)=>{
    if(typeof target === 'object' && !Array.isArray(target)){
        JSON.stringify(localStorage.setItem(key,target)!)
    }else{
        return localStorage.setItem(key,target)
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