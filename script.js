var words = [
   'программа',
   'макака',
   'прекрастный',
];

alert('«Виселица» — игра на угадывание слов. Например, если загаданное слово КАПУСТА, то отобразится семь «пустых мест», по одному на каждую букву слова: _ _ _ _ _ _ _ Нажмите Ок для генерации слова');
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = []; // массив ответов
var atteemps = 15; // счетчик попыток

for (var i = 0; i < word.length; i++) {
   answerArray[i] = '_';
};

var remainingLetters = word.length;

while (remainingLetters > 0) {

   alert(answerArray.join(' '));

   var guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.').toLowerCase();
   if (guess === null) {
      break;
   } else if (guess.length !== 1) {
      alert('Пожалуйста, введите только одну букву.');
   } else {
      atteemps--;
      for (var j = 0; j < word.length; j++) {
         if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            if (atteemps < 0) {
               break;
            }
            atteemps++;
         };
      };
      if (atteemps == 0) {
         break;
      }
      stageGame(atteemps);
   };
};

alert(answerArray.join(' '));
alert('Отлично, Было загадно слово ' + word);

function stageGame(atteempsValue) {

   var canvas = document.getElementById("canvas");
   var ctx = canvas.getContext("2d");
   ctx.strokeStyle = "black";
   ctx.lineWidth = 4;

   if (atteempsValue == 10) {
      ctx.beginPath();
      ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
      ctx.stroke();
      alert('Упс... осталось ' + atteempsValue + ' попыток');
   } else if (atteempsValue == 5) {
      ctx.beginPath();
      ctx.moveTo(150, 70);
      ctx.lineTo(240, 60);
      ctx.moveTo(70, 60);
      ctx.lineTo(150, 70);
      ctx.stroke();
      alert('Упс... осталось ' + atteempsValue + ' попыток');
   } else if (atteempsValue == 3) {
      ctx.beginPath();
      ctx.moveTo(150, 70);
      ctx.lineTo(150, 150);
      ctx.stroke();
      alert('Упс... осталось ' + atteempsValue + ' попыток');
   } else if (atteempsValue == 1) {
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.lineTo(210, 200);
      ctx.moveTo(150, 150);
      ctx.lineTo(100, 200);
      ctx.stroke();
      alert('Упс... осталось ' + atteempsValue + ' попытки')
   } else {
      alert('Осталось ' + atteempsValue + ' попыток');
   }
}
