const compass = (degree) => {
    if (degree === 0 || degree === 360) {
      return "North";
    } else if (degree === 90) {
      return "East";
    } else if (degree === 180) {
      return "South";
    } else if (degree === 270) {
      return "West";
    } else if (degree > 0 && degree < 90) {
      return `${degree}° North of East`;
    } else if (degree > 90 && degree < 180) {
      return `${180 - degree}° South of East`;
    } else if (degree > 180 && degree < 270) {
      return `${degree - 180}° South of West`;
    } else if (degree > 270 && degree < 360) {
      return `${360 - degree}° North of West`;
    } else {
      return "Invalid degree value.";
    }
  };
  
  // User input example
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter degree: ", (degree) => {
    const result = compass(parseFloat(degree));
    console.log(`Result: ${result}`);
    readline.close();
  });