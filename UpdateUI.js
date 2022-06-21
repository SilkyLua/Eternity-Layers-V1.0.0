function EternityUpgradeUpdate() {
    let Eternity = Player["Eternity"]
    if (Eternity.amount.compare(Eternity.upgradeCost) >= 0) {
        document.getElementById("TickButton").style.borderColor = "lightgreen"
    }
    else {
        document.getElementById("TickButton").style.borderColor = "rgb(255, 155, 155)"
    }
    document.getElementById("EternityUpgradeMulti").innerHTML = "(" + Player["NotationChoice"](Eternity.upgradeMulti,1) + "x)"
}



function ResetUpdate() {
    
}

function UpdateJaredLeto() {
    if (Player.Eternity.amount.exponent > 65) {
        document.getElementById("JaredLeto").style.display = "flex"
    }
}

function EterniumUpdate() {
    let EterniumText = {gen1: "First Eternium", gen2: "Second Eternium", gen3: "Third Eternium", gen4: "Fourth Eternium", gen5: "Fifth Eternium", gen6: "Sixth Eternium", gen7: "Seventh Eternium", gen8: "Eighth Eternium"}
   for (let i = 0; i < 8; i++) {
       
       let e = Player["Eterniums"][i]
       let Eterniums = Player["Eterniums"]
       let Eternity = Player["Eternity"].amount
       if (i > 0) {
        if (Eterniums[i - 1].amount.compare(new Decimal(0)) == 0 || Eterniums[i].visibleUpgrade == "false") {
            document.getElementById("gen" + (i + 1)).style.display = "none"
        }
        if (Eterniums[i].visibleUpgrade == "true") {
            if (Eterniums[i - 1].amount.compare(new Decimal(10)) >= 0) {
                document.getElementById("gen" + (i + 1)).style.display = "flex"
            }
        }
       }
       let genText = EterniumText["gen" + (i + 1)]
       if (Eternity.compare(e.cost) >= 0) {
           document.getElementById("gen" + (i + 1) + "BuyOne").style.borderColor = "lightgreen"
       }
       else {
           document.getElementById("gen" + (i + 1) + "BuyOne").style.borderColor = "rgb(255, 155, 155)"
       }
       if (Eternity.compare(e.cost.mul(new Decimal(10).sub(e.bought))) >= 0) {
           document.getElementById("gen" + (i + 1) + "BuyUntilTen").style.borderColor = "lightgreen"
       }
       else {
           document.getElementById("gen" + (i + 1) + "BuyUntilTen").style.borderColor = "rgb(255, 155, 155)"
       }
       document.getElementById("gen" + (i + 1) + "Multi").innerHTML = genText + " x" + Player["NotationChoice"](e.multi,2)
       document.getElementById("gen" + (i + 1) + "Amount").innerHTML = Player["NotationChoice"](e.amount,0) + "(" + Player["NotationChoice"](e.bought,0) + ") (+" + Player["NotationChoice"](e.PerSecond,1) + "/s)"
       document.getElementById("gen" + (i + 1) + "BuyOne").innerHTML = Player["NotationChoice"](e.cost) + " Eternity"
       document.getElementById("gen" + (i + 1) + "BuyUntilTen").innerHTML = Player["NotationChoice"](e.cost.mul(new Decimal(10).sub(e.bought))) + " Eternity"
   }
}

function ResetUI() {
    document.getElementById("ResetAmount").innerHTML = Player["NotationChoice"](Player.Reset.amount)
    document.getElementById("ResetRequire").innerHTML = Player["NotationChoice"](Player.Reset.cost)
}

function UpgradeUI() {
    if (Player.Reset.amount.compare(new Decimal(1)) >= 0) {
        document.getElementById("UpgradeTextRequire").style.display = "none"
        for (i = 1; i < 2; i++) {
            document.getElementById("upgradeButton" + i).style.display = "flex"
        }
        Player.UpgradeBools.unlocked = "true"
    }
    if (Player.UpgradeBools.unlocked == "true") {
        
    }
}

function UpdateGUI() {
    UpdateJaredLeto()
    EterniumUpdate()
    EternityUpgradeUpdate()
    ResetUI()
    UpgradeUI()
    let Eternity = Player["Eternity"]
    document.getElementById("TickButton").innerHTML = "Cost: " + Player["NotationChoice"](Eternity.upgradeCost)
    document.getElementById("EternityAmount").innerHTML = Player["NotationChoice"](Eternity.amount,1)
    document.getElementById("EternityPerTick").innerHTML = Player["NotationChoice"](Eternity.amountPerSecond)
}

setInterval(UpdateGUI,30)