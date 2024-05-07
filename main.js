let name = prompt("Adinizi qeyd edin");
let surname = prompt("Soyadinizi qeyd edin");
let age = prompt("Yasinizi qeyd edin");

if(age <18 ){
    alert("qeydiyyat keçmək üçün yaşınız azdır")
}
else if( age > 18){
    alert("qeydidyyat üçün yaşınız çoxdur")
}
else {
    alert("qeydiyyat uğurla tamamlandı")
}