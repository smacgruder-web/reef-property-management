# Guide: Pushing Your Project to GitHub

Follow these steps to upload your Reef Property project from your local machine to GitHub.

## 1. Create a Repository on GitHub
1. Sign in to [GitHub](https://github.com).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Give your repository a name (e.g., `reef-property-app`).
4. Choose **Public** or **Private**.
5. Click **Create repository**.
6. **Important:** Do NOT initialize with a README, license, or gitignore if you already have files locally. Copy the HTTPS/SSH URL provided on the next page.

## 2. Initialize Git in VS Code
Open your project folder in VS Code and open the terminal (`Ctrl + ` ` or `Cmd + ` `).

```bash
# Initialize the local directory as a Git repository
git init

# Add all files to the staging area
git add .

# Commit the files
git commit -m "Initial commit: Reef Property designs and structure"
```

## 3. Connect to GitHub and Push
Now, connect your local repository to the one you just created on GitHub.

```bash
# Point to your GitHub repository (replace URL with yours)
git remote add origin https://github.com/your-username/reef-property-app.git

# Rename the branch to main
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## 4. Handling Branches (Optional)
If you followed the strategy of keeping your demo on a separate branch:

```bash
# Create and switch to the demo branch
git checkout -b feature/kiosk-demo

# Add and commit your demo-specific changes
git add .
git commit -m "Add kiosk demo screens"

# Push the branch to GitHub
git push origin feature/kiosk-demo
```

## Summary of Common Commands
| Command | Purpose |
| :--- | :--- |
| `git status` | Check which files have changed |
| `git add .` | Stage all changes for commit |
| `git commit -m "message"` | Save your changes locally |
| `git push` | Upload local changes to GitHub |
| `git pull` | Download latest changes from GitHub |