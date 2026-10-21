#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 || -z "${1}" ]]; then
	echo "Usage: ./rename.sh <plugin-name>"
	exit 1
fi

NAME="$1"

# Work from the script's directory so it can be invoked from anywhere
cd "$(dirname "$0")"

# 1. Replace all lowercase instances of "quickstart" with the new name
grep -rl --exclude-dir=.git --exclude-dir=node_modules 'quickstart' . | while read -r file; do
	sed -i "s/quickstart/${NAME}/g" "$file"
done

# 2. Prompt for the display name
read -rp "Enter plugin display name: " DISPLAY_NAME
if [[ -z "${DISPLAY_NAME}" ]]; then
	echo "No display name provided, aborting."
	exit 1
fi

# 3. Replace all capitalized instances of "Quickstart" with the display name
grep -rl --exclude-dir=.git --exclude-dir=node_modules 'Quickstart' . | while read -r file; do
	sed -i "s/Quickstart/${DISPLAY_NAME}/g" "$file"
done

# 4. Remove any language folder that isn't en-GB
if [[ -d languages ]]; then
	find languages -mindepth 1 -maxdepth 1 -type d ! -name 'en-GB' -exec rm -rf {} +
fi

# 5. Rename the admin template (preserve the .tpl suffix)
TPL="templates/admin/plugins/${NAME}.tpl"
if [[ -f "templates/admin/plugins/quickstart.tpl" ]]; then
	mv "templates/admin/plugins/quickstart.tpl" "$TPL"
fi

# 6. Reset the package version to 0.0.0
sed -i 's/"version": ".*"/"version": "0.0.0"/' package.json

# 7. Start a fresh git history and remove this script
rm -rf .git
git init
rm "$(dirname "$0")/rename.sh"

echo "Done. Renamed plugin to '${NAME}' with display name '${DISPLAY_NAME}'."
