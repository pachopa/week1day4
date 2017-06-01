var words = ["ground", "control", "to", "major", "tom"];

function arrangeArray(word, transformer) {
    var newArray = [];
    word.forEach(function(item, index, array) {
        var transformed = transformer(item, index, array);
        newArray.push(transformed);
    });
    return newArray;
}

var result = arrangeArray(words, function(word) {
  return word.length;
});


console.log(result);

