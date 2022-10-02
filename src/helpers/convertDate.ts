const getDayAndMouth = (dayAndMouth: string) => {
  const date = new Date(`${dayAndMouth}`);

  const day = date.toLocaleString('en-US', { day: 'numeric' });

  const month = date.toLocaleString('en-US', { month: 'short' });

  return `${day} ${month}`;
};

export default getDayAndMouth;
