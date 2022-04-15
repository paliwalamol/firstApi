const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

let flag = 0 , even=[] ,odd=[] , json; 
let c1=0,c2=0;
app.post('/bfhl',(req,res)=>{
    const a = req.query.a;
    const name = req.query.name;
    for(i in a){
        if(/[a-zA-z]/.test(a[i])){
            flag = 1;
            break;

        }
        else{
            var x = parseInt(a[i]);
            console.log(x);
            if(x%2==0) even[c1++]=x;
            else if(x%2==1)odd[c2++]=x;
        }
    }
    if(flag==1){
        json = {name:name,
            is_successs:false
        }
    }
    else{
        json = {
            name:name,
            even:even,
            odd:odd,
            is_success:true
        }
    }
    res.send(json);
})

app.listen(port,()=>{
    console.log("started server on port " + port);
})