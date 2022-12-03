
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
 
  try{
      const rawResponse=await fetch(url,{
        method: post,
        withCredentials: true,
        body: JSON.stringify(data)
      });

      const jsonResponse = rawResponse.json();
     
      return jsonResponse.data;
  }
  catch(err){
    console.log(err);
    return false;
  }
}

export { getDataFromAPI,postDataToAPI};