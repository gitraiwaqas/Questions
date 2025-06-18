function checkScope() {
  if (true) {
    const local = "I'm Local variable.";
    let letLocal = "I'm Let Local variable.";
    console.log(local);
    console.log(letLocal);
  }

  console.log(local);
  console.log(letLocal);
}

checkScope();

