if (localStorage.birthdayList) {
    var birthdays = JSON.parse(localStorage.birthdayList);
} else {
    var birthdays = []
}
function logBirthday() {
    var newInfo = {
        firstName: $("form").serializeArray()[0].value,
        lastName: $("form").serializeArray()[1].value,
        age: $("form").serializeArray()[2].value.substring(5),
    };
    birthdays.push(newInfo);
    localStorage.setItem("birthdayList", JSON.stringify(birthdays));
}

function checkBirthday() {
    event.preventDefault();
    var birthdays = JSON.parse(localStorage.birthdayList);
    var dateQuery = $("input[name='dateQuery']").val().substring(5);
    for (var i = 0; i < birthdays.length; i++) {
        if (dateQuery == birthdays[i].age) {
            $("#record-birthdays").css("display", "block");
            $("#record-birthdays").append("<li>" + birthdays[i].firstName + " " + birthdays[i].lastName + "</li>");
        }
    }
}
