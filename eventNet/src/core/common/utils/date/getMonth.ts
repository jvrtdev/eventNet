export function getMonth(monthNumber: number) {
  const months: string[] = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  if(monthNumber < 1 || monthNumber >12) {
    throw new Error("Forneça um numero de um mês válido")
  }

  return months[monthNumber - 1]
}