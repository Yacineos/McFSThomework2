let arr = [5,7,-99,45,88888] ;
function removeSpecificElement(arr,x){
    var trouve = false , i=0  ;

    while(trouve == false && i<arr.length){
        if(x == i){
            trouve = true ;
            
            for(var j = i ;j<arr.length - 1; j++){
                arr[j]=arr[j+1];
            }
            arr.length--;
        }
    }
    return arr
}


removeSpecificElement(arr,2);
console.log(arr.toString());

