const readyBtn = document.querySelector('#readyNow');
readyBtn.addEventListener('click', function() {
  sayHello(getRandomName(arrayOfNames));
  // sayHello()
});

let arrayOfNames = ['Sam', 'Renee', 'James', 'Alex', 'Ryan', 'Christiana', 'Selena', 'Jacob', 'Carter', 'Logan', 'Mike', 'Dan', 'Elizabeth'];

function getRandomName (arr) {
  let shuffledArr = arr.sort( () => {return 0.5 - Math.random() });
  console.log(shuffledArr[Math.floor(Math.random() * arr.length)]);
  return shuffledArr[Math.round(Math.random() * arr.length)];
}




function sayHello(name) {
  let para = document.createElement('p'); // new paragraph
  // let name = document.querySelector('#nameIn').value; // value from #nameIn 
  let nameScrambled = scrambleName(name);
  let outputZone = document.querySelector('#output'); // reference to #output
  outputZone.appendChild(para); // append new <p> with textContent = name to #output
  if (name) {
    document.querySelector('#nameIn').value = '';
    para.innerHTML = '<strong>' + name + '</strong> &nbsp;' + ' got scrambled to: &nbsp; ' + '<strong>' + nameScrambled + '</strong>';
  }
  return 'Jacob';
}


function scrambleName(str) {
  let arr = str.toLowerCase().split('');
  for(let i = 0; i < str.length; i++){
    arr = arr.sort( () => {
      return 0.5 - Math.random();
    })
  }
  console.log(arr);
  
  return arr.join('')
}