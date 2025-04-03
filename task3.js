//Question 1
let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Assam"];
let filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);


//Question 2
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr);  // Output: 'India my love I'


//Question 3
let arr = ['I', 'N', 'D', 'I', 'A'];
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log(arr.join(''));  // Output: 'INDONESIA'


//Question 4
function countVowelsAndConsonants(str) {
    let vowels = str.match(/[aeiouAEIOU]/g) || [];
    let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
    
    console.log(`Vowels: ${vowels.length}, Consonants: ${consonants.length}`);
}

let text = "JavaScript is a powerful programming language.";
countVowelsAndConsonants(text);


//Question 5
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

let sentence = "I am lerning JavaScript.";
console.log(correctfn(sentence, "lerning", "learning"));  // Output: "I am learning JavaScript."


//Question 6
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = inputArr.filter(num => num > 5);
console.log(result);  // Output: [9, 10, 7]


//Question 7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const marks = students.map(student => {
    let average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average };
});

console.log(marks);

//Question 8
function digitSum(n) {
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return n;
}

console.log(digitSum(456)); // Output: 6


//Question 9
function wordCount(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

let paragraph = "JavaScript is a powerful programming language.";
console.log(wordCount(paragraph)); // Output: 6


//Question 10
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); // Output: "olleH"


//Question 11
const candidates = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const results = Object.fromEntries(
    Object.entries(candidates).map(([student, subjects]) => {
        const scores = Object.values(subjects);
        const average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length);
        return [candidates, { average }];
    })
);

console.log(results);

