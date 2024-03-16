var users = [
    {
        username: "warn",
        password: "yeah"
    }
]

function get_info() {

    location.href = "profile.html";

    var username = document.getElementById("username_login").value
    var password = document.getElementById("password_login").value

    for(i = 0; i < users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
            console.log("You're in")
            return
        } else {
            console.log("Nope")
        }
    }
}

function input_info() {

    location.href = "profile.html";

    var i_username = document.getElementById("username_signup").value
    var i_password = document.getElementById("password_signup").value

    users.push({
        username: i_username,
        password: i_password
      });
    
    console.log(users)
}