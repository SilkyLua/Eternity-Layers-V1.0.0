function Short(num,decimals) {
    let mantissa = num.mantissa
    let power = num.exponent
    if (power > 307 && Player.LimitBreak.break == "false") {
        return "Infinite"
    }
    if (power < 0) return "0." + mantissa.toFixed(0)
    let fixed = 0
    let StartTab = ["","K","M","B","T","Qd","Qn","Sx","Sp","Oc","No"]
    let Tab1 = ["","U","D","T","Qd","Qn","Sx","Sp","Oc","No"]
    let Tab2 = ["","De","Vg","Tg","qg","Qg","sg","Sg","Og","Ng"]
    let Tab3 = ["","Ce","Du","Tr","Qa","Qt","Sr","Sa","Ot","Ni"]
    if (power % 3 == 0) {
        fixed = 2
        mantissa = mantissa * 1
        }
    if (power % 3 == 1) {
        fixed = 1
        mantissa = mantissa * 10
    }
    if (power % 3 == 2) {
        fixed = 0
        mantissa = mantissa * 100
    }
    if (power > 65 && power < 69) {
        return mantissa.toFixed(fixed) + " Morbillion"
    }
    if (power < 33) {
        if (power < 3) return mantissa.toFixed(decimals)
        let Suffix = StartTab[Math.floor(power / 3)]
        return mantissa.toFixed(fixed) + Suffix
    }
    let powerSub1 = power - 33
    let powerSub2 = power - 303
    if (power < 303) {
        let Suffix1 = Tab1[Math.floor((power - 3) / 3) % 10]
        let Suffix2 = Tab2[(Math.floor(powerSub1 / 30) + 1) % 10]
        return mantissa.toFixed(fixed) + Suffix1 + Suffix2
    }
    if (power < 3003) {
        let Suffix1 = Tab1[Math.floor((power - 3) / 3) % 10]
        let Suffix2 = Tab2[(Math.floor(powerSub1 / 30) + 1) % 10]
        let Suffix3 = Tab3[(Math.floor(powerSub2 / 300) + 1) % 10]
        return mantissa.toFixed(fixed) + Suffix1 + Suffix2 + Suffix3
    }
    return "Max"
}

function Scientific(num,decimals) {
    let power = num.exponent
    let mantissa = num.mantissa
    if (power < 3) {
        mantissa = mantissa * Math.pow(10,power)
        return mantissa.toFixed(decimals)
    }
    return mantissa.toFixed(2) + "e" + power
}