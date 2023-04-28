Math.round
let user = Number.parseInt(prompt("Введите температуру в градусах Цельсия"));
alert(`Градусы цельсия: ${user}\nПо Фаренгейту: ${Math.round((9 / 5) * user + 32)}`)