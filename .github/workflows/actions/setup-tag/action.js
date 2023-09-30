const core = require("@actions/core")
const github = require("@actions/github")

try {

    const tag = core.getInput("tag")
    const token = core.getInput("token")
    const target = core.getInput("target")

    const sanitized = Number(tag.split(".").join("")) + 1

    const converted = sanitized.toString().padStart(3, "0").split("").join(".")

    const octokit = github.getOctokit(token)

    octokit.request("PATCH /repos/{owner}/{repo}/actions/variables/{name}", {
        ...github.context.repo,
        name: "TAG_VERSION",
        value: converted
    })

    const prefixed = `${target.charAt(0)}${converted}`

    core.setOutput("tag-version", prefixed)

} catch (error) {
    core.setFailed(error.message)
}