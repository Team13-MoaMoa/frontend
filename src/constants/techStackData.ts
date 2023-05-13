type techStackDataType = {
  name: string;
  id: number;
  img: string;
  type: string;
};

export const techStackData = [
  { name: 'React', id: 1, img: '/React.png', type: 'frontend', checked: false },
  { name: 'Html', id: 2, img: '/Html.png', type: 'frontend', checked: false },
  {
    name: 'NodeJs',
    id: 3,
    img: '/NodeJs.png',
    type: 'backend',
    checked: false,
  },
  { name: 'Php', id: 4, img: '/Php.png', type: 'backend', checked: false },
  { name: 'Figma', id: 5, img: '/Figma.png', type: 'etc', checked: false },
  { name: 'Docker', id: 6, img: '/Docker.png', type: 'etc', checked: false },
  {
    name: 'JavaScript',
    id: 7,
    img: '/JavaScript.png',
    type: 'frontend',
    checked: false,
  },
  {
    name: 'Python',
    id: 8,
    img: '/Python.png',
    type: 'backend',
    checked: false,
  },
  { name: 'Git', id: 9, img: '/Git.png', type: 'etc', checked: false },
  {
    name: 'Gatsby',
    id: 10,
    img: '/Gatsby.png',
    type: 'frontend',
    checked: false,
  },
];

export default techStackData;
