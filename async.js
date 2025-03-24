const token = ~~[Math.random() * 12345678]
const pictures = ["1.jpg, 2jpg, 3.jpg"]

function login(username, callback) {
    console.log('processing token user now...')
    setTimeout(() => {
        callback (token, username)
    }, 200)
}

function getUser(token, callback) {
    console.log('processing apikey now...')
    if(token) {
        setTimeout(() => {
            callback({apiKey: "xkey123"})
        }, 500)
    }

}

function getPictures(apiKey, callback) {
    console.log('processing pictures now...')
    if(apiKey)
    setTimeout(() => {
    callback ({pic : pictures})
}, 1500)
}

login("aufa_alfirdausi", function(response){
    const token = response
    getUser(token, function(response){
        const {apiKey} = response
        getPictures(apiKey, function(response) {
            const {pic} = response
            console.log(pic)
        }) 
    })
})