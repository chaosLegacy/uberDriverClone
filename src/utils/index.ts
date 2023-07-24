const getImageByCarType = (type: string, isMap?: boolean) => {
  switch (type) {
    case 'UberX':
      return isMap
        ? require('assets/images/top-UberX.png')
        : require('assets/images/UberX.jpeg');
    case 'Comfort':
      return isMap
        ? require('assets/images/top-Comfort.png')
        : require('assets/images/Comfort.jpeg');
    case 'UberXL':
      return isMap
        ? require('assets/images/top-UberXL.png')
        : require('assets/images/UberXL.jpeg');
  }
};

export { getImageByCarType };
