// 1 ----------------------------------------------------------
// let arr1 = [1, 2, 2, 3];
// let arr2 = [3, 2, 1, 2];
// console.log(arr1.sort((a, b) => a - b).join(' ') === arr2.sort((a, b) => a - b).join(' '));

// 2 -----------------------------------------------------------
// let arr = [4, 2, 9, 7, 5]
// let n = 3
// let newArr = arr.sort((a, b) => b - a)
// console.log(newArr[n - 1])

// 4 ------------------------------------------------------------

// let arr = ["flower", "flow", "flight"]
// let firstWord = arr[0]
// let prefix = ""

// for (let i = 0; i < firstWord.length; i++) {
//     let newSlice = firstWord.slice(0, i + 1)

//     for (let j = 0; j < arr.length; j++) {
//         if (!arr[j]?.startsWith(newSlice)) {
//             prefix += firstWord.slice(0, i)
//             console.log(prefix)
//             return
//         }
//     }
// }

// console.log(prefix)


// 5 ------------------------------------------------------------
// let arr = [3, 3, 1, 3, 1]
// let newArr = []

// arr.forEach((i) => {
//     if (!newArr.includes(i)) {
//         newArr.push(i)
//     }
// })

// console.log(newArr.length === 2)
