//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

for(let i = 1 ; i<=5 ; i++){

    for(let k = 1 ; k<=5-i ; k++){
        process.stdout.write(" ");
    }

    for(let j = 1 ; j<=2*i-1 ; j++){
        process.stdout.write("*");
    }

    for(let k = 1 ; k<=5-i ; k++){
        process.stdout.write(" ");
    }

    process.stdout.write("\n");

}

    for(let i=4 ; i>=1 ; i--){

        for(let k = 5-i ; k>=1 ; k--){
            process.stdout.write(" ");
        }
    
        for(let j = 2*i-1 ; j>=1 ; j--){
            process.stdout.write("*");
        }

        for(let k = 5-i ; k>=1 ; k--){
            process.stdout.write(" ");
        }

            process.stdout.write("\n");
    }


