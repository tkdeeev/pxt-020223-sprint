// Add your code here
    function loading (time:number) {
        let max = time / 200
        for (let i = 0; i < time; i++) {
            basic.showIcon(IconNames.Square)
            basic.pause(100)
            basic.showIcon(IconNames.SmallSquare)
            basic.pause(100)
        }
    }
    function calibrate () : number {
        radio.sendString("callig")
        return getCalibrate(3000)
    }
    function getCalibrate(time: number): number {
        //Assets.loading(5000)
        let calibrateSum = 0
        for (let i = 0; i < time; i += 20) {
            basic.pause(20)
            calibrateSum += input.lightLevel()
        }
        return (calibrateSum / (time / 20))
    }

function startCount() {
    basic.showIcon(IconNames.Surprised)
    music.playTone(Note.C3, music.beat(BeatFraction.Half))
    basic.pause(2000)

    basic.showNumber(3)
    music.playTone(Note.C4, music.beat(BeatFraction.Half))
    basic.pause(500)

    basic.showNumber(2)
    music.playTone(Note.C4, music.beat(BeatFraction.Half))
    basic.pause(500)

    basic.showNumber(1)
    music.playTone(Note.C4, music.beat(BeatFraction.Half))
    basic.pause(500)

    basic.showIcon(IconNames.Target)
    music.playTone(Note.C5, music.beat(BeatFraction.Whole))

    radio.sendString("start")

    return control.millis()
}

