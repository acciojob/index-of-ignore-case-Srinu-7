function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase to handle case insensitivity
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  
  // Find the index of the first occurrence of the lowercase s2 in lowercase s1
  const index = lowerS1.indexOf(lowerS2);
  
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
