const arr =['a','e','i','o','u']
function count(str) {
            let counter = 0;
            if (str.length == 0 || str.length > 8) {
                console.log('error','enter a 8 or less character word')
            
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            counter++;
            return counter;

        }
    }
    
}

console.log(count('code'));
}