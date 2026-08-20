/* ============================================================
   Portfolio interactions
   Respects prefers-reduced-motion. No heavy libraries.
   ============================================================ */

(() => {
  const hideLoader = () => {
    const loader = document.getElementById("page-loader");
    if (loader) loader.classList.add("is-done");
  };

  const data = window.PORTFOLIO;
  if (!data) {
    hideLoader();
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  bindProfile(data.profile);
  renderHome(data);
  renderAbout(data);
  renderSkills(data.skills);
  renderFeatured(data.featured);
  renderProjects(data.projects);
  renderExperience(data.experience);
  renderEducation(data.education);
  renderList(document.getElementById("achievements"), data.achievements, "info-card");
  renderList(document.getElementById("leadership"), data.leadership, "mini-card");
  renderList(document.getElementById("certs"), data.certifications, "mini-card");

  initNav();
  initHero();
  initLoader();
  initTypewriter(data.profile.roles || [data.profile.title]);
  initReveal();
  initNetworkCanvas();
  initParticles();
  initTilt();
  initMagnetic();
  initCursor();
  initForm(data.profile);
  loadGithub(data.profile);

  /* ---------- Profile bindings ---------- */
  function bindProfile(p) {
    setHref("cv-link", p.cv);
    setHref("cv-channel", p.cv);
    setHref("github-link", p.github);
    setHref("linkedin-link", p.linkedin);
    setHref("mail-rail", `mailto:${p.email}`);
    setHref("mail-channel", `mailto:${p.email}`);
    setHref("li-channel", p.linkedin);
    setHref("gh-channel", p.github);

    const mail = document.getElementById("mail-label");
    if (mail) mail.textContent = p.email;
    const title = document.getElementById("hero-title");
    if (title) title.textContent = p.title;
    const headline = document.getElementById("hero-headline");
    if (headline) headline.textContent = p.headline;
    const about = document.getElementById("about-text");
    if (about) about.textContent = p.about;
    const portrait = document.getElementById("portrait");
    if (portrait) portrait.src = p.photo;
    const footerName = document.getElementById("footer-name");
    if (footerName) footerName.textContent = p.name;
  }

  function setHref(id, href) {
    const el = document.getElementById(id);
    if (el && href) el.href = href;
  }

  /* ---------- Home dashboard ---------- */
  function renderHome(bundle) {
    const techCount = bundle.skills.reduce((n, g) => n + g.items.length, 0);
    const stats = document.getElementById("home-stats");
    if (stats) {
      const items = [
        { value: `${bundle.projects.length}+`, label: "AI Projects" },
        { value: "2+", label: "Years Exp." },
        { value: `${techCount}+`, label: "Technologies" },
        { value: "100%", label: "Passion" },
      ];
      stats.innerHTML = items
        .map(
          (s) =>
            `<article class="home-stat"><b data-count="${escapeAttr(s.value)}">0</b><span>${escapeHtml(s.label)}</span></article>`
        )
        .join("");
    }

    const techRoot = document.getElementById("home-tech");
    const homeTech = ["Python", "PyTorch", "TensorFlow", "OpenCV", "YOLO", "NumPy", "Pandas", "Flask"];
    const colors = ["#3776AB", "#EE4C2C", "#FF6F00", "#5C3EE8", "#00E5FF", "#4D77CF", "#150458", "#22c55e"];
    if (techRoot) {
      techRoot.innerHTML = homeTech
        .map(
          (name, i) =>
            `<div class="tech-icon" style="--d:${i * 0.06}s"><i style="background:${colors[i]}">${escapeHtml(name.slice(0, 2))}</i>${escapeHtml(name)}</div>`
        )
        .join("");
    }

    const titles = ["Road Damage Detection", "Weather Forecasting System", "Nutrient Deficiency Detection"];
    const featured = titles.map((t) => bundle.projects.find((p) => p.title === t)).filter(Boolean);
    const projRoot = document.getElementById("home-projects");
    if (projRoot) {
      projRoot.innerHTML = featured
        .map(
          (p) => `
        <a class="home-proj" href="#projects">
          <div class="home-thumb-wrap">
            ${p.image
              ? `<img class="home-thumb" src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)}" loading="lazy">`
              : `<div class="home-thumb project-art" data-visual="${escapeAttr(p.visual)}"></div>`}
          </div>
          <div>
            <h3>${escapeHtml(p.title)}</h3>
            <small>${escapeHtml(p.category)}</small>
          </div>
          <span class="go">→</span>
        </a>`
        )
        .join("");
    }

    const expRoot = document.getElementById("home-exp");
    if (expRoot) {
      expRoot.innerHTML = bundle.experience
        .slice(0, 2)
        .map(
          (item) => `
        <article>
          <h3>${escapeHtml(item.role)}</h3>
          <p>${escapeHtml(item.org)}</p>
          <p>${escapeHtml(item.period)}</p>
        </article>`
        )
        .join("");
    }
  }

  /* ---------- About ---------- */
  function renderAbout(bundle) {
    const stats = document.getElementById("stat-grid");
    if (stats) {
      stats.innerHTML = bundle.stats
        .map((s) => {
          const value = s.value === "auto-projects" ? String(bundle.projects.length) : s.value;
          return `<article class="stat-card"><b>${escapeHtml(value)}</b><span>${escapeHtml(s.label)}</span></article>`;
        })
        .join("");
    }

    const journey = document.getElementById("journey");
    if (journey) {
      journey.innerHTML = bundle.journey
        .map(
          (j) =>
            `<div class="journey-item"><strong>${escapeHtml(j.year)}</strong><p>${escapeHtml(j.text)}</p></div>`
        )
        .join("");
    }
  }

  /* ---------- Skills ---------- */
  function renderSkills(groups) {
    const root = document.getElementById("skills-root");
    if (!root) return;
    root.innerHTML = groups
      .map(
        (group) => `
        <div class="skill-block reveal">
          <h3>${escapeHtml(group.category)}</h3>
          <div class="skill-grid">
            ${group.items
              .map(
                (item) => `
              <article class="skill-card">
                <div class="skill-icon" aria-hidden="true"><i></i></div>
                <strong>${escapeHtml(item.name)}</strong>
                <p>${escapeHtml(item.hint)}</p>
              </article>`
              )
              .join("")}
          </div>
        </div>`
      )
      .join("");

    const bars = document.getElementById("skill-bars");
    if (bars && data.skillBars) {
      bars.innerHTML = data.skillBars
        .map(
          (bar) => `
        <div class="skill-bar">
          <div class="skill-bar-top">
            <span>${escapeHtml(bar.name)}</span>
            <span>${bar.value}%</span>
          </div>
          <div class="skill-track"><span class="skill-fill" data-width="${bar.value}"></span></div>
        </div>`
        )
        .join("");
    }
  }

  /* ---------- Featured ---------- */
  function renderFeatured(f) {
    const copy = document.getElementById("featured-copy");
    if (copy) {
      copy.innerHTML = `
        <p class="project-badge">${escapeHtml(f.badge)}</p>
        <h3>${escapeHtml(f.title)}</h3>
        <h4>Problem</h4>
        <p>${escapeHtml(f.problem)}</p>
        <h4>Solution</h4>
        <p>${escapeHtml(f.solution)}</p>
        <h4>Key results</h4>
        <ul>${f.results.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
        <h4>Technologies</h4>
        <div class="tech-row">${f.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
        <div class="featured-actions">
          ${linkBtn(f.github, "GitHub")}
          ${f.demo ? linkBtn(f.demo, "Live Demo") : ""}
        </div>`;
    }
  }

  function linkBtn(href, label) {
    if (!href) return "";
    const extra = href.startsWith("http") ? `target="_blank" rel="noopener noreferrer"` : "";
    return `<a class="btn btn-ghost magnetic" href="${escapeAttr(href)}" ${extra} data-magnetic>${escapeHtml(label)}<span class="btn-arrow">→</span></a>`;
  }

  /* ---------- Projects ---------- */
  function renderProjects(projects) {
    const filters = document.getElementById("project-filters");
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
    if (filters) {
      filters.innerHTML = cats
        .map((c, i) => `<button class="filter-btn${i === 0 ? " is-on" : ""}" type="button" data-filter="${escapeAttr(c)}">${escapeHtml(c)}</button>`)
        .join("");
    }

    const paint = (list) => {
      grid.innerHTML = list
        .map(
          (p) => `
        <article class="project-card" data-category="${escapeAttr(p.category)}">
          <div class="project-media">
            ${p.image
              ? `<img class="project-photo" src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)}" loading="lazy">`
              : `<div class="project-art" data-visual="${escapeAttr(p.visual)}"></div>`}
            <div class="project-shade"></div>
          </div>
          <div class="project-body">
            <p class="project-badge">${escapeHtml(p.badge)}</p>
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.description)}</p>
            <div class="project-tech">${p.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
            <div class="project-actions">
              ${linkBtn(p.github, "GitHub")}
              ${p.demo ? linkBtn(p.demo, "Live Demo") : ""}
            </div>
          </div>
        </article>`
        )
        .join("");
      initTilt();
      initMagnetic();
    };

    paint(projects);

    filters?.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-on"));
      btn.classList.add("is-on");
      const key = btn.dataset.filter;
      paint(key === "All" ? projects : projects.filter((p) => p.category === key));
    });
  }

  /* ---------- Experience / extras ---------- */
  function renderExperience(items) {
    const root = document.getElementById("timeline");
    if (!root) return;
    root.innerHTML = items
      .map(
        (item) => `
      <article class="tl-item${item.current ? " is-current" : ""}">
        <div class="tl-node"></div>
        <header>
          <h3>${escapeHtml(item.role)}</h3>
          ${item.current ? `<span class="current-pill">Current</span>` : ""}
          <span class="tl-org">${escapeHtml(item.org)}</span>
          <span class="tl-period">${escapeHtml(item.period)}</span>
        </header>
        <ul>${item.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}</ul>
        <div class="tech-row">${item.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
      </article>`
      )
      .join("");
  }

  function renderEducation(edu) {
    const el = document.getElementById("education-body");
    if (!el) return;
    el.innerHTML = `
      <h3>${escapeHtml(edu.degree)}</h3>
      <p class="school">${escapeHtml(edu.school)}</p>
      <p>${escapeHtml(edu.period)}</p>
      <p>${escapeHtml(edu.focus)}</p>
      <p>${escapeHtml(edu.note)}</p>`;
  }

  function renderList(root, items, cls) {
    if (!root) return;
    root.innerHTML = items
      .map(
        (item) => `
      <article class="${cls}">
        <h3>${escapeHtml(item.title)}</h3>
        <p class="org">${escapeHtml(item.org)}</p>
        ${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ""}
      </article>`
      )
      .join("");
  }

  /* ---------- Hero load sequence ---------- */
  function initHero() {
    document.querySelectorAll(".reveal-load").forEach((el) => {
      const delay = Number(el.dataset.load || 1) * 140;
      window.setTimeout(() => el.classList.add("is-in"), reduceMotion ? 0 : delay);
    });
  }

  function initLoader() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;
    const hide = () => loader.classList.add("is-done");
    if (reduceMotion) hide();
    else window.setTimeout(hide, 900);
  }

  function initTypewriter(roles) {
    const el = document.getElementById("typed-role");
    if (!el || !roles.length) return;
    if (reduceMotion) {
      el.textContent = roles[0];
      return;
    }
    let role = 0;
    let i = 0;
    let deleting = false;

    const tick = () => {
      const word = roles[role];
      el.textContent = word.slice(0, i);
      if (!deleting && i < word.length) {
        i += 1;
        window.setTimeout(tick, 70);
      } else if (!deleting && i === word.length) {
        deleting = true;
        window.setTimeout(tick, 1400);
      } else if (deleting && i > 0) {
        i -= 1;
        window.setTimeout(tick, 38);
      } else {
        deleting = false;
        role = (role + 1) % roles.length;
        window.setTimeout(tick, 280);
      }
    };
    window.setTimeout(tick, 900);
  }

  function animateCount(el) {
    const raw = el.dataset.count || "";
    const num = parseInt(raw, 10);
    if (Number.isNaN(num)) {
      el.textContent = raw;
      return;
    }
    const suffix = raw.replace(String(num), "");
    const start = performance.now();
    const dur = 1100;
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - (1 - t) ** 3;
      el.textContent = `${Math.round(num * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const nav = document.getElementById("site-nav");
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("mobile-menu");
    const links = [...document.querySelectorAll(".nav-link")];

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle?.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu?.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      });
    });

    const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal, .tl-item, .timeline");
    if (reduceMotion) {
      items.forEach((el) => el.classList.add("is-in"));
      document.querySelectorAll(".skill-fill").forEach((fill) => {
        fill.style.width = `${fill.dataset.width}%`;
      });
      document.querySelectorAll("[data-count]").forEach((el) => {
        el.textContent = el.dataset.count;
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            entry.target.querySelectorAll(".skill-fill").forEach((fill) => {
              fill.style.width = `${fill.dataset.width}%`;
            });
            entry.target.querySelectorAll("[data-count]").forEach(animateCount);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Neural network canvas ---------- */
  function initNetworkCanvas() {
    const canvas = document.getElementById("network-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    let nodes = [];
    let mouse = { x: 0.5, y: 0.5 };
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const inBrain = (x, y) => {
        const cx = w * 0.5;
        const cy = h * 0.4;
        const rx = w * 0.28;
        const ry = h * 0.3;
        const left = ((x - (cx - rx * 0.52)) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;
        const right = ((x - (cx + rx * 0.52)) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;
        return left || right;
      };

      const count = reduceMotion || window.innerWidth < 700 ? 42 : 70;
      nodes = [];
      let guard = 0;
      while (nodes.length < count && guard < 4000) {
        guard += 1;
        const x = Math.random() * w;
        const y = Math.random() * h;
        if (!inBrain(x, y)) continue;
        nodes.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 1,
          hue: x < w * 0.5 ? "#00e5ff" : "#c084fc",
        });
      }
      parent._inBrain = inBrain;
    };

    parent.addEventListener("mousemove", (e) => {
      const rec = parent.getBoundingClientRect();
      mouse.x = (e.clientX - rec.left) / rec.width - 0.5;
      mouse.y = (e.clientY - rec.top) / rec.height - 0.5;
    });

    const draw = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((n) => {
        if (!reduceMotion) {
          n.x += n.vx + mouse.x * 0.4;
          n.y += n.vy + mouse.y * 0.4;
          if (parent._inBrain && !parent._inBrain(n.x, n.y)) {
            n.x += (n.ox - n.x) * 0.08;
            n.y += (n.oy - n.y) * 0.08;
            n.vx *= -1;
            n.vy *= -1;
          }
        }
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 58) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.22 * (1 - dist / 58)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.fillStyle = n.hue;
        ctx.shadowColor = n.hue;
        ctx.shadowBlur = 8;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduceMotion) raf = requestAnimationFrame(draw);
    });
  }

  /* ---------- Neural network + particles + mouse glow ---------- */
  function initParticles() {
    const canvas = document.getElementById("particle-canvas");
    const glow = document.querySelector(".mouse-glow");
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight * 0.3 };

    if (glow && isFinePointer && !reduceMotion) {
      glow.hidden = false;
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      });
    }

    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let nodes = [];
    let sparks = [];
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const netCount = window.innerWidth < 700 ? 28 : reduceMotion ? 20 : 64;
      const sparkCount = window.innerWidth < 700 ? 18 : 40;
      nodes = Array.from({ length: netCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.8,
        accent: Math.random() > 0.78,
      }));
      sparks = Array.from({ length: sparkCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        s: Math.random() * 0.35 + 0.08,
      }));
    };

    if (isFinePointer) {
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
          if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 22000) {
            n.x -= dx * 0.0008;
            n.y -= dy * 0.0008;
          }
        }
      });

      const linkDist = window.innerWidth < 700 ? 110 : 150;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDist) continue;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const near = Math.hypot(mx - mouse.x, my - mouse.y);
          const glowBoost = near < 180 ? 0.22 : 0;
          const alpha = (1 - dist / linkDist) * 0.22 + glowBoost;
          ctx.strokeStyle = near < 180 ? `rgba(34, 211, 238, ${alpha})` : `rgba(129, 140, 248, ${alpha})`;
          ctx.lineWidth = near < 180 ? 1.2 : 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      nodes.forEach((n) => {
        const near = Math.hypot(n.x - mouse.x, n.y - mouse.y) < 160;
        ctx.beginPath();
        ctx.fillStyle = n.accent || near ? "rgba(34, 211, 238, 0.95)" : "rgba(167, 139, 250, 0.9)";
        ctx.arc(n.x, n.y, near ? n.r + 0.8 : n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      sparks.forEach((d) => {
        if (!reduceMotion) {
          d.y -= d.s;
          if (d.y < 0) {
            d.y = canvas.height;
            d.x = Math.random() * canvas.width;
          }
        }
        ctx.fillStyle = "rgba(196, 181, 253, 0.55)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduceMotion) raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    tick();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduceMotion) raf = requestAnimationFrame(tick);
    });
  }

  /* ---------- Project tilt ---------- */
  function initTilt() {
    if (!isFinePointer || reduceMotion) return;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.onmousemove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
      };
      card.onmouseleave = () => {
        card.style.transform = "";
      };
    });
  }

  /* ---------- Magnetic buttons ---------- */
  function initMagnetic() {
    if (!isFinePointer || reduceMotion) return;
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      if (btn.dataset.magBound) return;
      btn.dataset.magBound = "1";
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- Custom cursor ---------- */
  function initCursor() {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring || !isFinePointer) return;

    dot.hidden = false;
    ring.hidden = false;
    document.body.classList.add("has-cursor");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      const t = e.target;
      const hover = Boolean(t.closest("a, button, input, textarea, .filter-btn"));
      const card = Boolean(t.closest(".project-card, .skill-card"));
      ring.classList.toggle("is-hover", hover);
      ring.classList.toggle("is-card", card);
    });

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ---------- Contact form ---------- */
  function initForm(profile) {
    const form = document.getElementById("contact-form");
    const note = document.getElementById("form-note");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const message = String(fd.get("message") || "").trim();
      if (!name || !email || !message) {
        if (note) note.textContent = "Please fill in name, email, and message.";
        return;
      }
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      if (note) note.textContent = "Opening your email client…";
    });
  }

  /* ---------- GitHub (graceful failure) ---------- */
  function loadGithub(profile) {
    const panel = document.getElementById("github-panel");
    if (!panel) return;

    const fallback = () => {
      panel.innerHTML = `
        <p class="github-error">GitHub activity could not be loaded right now.</p>
        <p><a class="btn btn-ghost" href="${escapeAttr(profile.github)}" target="_blank" rel="noopener noreferrer">Open GitHub profile →</a></p>`;
    };

    Promise.all([
      fetch(`https://api.github.com/users/${profile.githubUser}`).then((r) => {
        if (!r.ok) throw new Error("user");
        return r.json();
      }),
      fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`).then((r) => {
        if (!r.ok) throw new Error("repos");
        return r.json();
      }),
    ])
      .then(([user, repos]) => {
        panel.innerHTML = `
          <div class="gh-head">
            <img src="${escapeAttr(user.avatar_url)}" alt="" width="56" height="56">
            <div>
              <h3>${escapeHtml(user.login)}</h3>
              <p>${escapeHtml(user.bio || "Public repositories")}</p>
              <div class="gh-stats">
                <span>${user.public_repos} repos</span>
                <span>${user.followers} followers</span>
                <span>${user.following} following</span>
              </div>
            </div>
            <a class="btn btn-ghost" href="${escapeAttr(user.html_url)}" target="_blank" rel="noopener noreferrer">Profile →</a>
          </div>
          <div class="repo-grid">
            ${repos
              .map(
                (repo) => `
              <a class="repo-card" href="${escapeAttr(repo.html_url)}" target="_blank" rel="noopener noreferrer">
                <h3>${escapeHtml(repo.name)}</h3>
                <p>${escapeHtml(repo.description || "No description provided.")}</p>
                <p class="repo-meta">${escapeHtml(repo.language || "Code")} · ★ ${repo.stargazers_count}</p>
              </a>`
              )
              .join("")}
          </div>`;
      })
      .catch(fallback);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/'/g, "&#39;");
  }
})();
