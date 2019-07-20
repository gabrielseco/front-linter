const hasChangelog = includes(danger.git.modified_files, "CHANGELOG.md")

if (!hasChangelog) {
  warn("Please add a changelog entry for your changes.")
}