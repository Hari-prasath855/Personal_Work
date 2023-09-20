const A = [0, 20, 43, 31, 89, 56, 61, 49, 70, 99, 33];
const N = 10;

//Creating a matrix with landmines
function createMatrix(M,X,Y) {

    const matrix = Array.from(Array(X+1), () => new Array(Y+1).fill(true));
    let ox = new Array();
    let oy = new Array();

    //Decoding hidden message
    for(let j=0;j<=N;j++){
        ox[j] = Math.floor(A[j] / M);
        oy[j] = Math.floor(A[j] % M);
    }

    let index=0;

    // Marking the landmines in the matrix
    for(let row=0; row<=X; row++) {
        for(let col=0; col<=Y; col++) {
            if(ox[index]<=X && oy[index]<=Y) {
                matrix[ox[index]][oy[index]] = false
            }
            index++;
        }
    }
    return matrix;
}

//Finding path and Storing it in the path variable
function findPath(matrix,i,j,x,y,path) {
    if(i===x && j===y){
        path.push([i, j]);
        return true;
    }

    if(i>=0 && i<=x && j>=0 && j<=y && matrix[i][j]===true) {

        if(findPath(matrix,i+1,j,x,y,path)) {
            path.push([i, j]);
            return true;
        }

        if(findPath(matrix,i,j+1,x,y,path)) {
            path.push([i, j]);
            return true;
        }
    }
    return false;
}

const prompt = require('prompt-sync')();
  
let M = Number(prompt('Enter the M value that lies between 5 and 10 : '));
let X = Number(prompt('Enter the X value : '));
let Y = Number(prompt('Enter the Y value : '));
let matrix = createMatrix(M,X,Y);
let path = [];

if (findPath(matrix, 0, 0, X, Y, path)) {
    console.log(path.reverse());
} else {
    console.log('NO');
}
