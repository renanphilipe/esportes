/**
 * Método utilizado para converter horas string no formato 18:00 em minutos 1080
 * @params  hourString
 * "18:00" -> split -> ["18", "00"] -> map -> [18, 00]
 */

export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number);

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}