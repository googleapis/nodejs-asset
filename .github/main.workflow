workflow "Candidate Issue" {
  on = "schedule(*/5 * * * *)"
  resolves = ["candidate-issue"]
}

action "candidate-issue" {
  uses = "googleapis/release-please/.github/action/candidate-issue@master"
  env = {
    PACKAGE_NAME = "@google-cloud/asset"
  }
  secrets = ["GITHUB_TOKEN"]
}
