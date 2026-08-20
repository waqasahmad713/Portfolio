# Waqas Ahmad — AI Engineer Portfolio

Premium personal site for Computer Vision, Deep Learning, and applied AI work.

## Run locally

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

A local server is recommended so the GitHub section can load public API data.

## Update your role or add projects

All editable content lives in **`js/content.js`**.

### Current role

Edit the first item in `experience` (`current: true`):

```js
{
  current: true,
  role: "AI Developer",
  org: "CAIET Mardan",
  period: "2026 — Present",
  points: [
    "Currently working as an AI Developer…",
    // add real responsibilities here
  ],
  tags: ["Computer Vision", "Deep Learning", "Python"],
}
```

Also update `profile.title` and `profile.headline` if your public title changes.

### Add a project

Copy any object in `projects` and fill in real details:

```js
{
  title: "Project name",
  category: "Computer Vision", // or "AI / ML"
  badge: "YOLOv11",
  description: "[PROJECT DESCRIPTION]",
  technologies: ["PyTorch", "OpenCV"],
  visual: "yolo",
  github: "https://github.com/waqasahmad713/your-repo",
  demo: "", // paste a live URL, or leave empty
}
```

`visual` options: `autonomous` · `yolo` · `weather` · `parking` · `cctv` · `classify` · `road` · `security` · `data`

The About “AI Projects” count updates automatically from the projects list.

Leave `github` or `demo` as `""` to hide that button. Do not invent stats, clients, or repos.

## Structure

```text
portfolio/
├── index.html
├── css/style.css
├── js/content.js
├── js/script.js
├── assets/images/
├── assets/icons/
├── assets/resume/
└── README.md
```

## Stack

HTML, CSS, and vanilla JavaScript only. Animations use CSS, Intersection Observer, and lightweight canvas. `prefers-reduced-motion` is respected.
