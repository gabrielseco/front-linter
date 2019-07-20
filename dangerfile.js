const { danger, fail, warn } = require("danger");
const includes = require("lodash.includes");
const first = require("lodash.first");

const hasCHANGELOGChanges = includes(danger.git.modified_files, "CHANGELOG.md")
const hasLibraryChanges = first(danger.git.modified_files, path => path.startsWith("src/"))
console.log("hasLibraryChanges", hasLibraryChanges);
if (hasLibraryChanges && !hasCHANGELOGChanges) {
  warn("This pull request may need a CHANGELOG entry.")
}
