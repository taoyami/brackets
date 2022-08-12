module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let brackets = {};
  let result;
  bracketsConfig.forEach(el => {
    brackets[el[1]] = el[0]
  })
  console.log(brackets)
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(brackets).includes(str[i])) {
      if (brackets[str[i]] == arr[arr.length - 1]) {
        arr.pop();
        continue;
      }
      else {
        if (Object.values(brackets).includes(str[i])) {
          arr.push(str[i]);
          continue
        }
        else {
        result = false;
        return result;
        }
      }
    }
    if (Object.values(brackets).includes(str[i])) arr.push(str[i]);
    else {
      console.log(i);
      console.log(arr);
      result = false;
      console.log(result)
      return result
  }
    } 
result = arr.length == 0 ? true : false;
return result
}