# Versance Coworker — Chrome side panel design system

Companion files: `tokens.css` (all tokens and component recipes, scoped to `.vc-ext`), `specimen.html` / `specimen.png` (visual check). Original files are untouched.

## 1. Principles

1. **One accent: `#324EFE`.** Every accent use inside `.vc-ext` is this colour or a value derived from it: toggle-on, active rail button, primary buttons (e.g. Export Report), count badge, focus rings, selected states, links, info/help text, citation chips, close ✕. Pale tints are used for disabled and low-emphasis buttons (send, ADD, Run Report).
2. **No green.** The HTML's greens (`#5AC47E`, `#3DA865`, `#DEF3E5`, `#1C6B38`) and its blues `#334EFE` / `#2B40C5` are not used. `#334EFE` and `#2B40C5` are collapsed into `#324EFE` plus derived hover/pressed values.
3. **The HTML supplies structure only:** type family (Figtree), radii, spacing, shadows, component geometry, and its neutral greys. Not its accent colours.
4. **Light only.** The PNGs show no dark mode, so none is defined. The HTML's dark theme is intentionally excluded; adding one needs new design input.
5. **Success state:** no PNG shows one, so none is defined. If a screen needs it, flag it; don't add green.
6. Red annotation labels and leader lines in the PNGs are specs, never UI.

## 2. PNG reading order

Filename order: 101a, 101ab, 101ac, 101b, 102a, 102aa, 102s, 201a, 201b, 401aa, 401ab, 411a, 501aa, 501ab, 501bb, 601a, 601b, 701a, 701b. It matches the user flow, so I relied on it.

## 3. Colour

| Token | Value | Use |
|---|---|---|
| `--accent` | `#324EFE` | everything accent |
| `--accent-hover` | `#2C45E0` | accent + 12% black |
| `--accent-pressed` | `#263BC1` | accent + 24% black |
| `--accent-tint-25` | `#CCD3FF` | disabled / low-emphasis buttons (send, ADD, Run Report) |
| `--accent-tint-15` | `#E0E4FF` | selected-state fill, citation chip, ✕ hover |
| `--accent-tint-8` | `#EFF1FF` | hover wash |
| `--pane` | `#F9F9F9` | right tool pane and help fill (annotation) |
| `--hover` / `--chip` | `#F3F5F9` | tiles, pills (HTML grey) |
| `--ink` / `--muted` / `--faint` | `#000` / `#65728E` / `#8D96AA` | text (HTML greys) |
| `--line` / `--line-soft` | `#D9DDE5` / `#F3F5F9` | borders |
| `--risk-high` / `--risk-medium` | `#DC2927` / `#F59D0A` | risk badges, white text (sampled from the PNG; the HTML has no severity colours; not accent) |
| Tags | filing = accent · news `#E2B43D` · transcript `#EA5B5B` · web `#65728E` | HTML tag colours, filing collapsed into the accent |

Selected states use `--accent-tint-15` fill with `--accent` text. **Focus** (mirrors the HTML's real rules):
1. Buttons and clickable controls: `:focus-visible` = `outline: 2px solid #324EFE; outline-offset: 2px`. The control's own border and radius are untouched (the HTML's `border-radius: 6px` on focus is deliberately not copied).
2. Text fields (company search, Paste a link, chat input): `outline: none`; only the existing 1px border changes to `#324EFE`. No ring, no offset.
3. The chat composer container gets no extra focus treatment.
4. Selects follow the HTML: `select:focus { outline: 2px solid accent }`.

Verified with real keyboard focus (Playwright, Chrome, Tab key) at 3×: computed button outline `solid 2px rgb(50,78,254)`, offset 2px, radius 8px unchanged; computed field outline `none`, border `1px rgb(50,78,254)`, no box-shadow. Evidence: `focus-button@3x.png`, `focus-field@3x.png`.

### Deliberate exception to the single-accent rule

