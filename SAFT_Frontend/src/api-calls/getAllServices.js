const axios=require('axios');

const getAllProducts=()=>{
    const res=await axios.get(`localhost:2000/api/services/getservices`);
}
// console.log("lol")

