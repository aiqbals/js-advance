function filterNumbersFromArray(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (typeof arr[i] === "string") {
        arr.splice(i, 1);
      }
    }
}
var arr = [1, 'a', 'b', 2];
filterNumbersFromArray(arr);
console.log(arr);