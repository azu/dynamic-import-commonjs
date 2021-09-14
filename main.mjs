import("./export.cjs").then(cjs => {
    console.log("cjs", cjs);
});
import("./export_transpiled.cjs").then(cjs => {
    console.log("cjs_transpiled", cjs);
});
import("./export.mjs").then(mjs => {
    console.log("mjs", mjs);
});
