
N=$;

N("#btn_Validation").click(function () {
    var values =$("#txtTell").val();
    console.log(values);
    var regexp= /\d{3}-\d{7}/;//reg
    var result = regexp.test(values);
    if (result){
        alert("Number is Valid");
    } else{
        alert("Number is Invalid");

    }
});