'use strict';

//1) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які починаються на http://
let stringsHref = [
"http://example.com&quot;",
"https://openai.com&quot;",
"ftp://website.com&quot;",
"http://google.com&quot;",
"https://stackoverflow.com&quot;",
"http://github.com&quot;",
"http://youtube.com&quot",
"https://wikipedia.org&quot;",
"ftp://server.net&quot;",
"http://facebook.com&quot;",
"https://amazon.com&quot;",
"http://twitter.com&quot;",
"https://linkedin.com&quot;",
"ftp://host.com&quot;",
"http://reddit.com&quot;",
"https://medium.com&quot;"
];



const searchTextStart = "http://";

//це такий метод знайшов 
const filteredStringsHref = stringsHref.filter(item => item.startsWith(searchTextStart));
stringsHref = filteredStringsHref.slice();
console.log(stringsHref);

// так на початку зробив 
/*const  filteredStringsHref  = stringsHref.filter(item => item.includes(searchTextStart));
stringsHref = filteredStringsHref.slice();
console.log(stringsHref);*/



// 2) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які закінчуються на .html
let fileNames = [
"index.html",
"styles.css",
"script.js",
"about.html",
"contact.html",
"home.html",
"blog-post-1.html",
"blog-post-2.html",
"services.html",
"portfolio.html",
"projects.html",
"gallery.html",
"faq.html",
"terms.html",
"privacy-policy.html"
];

const searchTextEnd = ".html";
const newFileNames = fileNames.filter(item => item.endsWith(searchTextEnd));
fileNames = newFileNames.slice();
console.log(fileNames)

// 3) Дан рядок: 'abcde abcde abcde abcde'. Замініть у ній перший символ кожного слова на '!'
const str = 'abcde abcde abcde abcde';
const arrStr = str.split(" ").map(word => '!' + word.slice(1));
const result = arrStr.join(' ');
console.log(result);

// 4) Створіть функцію, яка приймає рядок і повертає кількість голосних літер у ньому.
const letters = ['a', 'e', 'i', 'o', 'u','y'];
const test = 'checking for vowels in a sentence';

function getVowelCount(str, letters) {
    if(typeof str !== 'string') {
        return 'data is invalid';
    }
    if (str === null) {
        return 'data is invalid (null)'; 
    }
    const newStr = str.toLocaleLowerCase();
    let count = 0;
    for (let key of str) {
        if (letters.includes(key)) {
            count++;
        }
    }
    return count;
}
console.log(getVowelCount(test, letters));

// 5) Створіть функцію, яка перевіряє, чи є рядок паліндромом.
const stringTest = 'akak a ka k a';

function palindrome(string) {
    string = string.toLowerCase().replace(/[\W_]/g, '');
    let stringReverse = string.split('').reverse().join('');
    if (stringReverse === string) {
        return `'${string}' - is a palindrome`;
    } return `'${string}' - is NOT a palindrome!`;
}
console.log(palindrome(stringTest));

// *6) Створіть функцію, яка знаходить найдовше слово у рядку і повертає його.
const strTest = 'I sometimes discuss her style and ideas with my sister. Literature, cooking, TV — I have a lot of topics to talk about and make new friends.';

function wordLongest(string) {
    return string.split(' ').reduce((longest, string) => string.length > longest.length ? string : longest, '');
}
console.log(wordLongest(strTest));