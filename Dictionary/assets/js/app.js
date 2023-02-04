const formEl = document.querySelector("#form");
const searchInput = document.querySelector("#search__input");
const optionsEl = document.querySelector("#optionsEl");
const nameOptionEl = document.querySelector("#nameOptionEl");
const otherOption = document.querySelector("#other_option");
formEl.addEventListener("submit", funct)

function funct(e) {
    e.preventDefault()
    otherOption.innerHTML = '';
    (() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchInput.value)
            .then(api => api.json())
            .then(data => {
                data.forEach(words => {
                    nameOptionEl.classList = "nameOptionEl";
                    nameOptionEl.textContent = words.word + ' - ' + words.phonetics[1].text.split('/').join('');
                    const lorem = document.createElement('p');
                    otherOption.appendChild(lorem);
                    lorem.textContent = words.meanings[0].definitions[0].definition;
                    lorem.className = "lorem"
                    const voice = document.createElement("audio")
                    otherOption.appendChild(voice)
                    words.phonetics.forEach(aud => {
                        voice.src = aud.audio;
                        voice.setAttribute("controls", "");
                        if (words.meanings[0].definitions[0].example != undefined) {
                            const example = document.createElement('p')
                            otherOption.appendChild(example)
                            example.textContent = "Example" + words.meanings[0].definitions[0].example;
                            example.className = "example"
                        }
                    })
                })
            })
    })()
    searchInput.value = ""
}