const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Please provide two arguments.");
} else {
    const [firstArg, secondArg] = args;
    console.log(`${firstArg} is ${secondArg}`);
}
