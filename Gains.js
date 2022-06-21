function EternityGain() {
    let EternityAdd = Player.Eterniums[0].amount.mul(Player.Eterniums[0].multi).mul(Player.Eternity.upgradeMulti).div(new Decimal(20))
    Player.Eternity.amount = Player.Eternity.amount.add(EternityAdd)
    Player.Eternity.amountPerSecond = EternityAdd.mul(20)

    if (Player.LimitBreak.break == "false" && Player.Eternity.amount.exponent > 307) {
        Player.Eternity.amount.mantissa = 1
        Player.Eternity.amount.exponent = 308
    }
}

function AutoEterniumMulti() {
    for (let i = 0; i < 8; i ++) {

    }
}

function AutoEterniumCost() {
    for (let i = 0; i < 8; i ++) {
        let CostIncrease = new Decimal(1000).pow(new Decimal(i + 1))
        let numToPow = Player.Eterniums[i].totalBought.div(new Decimal(10)).floor()
        CostIncrease = CostIncrease.pow(numToPow)
        Player.Eterniums[i].cost = Player.Eterniums[i].startCost.mul(CostIncrease)
    }
}
function EterniumGain() {
    for (let i = 0; i < 8; i++) {
        let Eternium = Player["Eterniums"][i]
        if (i < 7) {
            Eternium.amount = Eternium.amount.add(Player["Eterniums"][i + 1].amount.div(1e3).mul(Player["Eterniums"][i + 1].multi).mul(Player["Eternity"].upgradeMulti))
        }
        if (Eternium.bought.compare(10) >= 0) {
            let EterniumCost = new Decimal(1e3)
            EterniumCost = EterniumCost.mul(new Decimal(Math.pow(10,i)))
            Eternium.cost = Eternium.cost.mul(EterniumCost)
            Eternium.bought = new Decimal(0)
            Eternium.multi = Eternium.multi.mul(Eternium.multiIncrease)
        }
    }
}

function AutoGain() {
    EternityGain()
    EterniumGain()
    AutoEterniumCost()
}

function Nothing() {

}

setInterval(AutoGain,50)