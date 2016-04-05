export default function wind(direction) {
	var directions = ['северный', 'северо-восточный', 'восточный', 'юго-восточный',
		'южный', 'юго-западный', 'западный', 'северо-западный'];
	var a = direction % 360;
	var res;
	if (a < 23 || a > 337) res = 0;
	else if (a < 68) res = 1;
	else if (a < 113) res = 2;
	else if (a < 158) res = 3;
	else if (a < 203) res = 4;
	else if (a < 248) res = 5;
	else if (a < 293) res = 6;
	else if (a < 338) res = 7;
	return directions[res];
}