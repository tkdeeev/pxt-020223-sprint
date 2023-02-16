function start () {
    radio.sendString("a")
music.playTone(Note.E, music.beat(BeatFraction.Whole))
//start

let ll: number = 0
let awaitFinish = false

let onTime = control.millis()

let startTime = control.millis()
let finishTime// = 0
let initLightLevel = 0

input.onButtonPressed(Button.A, function () {
    onTime = startCount();
    music.playTone(Note.C5, music.beat(BeatFraction.Double))
    startTime = awaitRun(ll)
    music.playTone(Note.C3, music.beat(BeatFraction.Double))
    awaitFinish = true
})
input.onButtonPressed(Button.B, function () {
    console.log("LL")
    ll = calibrate()
})

input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(lastData, 300)
})

radio.onReceivedString((str: string) => {
    music.playTone(Note.E, music.beat(BeatFraction.Whole))
    if(str == "finish" && awaitFinish) {
        finishTime = control.millis()
        console.log(finishTime - startTime)
        console.log(startTime - onTime)
        radio.sendValue("show", Math.round((onTime - startTime) / 100) / 10)
        let delay = Math.round((finishTime - startTime) / 100) / 10
        basic.showNumber(delay, 300)
        lastData = delay
    }
})

}