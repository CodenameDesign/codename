# Civic Searchlight - Search + Alerts rework: developer handoff

Static design mockup for the Civic Searchlight rework (search page + new Alerts page). This document is written so a developer **or an AI coding assistant** can implement it in the live app. Paste the whole file (and the files it references) into the assistant, then use the prompt at the bottom.

> The mockup is visual. Behaviour in `js/alerts.js` is reference logic for UI states only - replace data access with real API calls.

---

## 1. What is in this folder

```
dev-handoff/
  DEV-HANDOFF.md                 <- this file
  demo-alerts.html               <- runnable Alerts page assembled only from the pieces below
  components/                    <- HTML fragments, one per UI block (existing Tailwind classes + tokens)
    nav.html  hero-banner.html  search-form.html  results-panel.html  results-list-view.html
    feedback-row.html  footer.html  alerts-card.html
  css/cno-civic-searchlight-overrides.css   <- every layout value that was inline style="" in the mockup, as named classes
  js/alerts.js                   <- Alerts page behaviour (filter, sort, select, frequency, delete/undo, toasts)
  data/alerts-data.json          <- sample data / schema for alerts
```

Full-page references live one level up:

| File | What it is |
|---|---|
| `search-2.html` | **Current** Search page. Links to `alerts-2.html`. |
| `alerts-2.html` | **Current** Alerts page (interactive). Links to `search-2.html`. |
| `search.html`, `alerts.html` | Earlier iterations (kept for comparison). `alerts.html` is the static first pass. |
| `index.html` | Search page with the "Manage Alerts" popup variant. |
| `original.html` | Snapshot of the live app before the rework. Do **not** build from it. |

Run locally: `python3 -m http.server` in the repo folder, then open `/dev-handoff/demo-alerts.html` or `/alerts-2.html`.
(Serve from the folder root: some assets use root-relative paths. Needs internet only for YouTube thumbnails.)

## 2. Ground rules

1. **Do not change the app's existing CSS or design tokens.** The mockup uses the compiled stylesheet `assets/index-C-751qtw.css` untouched. Reuse its utility classes (`text-sm`, `bg-gray-100`, `px-md`, `rounded-lg`, ...) and tokens.
2. Where the mockup needed values the compiled CSS lacks, it used inline `style=""`. Those are collected in `css/cno-civic-searchlight-overrides.css` - port them to your own utilities or use that file.
3. Fonts: Proxima Nova (300/400/600/700/800), already declared by the app.
4. Layout is the deliverable. Colours, type and spacing tokens are the app's.
5. Sample data is placeholder. Only Toronto/planning (from the Search page), Mississauga/heritage and Brampton/transit use realistic text; counts and the other alerts' snippets are invented.

