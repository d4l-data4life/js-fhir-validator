const fs = require("fs");
const { execSync } = require("child_process");

process.stdout.write("Compressing files\n");
["r4", "stu3"].forEach(fhirVersion => {
  process.stdout.write(`\nFHIR version ${fhirVersion}\n`);
  const jsDirectory = `${__dirname}/../${fhirVersion}/js/`;
  const jsFiles = fs.readdirSync(jsDirectory);

  jsFiles.forEach((jsFile, index) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Current progress: [${index + 1}/${jsFiles.length}]`);
    execSync(
      `terser ${jsDirectory}${jsFile} --output ${jsDirectory}${jsFile}`
    );
  });
});

process.stdout.write(`\nCompressing index.js\n`);
execSync(
  `terser ${__dirname}/../index.js --compress --output ${__dirname}/../index.js`
);
process.stdout.write(`\nCompression done.\n`);
