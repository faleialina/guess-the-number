// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать
// это число. Если догадка пользователя больше случайного числа, то программа должна вывести
// сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то
// программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь
// угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали,
// поздравляем!'.
// Составляющие проекта:
// Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; Бесконечный цикл;
// Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.

let num = Math.round(Math.random() * 100);

function Binary(num_) {
    let startindex = 0;
    let endindex = 100;
    for (let i = startindex; i < endindex; i++) {
        const midl = prompt(`Enter an average value from ${startindex} to ${endindex}`);
        if (midl == num_) {
            console.log('You guessed it, congratulations!');
            break
        } else if (num_ > midl) {
            startindex = midl;
            console.log('Too much, try again');
        } else if (num_ < midl) {
            endindex = midl;
            console.log('Too little, try again');
        }
    }
}
Binary(num)


