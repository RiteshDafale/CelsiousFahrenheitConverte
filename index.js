console.log("Project made by Ritesh Dafale");

let cel_id = document.getElementById("cel-id");
let feh_id = document.getElementById("feh-id");
cel_id.addEventListener("input",function(){
    let c = cel_id.value;
    let ans = (c * 9/5) + 32;
    if(Number.isInteger(ans)){
        feh_id.value = ans;   
    }
    else{
        ans = ans.toFixed(3);
        feh_id.value = ans;   
    }
})

feh_id.addEventListener("input",function(){
    let c = feh_id.value;
    let ans = (c - 32) * 5/9 ;
    if(Number.isInteger(ans)){
        cel_id.value = ans;   
    }
    else{
        ans = ans.toFixed(3);
        cel_id.value = ans;   
    }
})
