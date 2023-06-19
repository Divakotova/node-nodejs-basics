const parseArgs = () => {
    const values = [];
    process.argv.forEach((arg, i) => {
        if(arg.slice(0, 2) === '--') {
            values.push(`${arg.slice(2)} is ${process.argv[i+1]}`)
        }
    });
    console.log(values.join(', ')) 
};

parseArgs();