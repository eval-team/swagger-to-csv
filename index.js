const { Parser } = require("json2csv");
const fastCsv = require("fast-csv");
const fs = require("fs");

const swaggerData = require("./swagger-output.json");

const { paths } = swaggerData;
let url = "";
let type = "";
let category = "";
let description = "";

async function getSwaggerData(pathsObj) {
  const dataList = [];
  for (let path in pathsObj) {
    for (let method in pathsObj[path]) {
      url = path;
      type = method;
      category = pathsObj[path][method].tags[0];
      description = pathsObj[path][method].description;
      dataList.push({
        category,
        type,
        url,
        description,
      });
    }
  }
  return dataList;
}

function start() {
  return getSwaggerData(paths);
}

try {
  (async () => {
    const swaggerMethodsData = await start();
    const ws = fs.createWriteStream("swaggerData.csv");
    fastCsv
      .write(swaggerMethodsData, { headers: true })
      .on("finish", function () {
        console.log("Write to CSV successfully!");
      })
      .pipe(ws);
  })();
} catch (error) {
  console.error(error);
}
