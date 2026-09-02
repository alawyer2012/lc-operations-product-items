(function () {
  "use strict";

  const data = window.DASHBOARD;
  if (!data) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<p class='noscript'>Could not load <code>data/dashboard.js</code>.</p>"
    );
    return;
  }

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const SEVERITY_RANK = { p1: 1, p2: 2, p3: 3, p4: 4 };
  const STATUS_LABEL = {
    open: "Open",
    "in-progress": "In progress",
    "waiting-on-ticket": "Waiting on ticket",
    "waiting-on-ops": "Waiting on ops",
    monitoring: "Monitoring",
    resolved: "Resolved",
  };
  const STATUS_BADGE = {
    open: "badge--status",
    "in-progress": "badge--progress",
    "waiting-on-ticket": "badge--wait",
    "waiting-on-ops": "badge--wait",
    monitoring: "badge--status",
    resolved: "badge--resolved",
  };
  const IMPACT_LABEL = {
    none: "None",
    awareness: "Awareness",
    training: "Training",
    "workflow-change": "Workflow change",
  };
  const WINDOW_LABEL = {
    "this-week": "This week",
    next: "Next",
    later: "Later",
    shipped: "Shipped",
  };
  const RELEASE_STATUS_LABEL = {
    draft: "Draft",
    scheduled: "Scheduled",
    "in-qa": "In QA",
    "at-risk": "At risk",
    shipped: "Shipped",
  };
  const JIRA_RELEASING_URL = "https://entrata.atlassian.net/jira/dashboards/16707";

  const state = {
    tab: "escalations",
    filter: "all",
    openIds: {},
  };

  function parseDate(iso) {
    if (!iso) return null;
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function formatDate(iso) {
    const date = parseDate(iso);
    if (!date) return "TBD";
    return MONTHS[date.getMonth()] + " " + date.getDate();
  }

  function formatDateLong(iso) {
    const date = parseDate(iso);
    if (!date) return "TBD";
    return MONTHS[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  }

  function daysBetween(iso) {
    const date = parseDate(iso);
    if (!date) return 0;
    const today = parseDate(data.meta.lastUpdated) || new Date();
    return Math.max(0, Math.round((today - date) / 86400000));
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function rankedIssues() {
    return data.issues.slice().sort(function (a, b) {
      const rank = (SEVERITY_RANK[a.severity] || 9) - (SEVERITY_RANK[b.severity] || 9);
      if (rank !== 0) return rank;
      return daysBetween(b.openedOn) - daysBetween(a.openedOn);
    });
  }

  function matchesFilter(issue) {
    if (issue.status === "resolved") return false;
    if (state.filter === "all") return true;
    return issue.severity === state.filter;
  }

  function renderMasthead() {
    document.getElementById("masthead-meta").textContent =
      "Updated " + formatDateLong(data.meta.lastUpdated);
  }

  function ticketHref(issue) {
    if (issue.jiraUrl) return issue.jiraUrl;
    if (issue.jiraKey) return "https://entrata.atlassian.net/browse/" + issue.jiraKey;
    return "";
  }

  function jiraLink(issue, emptyLabel) {
    const href = ticketHref(issue);
    if (!href) {
      return "<span class='issue__jira issue__jira--empty'>" + escapeHtml(emptyLabel || "No ticket") + "</span>";
    }
    return (
      "<a class='issue__jira' href='" +
      escapeHtml(href) +
      "' target='_blank' rel='noopener noreferrer'>" +
      escapeHtml(issue.jiraKey) +
      "</a>"
    );
  }

  function screenshotHint(issue) {
    if (!Array.isArray(issue.screenshots)) return "";
    const pending = !issue.screenshots.length || issue.screenshots.some(function (shot) {
      return !shot || !shot.src;
    });
    return pending ? " · Screenshots pending" : "";
  }

  function renderScreenshots(issue) {
    if (!Array.isArray(issue.screenshots)) return "";
    const shots = issue.screenshots.length
      ? issue.screenshots
      : [{ src: "", caption: "Screenshot pending" }];
    const items = shots
      .map(function (shot) {
        const caption = (shot && shot.caption) || "Screenshot pending";
        const src = shot && shot.src;
        if (src) {
          return (
            "<figure class='shot'>" +
            "<a href='" +
            escapeHtml(src) +
            "' target='_blank' rel='noopener noreferrer'>" +
            "<img src='" +
            escapeHtml(src) +
            "' alt='" +
            escapeHtml(caption) +
            "' />" +
            "</a>" +
            "<figcaption>" +
            escapeHtml(caption) +
            "</figcaption>" +
            "</figure>"
          );
        }
        return (
          "<figure class='shot shot--placeholder'>" +
          "<div class='shot__box' aria-hidden='true'>Screenshot pending</div>" +
          "<figcaption>" +
          escapeHtml(caption) +
          "</figcaption>" +
          "</figure>"
        );
      })
      .join("");
    return (
      "<div class='issue__shots'><h3>Screenshots</h3><div class='shot-row'>" +
      items +
      "</div></div>"
    );
  }

  function renderIssue(issue) {
    const open = !!state.openIds[issue.id];
    const age = daysBetween(issue.openedOn);
    return (
      "<article class='issue issue--" +
      escapeHtml(issue.severity) +
      "' id='" +
      escapeHtml(issue.id) +
      "'>" +
      "<div class='issue__head'>" +
      "<button type='button' class='issue__toggle' aria-expanded='" +
      open +
      "' data-toggle='" +
      escapeHtml(issue.id) +
      "'>" +
      "<span class='badge badge--" +
      escapeHtml(issue.severity) +
      "'>" +
      issue.severity.toUpperCase() +
      "</span>" +
      "<span><p class='issue__title'>" +
      escapeHtml(issue.title) +
      "</p><p class='issue__meta'>" +
      escapeHtml(issue.area) +
      " · " +
      escapeHtml(issue.source) +
      screenshotHint(issue) +
      "</p></span>" +
      "</button>" +
      jiraLink(issue, "No ticket") +
      "<button type='button' class='issue__toggle issue__toggle--end' tabindex='-1' data-toggle='" +
      escapeHtml(issue.id) +
      "'>" +
      "<span class='badge " +
      (STATUS_BADGE[issue.status] || "badge--status") +
      "'>" +
      escapeHtml(STATUS_LABEL[issue.status] || issue.status) +
      "</span>" +
      "<span class='issue__age'>" +
      (age === 0 ? "Opened this week" : age + " days on the board") +
      "</span>" +
      "</button>" +
      "</div>" +
      (open
        ? "<div class='issue__body'><div class='issue__grid'>" +
          "<div><h3>Ops impact</h3><p>" +
          escapeHtml(issue.opsImpact) +
          "</p></div>" +
          "<div><h3>Workaround</h3><p>" +
          escapeHtml(issue.workaround) +
          "</p></div>" +
          "<div><h3>Ticket</h3><p>" +
          jiraLink(issue, "No ticket yet") +
          "</p></div>" +
          "<div><h3>Latest note</h3><p>" +
          escapeHtml(issue.latestNote) +
          " <span class='issue__meta'>(" +
          escapeHtml(formatDate(issue.lastUpdate)) +
          ")</span></p></div>" +
          renderScreenshots(issue) +
          "<div class='next-action'><h3>Next action · " +
          escapeHtml(issue.nextActionOwner) +
          "</h3><p>" +
          escapeHtml(issue.nextAction) +
          "</p></div>" +
          "</div></div>"
        : "") +
      "</article>"
    );
  }

  function renderIssues() {
    const issues = rankedIssues().filter(matchesFilter);
    document.getElementById("issue-board").innerHTML = issues.map(renderIssue).join("");
    document.getElementById("issue-empty").hidden = issues.length > 0;
  }

  function renderReleaseBanner() {
    const banner = document.getElementById("jira-releasing-banner");
    if (!banner) return;
    const href = data.meta.jiraReleasingDashboardUrl || JIRA_RELEASING_URL;
    banner.href = href;
  }

  function renderRelease(item) {
    const impact = item.opsImpactLevel || "awareness";
    const windowLabel = WINDOW_LABEL[item.window] || item.window || "Later";
    const statusLabel = RELEASE_STATUS_LABEL[item.status] || item.status || "Draft";
    return (
      "<article class='issue issue--release' id='" +
      escapeHtml(item.id || "") +
      "'>" +
      "<div class='issue__head'>" +
      "<div class='issue__toggle'>" +
      "<span class='badge badge--impact-" +
      escapeHtml(impact) +
      "'>" +
      escapeHtml(IMPACT_LABEL[impact] || impact) +
      "</span>" +
      "<span><p class='issue__title'>" +
      escapeHtml(item.title) +
      "</p><p class='issue__meta'>" +
      escapeHtml(windowLabel) +
      " · " +
      escapeHtml(statusLabel) +
      "</p></span>" +
      "</div>" +
      jiraLink(item, "No ticket") +
      "</div>" +
      (item.opsImpact
        ? "<div class='issue__body'><p>" + escapeHtml(item.opsImpact) + "</p></div>"
        : "") +
      "</article>"
    );
  }

  function renderReleases() {
    const board = document.getElementById("release-board");
    const empty = document.getElementById("release-empty");
    if (!board || !empty) return;
    const releases = Array.isArray(data.releases) ? data.releases : [];
    board.innerHTML = releases.map(renderRelease).join("");
    empty.hidden = releases.length > 0;
  }

  function applyHash() {
    const hash = (location.hash || "#escalations").replace("#", "");
    if (hash === "releases") {
      state.tab = "releases";
      return;
    }
    state.tab = "escalations";
    if (hash && hash !== "escalations") {
      const exists = data.issues.some(function (issue) {
        return issue.id === hash;
      });
      if (exists) state.openIds[hash] = true;
    }
  }

  function renderTabs() {
    document.querySelectorAll("[data-tab]").forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-tab") === state.tab);
    });
    document.querySelectorAll("[data-panel]").forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-panel") !== state.tab;
    });
    document.querySelectorAll("[data-filter]").forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-filter") === state.filter);
    });
  }

  function render() {
    renderMasthead();
    renderTabs();
    renderIssues();
    renderReleaseBanner();
    renderReleases();
  }

  document.addEventListener("click", function (event) {
    const tab = event.target.closest("[data-tab]");
    if (tab) {
      event.preventDefault();
      state.tab = tab.getAttribute("data-tab");
      history.replaceState(null, "", "#" + state.tab);
      render();
      return;
    }

    const filter = event.target.closest("[data-filter]");
    if (filter) {
      state.filter = filter.getAttribute("data-filter");
      state.tab = "escalations";
      history.replaceState(null, "", "#escalations");
      render();
      return;
    }

    const toggle = event.target.closest("[data-toggle]");
    if (toggle) {
      if (event.target.closest("a[href]")) return;
      const id = toggle.getAttribute("data-toggle");
      state.openIds[id] = !state.openIds[id];
      render();
      const row = document.getElementById(id);
      if (row) row.scrollIntoView({ block: "nearest" });
    }
  });

  window.addEventListener("hashchange", function () {
    applyHash();
    render();
    const hash = location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) {
      document.getElementById(hash).scrollIntoView({ block: "nearest" });
    }
  });

  applyHash();
  render();
})();
