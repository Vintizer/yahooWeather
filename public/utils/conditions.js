/**
 * Created by Vitaly.Zayets on 29-Mar-16.
 */
export default function conditions (code) {
	var weatherIconMap = [
		'storm', 'storm', 'storm', 'lightning', 'lightning', 'snow', 'hail', 'hail',
		'drizzle', 'drizzle', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow',
		'hail', 'hail', 'fog', 'fog', 'fog', 'fog', 'wind', 'wind', 'snowflake',
		'cloud', 'cloud_moon', 'cloud_sun', 'cloud_moon', 'cloud_sun', 'moon', 'sun',
		'moon', 'sun', 'hail', 'sun', 'lightning', 'lightning', 'lightning', 'rain',
		'snowflake', 'snowflake', 'snowflake', 'cloud', 'rain', 'snow', 'lightning'
	];
return weatherIconMap[code];
}