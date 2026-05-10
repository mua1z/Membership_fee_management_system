/**
 * Ethiopian Calendar Utility (Backend)
 */

exports.getEthiopianYear = (date = new Date()) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  if (month < 9 || (month === 9 && day < 11)) {
    return year - 8;
  }
  return year - 7;
};

exports.getEthiopianMonth = (date = new Date()) => {
  const gMonth = date.getMonth();
  const gDay = date.getDate();

  let ethMonth = 0;
  switch(gMonth) {
    case 0: ethMonth = gDay < 9 ? 4 : 5; break;
    case 1: ethMonth = gDay < 8 ? 5 : 6; break;
    case 2: ethMonth = gDay < 10 ? 6 : 7; break;
    case 3: ethMonth = gDay < 9 ? 7 : 8; break;
    case 4: ethMonth = gDay < 9 ? 8 : 9; break;
    case 5: ethMonth = gDay < 8 ? 9 : 10; break;
    case 6: ethMonth = gDay < 8 ? 10 : 11; break;
    case 7: ethMonth = gDay < 7 ? 11 : 12; break;
    case 8: ethMonth = gDay < 11 ? 12 : 1; break;
    case 9: ethMonth = gDay < 11 ? 1 : 2; break;
    case 10: ethMonth = gDay < 10 ? 2 : 3; break;
    case 11: ethMonth = gDay < 10 ? 3 : 4; break;
  }
  
  if (gMonth === 8 && gDay >= 6 && gDay <= 10) {
    return 13;
  }

  return ethMonth;
};

exports.getCurrentEthiopianPeriod = () => {
  const now = new Date();
  return {
    year: exports.getEthiopianYear(now),
    month: exports.getEthiopianMonth(now)
  };
};
