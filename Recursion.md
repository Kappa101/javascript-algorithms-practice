## Recursion technique

_do follow these to write you algorithm_
1.Identify Base case(s)
        * base case can be your last piece of your coding [where the recursion has to reach]

2.Identify recursive case(s)

3.use `return` statement where ever appropriate [beware of infinite loop / stackOverflow errors]

4.write procedures to bring you close to your base case(s)

```
var callMyself = function() {

  if() {
    // base case
    return;
  } else {
    // recursive case
    callMyself();
  }
    
  return;
};
```


---
NOTE: CHECK Tail-Call Optimization from ES6

---

## common patterns for Recursion
Wrapper functions
Accumulators
