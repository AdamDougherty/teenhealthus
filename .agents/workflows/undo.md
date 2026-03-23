---
description: Undo the last change (revert the most recent git commit)
---

# Undo Last Change

The user wants to undo the last change. This reverts the most recent commit while keeping the dev server running.

// turbo-all

1. Show the user what will be undone by displaying the last commit message:
```powershell
git log -1 --pretty=format:"%s"
```

2. Revert the last commit (keeps files in working directory):
```powershell
git revert HEAD --no-edit
```

3. Confirm to the user that the change has been undone and remind them to check localhost:3000 to verify.
