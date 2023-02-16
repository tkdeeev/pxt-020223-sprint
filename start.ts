function start () {
music.playTone(Note.E, music.beat(BeatFraction.Whole))
//start

let ll: number = 0
let awaitFinish = false

let startTime = control.millis()
let finishTime = 0
let initLightLevel = 0

input.onButtonPressed(Button.A, function () {
    startCount();
    awaitFinish = true
})
input.onButtonPressed(Button.B, function () {
    console.log("LL")
    ll = calibrate()
})
input.onLogoEvent(TouchButtonEvent.Touched, startCount)

radio.onReceivedString((str: string) => {
    music.playTone(Note.E, music.beat(BeatFraction.Whole))
    if(str == "finish" && awaitFinish) {
        finishTime = control.millis()
        whaleysans.showNumber(Math.round(finishTime-startTime / 100) / 10)
    }
})

}