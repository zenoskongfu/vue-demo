const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter((num) => {
	if (num > 2) return true; // 保留
	return false; // 不保留
});

// console.log(newArr);

const newArr2 = arr.filter((num2) => {
	if (num2 % 2 == 0) return true;
	return false;
});

console.log(newArr2);
