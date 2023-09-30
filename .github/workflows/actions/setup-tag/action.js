const core = require("@actions/core")

try {

    const tag = core.getInput("tag")

    const target = core.getInput("target")

    const sanitized = Number(tag.split(".").join("")) + 1

    const converted = sanitized.toString().padStart(3, "0").split("").join(".")

    const prefixed = `${target.charAt(0)}${converted}`

    core.setOutput("tag-version", prefixed)

} catch (error) {
    core.setFailed(error.message)
}