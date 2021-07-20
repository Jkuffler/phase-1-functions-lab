const headQ = 42
const cityBlock = 264
const fare = .02
const flateFare = 25

function distanceFromHqInBlocks(pickup) {
    if (pickup > headQ) {
        return pickup - headQ
    }
    if (pickup < headQ) {
        return headQ - pickup
    }
}

function distanceFromHqInFeet (pickup) {
    if (pickup > headQ) {
        return (pickup - headQ) * cityBlock
    }
    if (pickup < headQ) {
        return (headQ - pickup) * cityBlock
    }
}
function distanceTravelledInFeet (start, end) {
    if (start > end) {
        return (start - end) * cityBlock
    }
    if (end > start) {
        return (end - start) * cityBlock
    }
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance< 2000) {
           return fare * (distance - 400) 
    } else if (distance > 2000 && distance <2500) {
        return flateFare
    }
    if (distance >2500) {
        return "cannot travel that far"
    }     
}