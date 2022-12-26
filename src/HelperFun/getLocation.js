
var locationObj ={lat:20,long :0 ,response:{},success:""},success,message;


function getPosition() {
   return new Promise((res, rej) => {
       navigator.geolocation.getCurrentPosition(res, rej);
   });
}

function setLocation(loc) {
   const locationData={ lat:loc.coords.latitude , long :loc.coords.longitude, message:"",success:false,response :{}};
  locationObj = JSON.parse(JSON.stringify(locationData));
}

   function errFunction(error) {

      success = false;
      if (error.PERMISSION_DENIED)
         message = "User denied the request for getGeolocation.";
      else if (error.POSITION_UNAVAILABLE)
         message = "Location information is unavailable.";
      else if (error.TIMEOUT)
         message = "The request to get user location timed out.";
      else
         message = "An unknown error occurred.";

   }

async function getGeolocation() {
   try{
      const position = await getPosition();
      setLocation(position);
   }
     catch(error){
      console.log(error);
     errFunction(error);
     locationObj={success,message,lat:21,long :20 ,response:{}}
   }
   return locationObj;
}




export default getGeolocation;