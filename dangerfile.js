const { danger, fail } = require("danger");
const includes = require("lodash.includes");

const hasCHANGELOGChanges = includes(danger.git.modified_files, "CHANGELOG.md")
const hasLibraryChanges = danger.git.modified_files.filter(path => path.startsWith("src/"))
if (hasLibraryChanges.length > 0 && !hasCHANGELOGChanges) {
  fail("This pull request may need a CHANGELOG entry.")
}
