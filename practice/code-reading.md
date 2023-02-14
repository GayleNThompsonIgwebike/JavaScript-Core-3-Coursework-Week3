# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);

Explain why line 4 and line 6 output different numbers.

Q1.Answer: Line 1 is a variable with a 'global' scope, whereas line 4 is a variable within a 'local' scope. The locally scoped variable only exists within that function and so can only display the values assigned it in that function.
```

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

Q2. ANSWER: In this code, the value of x will output 10 as it is a globally scopped variable. The terminal will not log the y variable because it only exists within it's function as a local variable. To see the output, you'll need to log the function within itself.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
