function fetchDataFromServer(){

 return new Promise((resolve,reject) => {
 
  setTimeout(() => {
   
   let bool = false;
   
   if(bool){
    resolve("async tasks completed");
   }else{
    reject("async tasks cancelled");
   }
  },2000);
 
 });

}

async function fetchData(){

    try {
 const result = await fetchDataFromServer();
 console.log(result);
    } catch (error) {
    console.error("Error:", error);
    }

}

fetchData();