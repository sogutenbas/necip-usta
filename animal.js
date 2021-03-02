let ranch = ["inek" , "tavuk", "domuz","koyun"]  // Ciftlikteki hayvanlari tanimladim
var toplam;
// Ciftlikteki sahibinin hayvan sayilarini girmesini istedim
inek=prompt("Ciflikteki inek sayisini giriniz") 
tavuk=prompt("Ciflikteki tavuk sayisini giriniz")
domuz=prompt("Ciflikteki domuz sayisini giriniz")
koyun=prompt("Ciflikteki koyun sayisini giriniz")
document.write("Cok musluman necip abimin dukkani icin domuz haric toplam ayak sayisi:<br><br>")
// Sadece Necip Ustanin istedigi ayak sayinisi ekrana yazdirdim
toplam=(Number(inek)*4)+(Number(tavuk)*2)+(Number(koyun)*4);
document.write(toplam);
