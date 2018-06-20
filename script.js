// 01 Декада

function decada () {
	var x = prompt('Введите число месяца', 1);
	if (x>=1 && x<=10){
		console.log('Первая декада');
	} else if (x>=11 && x<=20) {
		console.log('Вторая декада');
	} else if (x>=21 && x<=31) {
		console.log('Третья декада');
	} else{
		console.log('Парень, ты чот напутал');
		decada();
	}
}

decada ();

// 02 Пора года

function part_of_year () {
	var x = prompt('Укажите месяц', 1);
	if (x==1||x==2||x==12){
		console.log('Зима');
	} else if (x==3||x==4||x==5){
		console.log('Весна');
	} else if (x==6||x==7||x==8){
		console.log('Лето');
	} else if (x==9||x==10||x==11){
		console.log('Осень');
	} else{
		console.log('Ну не издевайся');
		part_of_year();
	}
}

part_of_year();

// 03 Первая буква

var stroka = 'abcde';
var stroka2 = 'basda';
function findA (x) {
	if(x.charAt(0)=='a'){
		console.log('yes');
	}else{
		console.log('no');
	}
}

findA(stroka);

// 04 Первая цифра

var num_string = '12345688416';
var num_string_1 = '54848413515';
var num_string_2 = '358974485484';

function findNumber (x) {
	if (x.charAt(0)=='1'||x.charAt(0)=='2'||x.charAt(0)=='3'){
		console.log('yes');
	}else{
		console.log('no');
	}
}
findNumber(num_string);

// 05 сумма трех чисел

var numbers_123 = '123';

function sumNum (x) {
	var result = 0;
	for(i=0;i<3;i++){
		result = result + Number(x[i]);
	}
	console.log(result);
}

sumNum(numbers_123);

// 06 сравнение чисел

var numbers_555 = '232232';

function comp (x) {
	var firstPart = 0;
	var secondPart = 0;
	for (i=0;i<3;i++){
		firstPart = firstPart + new Number(x[i]);
	}
	for (i=3;i<6;i++){
		secondPart = secondPart + new Number(x[i]);
	}
	if(firstPart == secondPart){
		console.log('yes');
	} else if (firstPart != secondPart){
		console.log('no');
	}
}

comp(numbers_555);
