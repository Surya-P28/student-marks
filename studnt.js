function calculateResult() {
    var name = document.getElementById("studentName").value;
    var subject1 = Number(document.getElementById("subject1").value);
    var subject2 = Number(document.getElementById("subject2").value);
    var subject3 = Number(document.getElementById("subject3").value);
    var subject4 = Number(document.getElementById("subject4").value);
    var subject5 = Number(document.getElementById("subject5").value);

    var total = subject1 + subject2 + subject3 + subject4 + subject5;
    var average = total / 5;
    var grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    document.getElementById("output").innerHTML =
        "Student Name: " + name + "<br>" +
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average + "<br>" +
        "Grade: " + grade;
}