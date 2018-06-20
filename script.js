var x = ['string', 2, [1,3,33], 5, 144,[12, 'slovo',['word',45,[222,'notANumber']]]];

function showNumber (arr) {
	for(var i=0;i<arr.length;i++){
		if (typeof arr[i] == 'number') {
		console.log(arr[i]);
		} else if (typeof arr[i] == 'object'){
		showNumber(arr[i]);
		} else continue;	
	}
}
showNumber(x);

//////////////////////////////////////////////////////////////////////
console.log('*****');
//////////////////////////////////////////////////////////////////////

var numArr = [1,6,3,2,5,4];
function numSort (arr) {
	arr.sort();
	for (var i = 0; i < arr.length; i++) {
	 	console.log(arr[i]);
	 } 
}
numSort(numArr);

//////////////////////////////////////////////////////////////////////
console.log('*****');
//////////////////////////////////////////////////////////////////////

var someArr = [1,2,3,'строка',5,6,'строка№2'];
function findString (arr) {
	var i=-1;
	while(i<arr.length){
		i++;
		if (typeof arr[i] == 'string') {
			console.log(arr[i]);
		} else continue;	
	} 
}

findString(someArr);

//////////////////////////////////////////////////////////////////////
console.log('*****');
//////////////////////////////////////////////////////////////////////