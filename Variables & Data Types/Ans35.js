"use strict";

// 35. Create a variable without `let`, `const`, or `var`. What happens in strict mode?

name = "Rai";
console.log(name);

// when strict mode is on then gives me ref error name is not define.
// otherwise it d not do this it make this a global var