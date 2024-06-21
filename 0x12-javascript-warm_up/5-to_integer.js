const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide at least one argument.");
} else {
    const firstArg = args[0];
    const number = parseInt(firstArg, 10);

    if (isNaN(number)) {
        console.log("Not a number");
    } else {
        console.log(`My number: ${number}`);
    }
}
