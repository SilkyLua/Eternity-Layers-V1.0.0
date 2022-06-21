function ResetEterniums() {
    for (let i = 0; i < 8; i++) {
        Player.Eterniums[i].amount = new Decimal(0)
        Player.Eterniums[i].bought = new Decimal(0)
        Player.Eterniums[i].totalBought = new Decimal(0)
        Player.Eterniums[i].multi = new Decimal(1)
    }
}
function ResetEternity() {
    Player.Eternity.amount = new Decimal(10)
    Player.Eternity.upgradeAmount = new Decimal(0)
}
function ResetAdd() {
    Player.Reset.amount = Player.Reset.amount.add(new Decimal(1))
    Player.Reset.upgrades = Player.Reset.upgrades.add(Player.Reset.resetAmount)
    Player.Reset.cost = Player.Reset.cost.mul(new Decimal(100))
}