# Plugin devcontainer configuration
This Visual Studio Code devcontianer configuration will set up NodeBB, then link and activate the developed plugin to it. The server will rebuild and restart on any changes to the plugin.

Additionally it includes MongoDB tools ([MongoDB Shell (`mongosh`)](https://www.mongodb.com/docs/mongodb-shell/) and [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/)) in case viewing or modifying the database manually is needed.

## Credentials
Default credentials for NodeBB and MongoDB (for `nodebb` database) are simply `nodebb:nodebb` (username:password). MongoDB root user is `root:root`.

## Paths and ports
NodeBB is installed under `/opt/nodebb`. By defualt it should be exposed under port `4567` on your host, however VSCode will choose another port if that one is taken.
MongoDB is using a separate container in the same network. By defualt it should be exposed under port `27017` on your host, however VSCode will choose another port if that one is taken.

The plugin will be mounted under `/workspaces`.

## How to run

### Locally
You can use the [Remote - Containers](vscode:extension/ms-vscode-remote.remote-containers) Visual Studio Code extension and run the `Remote-Containers: Open Folder in Container...` command to select your plugin folder, or use `Remote-Containers: Reopen in Container` if you already have the folder open in VS Code.

### SSH host
You can also self-host a remote container using the [Remote - SSH](vscode:extension/ms-vscode-remote.remote-ssh) extension. See Visual Studio Code documentation [here](https://code.visualstudio.com/docs/remote/containers#_open-a-folder-on-a-remote-ssh-host-in-a-container).

### In Codespaces
Simply select `Codespaces` under the `Code` button in GitHub UI and create a new codespace. Alternatively, run `Codespaces: Create New Codespace` command in Visual Studio Code.

## Quirks

- Currently the only way to restart NodeBB is to activate the grunt file watcher by changing a plugin or NodeBB file
- NodeBB is configured with `http://127.0.0.1:4567` as its URL. Even if it doesn't match the actual URL you use it usually doesn't matter, however it can cause issues with certain types of plugins. This value can be changed in `/opt/nodebb/config.json`. Since `config.json` isn't watched by grunt it will require forcing a restart using the aformentioned method (changing another, actually watched file)
- Building the codespace will take a few minutes for NodeBB installation. On GitHub Codespaces this time can be greatly reduced by using [Codespaces Prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds).