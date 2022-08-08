// You need to create a function that receives as a parameter an array of ints and that returns the first positive number that is not in that list

// [-5, 1, 2, 4] -> 3


let ints = [-5, 9, 94, 2, 1, 4, 3]


function fistPosiNum(...args) {
    let found = 1
    while (ints.includes(found)) {
        found++
    }
    console.log('first positive number :>> ', found);
}
fistPosiNum(ints)


// A function that receives a number between 1 and 200000 as a parameter and it returns a string of random letters with the length that you receive as a parameter.the sum of those random letters needs to be even(A = 1, B = 2, etc)

// 1 -> A

// 2 -> AB

// 3 -> AAA




//! A = 1    B = 2
function randomLetters(num) {
    for (let i = 1; i < num + 1; i++) {
        let array = []
        function getRandomArbitrary(i, min = 1) {

            let randomNum = Math.floor(Math.random() * (i - 1) + 1)
            if (!(randomNum % 2)) {
                randomNum = randomNum - 1
            }
            return randomNum
        }
        let oddNum = getRandomArbitrary(i)
        let evenNum = i - oddNum

        let numA = "A".repeat(oddNum).split("")
        let numB = "B".repeat(evenNum).split("")
        numA.push(...numB)
        const shuffledArray = numA.sort((a, b) => 0.5 - Math.random());
        console.log(`${i} :>>`, shuffledArray);

    }
}
randomLetters(200)