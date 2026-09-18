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
    lastUpdated: "2026-09-18",
    weekOf: "2026-09-15",
    nextReview: "2026-09-25",
    slackChannel: "#askvoip",
    jiraReleasingDashboardUrl: "https://entrata.atlassian.net/jira/dashboards/16707",
    briefingNote:
      "Three ship wins on rapid this cycle: TMLP calculator (DEV-331087), holiday hours (DEV-331205), and office hours customer text (DEV-311114). All three go standard on Oct 6. Interaction Tracker Call Review error is now filed as DEV-338664. Guest-card auto-populate, notification-line transcriptions, and QA surveys wrong-call-type still need tickets.",
  },

  issues: [
    {
      id: "tmlp-occupant-pricing",
      title: "TMLP calculator doubles price when occupants are added",
      area: "Calculator",
      severity: "p1",
      status: "monitoring",
      jiraKey: "DEV-331087",
      jiraUrl: "https://entrata.atlassian.net/browse/DEV-331087",
      openedOn: "2026-08-26",
      lastUpdate: "2026-09-18",
      source: "#askvoip",
      opsImpact:
        "Fixed on rapid. Agents on standard clients can still see the doubled price when occupants are added until Oct 6.",
      workaround: "Rapid clients: no action needed. Standard clients: double-check the calculator quote after adding occupants until Oct 6.",
      nextAction: "Monitor through the Oct 6 standard release. Close on the board after Oct 6 lands.",
      nextActionOwner: "Product",
      latestNote:
        "Shipped on rapid. Standard release Oct 6. DEV-331087 is the ticket of record.",
    },
    {
      id: "holiday-hours-dashboard",
      title: "Holiday hours on the LC dashboard",
      area: "Dashboard",
      severity: "p2",
      status: "monitoring",
      jiraKey: "DEV-331205",
      jiraUrl: "https://entrata.atlassian.net/browse/DEV-331205",
      openedOn: "2026-08-26",
      lastUpdate: "2026-09-18",
      source: "Known (PM)",
      opsImpact:
        "Fixed on rapid as of Sept 17. Standard clients still see the old holiday-hours behavior on the LC dashboard until Oct 6.",
      workaround: "Rapid clients: no action needed. Standard clients: keep current holiday-hours workaround until Oct 6.",
      nextAction: "Monitor through the Oct 6 standard release. Close on the board after Oct 6 lands.",
      nextActionOwner: "Product + Eng",
      latestNote: "Released on rapid Sept 17. Standard release Oct 6.",
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
      status: "monitoring",
      jiraKey: "DEV-311114",
      jiraUrl: "https://entrata.atlassian.net/browse/DEV-311114",
      openedOn: "2026-08-26",
      lastUpdate: "2026-09-18",
      source: "Known (PM)",
      opsImpact:
        "Fixed on rapid as of Aug 4. Standard clients still see the old customer-facing office hours copy until Oct 6.",
      workaround: "Rapid clients: no action needed. Standard clients: reconcile any conflicting office-hours copy on outbound comms until Oct 6.",
      nextAction: "Monitor through the Oct 6 standard release. Close on the board after Oct 6 lands.",
      nextActionOwner: "Product",
      latestNote:
        "Ticket of record moved from DEV-245856 to DEV-311114. Shipped on rapid Aug 4. Standard release Oct 6.",
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
      status: "open",
      jiraKey: "DEV-338664",
      jiraUrl: "https://entrata.atlassian.net/browse/DEV-338664",
      openedOn: "2026-08-28",
      lastUpdate: "2026-09-18",
      source: "Known (PM)",
      opsImpact:
        "Managers cannot log a Call Review from Interaction Tracker. Coaching notes and QA follow-up on that agent stall until the error is cleared.",
      workaround: "Other interaction types (One on One, Touchpoint, etc.) still work from the same New Interaction menu. Use one of those to capture the coaching until Call Review is unblocked.",
      nextAction: "Engineering to confirm why Call Review’s 8-week graded-call query is empty while the same profile still shows QA scores on the goal cards.",
      nextActionOwner: "Product + Eng",
      latestNote:
        "Ticket filed as DEV-338664. Repro confirmed on Alexis Moore’s profile (Interaction Tracker → New Interaction → Call Review). Exact error: “No graded calls found in last 8 weeks.” The profile still shows QA Fundamentals 98% and QA Quality of Interaction 99%, so Call Review is looking at a different (or empty) graded-call set than the goal cards. Not the same as DEV-295896 (500 on opening Interaction Tracker).",
      screenshots: [
        {
          src: "assets/screenshots/call-review-new-interaction-menu.png",
          caption: "New Interaction → Call Review on the agent profile",
        },
        {
          src: "assets/screenshots/call-review-error-no-graded-calls.png",
          caption: "Error after selecting Call Review: No graded calls found in last 8 weeks",
        },
      ],
    },
    {
      id: "qa-surveys-wrong-call-type",
      title: "QA surveys assigned to the wrong call type",
      area: "QA surveys",
      severity: "p2",
      status: "waiting-on-ticket",
      jiraKey: "",
      jiraUrl: "",
      openedOn: "2026-08-28",
      lastUpdate: "2026-08-28",
      source: "Ops meeting",
      opsImpact:
        "Agents get scored against the wrong survey. Coaching and QA numbers drift from the call that actually happened.",
      workaround: "Unconfirmed — capture what QA / ops is doing when a survey lands on the wrong type.",
      nextAction: "Get examples from ops (wrong type vs. expected type) and open Jira.",
      nextActionOwner: "Product + Ops",
      latestNote:
        "Placeholder from today’s ops meeting. No ticket yet. Need call examples and which types are mixing.",
    },
  ],

  releases: [],

  changelog: [
    {
      date: "2026-09-18",
      weekOf: "2026-09-15",
      entries: [
        "TMLP calculator (DEV-331087), holiday hours (DEV-331205), and office hours customer text (DEV-311114) all shipped on rapid — standard release Oct 6. Moved all three to Monitoring.",
        "Filed Interaction Tracker — Call Review type error as DEV-338664.",
        "Swapped office-hours ticket of record from DEV-245856 to DEV-311114.",
        "Still no ticket for: guest-card auto-populate, notification-line transcriptions, QA surveys wrong-call-type.",
      ],
    },
    {
      date: "2026-09-02",
      weekOf: "2026-09-01",
      entries: [
        "What’s Releasing tab now opens with a banner to the Jira What’s Releasing dashboard (16707).",
        "Floor-impact items still land below the banner when we add them here.",
      ],
    },
    {
      date: "2026-08-28",
      weekOf: "2026-08-25",
      entries: [
        "Added Interaction Tracker — Call Review type error for today’s ops follow-up.",
        "Attached Call Review screenshots (New Interaction menu + “No graded calls found in last 8 weeks”).",
        "Added placeholder: QA surveys assigned to the wrong call type (waiting on ticket).",
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
