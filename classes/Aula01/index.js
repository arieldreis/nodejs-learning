import fs from 'fs';

// const textIn = fs.readFileSync('classes/Aula01/txt/input.txt', 'utf8');

// const textOutPut = `This is what we know about the avocado: ${textIn}.\nCreate on ${Date.now()}`;
// console.log(textOutPut);

// Non-blocking, asynchronous way
fs.readFile('classes/Aula01/txt/start.txt', 'utf-8' ,(err, data1) => {
    if(err) return console.log('ERROR!💥');
    fs.readFile(`classes/Aula01/txt/${data1}.txt`, 'utf-8' ,(err, data2) => {
        console.log(data2);
        fs.readFile(`classes/Aula01/txt/input.txt`, 'utf-8' ,(err, data3) => {
            console.log(data3);

            fs.writeFile('classes/Aula01/txt/output.txt', `${data2}\n${data3}` , 'utf-8', err => {
                console.log("Your fille has been written!😊😊")
            });
        });
    });
});

console.log('Will read file!');