The **"Web Search On" pill** is near-black `#0A1922` (`--exception-dark`, HTML Midnight Teal) with white text and a white globe icon, exactly as in the reference PNGs (VBE-101a, 101ab, 101ac, 101b; its "Off" state is a white pill with grey text). It is the only non-accent filled control. Do not extend this colour to other components.

## 4. Type (Figtree)

| Role | Spec |
|---|---|
| Help title | 18px Bold `#324EFE` |
| Help subhead | 14px Bold `#324EFE` |
| Help / info body, links | 14px Regular `#324EFE` (links underlined) |
| Body, chat, lists, buttons | 14px Regular ink |
| Pane title | 14px Semibold; sub-line 14px italic |
| Meta / small | 12px; caps labels 11px, tracked |

## 5. Shape, spacing, motion (from the HTML)

Radii: pill 999 · composer 20 · card 16 · panel/tile 12 · input/select 10 · button 8 · tag 6 · citation 4. Shadows `--shadow-sm` / `--shadow`. Spacing steps 4–32px. Transitions 120–180ms. Dashed rules separate content blocks.

## 6. Components (all in `tokens.css`, rendered in the specimen)

Toggle (`.tog`, `.on`) · buttons (`.btn`, `.btn.p`, `.btn.o`, `.btn.dark`, `.btn.tile-btn`) · send button (`.send-btn`, disabled until content) · field/select · pills & tab strip (`.cpill`, `.tab`) · icon rail (`.rail`, `.rail-btn`, `.rail-btn.active`) · count badge (`.badge`) · tile with close ✕ (`.tile`, `.close`) · risk badges (`.risk.high|.medium`) · source tags (`.tg`) · citation (`.cite`) · list row (`.doc-row`) · info text (`.info-title`, `.info-sub`, `.info`, `.link`).

Geometry from the PNGs (÷2, assuming 2× exports): panel ≈799px high; compact ≈428px wide, expanded ≈799px (chat column ≈371px, tool pane, rail ≈40px). Both panes scroll internally; footer "Open Versance.ai ↗" + avatar fixed at the bottom of the tool pane. Rail order: Research context (count badge), My filings, CAD library, US library, Compliance, Output Centre, History.

## 7. Screen inventory (copy from the PNGs)

Header on every screen: **INTEGRA RESOURCES CORP**. Company names in the mock data (Integra, Australis Capital, Equinox Gold, South Railroad, Company A–C, etc.) stay as placeholders.

