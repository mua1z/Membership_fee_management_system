/**
 * Ethiopian Calendar Utility
 * Converts Gregorian dates to Ethiopian dates and vice versa for UI display.
 */

export const ETHIOPIAN_MONTHS_EN = [
  "Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yekatit",
  "Megabit", "Miazia", "Ginbot", "Sene", "Hamle", "Nehasse", "Pagume"
];

export const ETHIOPIAN_MONTHS_AM = [
  "መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት",
  "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"
];

/**
 * Very simple conversion for UI purposes (offset based)
 * For rigorous conversion, use a library, but this handles the 7-8 year gap.
 */
export function getEthiopianYear(date: Date = new Date()): number {
  const month = date.getMonth() + 1; // 1-indexed
  const day = date.getDate();
  const year = date.getFullYear();

  // Ethiopian New Year is Sept 11 or 12
  if (month < 9 || (month === 9 && day < 11)) {
    return year - 8;
  }
  return year - 7;
}

export function getEthiopianMonth(date: Date = new Date()): number {
  // Approximate mapping for UI defaults
  // Sept 11 - Oct 10 -> Month 1
  // ...
  // This is complex to do perfectly without a library, 
  // but we can use a simpler approach for the "Current Period" default.
  
  const gMonth = date.getMonth(); // 0-indexed
  const gDay = date.getDate();
  
  // Mapping of Gregorian months to Ethiopian months (approximate start)
  // 0: Jan -> 5 (Tir)
  // 1: Feb -> 6 (Yekatit)
  // 2: Mar -> 7 (Megabit)
  // 3: Apr -> 8 (Miazia)
  // 4: May -> 9 (Ginbot)
  // 5: Jun -> 10 (Sene)
  // 6: Jul -> 11 (Hamle)
  // 7: Aug -> 12 (Nehasse)
  // 8: Sep -> 1 (Meskerem) - starts around 11th
  // 9: Oct -> 2 (Tikimt)
  // 10: Nov -> 3 (Hidar)
  // 11: Dec -> 4 (Tahsas)

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
    case 8: ethMonth = gDay < 11 ? 12 : 1; break; // Pagume is month 13
    case 9: ethMonth = gDay < 11 ? 1 : 2; break;
    case 10: ethMonth = gDay < 10 ? 2 : 3; break;
    case 11: ethMonth = gDay < 10 ? 3 : 4; break;
  }
  
  // Pagume check (Sept 6 - Sept 10)
  if (gMonth === 8 && gDay >= 6 && gDay <= 10) {
    return 13;
  }

  return ethMonth;
}

export function getCurrentEthiopianPeriod() {
  const now = new Date();
  return {
    year: getEthiopianYear(now),
    month: getEthiopianMonth(now)
  };
}
