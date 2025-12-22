let email = "landrych05@gmail.com";

function username(email) {
    return email.slice(1,email.indexOf('@') - 1);
}

function maskEmail(email){
    return email.replace(username(email), "*".repeat(username(email).length));
}

console.log(maskEmail(email));