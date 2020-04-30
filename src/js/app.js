// TODO: write your code here
import sum from './basic';

export default function specialDetal(params) {
  const {
    special
  } = params;
  let mas = [];
  special.forEach(element => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно'
    } = element;
    mas.push({
      id,
      name,
      icon,
      description
    });
  });
  console.log(special);
  console.log(mas);
  return mas;
}
