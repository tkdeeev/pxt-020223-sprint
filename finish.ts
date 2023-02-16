//finish

function finish () {
    console.log("ll")
music.playTone(Note.C, music.beat(BeatFraction.Whole))


let lgl = 0
radio.onReceivedString((str: string) => {
    console.log(str)
    music.playTone(Note.E, music.beat(BeatFraction.Whole))
    if (str == "callig") {
        lgl = getCalibrate(3000)
    } else if (str == "start") {
        awaitRun(lgl)
    }
})

}

let awaitRun = function (light : number) {
    while (Math.abs(input.lightLevel() - light) < 50) { }
    music.playTone(Note.D, music.beat(BeatFraction.Whole))
    radio.sendString("finish")
}