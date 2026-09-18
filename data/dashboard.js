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
      "Live P1 incident today: LC actions updating guest cards (DEV-336991) — data fix rolling out, root cause under investigation. Four ship wins on rapid this cycle: TMLP calculator (DEV-331087), holiday hours (DEV-331205), office hours customer text (DEV-311114), and QA surveys wrong-call-type. All four go standard on Oct 6. Interaction Tracker Call Review error is now filed as DEV-338664. Guest-card auto-populate and notification-line transcriptions still need tickets.",
  },

  issues: [
    {
      id: "lc-actions-updating-guest-cards",
      title: "LC actions updating guest cards",
      area: "Guest cards",
      severity: "p1",
      status: "in-progress",
      jiraKey: "DEV-336991",
      jiraUrl: "https://entrata.atlassian.net/browse/DEV-336991",
      openedOn: "2026-09-18",
      lastUpdate: "2026-09-18",
      source: "Incident today",
      opsImpact:
        "LC agent actions are updating guest card data. Live incident today. Assume guest card fields on affected records may be modified until the data fix lands and root cause is confirmed.",
      workaround: "Awaiting eng guidance. Data fix is rolling out to correct affected records.",
      nextAction: "Eng: land the data fix and identify root cause. Product: confirm scope of affected guest cards and share status back to ops.",
      nextActionOwner: "Product + Eng",
      latestNote:
        "Live incident opened today. DEV-336991 is the placeholder ticket. Data fix in flight; root cause under investigation. Will update as the fix rolls out and the RCA lands.",
    },
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
      severity: "p3",
      status: "monitoring",
      jiraKey: "",
      jiraUrl: "",
      openedOn: "2026-08-28",
      lastUpdate: "2026-09-18",
      source: "Ops meeting",
      opsImpact:
        "Fixed on rapid. Standard clients can still see QA surveys land on the wrong call type until Oct 6, so coaching and QA numbers may drift from the call that actually happened.",
      workaround: "Rapid clients: no action needed. Standard clients: QA to sanity-check surveys against call type until Oct 6.",
      nextAction: "Monitor through the Oct 6 standard release. Close on the board after Oct 6 lands.",
      nextActionOwner: "Product + Ops",
      latestNote:
        "Fix spanned multiple tickets and is nearing resolution. Shipped on rapid already; standard release Oct 6.",
    },
  ],

  releases: [],

  changelog: [
    {
      date: "2026-09-18",
      weekOf: "2026-09-15",
      entries: [
        "Added P1 live incident: LC actions updating guest cards (DEV-336991). Data fix rolling out, root cause under investigation.",
        "TMLP calculator (DEV-331087), holiday hours (DEV-331205), and office hours customer text (DEV-311114) all shipped on rapid — standard release Oct 6. Moved all three to Monitoring.",
        "QA surveys wrong-call-type also shipped on rapid (spanned multiple tickets, nearing resolution). Moved to P3 Monitoring — standard release Oct 6.",
        "Filed Interaction Tracker — Call Review type error as DEV-338664.",
        "Swapped office-hours ticket of record from DEV-245856 to DEV-311114.",
        "Still no ticket for: guest-card auto-populate and notification-line transcriptions.",
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