- **101a Coworker:** "Hi," / "Welcome to the Versance Coworker" / "I can help you research any Canadian or US public company's filings and news, and see how they compare with peers and with the page you're working on. Every answer comes with its sources. When you're drafting, I can also check your work against securities regulations before it goes out." Chips: How it works · Summarise the current web page · Run a compliance review. Composer "Ask me anything…" · Web Search On · Export Conversation.
- **101ab/ac Switcher:** RECENT COMPANIES: Company One, **Company Two** (PNG typo "Comany Two" corrected), Company Three. Typing "Aar": RECENT Aardvark Mines; ALL COMPANIES Aarial Company, Aarke Capital, Aarke Mines (repeated). `EXIT` pill while typing.
- **101b How it works:** "How the Versance Coworker Works" · 1. Choose a primary company · 2. Add documents to research context · 3. Ask and compare · 4. Run a compliance review, with the body copy shown in the PNG.
- **102a/aa/s Research context:** "Research context" `?` · "Coworker answers using everything listed here" · toggle rows "All INTEGRA RESOURCES C… Filings", "Current URL" · "Add a URL" / "Upload a Document" (selected: "Cancel" link, "Paste a link" field, ADD) · "Sources in this conversation" + Clear all · source cards with `×` · "Ask Coworker to compare these documents". Empty: "No documents added yet." with the PNG's two lines.
- **201a/b Primary Company Filings:** "Showing your selected company's filings" · search + filter · rows · help card ("Select a document to view it or hover and click on the icon add it to your research context to compare specific documents. Switch top level company to change the documents you see here.").
- **401aa/ab Search Canadian Filings:** tabs Coworker | Filings · "Welcome to Canadian Documents Search" intro · "Find a Company" + A–Z + list · "Search <Company> Filings" + "← Switch companies".
- **411a Filing:** "← Exit document" · "Add Document to Context" · page preview · chips "Summarize this filing", "Highlight key points from this filing".
- **501aa/ab/bb Compliance Review:** tabs Coworker | Compliance Review · "Welcome to Compliance review" intro · "Check current URL for compliance", "Upload a document" · How it works (3 steps) · reviewed-source row with `×` · selects Country / Regulation / Document Type · Run Report → Re-Run Report · "Compliance Report Generated" + Export Report · report cards with High/Medium risk badges and "Suggested refinement".
- **601a/b Output Centre:** intro "Access, manage, and export all documents generated from your research and filing analysis." Empty: "You haven't created any reports yet." List: search + filter, rows with type chip and date.
- **701a/b History:** intro "Access, manage, and export all your recent conversations with the Versance coworker." **Empty: "You haven't had any conversations yet."** (replaces the PNG's "reports" text). List: "Search conversations", "Auto-generated chat title" rows with an edit icon on hover, chat open on the left.

## 8. Resolved annotations (build rules)

Updated headers and copy per screen; 14px text everywhere; white chat pane; company name truncates, never wraps; per-item `×` plus Clear all; Add-a-URL loses its link and shows Cancel; send button is full opacity once there is input; Coworker | Filings / Compliance Review toggle; intro tile dismiss reveals `?`; `new report` button once parameters are set; icons removed from the compliance selects; home button on History; "Exit document" and "Switch companies" wording.

## 9. Content flags — status

- "Comany Two" → **Company Two** (fixed).
- Empty History → **"You haven't had any conversations yet."** (fixed).
- Other company names: kept as placeholders.
- **501ab truncated annotation.** File: `VBE-501ab-Compliance-In-Coworker.png`. Exact string, as written: `new copy once you’ve selected a`. It ends mid-sentence, and its leader line points at the right pane, where the PNG already shows the copy "Set the jurisdiction, regulation and document type, then run the review." / "Your report will appear here." I have not written any missing text. Phase 2 will reproduce only that visible copy, unless you give me the intended sentence.
- Success state: not defined; flag if needed.
- Low-risk badge: not defined; no PNG shows one.

## 10. Help `?` icon — rule (PNG inconsistencies resolved)

The reference PNGs are inconsistent about the grey `?` next to a pane title. Rule applied in every screen: **the `?` is always shown on a pane title, except while that pane's own help card is open** (closing the card makes the `?` appear; clicking `?` reopens it, per the annotation "close and the ? appears").

| Screen | PNG | Built |
|---|---|---|
| 102a, 102aa Research context | no `?` (PNG gap; 102s adds it) | `?` |
| 102s Research context (empty) | `?` | `?` |
| 201a My filings | `?` | `?` |
| 201b My filings, help open | none | none (card open) |
| 401aa Search Canadian Filings | no `?` (PNG gap) | `?` |
| 401ab Search <Company> Filings | `?` | `?` |
| 411a Filing | no `?` (PNG gap) | `?` |
| 501aa Compliance, how-it-works open | none | none (card open) |
| 501ab Compliance options | `?` | `?` |
| 501bb Compliance report | no `?` (PNG gap) | `?` |
| 601a Output Centre, card open | none | none (card open) |
| 601b Output Centre | `?` | `?` |
| 701a History, card open | none | none (card open) |
| 701b History | `?` | `?` |

Five screens differ from their PNG (102a, 102aa, 401aa, 411a, 501bb), on the assumption that the PNGs missed the icon.

## 11. Right-pane header spacing — rule

One rhythm on every right-pane screen (the PNGs varied between roughly 12 and 24px):

- Pane title → first block: **16px**.
- Pane title → italic sub-line: **4px**; sub-line → first block: **16px**.
- Pane title → back link ("Switch companies", "Exit document"): **8px**; back link → first block: **16px**.

Measured in the browser on all 15 right-pane states (102a/aa/s, 201a/b, 401aa/ab, 411a, 501aa/ab/bb, 601a/b, 701a/b): every first block sits exactly on this rule. Implemented in `screens/screens.css` (`.ptitle`, `.psub`, `.back`).

## 12. Close × colour — rule

- **Dismiss ×** on info tiles, help cards and the "How the Versance Coworker Works" panel: accent `#324EFE`.
- **Remove ×** on source cards (Research context) and the reviewed-source chip (Compliance): ink `#000`.

Audited across all 19 states in v1 and v2 (computed colour, 14px, 1.8px stroke): every × follows the rule. 101b was the only exception and is fixed.

## 13. Links — rule

All text links are underlined, 14px regular:
- Accent `#324EFE`: Add a URL, Upload a Document, Cancel, Ask Coworker to compare these documents, **Switch companies**, **Exit document** (the two back links keep their left arrow and are now underlined).
- Grey `#8D96AA`: **Clear all** / **Clear** (previously black).

## 14. Style v3 — palette extension (supersedes the single-accent rule for v3 only)

v3 keeps indigo `#324EFE` as the primary accent and adds three supporting colours, each with one job:
- **Green `#5AC47E`** (gradient `#6FD28F` → `#3DA865`) — toggle ON only.
- **Coral `#FF5D73`** (gradient `#FF8294` → `#F0445E`) — alert/count badge on the rail (also on the active tile).
- **Amber `#E2B43D`** (gradient `#F8CF68` → `#E2A52B`, dark `#0A1922` glyph; pale `#F4E4B8` when empty) — send button.
Plus a soft indigo / coral / green mesh behind the panel. Everything else (surfaces, depth, type, hover motion) is the v2 treatment. Success states and low-risk badges are still undefined. `specimen-v3.html` shows the palette; the older `specimen.html` in this folder is the v1 palette.

### v3 revision
- **Send button = green** (same gradient and glow as the toggle ON; white arrow; pale green `#CDEBD8` when empty). Amber is no longer used for send.
- **Intro icon chips** have their own hues: indigo (welcome), teal `#1FB5A8` (Canadian Documents Search), violet `#8A5CF6` (Compliance review).
- **Type tags** have their own hues: Compliance = violet tint, SEDAR = teal tint; for future source-type tags: filing indigo, news amber, transcript coral, web teal.

## 15. Style v4 — "soft monochrome" (based on the reference images)

Not an indigo theme: it follows the reference images' near-monochrome look.
- **Font:** Inter (the references are Inter). Switch back by changing `--font` in the v4 block of `screens/screens.css`.
- **Backdrop and cards:** cool-grey gradient backdrop; floating white cards with large diffuse shadows (`--sh-1/2/3`); 28px panel, 20px composer, 16px cards.
- **Colour:** near-black `#1C1C1E` replaces indigo for the primary button, active rail tile and send button; greys `#6E6E73` / `#9A9AA0` for secondary text; **deep green** `#0B9F6A` for toggle ON and the count badge; **yellow** `#FFF04D` highlighter (`<mark>`) for quoted phrases in compliance findings; risk badges keep their soft red/amber tint.
- **Tabs:** separate rounded tabs (outline = inactive, grey fill = active), not an outer pill.
- **Chips and tags:** grey pills with a hairline border; intro chips and type tags are all neutral grey.
- **Composer:** input on top; tools row `+  @  /` bottom-left; round send bottom-right (mid-grey when empty, near-black when there is text); Web Search and Export sit under the card.
- **Info text, links and × icons:** dark grey / ink, no blue. Links stay underlined.
- **Focus:** buttons 2px solid `#1C1C1E` ring with 2px offset; text fields change only their 1px border to `#1C1C1E`.
- Success state and low-risk badge are still undefined.
