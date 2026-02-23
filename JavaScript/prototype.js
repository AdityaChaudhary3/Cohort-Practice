Array.prototype.aditya = 'Aditya';

const speed = [20,30,50];

console.log(speed.aditya);

Array.prototype.myMap = function(fn){
    const result = [];
    for(let i=0;i<this.length;i++){
        const curr = this[i];
        result.push(fn(curr));
    }
    return result;
}

const myArr = speed.myMap((sp)=>{
    return sp = sp*2;
})

console.log(myArr);


Array.prototype.myForEach = function(fn){
    for(let i=0;i<this.length;i++){
        fn(this[i]);
    }
}

speed.myForEach((sp)=>{
    console.log(`Speed is ${sp}`);
})


Array.prototype.myReduce = function(fn,initialVal){

    if(this.length === 0 ||  typeof initialVal === 'undefined'){
        throw new Error('Reduce of empty array with no initial value')
    }

    let result =  initialVal || this[0];

    for(let i=0;i<this.length;i++){
        result = f(result, this[i], i, this);
    }

    return result; 

}


