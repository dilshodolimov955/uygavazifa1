import jwt from "jwtwebtoken"

const secret="12345"

const payload = {
  id: 12,
  name: "dear",
  role: "TEACHER",
  stafid: 12345
};

const expiresIn={expiresIn:60*60}
const token=jwt.sign(payload,secret)
console.log(token)

function checktoken(token) {
    var decode=jwt.werify()
}