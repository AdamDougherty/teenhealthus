---
description: Commit, push, and deploy the site to production
---

# Make It Live

The user wants to deploy the current state of the website to production.

// turbo-all

1. First, confirm the dev server is running and remind the user to check localhost:3000. Ask: "Have you previewed the changes at localhost:3000 and are happy with how everything looks?"

2. If confirmed, stage and commit any uncommitted changes:
```powershell
git add -A
git commit -m "Update site content"
```

3. Push to GitHub:
```powershell
git push
```

4. Deploy to the production server via scp (exclude build artifacts and dependencies):
```powershell
scp -r ./* root@159.65.75.30:/var/www/teenhealth-starter/
```

5. SSH in to build and restart:
```powershell
ssh root@159.65.75.30 "cd /var/www/teenhealth-starter && npm install && npm run build && pm2 restart teenhealth"
```

6. Confirm to the user that the site is now live.
