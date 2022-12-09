import axios from "axios";

const getDataFromAPI=async(url)=>{
  try{
      const rawData=await fetch(url,{
        withCredentials: true
      }); 
      const jsonData = await rawData.json();
      return jsonData.data;
  }
  catch{
    return false;
  }
}

const postDataToAPI=async(url,data)=>{

  console.log(url , data);
 
  try{
      const rawResponse=await axios.post(url,data,{ withCredentials: true})
      return rawResponse.data;
  }
  catch(err){
    console.log(err);
    return false;
  }
}

export { getDataFromAPI,postDataToAPI};