let num = 0
basic.forever(function () {
    num = randint(5, 10)
    basic.showNumber(num)
    basic.pause(200)
    for (let contador = 0; contador <= num; contador++) {
        basic.showNumber(contador)
        for (let index = 0; index < contador; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
    }
    basic.showString("A buscar!!!")
    music.playMelody("D E F G A B C5 - ", 120)
    basic.clearScreen()
})
