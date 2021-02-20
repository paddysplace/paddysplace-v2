// *** Gas Costs ***
// E.ON
function eOnGas() {
  // Fixed costs
  const gTariff = 0.2579;
  const gStdRate = 0.22908;

  // Calculate Units Used
  function gasCost() {
    const oldUnits = document.getElementById("oldUnits").value;
    const newUnits = document.getElementById("newUnits").value;
    const totalUnits = newUnits - oldUnits;
    document.getElementById("unitsUsed").innerHTML = totalUnits;

    // Calculate Energy Used
    const energyUsed = (totalUnits * 1.02264 * 39.3) / 3.6;
    document.getElementById("energyUsed").innerHTML = energyUsed.toFixed(0);

    // Calculate Gas Used Cost
    const subTotal = (energyUsed * gTariff) / 10;
    document.getElementById("subTotal").innerHTML = subTotal.toFixed(2);

    //Calculate Time Period
    function getEventTime() {
      var start = moment(document.getElementById("start").value);
      var end = moment(document.getElementById("end").value);
      const timePeriod = end.diff(start, `days`);
      document.getElementById("calculatedDays").innerHTML = timePeriod;

      // Calculate Standing Charge Cost
      const stdCharge = timePeriod * gStdRate;
      document.getElementById("stdCharge").innerHTML = stdCharge.toFixed(2);
      const addedVat = (subTotal + stdCharge) * (5 / 100);
      document.getElementById("addVAT").innerHTML = addedVat.toFixed(2);

      // Calculate Total Gas Cost
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
  gasCost();
}
//eOnGas();
