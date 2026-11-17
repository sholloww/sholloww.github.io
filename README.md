# Mirabelle's portfolio site

Plain HTML + CSS + a tiny bit of JavaScript. No installs, no build step.

## Files

| File | What it is |
|---|---|
| `index.html` | About me page (the home page) |
| `academic.html` | Academic projects grid + popups |
| `fun.html` | Fun projects grid + popups |
| `style.css` | All the styling. Colors/fonts live at the top in `:root` |
| `script.js` | Makes the popups open and close |
| `images/` | (you create this) your photos and screenshots |

## See it on your computer

Double-click `index.html`. It opens in your browser. Edit a file in any text editor
(VS Code is free and nice), save, refresh the browser.

## Adding your images

1. Make a folder called `images` next to `index.html` and drop your files in it.
2. Replace a `<div class="placeholder">...</div>` with
   `<img src="images/your-file.png" alt="short description of the image">`
3. Keep file names lowercase with no spaces (use dashes), and keep images under ~500 KB
   where you can so pages load fast.

## Adding a project

In `academic.html`, copy one whole `<button class="card">...</button>` and its matching
`<dialog>...</dialog>`. Change the number in both `data-dialog="projectN"` and
`id="projectN"` so they match.

## Hosting it free with GitHub Pages

1. Make a free account at github.com.
2. Click **New repository**. Name it `yourusername.github.io` (replace with your actual
   username) and set it to **Public**.
3. On the new repo page, click **uploading an existing file** and drag in everything
   (all the files plus your `images` folder). Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**, and Save.
5. Wait a minute or two. Your site is live at `https://yourusername.github.io`.

## Pushing updates

Simplest way: open the repo on github.com, click **Add file → Upload files**, drag in the
changed files (same names replace the old ones), and commit. The site updates in a minute.

Later, if you want to use the terminal instead:

```
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
# ...edit files...
git add .
git commit -m "update projects"
git push
```

## Your own domain (optional)

Buy something like `mirabelleholloway.com` (~$12/year) from Cloudflare, Namecheap, or
Porkbun, then in repo **Settings → Pages → Custom domain** add it and follow GitHub's
DNS instructions.
