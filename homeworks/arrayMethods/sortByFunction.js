let arr = [7,11,66,8]
function sortBy (arr, isAscneding){
    arr.sort((a,b)=>{
        let asc = a-b
        let deasc = b-a
         return isAscneding === "deasc" ? deasc:asc
  
    })
    return arr
}
console.log(sortBy(arr, "deasc" ))