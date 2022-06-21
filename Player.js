var Player = []
Player["Eternity"] = {
    amount: new Decimal("10"),
    amountPerSecond: new Decimal("0"),
    upgradeAmount: new Decimal("0"),
    upgradeCost: new Decimal("1e3"),
    upgradeMulti: new Decimal("1"),
    upgradeMultiIncrease: new Decimal("1.11")
}

Player["LimitBreak"] = {
    break: "false",
    breakLimit: new Decimal("1e308")
}

Player["UpgradeBools"] = {
    unlocked: "false",
}

Player["Reset"] = {
    amount: new Decimal("0"),
    cost: new Decimal("1e9"),
    resetAmount: new Decimal("1"),
    upgrades: new Decimal("0")
}

Player["NotationChoice"] = Short

Player["Eterniums"] = {}
for (let i = 0; i < 8; i++) {
    let Eternium = {
        startCost: new Decimal("0"),
        cost: new Decimal("0"),
        bought: new Decimal("0"),
        totalBought: new Decimal("0"),
        amount: new Decimal("0"),
        PerSecond: new Decimal("0"),
        multi: new Decimal("1"),
        multiIncrease: new Decimal("2"),
        visibleUpgrade: "false"
    }
    if (i < 4) Eternium.visibleUpgrade = "true"
    Player["Eterniums"][i] = Eternium
}
Player["Eterniums"][0].startCost = new Decimal("10")
Player["Eterniums"][1].startCost = new Decimal("100")
Player["Eterniums"][2].startCost = new Decimal("1e4")
Player["Eterniums"][3].startCost = new Decimal("1e6")
Player["Eterniums"][4].startCost = new Decimal("1e9")
Player["Eterniums"][5].startCost = new Decimal("1e12")
Player["Eterniums"][6].startCost = new Decimal("1e15")
Player["Eterniums"][7].startCost = new Decimal("1e19")

Player["Clicks"] = {}
Player["Clicks"]["Eternium"] = "true"

