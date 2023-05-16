function createJoke(){
    const URL = 'https://v2.jokeapi.dev/joke/Programming';
    const element = document.getElementById('root');
    
    let joke;
    axios.get(URL).then((res) => {
        if (res.data["type"] == 'single') {
            element.innerText = res.data['joke'];
            console.log(res.data['joke'])
        } else {
            joke = `Setup: ${res.data['setup']} \nDelivery: ${res.data['delivery']}`;
            element.innerText = joke;
            console.log(`Setup: ${res.data['setup']} \n${res.data['delivery']}`)
        }
    }).catch((err) => console.log(err));
}

function more(){
    createJoke();
}