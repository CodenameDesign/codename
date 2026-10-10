# Versance Coworker — style v13: sidekick

Sidekick: violet gradient, glass window, labelled rail, Figtree. Light only. Based on the browser-sidebar references (two images).

**Files in this folder**

- `tokens.css` — the design variables this style uses (colour, type, radius, spacing, elevation, motion).
- `components.css` — the base component rules, driven by the tokens.
- `specimen.html` / `specimen.png` — the style rendered from its real components.
- `../screens/screens.css` — this style's overrides on top of the tokens and components; `../screens/*.html` and `png/` are the 19 screens.

**Lineage:** Started from v1 again, re-skinned from the browser-sidebar references, in Figtree.

## 1. Identity

- **Font:** Figtree throughout, with no other typeface.
- **Backdrop and window:** periwinkle → violet → lilac gradient (`#8EA6FF` → `#7A78FF` → `#8B6CFA` → `#D6B4F6`) with a soft pink glow bottom-right; the panel is a frosted-glass window (white at 74%, 24px blur, 24px radius, violet-tinted shadow).
- **Accent:** violet `#5B3DF5` (hover `#4A2EDB`, tints `#E7E2FE` / `#F3F0FF`): toggles, links, primary buttons, `new chat` tag, active tab text, focus ring, active rail item. The logo is a **red** tile (`#E5372E`) like the red "N", and the count badge is red.
- **Labelled icon rail:** each rail item is an icon tile over a short caption (Research, Filings, CAD, US, Review, Output, History) like Chat / Hand / Code / More; inactive = grey, active = white tile with a violet icon and caption. The panel is 12px wider (451 / 810px) so the 24px gap to the content is kept.
- **Composer:** a toolbar row above a big rounded message box: a Web Search chip with a chevron (violet tint when on, grey when off), an attach icon, then the box with `Export Conversation` bottom-left and a plain paper-plane send bottom-right (grey when empty, a violet tile once there is text).
- **Tabs / chips:** soft lavender segmented track with a white active pill; grey pill chips with icon (like "Summarize").
- **Cards:** frosted white cards, 14px radius, hairline `#EDEBF7`; intro / help cards are pale violet `#F6F4FF`.

## 2. Colour tokens

Values are what the screens render with (`tokens.css`).

**Accent and status colours**

| Token | Light |
|---|---|
| `--accent` | `#5B3DF5` |
| `--accent-hover` | `#4A2EDB` |
| `--accent-on` | `#FFFFFF` |
| `--accent-pressed` | `#3B22B8` |
| `--accent-tint-15` | `#E7E2FE` |
| `--accent-tint-25` | `#CFC6FD` |
| `--accent-tint-8` | `#F3F0FF` |
| `--risk-high` | `#DC2927` |
| `--risk-medium` | `#F59D0A` |
| `--risk-on` | `#FFFFFF` |
| `--tag-filing` | `#5B3DF5` |
| `--tag-news` | `#E2B43D` |
| `--tag-transcript` | `#EA5B5B` |
| `--tag-web` | `#65728E` |
| `--exception-dark` | `#0A1922` |

**Surfaces and lines**

| Token | Light |
|---|---|
| `--bg` | `#FFFFFF` |
| `--hover` | `#F3F3F8` |
| `--line` | `#E7E7F0` |
| `--line-soft` | `#EFEFF6` |
| `--pane` | `transparent` |
| `--panel` | `#FFFFFF` |

**Text colours**

| Token | Light |
|---|---|
| `--faint` | `#A0A0B4` |
| `--ink` | `#16162A` |
| `--muted` | `#6A6A82` |
| `--text-info` | `#4A2EDB` |
| `--text-selected` | `#4A2EDB` |

## 3. Type

Families: **Figtree**. Sizes below are the rendered values on the 19 screens.

| Role | Family | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Display ("Hi,") | Figtree | 28px | 700 | -0.84px | — |
| Lead | Figtree | 18px | 400 | — | — |
| Pane title | Figtree | 14px | 700 | -0.21px | — |
| Report title | Figtree | 22px | 700 | -0.66px | — |
| Finding title | Figtree | 14px | 600 | — | — |
| Body | Figtree | 14px | 400 | — | — |
| Header bar | Figtree | 14px | 600 | — | uppercase |
| Section label | Figtree | 14px | 400 | — | — |
| Meta / dates | Figtree | 14px | 400 | — | — |
| Chip | Figtree | 14px | 500 | — | — |
| Tab | Figtree | 14px | 600 | — | — |
| Button | Figtree | 14px | 600 | — | — |
| Link | Figtree | 14px | 400 | — | — |
| Tag | Figtree | 12px | 400 | — | — |
| Risk badge | Figtree | 12px | 700 | 0.24px | uppercase |

## 4. Shape, depth and glass

