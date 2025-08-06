# AI Agents Configuration

This document describes the AI agents configured for this repository to help with automated maintenance and code improvements.

## 🤖 Dependabot

**Purpose**: Automatically updates project dependencies to keep them secure and up-to-date.

**Configuration**: `.github/dependabot.yml`

**How it works**:

- Scans `package.json` daily for outdated dependencies
- Creates pull requests with dependency updates
- Assigns PRs to `@iberi22` with the `dependencies` label
- Uses conventional commit format: `chore(deps): update dependency-name`

**No action required** - Dependabot runs automatically once the repo is on GitHub.

## 🎯 Jules (Google AI Agent)

**Purpose**: Handles complex code refactoring, feature implementation, and bug fixes through natural language instructions.

**How to use Jules**:

### 1. Create a GitHub Issue

Create a new issue describing what you want Jules to do. Be specific and clear:

✅ **Good examples**:

- "Add a loading spinner while fetchUserProfile runs"
- "Fix the 500 error while submitting the feedback form"
- "Refactor the CV component to use TypeScript interfaces"
- "Add dark mode toggle to the portfolio"
- "Optimize image loading performance"

❌ **Avoid vague requests**:

- "Fix everything"
- "Optimize code"
- "Make this better"

### 2. Add the "jules" Label

1. Open the GitHub issue
2. Click the gear icon next to "Labels"
3. Add the label `jules` (case insensitive)
4. Jules will automatically comment on the issue and start working

### 3. Monitor Progress

Jules will:

- Comment on the issue with its plan
- Show real-time progress updates
- Create a new branch with the changes
- Open a pull request when finished
- Provide a summary of all changes made

### 4. Review and Merge

- Review the pull request Jules created
- Test the changes if needed
- Merge when satisfied with the implementation

## 🔧 Prerequisites for Jules

**Before using Jules, ensure**:

1. The Jules GitHub app is installed and authorized for this repository
2. Jules has the necessary permissions to create branches and pull requests
3. The repository is public or Jules has access to private repos (if applicable)

## 📋 Best Practices

### For Dependabot

- Review dependency updates before merging
- Check for breaking changes in major version updates
- Run tests locally if the update seems significant

### For Jules

- **Be specific**: The more detailed your request, the better Jules performs
- **One task per issue**: Don't combine multiple unrelated tasks
- **Provide context**: If the task relates to existing code, mention file names or components
- **Review carefully**: Always review Jules' pull requests before merging
- **Give feedback**: If Jules' solution isn't perfect, comment on the PR with suggestions

## 🚨 Important Notes

- **Jules appears as the commit author** but you remain the branch owner
- **You can pause Jules** at any time by commenting on the issue
- **You can provide mid-task feedback** by commenting while Jules is working
- **Always review code changes** before merging, even from AI agents
- **Jules works best with clear, scoped tasks** rather than broad refactoring requests

## 🔗 Useful Links

- [Jules Documentation](https://jules.google/docs/)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [GitHub Issues Guide](https://docs.github.com/en/issues)

## 📞 Troubleshooting

**If Jules doesn't respond to an issue**:

1. Check that the "jules" label is correctly applied
2. Verify the Jules GitHub app is installed and authorized
3. Ensure the issue description is clear and actionable
4. Wait a few minutes - Jules may take time to process the request

**If Dependabot isn't working**:

1. Check that the repository is on GitHub (Dependabot is a GitHub feature)
2. Verify the `.github/dependabot.yml` file is correctly formatted
3. Ensure the repository has a valid `package.json` file
