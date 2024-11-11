function feibonaqie(n){
    var output=[];
    if (n === 0){
        output = [0];
    } else if (n===1 ){
        output = [0,1];
    }else {
        output=[0,1]
        for(var i = 2;i<n;i++){
            output.push(output[(output.length-2)]+output[(output.length-1)]);
        }
      }
        console.log(output)
    
    }
    
    
    feibonaqie(15);
    
