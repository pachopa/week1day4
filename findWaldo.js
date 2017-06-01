function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
  arr.forEach(function(item, index, arr) {
    //console.log(item, index, arr);
    //console.log(item[index]);
    if(item === "Waldo") {
        found(index);
    }
  })
}

function actionWhenFound(i) {
  console.log("Found him! at index" + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
