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
 * Screenshots:      optional [{ src, caption }]. Empty src renders a placeholder.
 */

window.DASHBOARD = {
  meta: {
    product: "Leasing Center",
    owner: "Product",
    opsPartner: "Cynthia, Operations",
    lastUpdated: "2026-08-28",
    weekOf: "2026-08-25",
    nextReview: "2026-09-02",
    slackChannel: "#askvoip",
    briefingNote:
      "Added Interaction Tracker — Call Review type error ahead of today’s ops follow-up. Screenshots are still a placeholder. Two items still need tickets from earlier: TMLP calculator and guest-card auto-populate.",
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
      lastUpdate: "2026-08-27",
      source: "#askvoip",
      opsImpact:
        "Agents can quote a doubled price after adding occupants. Wrong quotes hit the prospect immediately and erode trust in the calculator.",
      workaround: "Unconfirmed. Do not treat calculator output as final until a workaround is documented from #askvoip.",
      nextAction: "Open the Jira ticket today.",
      nextActionOwner: "Product",
      latestNote:
        "Still no ticket. Today’s job is to file it so ops can track it in Jira.",
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
    {
      id: "notification-line-transcriptions",
      title: "Notification line transcriptions and summaries",
      area: "Call transcription",
      severity: "p2",
      status: "waiting-on-ticket",
      jiraKey: "",
      jiraUrl: "",
      openedOn: "2026-08-27",
      lastUpdate: "2026-08-27",
      source: "ask channel",
      opsImpact:
        "Notification-line calls may not get a usable transcription or summary. Agents lose the write-up they rely on after the call.",
      workaround: "Unconfirmed — pull the current floor workaround from the ask channel.",
      nextAction: "Check the ask channel today for the latest complaint, then open or attach a Jira ticket.",
      nextActionOwner: "Product",
      latestNote: "On today’s list. Details still live in the ask channel — not on this board yet.",
    },
    {
      id: "interaction-tracker-call-review-type-error",
      title: "Interaction Tracker — Call Review type error",
      area: "Interaction Tracker",
      severity: "p2",
      status: "waiting-on-ticket",
      jiraKey: "",
      jiraUrl: "",
      openedOn: "2026-08-28",
      lastUpdate: "2026-08-28",
      source: "Known (PM)",
      opsImpact:
        "Managers cannot log a Call Review from Interaction Tracker. Coaching notes and QA follow-up on that agent stall until the error is cleared.",
      workaround: "Unconfirmed. Capture the live error and current floor workaround in today’s meeting.",
      nextAction: "Confirm repro (agent profile → create Call Review), attach screenshots, then open Jira.",
      nextActionOwner: "Product + Ops",
      latestNote:
        "On the board for today’s follow-up. Screenshots pending. First look: Call Review is interaction type 3; create fails if the type id does not load, or if the agent has no graded calls in the last 8 weeks. Older related ticket DEV-295896 is a 500 on opening Interaction Tracker — confirm whether this is the same failure or a Call Review–only error.",
      screenshots: [
        {
          src: "",
          caption: "Placeholder — screenshots to attach after this meeting",
        },
      ],
    },
  ],

  releases: [],

  changelog: [
    {
      date: "2026-08-28",
      weekOf: "2026-08-25",
      entries: [
        "Added Interaction Tracker — Call Review type error with a screenshot placeholder for today’s ops follow-up.",
      ],
    },
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
