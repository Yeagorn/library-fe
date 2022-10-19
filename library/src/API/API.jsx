module.exports = {
    Log: async function (user, pwd) {
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": user, "password": pwd })
        };

        const result = await fetch("https://books-library-dev.herokuapp.com/api/user/login", reqOptions)
        const rJs = await result.json()
        const data = rJs
        if (data.token) {
            localStorage.setItem("user", JSON.stringify({ token: data.token }))
            return true;
        } else {
            return data.error;
        }

        // https://books-library-dev.herokuapp.com/api/user/login
    },

    Reg: async function(user, pwd) {
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({"username":user, "password":pwd})
        };
    
        const result = await fetch("https://books-library-dev.herokuapp.com/api/user/register", reqOptions)
        const rJs = await result.json()
        return rJs;
    },


    initLibrary: async function() {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user && user.token) {
            const reqOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + user.token},
            };
            
            const result = await fetch("https://books-library-dev.herokuapp.com/api/book", reqOptions)
            const variable = await result.json()
            return variable
        }
    },

    getBook: async function(id) {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user && user.token) {
            const reqOptions = {
                method: "GET",
                headers: {'Content-Type': 'application/json', 'Authorization' : `Bearer ${user.token}`}
            };

            const res = await fetch("https://books-library-dev.herokuapp.com/api/book/"+id, reqOptions)
            const variable = await res.json()
            return variable
        }
    }
}