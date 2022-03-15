// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const answers = [];




const rl = readline.createInterface({ input, output });
rl.question('What is your name? Nicknames acceptable (: ', (answer) => {
  answers.push(answer);
  rl.question('What do you like doing?  ', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer);
      rl.question('Which mealtime is your favourite? ', (answer) => {
        answers.push(answer);
        rl.question('What is the best thing to eat for that meal? ', (answer) => {
          answers.push(answer);
          rl.question('Which sport do you enjoy the most? ', (answer) => {
            answers.push(answer);
            rl.question('As clichéd as it sounds, what is your superpower? ', (answer) => {
              answers.push(answer);
              rl.close();
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, ` 
+ `devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, ` 
+ `and is amazing at ${answers[6]}.`);
            });
          });
        });
      });
    });
  });
});

