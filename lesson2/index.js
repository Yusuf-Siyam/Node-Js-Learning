// const fs=require("fs");
// //console.log(fs);
// fs.appendFile("demo1.txt","i am yusuf siyam",(err)=>{
//     if(err){
//         console.log('error');
        
//     }
//     else{
//         console.log('successfull');
        
//     }
// });
//----------------------------------------------
// const fs=require("fs");
// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log('error');
        
//     }else{
//         console.log(data);
        
//     }
// });

const fs=require("fs");
fs.rename("demo.txt","demo2.txt",(err)=>{
    if(err){
        console.log('error');
        
    }else{
        console.log("Successfull");
        
    }
});

