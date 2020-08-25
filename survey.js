const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable: ", (name) => {
  rl.question("What's an activity you like doing?: ", (activity) => {
    rl.question('What do you listen to while doing that?: ', (listen) => {
      rl.question(
        'Which meal is your favourite (eg: dinner, brunch, etc.): ',
        (mealTime) => {
          rl.question(
            "What's your favourite thing to eat for that meal?: ",
            (meal) => {
              rl.question(
                'Which sport is your absolute favourite?: ',
                (sport) => {
                  rl.question(
                    'What is your superpower? In a few words, tell us what you are amazing at!: ',
                    (superPower) => {
                      console.log({
                        name,
                        'Favorite activity': activity,
                        'listen to while doing your activity': listen,
                        'Favorite meal time': mealTime,
                        'Favorite meal': meal,
                        'Favorite sport': sport,
                        'Your superpower': superPower,
                      });
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
