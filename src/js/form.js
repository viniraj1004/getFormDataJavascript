//Collecting from data
//how to collect data from text boxes
function getFormData() {
    let fname = document.getElementById('fname').value;
    console.log(fname);

    let lname = document.getElementById('lname').value;
    console.log(lname);

    let email = document.getElementById('email').value;
    console.log(email);

    //getting selected value from adropdown list
    let state = document.getElementById('state').value;
    console.log(state);

    //getting value of checked radio button
    let gender = document.querySelector('input[name="gender"]:checked').value
    console.log(gender);

    //selecting all checked checkboxes
    let hobbies = [];
    let checkboxes = document.getElementsByName('hobbies');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);

        }
    }
    console.log(hobbies);

    let formData = {
        "fname": fname,
        "lname": lname,
        "email": email,
        "state": state,
        "gender": gender,
        "hobbies": hobbies
    };
    console.log(formData);
    let outelement = document.getElementById('json');
    outelement.innerHTML = JSON.stringify(formData)
}