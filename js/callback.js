let arr = [8,2,3,4,5,6,1];

// myForEach implementation

const myForEach = (arr,cb) => {
    for(let i = 0;i<arr.length;i++){
        cb(arr[i],i,arr);
    }
}
let s = 0;
myForEach(arr,v=> s+=v )
// console.log(s)
// myForEach(arr,v =>v%2 === 0 ? console.log(v):console.log('not'))

// myMap implementation
const myMap = (arr,cb) => {
    const newArr =[];
    for(let i = 0;i<arr.length;i++){
        let temp = cb(arr[i],i,arr);
        newArr.push(temp);
    }
    return newArr;
}

const qb = myMap(arr,v=> v*v*v )
// console.log(qb);
const factorial = arr.map((v)=> {
    let tmp =1;
    for(let i=1;i<=arr.length;i++){
        if(i<=v){
            for(let j = 1;j<=v;j++){
             tmp *= j;
        }
        return tmp;
    }        
    }   
})

// console.log(factorial);

// myFilter implementaion

const myFilter = (arr,cb) =>{
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
        if(cb(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr
}

const filtered = myFilter(arr,v=>{
    if(v>=3) return v;
})
const filtered2 = myFilter(arr,v=> v>=5 )
// console.log(filtered2)

// myReducer implementaion
const myReducer = (arr,cb,acc) => {
    for(let i =0;i<arr.length;i++){
        acc = cb(acc,arr[i])
    }
    return acc;
}

const reduced = myReducer(arr,(prev,cur)=> prev+cur
,10)
// console.log(reduced)

// myFind implementaion

const myFind = (arr,cb) => {
    for(let i =0;i<arr.length;i++){
       if(cb(arr[i])){
           return arr[i]
           //findIndex
        //   return i;
       }
    } 
}
const res = myFind(arr,val=> val===4 );
// console.log(res)

