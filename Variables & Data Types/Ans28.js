//  Write a function that safely checks if a value is undefined or null.

const check_the_Value = (value) => {
  if (value === undefined) {
    console.log("Value is not define.");
  } else if (value === null) {
    console.log("Value is null.");
  } else {
    console.log("Value is not null and undefine.");
  }
};

check_the_Value();
