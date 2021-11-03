radio.onReceivedNumber(function (receivedNumber) {
    Musica = receivedNumber
})
let Musica = 0
radio.setGroup(1)
basic.forever(function () {
    if (Musica < 3) {
        cuteBot.stopcar()
    }
    if (Musica >= 3 && Musica < 5) {
        cuteBot.motors(48, 48)
    }
    if (Musica >= 10) {
        cuteBot.motors(48, -48)
    }
    if (Musica >= 5 && Musica < 7) {
        cuteBot.motors(-48, -48)
    }
    if (Musica >= 7 && Musica < 10) {
        cuteBot.motors(-48, 48)
    }
})
