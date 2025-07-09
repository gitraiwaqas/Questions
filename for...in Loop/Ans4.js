const country = {
  name: "Pakistan",
  capital: "Islamabad",
  currency: "PKR",
  population: 240000000,
};

for(key in country){
  if(typeof country[key]  == "string"){
    console.log(`${country[key]}`);
    
  }
}