### Tokens and classes you will see
- Colours: `gray-100` (#f2f2f2, page bg and selected-state bg), `gray-200` borders, `gray-500/600/800` text, `red-500` (actions/frequency labels), `amber-100/800` (topic chips), `yellow-500` (`<mark>` highlight), `blue-500` (play button).
- Spacing tokens: `xs .25rem`, `sm .5rem`, `md .75rem`, `lg 1rem`, `xl 1.5rem`, `2xl 2rem`, custom `2.2xl 2.2rem` (page grid row gap).
- Container: `max-w-[1440px] mx-auto px-sm md:px-lg`.
- Icons: Font Awesome inline SVGs (`svg-inline--fa`) and simple stroke SVGs.

## 3. Navigation (all pages)

`Search | Alerts | About` then `Account` + `Sign Out` box, then the red-outline `Support Civic Searchlight` pill (far right).

- Nav row height 69px.
- The link for the **current page is underlined** (`text-decoration: underline`). Search page: Search underlined. Alerts page: Alerts underlined.
- Account is 14px grey (`text-sm text-gray-600`); Search/Alerts/About are 16px black (`text-sm lg:text-base`).
- Search -> `search-2.html`, Alerts -> `alerts-2.html`, About -> not wired.
- Component: `components/nav.html`.

## 4. Search page (`search-2.html`)

Vertical order inside the container:

1. Nav row (69px).
2. **Hero banner** - `components/hero-banner.html`. 130px tall (padding 1.5rem), fully rounded, **1.5rem below the nav**.
3. **White card** (`bg-white md:rounded-xl p-md md:p-lg`), **1.5rem below the hero**. Inside, top to bottom:
   - **Search row** (`components/search-form.html`): one rounded bordered bar containing, left to right, topic input (search icon, flexible width) | Province | Type | Council | Date. The red **Search** button is *outside* the bar, 0.5rem to its right, fully rounded (1rem), same height.
     - Province / Type / Date dropdown blocks: label above value, caret at the **far end** of the block, grey hover (`bg-gray-50`) fills the **whole block**. Date block's right corners follow the bar's rounding.
   - **Chips row**: topic chip (amber) + council chip (grey) with x, then `Clear terms` and the **Save as an alert** red outline button (white fill, red border/text, rounded-lg) -> links to `alerts-2.html`. **Map | List toggle sits at the far right** of this row.
   - **Map view** (`components/results-panel.html`): **left** panel `w-96` (384px) with the stats (`mentions / meetings / councils`), a `Mentions | By municipality` segmented control, then the scrolling mention list; **map on the right**. Both 530px tall, 0.75rem gap.
   - **List view** (`components/results-list-view.html`): replaces the map view. It is *inside the same white card*, directly under the chips row, with a thin grey divider (`border-t border-gray-200`) at the position where the map would start. No gap or rounded corners between the search section and the results - one white block.
4. **Feedback row** (`components/feedback-row.html`): "Did you find what you were looking for? Yes / No", Search tips, How to cite. Right aligned, below the card (1.25rem above, 2.5rem below).
5. **Footer** (`components/footer.html`): full-bleed plain black bar (no background image, no rounded corners). Logo, copyright and links sit on the same 1440px grid as the card.

Behaviour: existing app behaviour for search, filters and Map/List toggle is unchanged by this mockup. Only the layout moved.

## 5. Alerts page (`alerts-2.html`)

Vertical order: nav row (69px) -> white card **1.5rem below the nav** (no hero banner on this page) -> footer.
Component: `components/alerts-card.html`. Behaviour: `js/alerts.js`.

### 5.1 Card header
- Left: **"Alerts"** title (bold, 1.4rem).
- Right: red **New Search** button (solid `bg-red-500 text-white`, rounded 1rem, small search icon) -> `search-2.html`.

### 5.2 Two columns (gap 0.75rem, each `min(78vh, 735px)` tall, scroll independently)

**Left column - alert list (fixed 24rem wide)**
- Top bar with two dropdown blocks side by side:
  - **Filter** (label) / value. Options: `All Alerts`, `Instantly`, `Daily`, `Weekly`, `Pause`, then a divider and a **"Search terms"** group listing every distinct topic in the user's alerts (alphabetical).
  - **Sort** (label) / value. Options: `Most Recent` (default), `Created`, `A-Z` (by search term), `Mentions this week`, `Mentions all time`, `City A-Z`.
  - Dropdown panel: white, 1px grey border, rounded-lg, shadow, items 14px. The current choice is **bold** (no check mark). Closes on outside click or Esc.
- Alert rows (one per saved search): chips line (city chip grey + search-term chip amber), frequency label in red (`Instantly` / `Daily` / `Weekly`; paused alerts show grey **"Paused"**), stats line `N this week  N this month  N all time` (numbers bold).
- **Selected row**: `bg-gray-100` background + a **2px black bar inset inside the row** (`left .25rem; top .2rem; bottom .2rem; radius 1px`). The bar is inset so it never touches the column's rounded corners. The city chip turns white on the grey background so it stays visible.

**Right column - selected alert detail**
- **Header** (same `bg-gray-100` as the selected row so the two read as related; same inset black bar, `left .2rem`):
  - "Saved Search Terms" (bold) with the city chip (white on grey) + search-term chip (amber) below.
  - "Alert Frequency" (bold) with radios: **Instantly, Daily, Weekly, Pause**.
  - **Delete alert**: red text link (underlined), top right of the header.
- **Mentions list** for the selected alert: date (grey), meeting title (bold, hover blue), snippet with the search term highlighted (`<mark class="bg-yellow-500">`), blue play button on the right.

### 5.3 Behaviours (see `js/alerts.js`)
| Action | Result |
|---|---|
| Click an alert row | It becomes selected (grey bg + bar); header chips, frequency radio and mentions list all update to that alert. |
| Change Filter | List is filtered; if the selected alert is filtered out the first match becomes selected. An alert you just edited stays visible until you pick another. |
| Change Sort | List re-orders. Default load order is Most Recent, and the first alert is selected on load. |
| Change frequency radio | The alert's frequency label in the **left column updates immediately** and a **toast** appears: `Alert frequency updated to Weekly for City of Toronto / planning` (or `Alert paused for ...` for Pause). Toast auto-hides after 3s. |
| Delete alert | Alert is removed, the next alert in the current view is selected, toast `Alert deleted: <city> / <term>` with **Undo** (6s). Undo restores it in its previous position. |
| Empty states | No alerts: list shows "No saved alerts.", radios and Delete are disabled. Filter with no match: "No alerts match this filter." |

Toast: fixed, bottom centre, dark (`#111`) background, white 14px text, rounded-lg, one at a time.

### 5.4 Data model (`data/alerts-data.json`)
```jsonc
{
  "city": "City of Toronto",           // council / municipality name
  "topic": "planning",                  // saved search term
  "freq": "Daily",                      // "Instantly" | "Daily" | "Weekly" | "Pause"
  "stats": ["12", "148", "2,546"],      // [this week, this month, all time] (display strings)
  "updated": "10/16/2026",              // optional; overrides "last mention" for Most Recent sorting
  "items": [                            // mentions for this alert, newest first
    ["7/30/2026", "City Council - July 30, 2026", "...snippet with <mark class=\"bg-yellow-500\">planning</mark> highlighted..."]
  ]
}
```
Derived in JS (compute server-side in the real app): `created` (order created), `recent` (latest mention or `updated`), numeric `week` / `all` for sorting.

## 6. Differences from the live app (what actually changed)
- Header: new nav (Search | Alerts | About); hero banner is shorter (130px) with a fixed 1.5rem gap to the card.
- Search bar: topic input first, filters to its right, Search button outside the bar, caret at block end with full-block hover.
- Chips row: Save as an alert (red outline button), Map/List toggle moved to the right.
- Results: list panel on the **left**, map on the right; list view merged into the same white card.
- Feedback row moved out of the card to a right-aligned row beneath it.
- Footer: full-bleed plain black.
- New Alerts page (this document, section 5).
- Page background is `bg-gray-100` (#f2f2f2) behind white cards.

## 7. Acceptance checklist
- [ ] Nav shows the underline on the current page; Account is smaller/grey.
- [ ] Hero -> card gap is exactly 1.5rem; nav -> hero gap is 1.5rem; on Alerts, nav -> card gap is 1.5rem.
- [ ] Search bar: caret at block end, hover grey fills the block, Search button outside bar.
- [ ] List view is one continuous white block with the search section, divider line at the map's top position.
- [ ] Alerts: Filter and Sort dropdowns work; current option bold, no check mark.
- [ ] Selected alert and detail header share the grey background and an inset 2px black bar.
- [ ] Changing frequency updates the left column row and shows the toast.
- [ ] Delete alert removes the row, selects the next, and Undo restores it.
- [ ] Pause shows "Paused" (grey) in the list.
- [ ] No changes to the app's compiled CSS or tokens.

## 8. Prompt to give the AI assistant

> You are implementing a UI rework in our existing app. Read `dev-handoff/DEV-HANDOFF.md` fully, then use the HTML fragments in `dev-handoff/components/`, the layout overrides in `dev-handoff/css/cno-civic-searchlight-overrides.css`, and the reference behaviour in `dev-handoff/js/alerts.js` + `dev-handoff/data/alerts-data.json`.
>
> Rules: do **not** modify the existing compiled CSS or design tokens; reuse existing Tailwind utility classes and tokens; translate inline `style=""` overrides into our own utilities or the supplied override classes; keep the layout exactly as specified (sizes, gaps, positions in sections 3-5). Replace the sample data with our real alerts API and keep the UI states (selected, filtered, empty, paused) and toasts as described.
>
> Start with the Alerts page (section 5), compare against `demo-alerts.html` side by side, then do the Search page changes (section 4). After each page, run the acceptance checklist in section 7 and report any item that does not pass. Ask before changing anything not covered in this document.
