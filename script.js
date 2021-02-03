const $submit = document.getElementById("sub_form")
$submit.onclick = sendAnswer

function sendAnswer() {
    const $fname = document.getElementById("fname")
    const $lname = document.getElementById("lname")
    const $country = document.getElementById("country")
    const $subject = document.getElementById("subject")
    const answer = $fname.value 
    const answer2 = $lname.value
    const ans3 = $country.value 
    const ans4 = $subject.value  

    fetch("/form",{
        method: "POST",
        body: JSON.stringify({answer, answer2, ans3, ans4}),
        headers: {
            "Content-Type":"application/json"
        }
    })
}