export default function conditions (code) {
	let cond = {
		'0': 'торнадо',
		'1': 'шторм',
		'2': 'ураган',
		'3': 'сильная гроза',
		'4': 'гроза',
		'5': 'дождь со снегом',
		'6': 'дождь с мокрым снегом',
		'7': 'мокрый снег',
		'8': 'ледяная пыль',
		'9': 'морось',
		'10': 'дождь, переходящий в снег',
		'11': 'дождь',
		'12': 'дождь',
		'13': 'слабый снег',
		'14': 'небольшой снег',
		'15': 'метель',
		'16': 'снег',
		'17': 'град',
		'18': 'дождь со снегом',
		'19': 'пыль',
		'20': 'туман',
		'21': 'дымка',
		'22': 'смог',
		'23': 'порывистый ветер',
		'24': 'ветрено',
		'25': 'холодно',
		'26': 'облачно',
		'27': 'сильная облачность',
		'28': 'сильная облачность',
		'29': 'переменная облачность',
		'30': 'переменная облачность',
		'31': 'ясно',
		'32': 'солнечно',
		'33': 'ясно',
		'34': 'ясно',
		'35': 'дождь с градом',
		'36': 'жарко',
		'37': 'местами грозы',
		'38': 'временами грозы',
		'39': 'временами грозы', //ливни?
		'40': 'местами дожди',
		'41': 'сильный снег',
		'42': 'местами снегопады',
		'43': 'сильный снегопад',
		'44': 'переменная облачность',
		'45': 'гроза',
		'46': 'снегопад',
		'47': 'местами грозы'
	};
	if (cond[code]){
		return cond[code];
	}
	else {
		return '? (код ' + code + ')';
	}
}