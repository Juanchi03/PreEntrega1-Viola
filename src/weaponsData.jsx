import glock from './assets/images/glock.jpg';
import mp5 from './assets/images/mp5.jpg';
import awm from './assets/images/awm.jpg';
import remington870 from './assets/images/remington870.jpg';
import coltpython from './assets/images/coltpython.jpg';

const weaponsData = [
  {
    id: 'glock',
    name: 'Pistola Glock',
    description: 'Una pistola semiautomática popular entre las fuerzas de seguridad.',
    image: glock,
  },
  {
    id: 'remington870',
    name: 'Escopeta Remington 870',
    description: 'Una escopeta de acción de bombeo confiable y versátil.',
    image: remington870,
  },
  {
    id: 'mp5',
    name: 'Subfusil MP5',
    description: 'Un subfusil ampliamente utilizado por unidades de fuerzas especiales.',
    image: mp5,
  },
  {
    id: 'awm',
    name: 'Francotirador AWM',
    description: 'Un rifle de francotirador de gran precisión y potencia.',
    image: awm,
  },
  {
    id: 'coltpython',
    name: 'Revólver Colt Python',
    description: 'Un revólver clásico conocido por su precisión y durabilidad.',
    image: coltpython,
  },
];

export default weaponsData;
