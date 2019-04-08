const input = document.getElementById('input');
const output = document.getElementById('output');


function removeNumbers(str) {
  return str.replace(/[0-9]|:|(\r\n|\r|\n)/gi, '');
}

input.addEventListener('input', (e) => {

  output.value=removeNumbers(input.value);
  output.select();
  document.execCommand("copy");
})

output.addEventListener('change', (e) => {

  // let str = output.value;
  output.select();
  document.execCommand("copy");
})
