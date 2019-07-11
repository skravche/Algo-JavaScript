//вбудовані методи масивів JS

//split
//розбивае строку на массив по розділювачу split(', ', 2)  2 кількість ел. в массиві
var names = "Srg, Volk, Tolik, Butka";
var arr = names.split(", ");
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}
//декілька аргументів через split
var name_next = names.split(", ", 3);
for (let i = 0; i < name_next.length; i++) {
  //  console.log(name_next[i]);
}
//по буквам
var abc = names.split("");
for (let i = 0; i < abc.length; i++) {
  //  console.log(abc[i]);
}

//метод Join
//преобразовует елементьі массив в стоку через разделитель
const arr_j = ["First", "Second", "Third", "Four"];
const arr_jj = arr_j.join(";");
//console.log(arr_jj);
//console.log(new Array(4).join("repeat")); //will be repeat 3 times

//delete  delete arr[1] will be delete element index 1
const arr_d = ["this", "will", "be", "deleted"];
delete arr_d[2];
console.log(arr_d);
// shift удалит с начала
// pop удалит с конца
// splice из серединьі

// splice
