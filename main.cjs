import("./export.cjs").then(cjs => {
    console.log(cjs);
});
import("./export_transpiled.cjs").then(cjs => {
    console.log(cjs);
});
import("./export.mjs").then(mjs => {
    console.log(mjs);
})
