const formatDate = ( date ) => {
  // Crear un objeto Date con la fecha dada
  const fecha = new Date(date);

  // Extraer el año, mes, día, hora, minutos y segundos
  const year = fecha.getFullYear().toString().slice(-2); // Obtener los últimos dos dígitos del año
  const month = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Añadir un cero al principio si el mes es menor a 10
  const day = fecha.getDate().toString().padStart(2, '0'); // Añadir un cero al principio si el día es menor a 10
  const hour = fecha.getHours().toString().padStart(2, '0'); // Añadir un cero al principio si la hora es menor a 10
  const minutes = fecha.getMinutes().toString().padStart(2, '0'); // Añadir un cero al principio si los minutos son menor a 10
  const seconds = fecha.getSeconds().toString().padStart(2, '0'); // Añadir un cero al principio si los segundos son menor a 10

  // Formatear la fecha y la hora en el formato deseado
  const fechaHoraFormateada = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  return fechaHoraFormateada;
};

module.exports={
  formatDate
}