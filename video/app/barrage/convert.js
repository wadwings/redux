module.exports = function(arr){
    let i = 0;
    while("1" > arr[i]|| arr[i] < "9"){
        i++
    }
    let number = arr[i] - "0";
    while("0" <= arr[i] <= "9"){
        number = number*10 + arr[i] - "0";
        i++
    }
    return number;
}