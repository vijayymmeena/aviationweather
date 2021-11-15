import fs from "fs";

function argPath(search) {
  const findPathArg = process.argv.find((arg) => arg.includes(`--${search}=`));
  if (!findPathArg) {
    return undefined;
  }

  return findPathArg.replace(`--${search}=`, "");
}

const path = argPath("path");
const module = argPath("module");

if (!path || !module) {
  console.log("--path, --module are required args");
} else if (module !== "cjs" && module !== "esm") {
  console.log("Invalid module, valid values are: cjs, esm");
} else {
  fs.writeFileSync(
    path + "/package.json",
    module === "cjs" ? '{"type":"commonjs"}' : '{"type":"module"}'
  );

  console.log("postbuild completed...");
}
