// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

for(let i = 5 ; i>=1 ; i--){

    for(let k = 5-i ; k>=1 ; k--){
        process.stdout.write(" ");
    }

    for(let j = 2*i-1 ; j>=1 ; j--){
        process.stdout.write("*");
    }

    for(let k= 5-i ; k>=1  ; k--){
        process.stdout.write(" ");
    }


    process.stdout.write("\n");
}