// *** Electricity Costs ***
function bulbElec() {
  // Fixed costs
  const eTariff = 0.126;
  const eStdRate = 0.1947;

  // Calculate Units Used
  function elecCost() {
    const oldUnits = document.getElementById("oldUnits").value;
    const newUnits = document.getElementById("newUnits").value;
    const totalUnits = newUnits - oldUnits;
    document.getElementById("unitsUsed").innerHTML = totalUnits;

    // Calculate Electric Used Cost
    const subTotal = totalUnits * eTariff;
    document.getElementById("subTotal").innerHTML = subTotal.toFixed(2);

    //Calculate Time Period
    function getEventTime() {
      var start = moment(document.getElementById("start").value);
      var end = moment(document.getElementById("end").value);
      const timePeriod = end.diff(start, `days`);
      document.getElementById("calculatedDays").innerHTML = timePeriod;

      // Calculate Standing Charge Cost
      const stdCharge = timePeriod * eStdRate;
      document.getElementById("stdCharge").innerHTML = stdCharge.toFixed(2);
      const addedVat = (subTotal + stdCharge) * (5 / 100);
      document.getElementById("addVAT").innerHTML = addedVat.toFixed(2);

      // Calculate Total Electricity Cost
      const finalTotal = subTotal + stdCharge + addedVat;
      document.getElementById("finalTotal").innerHTML = finalTotal.toFixed(2);
      console.log(newUnits);
      console.log(end);
      console.log(finalTotal.toFixed(2));
      // Caclulate Monthly Estimate
      const monthlyAvg = (finalTotal / timePeriod) * 30;
      document.getElementById("monthlyAverage").innerHTML = monthlyAvg.toFixed(
        2
      );
    }
    getEventTime();
  }
  elecCost();
}
//bulbElec();
