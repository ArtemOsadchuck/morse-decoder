const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let space = ["**", "**", "**", "**", "**"]
    let result = []
    let lastresult = []

    let expr10 = expr.match(/.{1,10}/g)

    for (let i = 0; i < expr10.length; i++) {
        expr10[i] = expr10[i].match(/.{1,2}/g)
    }

    for (let i = 0; i < expr10.length; i++) {
        if (expr10[i] !== space) {

            for (let k = 0; k <= expr10[i].length; k++) {
                if (expr10[i][k] === "00") {
                    // console.log("fooooooooood")
                    expr10[i].splice(0, 1)
                    k = -1
                }
            }

        }

    }

    for (let i = 0; i < expr10.length; i++) {
        if (expr10[i] == ["**", "**", "**", "**", "**"]) {
        }
        else if (expr10[i] !== 0) {

            for (let k = 0; k <= expr10[i].length; k++) {
                if (expr10[i][k] === "10") {
                    // console.log("fooooooooood")
                    expr10[i][k] = "."
                    result.push(".")

                } else if (expr10[i][k] === "11") {
                    expr10[i][k] = "-"
                    result.push("-")
                } else if (expr10[i][k] === "**") {
                    expr10[i][k] = " "
                    result.push(" ")
                }




            }

        } else if (expr10[i] === space) { result.push(" ;ojih") }


    }



    for (let i = 0; i < expr10.length; i++) {
        expr10[i] = expr10[i].join("")

    }

    console.log(result)

    // ==========================================================================================================

    let superLastResult = []


    for (let i = 0; i <= expr10.length; i++) {
        for (let [key, value] of Object.entries(MORSE_TABLE)) {
            if (key === expr10[i]) {
                superLastResult.push(value)
            } else if (expr10[i] === "     ") {

                superLastResult.push(" ")
            }
        }

    }
    let lastestSsuperResult = superLastResult.join("").replace(/ +/g, ' ').trim()

    // ==========================================================================================================


    return lastestSsuperResult
}


module.exports = {
    decode
}