var express = require('express'),
app = express(); 

app.use(express.static("public"))
app.use(express.json())

app.post("/form", (request, response) => {
    const answer = request.body.answer
    const answer2 = request.body.answer2
    const ans3 = request.body.ans3
    const ans4 = request.body.ans4
    console.log("First Name: " +answer)
    console.log("Last Name: " +answer2)
    console.log("Country: " +ans3)
    console.log("Subject: " +ans4)
})

app.use('/', express.static(__dirname + '/'));
app.listen(8080);