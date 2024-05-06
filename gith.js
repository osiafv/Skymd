process.chdir(__dirname);
require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const clientWithAuth = new Octokit({
    auth: "",
});
let cmd = process.argv[2];
let folderName = process.argv[3];
//create repository

if (cmd === "create") {
    clientWithAuth.repos.createForAuthenticatedUser({
        name: folderName,
    });
}
//delete repo
if (cmd === "delete") {
    clientWithAuth.repos
        .delete({
            owner: "osiafv",
            repo: folderName,
        })
        .then((data) => {
            console.log("success fully delete " + folderName + "repo");
        })
        .catch((e) => {
            console.log(e);
        });
}
