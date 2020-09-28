function randomInteger(min, max) {
// получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var massiv = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']
var names = ['Максим', 'Ксюша', 'Арина', 'Катя', 'Игорь']
var comments = []
for (let comment = 0; comment <= 25; comment++) {
  comments.push({
    avatar: "img/avatar-"+randomInteger(1,6)+".svg",
    message: massiv[randomInteger(0,massiv.length-1)],
    name: names[randomInteger(0, names.length-1)]
  });
}
