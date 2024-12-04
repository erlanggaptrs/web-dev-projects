        const btnEncrypt = document.querySelector('#encrypt');
        const btnDecrypt = document.querySelector('#decrypt');
        const key = document.querySelector('#key');

        const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        let newText = '';

        btnEncrypt.addEventListener('click', () => {
            const textarea = document.querySelector('#text');
            const keyValue = Number(key.value); /*convert the value of the key to Number (because the keyValue is a string so it needed to 
                                                be converted to a number, so were enable to add and subtract it*/
            for (let letter of textarea.value) { //to get everything we type in the text area 
                letter = letter.toLowerCase();
                if (!listLetters.includes(letter)) { //to check that if the letter that are typed is not inside of the const listLetters, we continue (skip it to the next letter)
                continue 
            }

            const indexLetter = listLetters.findIndex((item) => item === letter); //count the index of the letter that is typed
            let indexNewLetter = indexLetter + keyValue;

            if (indexNewLetter > 25) {
                indexNewLetter -= 26;
            }
            newText += listLetters[indexNewLetter];
            textarea.value = newText;
        }
        newText = '';
        });

        btnDecrypt.addEventListener('click', () => {
            const textarea = document.querySelector('#text');
            const keyValue = Number(key.value); /*convert the value of the key to Number (because the keyValue is a string so it needed to 
                                                be converted to a number, so were enable to add and subtract it*/
            for (let letter of textarea.value) { //to get everything we type in the text area 
                letter = letter.toLowerCase();
                if (!listLetters.includes(letter)) { //to check that if the letter that are typed is not inside of the const listLetters, we continue (skip it to the next letter)
                continue 
            }

            const indexLetter = listLetters.findIndex((item) => item === letter); //count the index of the letter that is typed
            let indexNewLetter = indexLetter - keyValue;

            if (indexNewLetter < 0) {
                indexNewLetter += 26;
            }
            newText += listLetters[indexNewLetter];
            textarea.value = newText;
        }
        newText = '';
        });
