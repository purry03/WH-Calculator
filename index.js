
let massList = {
    'RollingBattleshipHot': 300000,
    'RollingBattleshipCold': 200000,
    'RollingHIC': 138000,
    'RollingHauler': 122000,
    "Frigate": 1100,
    "Destroyer": 1700,
    "Cruiser": 13000,
    "Hauler": 11000,
    "DST": 20000,
    "Porpoise": 4500,
    "Orca": 150000,
    "Battlecruiser": 14250,
    "Battleship": 95000,
    "Freighter": 900000,
    "Carrier": 1230000,
    "CarrierHot": 1730000,
    "Dreadnought": 1260000,
    "Rorqual": 800000,
}

function getMass(ship) {
    return massList[ship];
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {
    let whMass = parseFloat($("#whMass").val()) * 1000000;
    let modifier = parseFloat($("#modifier").val());
    whMass = whMass * modifier;

    let numCarrier = parseInt($("#numCarrierHot").val());
    let numRollingBSCold = parseInt($("#numRollingBSCold").val());
    let numRollingBSHot = parseInt($("#numRollingBSHot").val());
    let numRollingHIC = parseInt($("#numRollingHIC").val());
    let customMass = parseInt($("#customMass").val()) || 0;
    let numCustomMass = parseInt($("#numCustomMass").val());
    let massPassed = (numRollingBSCold * getMass('RollingBattleshipCold') + numRollingBSHot * getMass('RollingBattleshipHot') + numRollingHIC * getMass('RollingHIC') + numCarrier * getMass("CarrierHot") + customMass * numCustomMass)


    let massLeft = parseInt(whMass - massPassed);
    let massLeftPlus10 = parseInt((whMass * 1.1) - massPassed);
    let massLeftMinus10 = parseInt((whMass * 0.9) - massPassed);

    $("#0varianceMassLeft").html(numberWithCommas(massLeft));
    $("#minus10varianceMassLeft").html(numberWithCommas(massLeftMinus10));
    $("#plus10varianceMassLeft").html(numberWithCommas(massLeftPlus10));

    for (ship in massList) {
        let shipmass = getMass(ship);

        let jumpsLeft0 = Math.max(0, parseInt(Math.ceil(massLeft / shipmass)));
        let jumpsLeftPlus10 = Math.max(0, parseInt(Math.ceil(massLeftPlus10 / shipmass)));
        let jumpsLeftMinus10 = Math.max(0, parseInt(Math.ceil(massLeftMinus10 / shipmass)));

        $(`#${ship} #jumpsLeft0`).html(numberWithCommas(jumpsLeft0));
        $(`#${ship} #jumpsLeftPlus10`).html(numberWithCommas(jumpsLeftPlus10));
        $(`#${ship} #jumpsLeftMinus10`).html(numberWithCommas(jumpsLeftMinus10));
    }
}