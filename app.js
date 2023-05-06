console.log("Hello World!\n==========\n");

// Exercise 1 Section

// const numbers = [2, 22, 12, 17, 18, 39, 129];

// function arraySum(arr) {
//     let sum = 0;
//     numbers.forEach((number) => {
//         sum += number;
//     });
//     return sum;
// }

// console.log(arraySum(numbers));


// Exercise 2 Section





// let favBook = {};

// favBook.title = "The Lord of the Rings";
// favBook.author = "J.R.R. Tolkien";
// favBook.pageCount = 1241;
// favBook.readCount = 5;

// console.log(favBook);

// favBook.info = function() {
//     return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
// };

// console.log(favBook.info());

// Exercise 3 Section

// let sentence = "The quick brown fox jumps over the lazy dog";

// function reverseWords(sentence) {
//         let result = [];
//         // Identify the words based on spaces
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         let letters = words[i].split(""); //example "The" => ["T", "h", "e"]
//         letters.reverse(); // ex ["e", "h", "T"]
//         let reverseWord = letters.join("");
//         result.push(reverseWord); // adds the given value to the end of the array
//     }
//     return result.join(" ");
// }

// console.log(reverseWords(sentence));

//What we're doing is iterating over every word, after we split it into words, then individualizing every character in every word with a split, then combining the characters to words, and then words to a sentence again for the output.


// Exercise 4 Section


let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    // Determine headers from the first row/line or the data
    // split the header string to an array of headers
    let headers = data.slice(0, data.indexOf("\n")).split(","); // "name,age" ["name", "age"] split the names of the headers on every comma
    //Determine the row data
    let valuesList = csvData.slice(data.indexOf("\n") + 1).split("\n"); // an array of every line

    const output = valuesList.map((row) => {
        // Separate the values into array values
        let values = row.split(",");
        let obj = {};
        
        values.forEach((value, idx) => {
            if  (idx < headers.length) {
                obj[headers[idx]] = value;
            } else {
                obj[`misc${idx - headers.length + 1}`] = value;
            }    
        });
        return obj;
    });
    return output;
}

console.log(csvConverter(csvData));






//     let result = [];
//     let words = csvData.split(",");
//     for (let i = 0; i < csvData.length; i++) {

//     }
//     return result.join();
// }