function checkName (someArray, element) {
		for (var i = 0; i < someArray.length; i++) {
			if (someArray[i] == element)
				return true;
		}
		return false;
	}

var names = [];
for (var i = 0; i < 5; i++) {
	names [i] = prompt('Введите любое имя:', '');
}

var userName = prompt ('Введите имя пользователя:', '');

alert (checkName (names, userName) ? userName + ', вы успешно вошли.' : 'Все пропало...');