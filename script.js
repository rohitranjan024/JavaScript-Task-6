function sortString() {
    var inputString = document.getElementById("inputString").value;
    var sortedString = inputString.toLowerCase().split('').sort().join('');
    document.getElementById("result1").innerHTML = "Sorted String: " + sortedString;
}