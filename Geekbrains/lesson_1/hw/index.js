const colors = require('@larchanka/colors-js');
const sound = require("sound-play");

// sound.play("./sample.mp3");
sound.play("./sample.mp3").then((response) => console.log("done"));

console.log(colors.green('Успех!'));
console.log(colors.red('Ошибка!'));
console.log(colors.yellow('Предупреждение!'));
console.log(colors.bgPurple('Это сообщение имеет фиолетовый фон'));