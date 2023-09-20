// function to find seats for a group of friends
function findSeats(N, K, M) {

    // Checking if the number of friends is greater than the total seats available in a row
    if (N>M) {
      console.log('Invalid Input');
      return;
    }
  
    // Creating a 2D array to represent the seat and initialized with 0(empty).
    const seat = Array.from(Array(K), () => new Array(M).fill(0));
  
    //To get a consecutive empty seats
    for (let row = 0; row < K; row++) {
      let seats = 0;
      let emptySeats = [];
      for (let col = 0; col <= M; col++) {
        if (seats === N) {
          console.log(`The group of ${N} friends can sit together in ${emptySeats.join(', ')}`);
          return;
        }
        if (seat[row][col] === 0) {
          seats += 1;
          seat[row][col] = 1;
          emptySeats.push(String.fromCharCode('A'.charCodeAt(0) + row) + (col + 1));
        } else {
          seats = 0;
          emptySeats = [];
        }
      }
    }

    console.log("There are no rows with enough seats to accommodate the group.");
  }
  
  const prompt = require('prompt-sync')();
  
  let N = Number(prompt('Enter the number of friends: '));
  let K = Number(prompt('Enter the row : '));
  let M = Number(prompt('Enter the column: '));
  
  findSeats(N, K, M);
