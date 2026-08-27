/**
 * LC Operations Briefing — weekly update file
 *
 * Ritual: edit this file → commit → push. GitHub Pages republishes in a minute or two.
 *
 * Issue status:     open | in-progress | waiting-on-ticket | waiting-on-ops | monitoring | resolved
 * Issue severity:   p1 | p2 | p3 | p4
 * Release window:   this-week | next | later | shipped
 * Release status:   draft | scheduled | in-qa | at-risk | shipped
 * Ops impact level: none | awareness | training | workflow-change
 */

window.DASHBOARD = {
  meta: {
    product: "Leasing Center",
    owner: "Product",
    opsPartner: "Cynthia, Operations",
    lastUpdated: "2026-08-27",
    weekOf: "2026-08-25",
    nextReview: "2026-09-02",
    slackChannel: "#askvoip",
    briefingNote:
      "First standing briefing. Four known escalations are on the board while we wait on Cynthia’s outstanding list — that list becomes the source of truth for anything we are missing. Two items still need tickets: TMLP calculator (price doubling) and guest-card auto-populate. Holiday hours and office-hours customer text already have Jira.",
  },

  issues: [
    {
      id: "tmlp-occupant-pricing",
      title: "TMLP calculator doubles price when occupants are added",
      area: "Calculator",
      severity: "p1",
      status: "waiting-on-ticket",
      jiraKey: "",
      jiraUrl: "",
      openedOn: "2026-08-26",
      lastUpdate: "2026-08-26",
      source: "#askvoip",
      opsImpact:
        "Agents can quote a doubled price after adding occupants. Wrong quotes hit the prospect immediately and erode trust in the calculator.",
      workaround: "Unconfirmed. Do not treat calculator output as final until a workaround is documented from #askvoip.",
      nextAction: "Pull repro details from #askvoip and open a Jira ticket.",
      nextActionOwner: "Product",
      latestNote:
        "Waiting on ticket and details. Cynthia’s outstanding list may add volume, sites, or a cleaner repro.",
    },
    {
      id: "holiday-hours-dashboard",
      title: "Holiday hours on the LC dashboard",
      area: "Dashboard",
      severity: "p2",
      status: "in-progress",
      jiraKey: "DEV-331205",
      jiraUrl: "https://entrata.atlassian.net/browse/DEV-331205",
      openedOn: "2026-08-26",
      lastUpdate: "2026-08-27",
      source: "Known (PM)",
      opsImpact:
        "Holiday coverage and after-hours routing depend on hours being correct on the LC dashboard. If this is wrong, agents and callers get the wrong availability on holidays.",
      workaround: "Unconfirmed — capture whatever ops is doing today in the next weekly pass.",
      nextAction: "Confirm current repro, owner, and target release with engineering.",
      nextActionOwner: "Product + Eng",
      latestNote: "Ticket exists. Fold into the What’s Releasing tab once a ship window is known.",
    },
    {
      id: "guest-card-autopopulate",
      title: "LC auto-populate overrides guest card information",
      area: "Guest cards",
      severity: "p2",
      status: "open",
      jiraKey: "",
      jiraUrl: "",
      openedOn: "2026-08-26",
      lastUpdate: "2026-08-26",
      source: "Known (PM)",
      opsImpact:
        "Agent-entered guest card fields get overwritten. Repeat contacts and later follow-up run on incomplete or wrong prospect data — an ongoing floor complaint, not a one-off.",
      workaround: "Unconfirmed. Until we have a ticket, treat this as a known data-loss risk and document when it happens.",
      nextAction: "Write a tight repro (when it overrides, which fields) and open Jira — or confirm expected behavior and train to it.",
      nextActionOwner: "Product + Ops",
      latestNote: "No ticket yet. Needs a decision: defect vs. intended auto-populate that ops should work around.",
    },
    {
      id: "office-hours-customer-text",
      title: "Office hours customer text",
      area: "Office hours",
      severity: "p3",
      status: "in-progress",
      jiraKey: "DEV-245856",
      jiraUrl: "https://entrata.atlassian.net/browse/DEV-245856",
      openedOn: "2026-08-26",
      lastUpdate: "2026-08-26",
      source: "Known (PM)",
      opsImpact:
        "Customer-facing office hours copy can be wrong or stale. Callers get conflicting signals about when the office or LC is available.",
      workaround: "Unconfirmed.",
      nextAction: "Confirm the live customer-facing copy vs. expected copy, and whether this ticket is still the right vehicle.",
      nextActionOwner: "Product",
      latestNote:
        "Older ticket number than holiday hours — likely aging. Confirm it is still open and still the complaint ops is feeling.",
    },
  ],

  releases: [],

  changelog: [
    {
      date: "2026-08-26",
      weekOf: "2026-08-25",
      entries: [
        "Board created.",
        "Seeded four known escalations (two with Jira, two waiting on tickets).",
        "What’s Releasing is under construction until we have real ship dates.",
        "Waiting on Cynthia’s outstanding list to replace this seed set as the ops source of truth.",
      ],
    },
  ],
};
