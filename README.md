# LC Operations Briefing

Weekly GitHub Page for Leasing Center operations: what is escalated right now, and what is releasing that will hit the floor.

This is a **snapshot**, not live Jira. Product updates it once a week. Operations (Cynthia) is the partner of record for the outstanding-issue list.

## What is on the board

**Escalations** — current ops complaints and Jira tickets, with severity, status, ops impact, workaround, and a named next action.

**What’s releasing** — upcoming changes scored by floor impact:

- **None** — no agent-facing change
- **Awareness** — agents should know it shipped
- **Training** — job aid or walkthrough needed
- **Workflow change** — process on the floor actually changes

## Weekly ritual

1. Open `data/dashboard.js`.
2. Update `meta.lastUpdated`, `meta.weekOf`, `meta.nextReview`, and `meta.briefingNote`.
3. Add / edit / resolve issues. Move shipped work onto `releases` (or into `window: "shipped"`).
4. Add a short `changelog` entry for the week.
5. Commit and push. GitHub Pages republishes in a minute or two.

Issue fields that matter for the meeting:

| Field | Why it is there |
| --- | --- |
| `severity` | P1 is quoting/routing broken now; P2 is recurring floor pain; P3–P4 is aging or copy |
| `status` | Especially `waiting-on-ticket` — those are the ones ops cannot track in Jira yet |
| `opsImpact` | What the agent or caller feels, not the engineering summary |
| `nextAction` + `nextActionOwner` | The only question the meeting needs to leave with |

## Run it locally

Serve the folder (modules are not required; a static server avoids `file://` surprises):

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173

**Click-to-call outbound estimate** (internal costing brief, not the ops board): http://localhost:4173/ctc-outbound/

## Publish on GitHub Pages

1. Create a GitHub repo and push this project.
2. Settings → Pages → Deploy from branch → `main` / root (`/`).
3. Share the Pages URL with operations. Prefer a **private** repo if the org allows Pages on private repositories — this board will carry ticket titles and floor complaints.

The CTC outbound costing brief publishes at `ctc-outbound/` on the same Pages site (separate from the ops board).

## Out of scope (for now)

- Live Jira sync
- Slack posting automation
- Auth / logins
- Cynthia’s outstanding list (paste it into `issues` when it arrives)
