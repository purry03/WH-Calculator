
let massList = {
    'RollingBSHot': 200000,
    'RollingBSCold': 300000,
    'RollingHIC': 138000
}

function getMass(ship) {
    return massList[ship];
}

function calculate() {
    let whMass = parseInt($("#whMass").val()) * 1000000;
    let numRollingBSCold = parseInt($("#numRollingBSCold").val());
    let numRollingBSHot = parseInt($("#numRollingBSHot").val());
    let numRollingHIC = parseInt($("#numRollingHIC").val());
    let massPassed = (numRollingBSCold * getMass('RollingBSCold') + numRollingBSHot * getMass('RollingBSHot') + numRollingHIC * getMass('RollingHIC'))

    let massLeft = whMass - massPassed;

    console.log(massLeft);

}