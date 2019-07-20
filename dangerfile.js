import { danger, fail, warn } from "danger"
import includes from "lodash.includes"
import first from "lodash.first"

const hasCHANGELOGChanges = includes(danger.git.modified_files, "CHANGELOG.md")
const hasLibraryChanges = first(danger.git.modified_files, path => path.startsWith("src/"))
if (hasLibraryChanges && !hasCHANGELOGChanges) {
  warn("This pull request may need a CHANGELOG entry.")
}
