const { Parser } = require("json2csv");
const swaggerData = require("./swagger-output.json");

const { paths } = swaggerData;
let url = "";
let type = "";
let category = "";

async function getSwaggerData(pathsObj) {
  const dataList = [];
  for (let path in pathsObj) {
    for (let method in pathsObj[path]) {
      url = path;
      type = method;
      category = pathsObj[path][method].tags[0];
      dataList.push({
        category,
        url,
        type,
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
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(swaggerMethodsData);
    console.log(csv);
  })();
} catch (error) {
  console.error(error);
}
