(function () {
  "use strict";
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || "skynet";
  const project = window.PROJECTS[slug];
  const root = document.getElementById("caseRoot");

  if (!project) {
    root.innerHTML = `<section class="case-empty"><span>404 / Lost episode</span><h1>This project does not exist yet.</h1><a href="../index.html#work">Return to selected work →</a></section>`;
    document.body.classList.remove("page-loading");
    return;
  }

  document.title = `${project.title} case study — Aung Zin Htwe`;
  document.documentElement.style.setProperty("--case-accent", project.accent);
  document.getElementById("miniTitle").textContent = project.title;

  const esc = value => String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
  const sectionRenderers = {
    copy: section => `<div class="case-copy">${section.body.map(text => `<p>${esc(text)}</p>`).join("")}</div>`,
    bullets: section => `<p class="section-intro">${esc(section.intro)}</p><ul class="case-bullets">${section.items.map((item,index) => `<li><span>${String(index + 1).padStart(2,"0")}</span>${esc(item)}</li>`).join("")}</ul>${section.note ? `<aside class="case-note">${esc(section.note)}</aside>` : ""}`,
    stats: section => `<div class="case-stats">${section.stats.map(item => `<div><strong>${esc(item.value)}</strong><span>${esc(item.label)}</span></div>`).join("")}</div><p class="section-body">${esc(section.body)}</p>`,
    process: section => `<ol class="case-process">${section.steps.map((step,index) => `<li><span>${String(index+1).padStart(2,"0")}</span><h3>${esc(step.title)}</h3><p>${esc(step.text)}</p></li>`).join("")}</ol>`,
    gallery: section => `<p class="section-body">${esc(section.body)}</p><div class="case-gallery">${section.images.map(image => `<button class="case-image" type="button" data-image="${esc(image.src)}" data-caption="${esc(image.caption)}"><img src="${esc(image.src)}" alt="${esc(image.caption)}" loading="lazy"><span>${esc(image.caption)} <b>↗</b></span></button>`).join("")}</div>`,
    beforeAfter: section => `<div class="compare" data-compare><div class="compare__base"><img src="${esc(section.before.src)}" alt="${esc(section.before.label)}"><span>${esc(section.before.label)}</span></div><div class="compare__top"><img src="${esc(section.after.src)}" alt="${esc(section.after.label)}"><span>${esc(section.after.label)}</span></div><input type="range" min="0" max="100" value="52" aria-label="Compare before and after"><i></i></div><ul class="outcome-list">${section.points.map(point => `<li>✦ ${esc(point)}</li>`).join("")}</ul>`,
    quote: section => `<blockquote>${esc(section.quote)}</blockquote><p class="section-body">${esc(section.body)}</p>`
  };

  const nextKeys = Object.keys(window.PROJECTS);
  const nextProject = window.PROJECTS[nextKeys[(nextKeys.indexOf(slug) + 1) % nextKeys.length]];
  root.innerHTML = `
    <section class="case-hero">
      <div class="case-hero__copy">
        <span class="case-eyebrow">${esc(project.eyebrow)}</span>
        <h1>${esc(project.headline)}</h1>
        <p>${esc(project.summary)}</p>
        <div class="case-tags">${project.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div>
        ${project.externalUrl ? `<div class="case-launch"><p>This product is now live. Explore the released app and experience the design in action.</p><a class="case-live" href="${esc(project.externalUrl)}" target="_blank" rel="noopener">Explore the app <span aria-hidden="true">↗</span></a></div>` : ""}
      </div>
      <div class="case-facts">
        <div><span>Project</span><strong>${esc(project.title)}</strong></div>
        <div><span>Year</span><strong>${esc(project.year)}</strong></div>
        <div><span>Role</span><strong>${esc(project.role)}</strong></div>
        <div><span>Timeline</span><strong>${esc(project.duration)}</strong></div>
        <div><span>Collaboration</span><strong>${esc(project.team)}</strong></div>
      </div>
      <div class="case-impact">
        <span class="case-impact__label">Impact first / the short version</span>
        ${(project.impact || []).map(item => `<div><strong>${esc(item.value)}</strong><span>${esc(item.label)}</span></div>`).join("")}
      </div>
      ${project.cover ? `<button class="case-cover case-image" data-image="${esc(project.cover)}" data-caption="${esc(project.title)}"><img src="${esc(project.cover)}" alt="${esc(project.title)} product preview">${project.isLive ? `<b class="cover-live-badge">Live</b>` : ""}</button>` : `<div class="case-cover case-cover--generated"><span>${esc(project.number)}</span><strong>${esc(project.title)}</strong><i>Case study / ${esc(project.year)}</i></div>`}
      <div class="case-scroll">Scroll to unpack the work <span>↓</span></div>
    </section>
    <div class="case-layout">
      <aside class="case-toc"><span>In this story</span><nav>${project.sections.map(section => `<a href="#${esc(section.id)}">${esc(section.label)}</a>`).join("")}</nav></aside>
      <article class="case-story">
        ${project.sections.map(section => `<section id="${esc(section.id)}" class="dynamic-section reveal"><span class="section-kicker">${esc(section.kicker)}</span><h2>${esc(section.title)}</h2>${sectionRenderers[section.type](section)}</section>`).join("")}
      </article>
    </div>
    <section class="next-case">
      <span>Next project</span><a href="project.html?project=${esc(nextProject.slug)}"><small>${esc(nextProject.number)} / ${esc(nextProject.title)}</small><strong>${esc(nextProject.headline)}</strong><i>Continue →</i></a>
    </section>
    <footer class="case-footer"><span>© ${new Date().getFullYear()} Aung Zin Htwe</span><a href="mailto:aungzinhtwe352000@gmail.com">Have a product problem? Let’s talk ↗</a></footer>`;

  const progress = document.getElementById("readingProgressFill");
  const tocLinks = Array.from(document.querySelectorAll(".case-toc a"));
  const sections = Array.from(document.querySelectorAll(".dynamic-section"));
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max ? scrollY / max * 100 : 0}%`;
    let active = sections[0];
    sections.forEach(section => { if (section.getBoundingClientRect().top <= 180) active = section; });
    tocLinks.forEach(link => link.classList.toggle("is-active", link.hash === `#${active.id}`));
  };
  addEventListener("scroll", updateScroll, {passive:true});

  document.querySelectorAll("[data-compare]").forEach(compare => {
    const range = compare.querySelector("input");
    const top = compare.querySelector(".compare__top");
    const handle = compare.querySelector("i");
    const update = () => { top.style.clipPath = `inset(0 ${100-range.value}% 0 0)`; handle.style.left = `${range.value}%`; };
    range.addEventListener("input", update); update();
  });

  const dialog = document.getElementById("caseLightbox");
  document.querySelectorAll(".case-image").forEach(button => button.addEventListener("click", () => {
    dialog.querySelector("img").src = button.dataset.image;
    dialog.querySelector("img").alt = button.dataset.caption;
    dialog.querySelector("figcaption").textContent = button.dataset.caption;
    dialog.showModal();
  }));
  dialog.querySelector("button").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

  const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle("is-in", entry.isIntersecting)), {threshold:.12});
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
  updateScroll();

  const loader = document.getElementById("caseLoader");
  const number = loader.querySelector("strong");
  const loaderBar = document.getElementById("loaderBar");
  const loaderStatus = document.getElementById("loaderStatus");
  const loaderMessages = ["Finding the sticky notes","Questioning assumptions","Moving pixels responsibly","Ready for the story"];
  let amount = 0;
  const timer = setInterval(() => {
    amount += 11;
    const progressAmount = Math.min(amount, 100);
    number.textContent = String(progressAmount).padStart(2,"0");
    loaderBar.style.width = `${progressAmount}%`;
    loaderStatus.textContent = loaderMessages[Math.min(3,Math.floor(progressAmount/26))];
    if (amount >= 100) { clearInterval(timer); setTimeout(() => { document.body.classList.remove("page-loading"); loader.setAttribute("aria-hidden","true"); }, 120); }
  }, 35);
}());
