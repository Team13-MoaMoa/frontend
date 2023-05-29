import techStackData from '@/constants/techStackData';

const getTechImageURL = (id: number) => {
  const url = techStackData.find((data) => data.id === id)?.img;
  return url;
};

export default getTechImageURL;
