const { danger, fail, warn } = require("danger");
const includes = require("lodash.includes");

const hasCHANGELOGChanges = includes(danger.git.modified_files, "CHANGELOG.md")
const hasLibraryChanges = danger.git.modified_files.filter(path => path.startsWith("src/"))
console.log("hasLibraryChanges", hasLibraryChanges);
if (hasLibraryChanges && !hasCHANGELOGChanges) {
  warn("This pull request may need a CHANGELOG entry.")
}
