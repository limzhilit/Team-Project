function calculateCarLoan(principal, annualRate, years, downPayment = 0) {
    // Convert inputs
    let loanAmount = principal - downPayment;
    let monthlyRate = (annualRate / 100) / 12; // Annual rate to monthly rate
    let totalMonths = years * 12; // Loan term in months

    // Monthly payment calculation
    let monthlyPayment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

    // Total payments and interest
    let totalCost = monthlyPayment * totalMonths;
    let totalInterest = totalCost - loanAmount;

    // Return results
    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalCost: totalCost.toFixed(2)
    };
}



function computeLoan() {
    // Get user inputs
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let term = parseInt(document.getElementById("term").value);
    let downPayment = parseFloat(document.getElementById("downPayment").value || 0);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(term) || principal <= 0 || rate <= 0 || term <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    // Perform calculations
    let results = calculateCarLoan(principal, rate, term, downPayment);

    // Display results
    document.getElementById("monthlyPayment").textContent = results.monthlyPayment;
    document.getElementById("totalInterest").textContent = results.totalInterest;
    document.getElementById("totalCost").textContent = results.totalCost;
    document.getElementById("results").style.display = "block";
}


