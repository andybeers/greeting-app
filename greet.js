var generate = require('project-name-generator');

function greet(name) {
  if (name === 'Andy') {
    return 'Heyyyy, what\'s up, buddy?';
  } else {
    name = name || 'friend';
    return 'hello ' + name;
  }
}

if (process.argv.length === 3) {
  var bashName = greet(process.argv[2]);
  console.log(bashName);
} else if (process.argv.length === 4) {
  var bashName = greet(process.argv[2]);
  console.log(bashName + '! Your new computer alias is: ' + generate().spaced); 
}

module.exports = greet;