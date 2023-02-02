//finish
function finish () {
music.playTone(Note.C, music.beat(BeatFraction.Whole))
    
music.setVolume(255)
radio.setGroup(76)
radio.setTransmitPower(7)
radio.setFrequencyBand(76)
radio.setTransmitSerialNumber(true)

let lgl = 0
radio.onReceivedValue((str: string, num: number) => {
    console.log("ll")
    if (str == "callig") {
        lgl = getCalibrate(5000)
    } else if (str == "start") {
        awaitRun(lgl)
    }
})

}

let awaitRun = function (light : number) {
    while (Math.abs(input.lightLevel() - light) < 50) {}
    radio.sendValue("finish", 0)
}