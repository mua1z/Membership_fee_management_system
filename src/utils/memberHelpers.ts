export function flattenMemberData(data: any) {
  const flat = { ...data };

  if (data.address) {
    flat.addressRegion = data.address.region ?? 'Dire Dawa';
    flat.addressCity   = data.address.city   ?? 'Dire Dawa';
    flat.addressWoreda = data.address.woreda ?? '01';
    delete flat.address;
  }

  if (data.financial) {
    flat.financialSalary          = data.financial.salary          ?? 0;
    flat.financialEmploymentType  = data.financial.employmentType  ?? null;
    flat.financialCurrency        = data.financial.currency        ?? 'ETB';
    flat.financialAllowances      = data.financial.allowances      ?? 0;
    flat.financialOccupationType  = data.financial.occupationType  ?? null;
    flat.financialEstimatedIncome = data.financial.estimatedIncome ?? 0;
    flat.financialBusinessType    = data.financial.businessType    ?? null;
    flat.financialBusinessName    = data.financial.businessName    ?? null;
    flat.financialEmployees       = data.financial.employees       ?? 0;
    flat.financialIncome          = data.financial.income          ?? 0;
    flat.financialCapital         = data.financial.capital         ?? 0;
    flat.financialInvestmentType  = data.financial.investmentType  ?? null;
    flat.financialCustomMonthlyFee= data.financial.customMonthlyFee ?? null;
    delete flat.financial;
  }

  if (data.contribution) {
    flat.contributionMonthlyFee  = data.contribution.monthlyFee  ?? 0;
    flat.contributionPercentage  = data.contribution.percentage  ?? 0;
    flat.contributionAnnualFee   = data.contribution.annualFee   ?? 0;
    flat.contributionHqShare     = data.contribution.hqShare     ?? 0;
    flat.contributionBranchShare = data.contribution.branchShare ?? 0;
    delete flat.contribution;
  }

  if (data.netSalary) {
    flat.netSalaryGrossSalary      = data.netSalary.grossSalary      ?? 0;
    flat.netSalaryPensionDeduction = data.netSalary.pensionDeduction ?? 0;
    flat.netSalaryTaxDeduction     = data.netSalary.taxDeduction     ?? 0;
    flat.netSalaryTotalDeductions  = data.netSalary.totalDeductions  ?? 0;
    flat.netSalaryNetSalary        = data.netSalary.netSalary        ?? 0;
    flat.netSalaryContributionFee  = data.netSalary.contributionFee  ?? 0;
    flat.netSalaryFinalNetSalary   = data.netSalary.finalNetSalary   ?? 0;
    delete flat.netSalary;
  }

  if (data.wing) {
    flat.wingType           = data.wing.wingType       ?? null;
    flat.wingParentMemberId = data.wing.parentMemberId ?? null;
    delete flat.wing;
  }

  // Remove Mongoose-only or virtual fields
  delete flat._id;
  delete flat.__v;
  delete flat.id;

  return flat;
}

export function generatePaymentSchedule(year: number, dayOfMonth: number) {
  const schedule = [];
  for (let month = 1; month <= 12; month++) {
    const expectedDate = new Date(year, month - 1, Math.min(dayOfMonth, 28));
    schedule.push({ month, year, expectedDate, status: 'Unpaid', actualPaymentDate: null, paymentId: null });
  }
  return schedule;
}
