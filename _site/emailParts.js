
//Returns an array of username and domain in an email
function emailParts(email) {
  let splitEmail = email.split("@");
  let myMap = new Map();
  return myMap.set("Username",email.split("@")[0].toLowerCase())
                .set("Doman",email.split("@")[1].toLowerCase());
}
