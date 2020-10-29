const fs = require("fs");
const { execSync } = require("child_process");

const fhirVersion = process.argv.slice(2).includes("stu3") ? "stu3" : "r4";
const jsDirectory = `${__dirname}/../${fhirVersion}/js/`;
const jsonDirectory = `${__dirname}/../${fhirVersion}/json/`;

if (!fs.existsSync(jsDirectory)) {
  fs.mkdirSync(jsDirectory, { recursive: true });
}

fs.readdir(jsonDirectory, (err, files) => {
  files.forEach(file => {
    const jsFileName = file.replace("json", "js");
    execSync(
      `npx ajv compile -s ${jsonDirectory}${file} -o ${jsDirectory}${jsFileName}`
    );
  });
});
