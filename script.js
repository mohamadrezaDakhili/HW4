// answer One question
function convertDate() {
    let persianDate = moment(document.getElementById("test").value)
    .locale("fa")
    .format("YYYY/M/D"); // 1367/11/4
    document.getElementById("persianDate").innerHTML ="Persian Date :" + persianDate;
}