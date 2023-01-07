let water = 0
basic.forever(function () {
    water = input.rotation(Rotation.Pitch)
    if (water > 90) {
        servos.P1.setAngle(0)
        basic.pause(100)
    } else if (water < 90) {
        servos.P1.setAngle(90)
        basic.pause(9)
    }
})
basic.forever(function () {
    basic.showNumber(water)
})
