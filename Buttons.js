function EternityButtonOnClick(ButtonId) {
    let Gen = ButtonId.split("Buy")
    let ButtonSplice = Gen[1]
    let GenNum = Gen[0].split("gen")
    GenNum = parseFloat(GenNum[1])
    let Eternium = Player["Eterniums"][GenNum - 1]
    let Eternity = Player["Eternity"]
    if (ButtonSplice == "One") {    
        if (Eternity.amount.compare(Eternium.cost) >= 0) {
            Eternity.amount = Eternity.amount.sub(Eternium.cost)
            Eternium.bought = Eternium.bought.add(new Decimal(1))
            Eternium.totalBought = Eternium.totalBought.add(new Decimal(1))
            Eternium.amount = Eternium.amount.add(new Decimal(1))
        }
    }
    else {
        if (Eternity.amount.compare(Eternium.cost.mul(new Decimal(10).sub(Eternium.bought))) >= 0) {
            Eternity.amount = Eternity.amount.sub(Eternium.cost.mul(new Decimal(10).sub(Eternium.bought)))
            Eternium.amount = Eternium.amount.add(new Decimal(10).sub(Eternium.bought))
            Eternium.totalBought = Eternium.totalBought.add(new Decimal(10).sub(Eternium.bought))
            Eternium.bought = Eternium.bought.add(new Decimal(10).sub(Eternium.bought))
        }
    }
}

function EternityUpgradeClick(ButtonId) {
    let Eternity = Player["Eternity"]
    if (Eternity.amount.compare(Eternity.upgradeCost) >= 0) {
        Eternity.amount = Eternity.amount.sub(Eternity.upgradeCost)
        Eternity.upgradeCost = Eternity.upgradeCost.mul(new Decimal(10))
        Eternity.upgradeMulti = Eternity.upgradeMulti.mul(Eternity.upgradeMultiIncrease)
        Eternity.upgradeAmount = Eternity.upgradeAmount.add(new Decimal(1))
    }
}

function OpenEterniumSub(ButtonId) {
    let tabOfNames = ["eternium","upgrade"]
    let nameOfButton = ""
    if (ButtonId == "EterniumsSubFrame") {
        nameOfButton = "eternium"
    }
    if (ButtonId == "UpgradesSubFrame") {
        nameOfButton = "upgrade"
    }

    for (i = 0; i < 2; i++) {
        if (nameOfButton == tabOfNames[i]) {
            document.getElementById(nameOfButton).style.display = "flex"
        }
        else {
            document.getElementById(tabOfNames[i]).style.display = "none"
        }
    }
}

function ResetButton(ButtonId) {
    if (Player.Eternity.amount.compare(Player.Reset.cost) >= 0) {
        ResetEterniums()
        ResetEternity()
        ResetAdd()
    }
}