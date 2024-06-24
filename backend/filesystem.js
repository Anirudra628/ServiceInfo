const file = require('fs');

// ------ writing to a file synchronously---------------------
file.writeFileSync('./test.txt','Hello');

//----------------------appending at the end of a file asynchronously ---------------------
file.appendFile('test.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!'); //1
  });

  //-------------------appending at the end of a file synchronously and printing out to see the control flow------------------
 console.log( file.appendFileSync('./test.txt','lol'));  //2


file.readFile('test.txt','utf-8',(err,res)=>{
  console.log(res); //4
});

file.appendFile('test.txt', 'Bye content!', function (err) {
  if (err) throw err;
  console.log('Saved Bye!'); //1
});
console.log('Hello1'); //5