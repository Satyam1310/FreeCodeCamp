function findLongestWordLength(sentence)
{
  let word = sentence.split(" ");

  let high = 0;
  let exact = "";

  for(let i=0;i<word.length;i++){
    if(word[i].length > high){
      high = word[i].length;
      exact = word[i];
    }
  }

  return high;
}