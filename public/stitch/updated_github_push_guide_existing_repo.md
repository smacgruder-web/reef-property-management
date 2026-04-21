# Updated Guide: Pushing Local Changes to Existing GitHub Repo

Since you already have a local repository and a GitHub repo set up, follow these steps to push your new Reef Property screens.

## 1. Check Your Current Status
Open your terminal in VS Code and verify which branch you are on and if your remote is set correctly.

```bash
# Check current branch
git branch

# Verify remote URL (should point to your GitHub repo)
git remote -v

# See which files are new or modified
git status
```

## 2. The Standard Push Flow (to Main)
If you are ready to put everything on your main branch:

```bash
# 1. Stage your changes (all new HTML/CSS from Stitch)
git add .

# 2. Commit the changes
git commit -m "Update: Added 40+ Reef Property screens and documentation"

# 3. Pull latest from GitHub first (best practice to avoid conflicts)
git pull origin main

# 4. Push to GitHub
git push origin main
```

## 3. Pushing a Specific Branch (Recommended for Demos)
If you want to keep your Kiosk Demo separate as we discussed:

```bash
# 1. Create and switch to the demo branch
git checkout -b feature/kiosk-demo

# 2. Stage and commit specifically on this branch
git add .
git commit -m "Add kiosk demo screens"

# 3. Push this specific branch to GitHub
git push origin feature/kiosk-demo
```

## 4. Useful Commands for Existing Repos
| Situation | Command |
| :--- | :--- |
| **Accidentally committed to main?** | `git reset --soft HEAD~1` (undoes the commit but keeps your files) |
| **Need to switch back to main?** | `git checkout main` |
| **Merge demo into main?** | `git checkout main` then `git merge feature/kiosk-demo` |
