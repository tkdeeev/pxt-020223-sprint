//finish

/*function finish () {
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

}*/

//finish

function finish () {

    console.log("ll")
music.playTone(Note.C, music.beat(BeatFraction.Whole))


let lgl = 0
radio.onReceivedString((str: string) => {
    console.log(str)
    basic.clearScreen()
    music.playTone(Note.E, music.beat(BeatFraction.Whole))
    if (str == "callig") {
        lgl = getCalibrate(3000)
    } else if (str == "start") {
        awaitRun(lgl)
    }
})

}

let awaitRun = function (light : number) {
    while (Math.abs(input.lightLevel() - light) < 30) { console.log(input.lightLevel()) }
    music.playTone(Note.D, music.beat(BeatFraction.Whole))
    console.log("fin")
    radio.sendString("finish")
}

radio.onReceivedValue((str:string, num:number) => {
    if (str = "show") {
        basic.showNumber(num, 300)
        lastData = num
    }
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    basic.showNumber(lastData, 300)
})
