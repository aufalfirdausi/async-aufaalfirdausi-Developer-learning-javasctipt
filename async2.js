const token = ~~[Math.random() * 12345678]
const pictures = ["1.jpg, 2jpg, 3.jpg"]

function login(username) {
    console.log('processing token user now...')
    return new Promise((succses, failed) => {
        setTimeout(() => {
            if(username != "aufa_alfirdausi") failed("username worng!")
            succses( {token})
        }, 200)
    })
    
}

function getUser(token) {
    console.log('processing apikey now...')
    return new Promise((succses, failed) => {
        if(!token) failed("do not get token!") 
            setTimeout(() => {
            succses ({apiKey: "xkey123"})
            }, 500)
    })
    

}

function getPictures(apiKey) {
    console.log('processing pictures now...')
    return new Promise((succses, failed) => {
        if(!apiKey) failed("no apikey")
            setTimeout(() => {
            succses ({pic : pictures})
        }, 1500)
    })
    
}

async function userDisplay() {
    const {token} = await login('aufa_alfirdausi')
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey);

    console.log(`
        token anda adalah: ${token}
        apikey anda adalah: ${apiKey}
        hasil request gambar: ${pic}
        `)
}

userDisplay()


