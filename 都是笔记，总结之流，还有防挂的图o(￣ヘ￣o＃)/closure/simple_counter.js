function counter(name){
    var num = 0;
    function increasement(){
        num = num + 1;
        console.log("Counter Name:" + name + "Number = " + num);
    }
    return increasement;//返回的是个变量，若返回函数incresasment(); 会报dogIncreasement() is not a function 的错
}
var dogIncreasement = counter("dog");
var catIncreasement = counter("cat");
catIncreasement();
dogIncreasement();


function createCounter(counterName)
{
    var counter = 0;
    function increment()
    {
        counter = counter + 1;
        console.log("Number of " + counterName + ": " + counter);
    }
    return increment;
}
var catCounter = createCounter("cats");
var dogCounter = createCounter("dogs");
catCounter(); // Number of cats: 1
catCounter(); // Number of cats: 2
dogCounter(); // Number of dogs: 1
