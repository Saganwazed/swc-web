import React, { useState, useMemo } from 'react';

const CarAdvisor = () => {
  const [price, setPrice] = useState(30000);
  const [downPayment, setDownPayment] = useState(5000);
  const [loanYears, setLoanYears] = useState(5);
  const [interestRate, setInterestRate] = useState(5);
  const [maintenance, setMaintenance] = useState(800);
  const [leaseMonthly, setLeaseMonthly] = useState(400);
  const [leaseYears, setLeaseYears] = useState(3);
  const [depreciation, setDepreciation] = useState(10);
  const [evaluationYears, setEvaluationYears] = useState(5);

  const results = useMemo(() => {
    const resaleValue = price * Math.pow(1 - depreciation / 100, evaluationYears);

    const loanAmount = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const n = loanYears * 12;
    const monthlyPayment =
      monthlyRate === 0
        ? loanAmount / n
        : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

    const financeTotal = downPayment + monthlyPayment * n + maintenance * evaluationYears - resaleValue;
    const cashTotal = price + maintenance * evaluationYears - resaleValue;
    const leaseTotal = leaseMonthly * leaseYears * 12 + maintenance * leaseYears;

    const minCost = Math.min(financeTotal, cashTotal, leaseTotal);
    const best =
      minCost === financeTotal
        ? 'Financing'
        : minCost === cashTotal
        ? 'Cash Purchase'
        : 'Leasing';

    return {
      resaleValue,
      monthlyPayment,
      financeTotal,
      cashTotal,
      leaseTotal,
      best,
    };
  }, [price, downPayment, loanYears, interestRate, maintenance, leaseMonthly, leaseYears, depreciation, evaluationYears]);

  return (
    <section id="car-advisor" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Car <span className="gradient-text">Decision Helper</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Adjust the values below to compare financing, leasing, or paying in cash.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 lg:p-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm">Car Price ($)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                />
              </label>
              <label className="block">
                <span className="text-sm">Down Payment ($)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseFloat(e.target.value) || 0)}
                />
              </label>
              <label className="block">
                <span className="text-sm">Loan Term (years)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={loanYears}
                  onChange={(e) => setLoanYears(parseFloat(e.target.value) || 0)}
                />
              </label>
              <label className="block">
                <span className="text-sm">Interest Rate (%)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                />
              </label>
              <label className="block">
                <span className="text-sm">Annual Maintenance ($)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={maintenance}
                  onChange={(e) => setMaintenance(parseFloat(e.target.value) || 0)}
                />
              </label>
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm">Lease Monthly Payment ($)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={leaseMonthly}
                  onChange={(e) => setLeaseMonthly(parseFloat(e.target.value) || 0)}
                />
              </label>
              <label className="block">
                <span className="text-sm">Lease Term (years)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={leaseYears}
                  onChange={(e) => setLeaseYears(parseFloat(e.target.value) || 0)}
                />
              </label>
              <label className="block">
                <span className="text-sm">Evaluation Period (years)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={evaluationYears}
                  onChange={(e) => setEvaluationYears(parseFloat(e.target.value) || 0)}
                />
              </label>
              <label className="block">
                <span className="text-sm">Depreciation per Year (%)</span>
                <input
                  type="number"
                  className="w-full glass rounded p-2 mt-1 bg-transparent"
                  value={depreciation}
                  onChange={(e) => setDepreciation(parseFloat(e.target.value) || 0)}
                />
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Finance Cost</h4>
              <p className="text-lg text-green-300">${results.financeTotal.toFixed(0)}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Lease Cost</h4>
              <p className="text-lg text-blue-300">${results.leaseTotal.toFixed(0)}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Cash Cost</h4>
              <p className="text-lg text-purple-300">${results.cashTotal.toFixed(0)}</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-xl">
              Best Option:{' '}
              <span className="gradient-text font-semibold">{results.best}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarAdvisor;