| Component | Radius | Border | Shadow | Backdrop blur |
|---|---|---|---|---|
| Panel | 24px | 1px | yes | blur(24px) saturate(1.5) |
| Chat card | 18px | 1px | yes | — |
| Composer | 0px | 0px none | none | — |
| Cards | 14px | 1px | yes | — |
| Intro tile | 16px | 1px | none | — |
| Header bar | 12px | 1px | yes | — |
| Buttons | 10px | 1px | none | — |
| Chips | 999px | 1px | none | — |
| Text fields | 12px | 1px | none | — |
| Toggle | 999px | 0px none | none | — |
| Rail tiles | 12px | 0px none | none | — |
| Send button | 10px | 0px none | none | — |
| Tags | 999px | 0px none | none | — |

## 5. Layout

- **Panel:** docked to the right of the browser window, full window height inside a 16px margin; **451px** wide on the compact (Coworker home) screens and **810px** on the expanded screens (chat column + tool pane).
- **Icon rail (right edge):** eight items, top to bottom: **Home**, Research context (with count badge), My filings, CAD library, US library, Compliance, Output Centre, History. Each item is an icon tile over a short caption. The gap between the content and the rail is 22px.
- **Composer:** a toolbar row (Web Search chip, attach icon) above a large rounded message box; Export Conversation inside the box at the bottom-left and the send icon at the bottom-right.
- **Chat column tabs:** `Coworker` (alone, or beside `Filings` / `Compliance Review`) with a `new chat` / `new report` tag at the right.
- **Header:** company bar at the top of the chat column (name + `edit`, or a search field with `EXIT` while switching); the collapse button sits top-right of the panel.
- **Footer of the tool pane:** "Open Versance.ai" with the logo tile; the user avatar sit at the bottom-right of the panel.

## 6. Behaviour rules (all 19 screens)

- **Home:** the Home button is the first rail item, above Research context, and is highlighted on the four Coworker home screens (101a–101b). There is no forward-arrow button.
- **Help `?`:** shown on a pane title except while that pane's own help card is open (201b, 501aa, 601a, 701a).
- **Right-pane header spacing:** title → first block 16px; title → italic sub-line 4px and sub-line → first block 16px; title → back link 8px and back link → first block 16px.
- **Close ×:** a dismiss × on intro tiles, help cards and the help panel; a remove × on source cards and the reviewed-source chip.
- **Links:** every text link is underlined, 14px; the back links (Switch companies, Exit document) are underlined too; `Clear all` / `Clear` are the quiet grey link.
- **Message box:** a real text input. The send button is disabled until there is text; Enter or the button sends and clears the field; whitespace alone does not enable it.
- **Focus:** buttons and other clickable controls take `2px solid #5B3DF5` with a 2px offset and keep their own radius; text fields show no ring, only their 1px border changes colour; the composer container adds nothing.
- **Motion:** hover and press transitions only; nothing animates on page load.
- **Navigation in the HTML pages:** the "All screens" list (top-left) and, in every style except v1, the `‹ n ›` style switcher (bottom-left). Both are neutral, identical in every style and hidden in the PNG exports.

## 7. Screens

| State | Screen | Contents |
|---|---|---|
| 101a | Coworker home (compact) | Welcome tile, three prompt chips, composer. |
| 101ab | Company switcher | Recent companies dropdown. |
| 101ac | Company switcher, searching | "Aar" typed; recent + all companies; `EXIT`. |
| 101b | How the Versance Coworker works | Four-step help panel. |
| 102a | Research context | Two toggles, Add a URL / Upload a Document, three source cards. |
| 102aa | Research context, Add a URL | Paste-a-link field with `ADD`; Cancel. |
| 102s | Research context, empty | "No documents added yet." empty state. |
| 201a | Primary Company Filings | Search + filter, filing list. |
| 201b | Primary Company Filings, help | Help card open (no `?`). |
| 401aa | Search Canadian Filings | Find a Company, A–Z, company list. |
| 401ab | Search <Company> Filings | Switch-companies link, filing list with hover action. |
| 411a | Filing viewer | Exit document, Add Document to Context, page preview, prompt chips. |
| 501aa | Compliance review, start | Welcome tile, two action buttons, how-it-works card. |
| 501ab | Compliance review, options | Reviewed source, Country / Regulation / Document Type, Run Report. |
| 501bb | Compliance report | Re-Run Report, Report Generated card, High / Medium findings. |
| 601a | Output Centre, empty | Info card, empty state. |
| 601b | Output Centre | Search + filter, seven report rows with tags. |
| 701a | Conversation History, empty | Info card, "You haven't had any conversations yet." |
| 701b | Conversation History | Search conversations, chat open on the left. |

Exports are 3260 × 1920 PNGs (`../screens/png/`); the red annotation labels and leader lines in the reference PNGs were specs and never appear in the screens.

## 8. Content notes

- Company names in the mock data (Integra Resources, Australis Capital, Equinox Gold, South Railroad, Company A–C, Aardvark …) are placeholders; the switcher uses "Company Two" (the reference PNG had a typo).
- The 501ab reference annotation "new copy once you've selected a" is cut off in the PNG; only the visible copy is used.
- The empty History screen reads "You haven't had any conversations yet."
- No success state and no low-risk badge are defined: no reference shows one.
