# Versance Coworker — style v10: notes

Notes: lime backdrop, olive accent, serif titles. Light only. Based on the Granola references (five images, including three AVIFs).

**Files in this folder**

- `tokens.css` — the design variables this style uses (colour, type, radius, spacing, elevation, motion).
- `components.css` — the base component rules, driven by the tokens.
- `specimen.html` / `specimen.png` — the style rendered from its real components.
- `../screens/screens.css` — this style's overrides on top of the tokens and components; `../screens/*.html` and `png/` are the 19 screens.

**Lineage:** v5's structure, re-coloured from the Granola references, with a serif.

## 1. Identity

- **Backdrop and surfaces:** pale-lime wash (`#B9C74F` with a soft light) behind a warm-paper panel (`#F6F6EF`, 26px radius, big soft shadow); inner chat card white, 20px radius; cards 18px; hairline `#ECEDE2` borders.
- **Type:** **Newsreader** (serif) for titles — "Hi," (44px), pane titles, report heading, finding titles, the company name — and Inter for all body text, buttons and lists, like the reference's serif note titles over a clean sans.
- **Colour:** ink `#24261C`; olive `#6F7F1E` (send, toggle ON, links, focus ring, input focus border); lime `#C9D45E` (active rail tile, logo tile, alphabet pick); lime tints `#EEF1D6` / `#E4EBBE` (icon squares, `new chat` tag, selected states, "Report generated" card); peach `#F8E3CB` accent for the second icon square; dark ink `#24261C` pills for primary buttons (like "Share") and Web Search On.
- **Shapes:** pill inputs, buttons, chips and tabs (999px); rounded icon squares (12px) tinted like "List actions / Write follow-up email".
- **Tabs:** warm track with a white active pill (like "Enhanced"); `new chat` is a lime-tint pill.
- **Composer:** white rounded card with `+ @ /` tools, round olive send (pale lime when empty) and a warm strip for Web Search + Export.

## 2. Colour tokens

Values are what the screens render with (`tokens.css`).

**Accent and status colours**

| Token | Light |
|---|---|
| `--accent` | `#6F7F1E` |
| `--accent-grad` | `linear-gradient(180deg, #3C3B37 0%, #23221F 100%)` |
| `--accent-grad-diag` | `linear-gradient(145deg, #4A4944 0%, #23221F 100%)` |
| `--accent-hover` | `#586619` |
| `--accent-on` | `#FFFFFF` |
| `--accent-pressed` | `#455113` |
| `--accent-tint-15` | `#E4EBBE` |
| `--accent-tint-25` | `#D5DCA6` |
| `--accent-tint-8` | `#F0F4DC` |
| `--accent-wash` | `linear-gradient(180deg, #F6F6F3 0%, #EFEFEB 100%)` |
| `--amber-grad` | `linear-gradient(135deg, #F8CF68 0%, #E2A52B 100%)` |
| `--amber-ink` | `#0A1922` |
| `--amber-tint` | `#F4E4B8` |
| `--coral-grad` | `linear-gradient(135deg, #FF8294 0%, #F0445E 100%)` |
| `--green-grad` | `linear-gradient(180deg, #3A9187 0%, #2D6B6A 100%)` |
| `--green-tint` | `#CFE0DE` |
| `--mark` | `#FFF04D` |
| `--risk-high` | `#DC2927` |
| `--risk-medium` | `#F59D0A` |
| `--risk-on` | `#FFFFFF` |
| `--soft-wash` | `linear-gradient(180deg, #F6F6F3 0%, #EFEFEB 100%)` |
| `--tag-filing` | `#324EFE` |
| `--tag-news` | `#E2B43D` |
| `--tag-transcript` | `#FF5D73` |
| `--tag-web` | `#1FB5A8` |
| `--teal-grad` | `linear-gradient(145deg, #EAF3F2, #D3E5E2)` |
| `--teal-ink` | `#0E8F84` |
| `--teal-tint` | `#E4EFEE` |
| `--violet-grad` | `linear-gradient(135deg,#ECE4FF,#DACCFF)` |
| `--violet-ink` | `#6D3FD6` |
| `--violet-tint` | `#EFE9FF` |
| `--exception-dark` | `#0A1922` |

**Surfaces and lines**

| Token | Light |
|---|---|
| `--bg` | `#FFFFFF` |
| `--hover` | `#F1F2E8` |
| `--line` | `#E4E5DA` |
| `--line-soft` | `#EDEEE4` |
| `--pane` | `transparent` |
| `--panel` | `#FFFFFF` |

**Text colours**

| Token | Light |
|---|---|
| `--faint` | `#9A9C8B` |
| `--ink` | `#24261C` |
| `--muted` | `#6E7060` |
| `--text-info` | `#3E4A12` |
| `--text-selected` | `#3E4A12` |

## 3. Type

Families: **Inter**, **Newsreader**. Sizes below are the rendered values on the 19 screens.

| Role | Family | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Display ("Hi,") | Newsreader | 44px | 500 | -1.1px | — |
| Lead | Newsreader | 19px | 400 | -0.19px | — |
| Pane title | Newsreader | 20px | 500 | -0.2px | — |
| Report title | Newsreader | 28px | 500 | -0.56px | — |
| Finding title | Newsreader | 15.5px | 500 | — | — |
| Body | Inter | 14px | 400 | — | — |
| Header bar | Newsreader | 15px | 500 | 0.15px | uppercase |
| Section label | Inter | 14px | 400 | — | — |
| Meta / dates | Inter | 14px | 400 | — | — |
| Chip | Inter | 14px | 400 | — | — |
| Tab | Inter | 14px | 400 | — | — |
| Button | Inter | 14px | 400 | — | — |
| Link | Inter | 14px | 400 | — | — |
| Tag | Inter | 12px | 400 | — | — |
| Risk badge | Inter | 12px | 700 | 0.36px | uppercase |

## 4. Shape, depth and glass

| Component | Radius | Border | Shadow | Backdrop blur |
|---|---|---|---|---|
| Panel | 26px | 1px | yes | — |
| Chat card | 20px | 1px | yes | — |
| Composer | 22px | 1px | yes | — |
| Cards | 18px | 1px | none | — |
| Intro tile | 20px | 1px | yes | — |
| Header bar | 999px | 1px | yes | — |
| Buttons | 999px | 1px | none | — |
| Chips | 999px | 1px | none | — |
| Text fields | 999px | 1px | none | — |
| Toggle | 999px | 0px none | none | — |
| Rail tiles | 10px | 0px none | none | — |
| Send button | 50% | 0px none | none | — |
| Tags | 999px | 1px | none | — |

## 5. Layout

- **Panel:** docked to the right of the browser window, full window height inside a 16px margin; **440px** wide on the compact (Coworker home) screens and **799px** on the expanded screens (chat column + tool pane).
- **Icon rail (right edge):** eight items, top to bottom: **Home**, Research context (with count badge), My filings, CAD library, US library, Compliance, Output Centre, History. Icon-only tiles. The gap between the content and the rail is 22.5px.
- **Composer:** text field on top, a tools row (`+`, `@`, `/`) below with the round send button at the right; Web Search and Export Conversation in a row below.
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
- **Focus:** buttons and other clickable controls take `2px solid #6F7F1E` with a 2px offset and keep their own radius; text fields show no ring, only their 1px border changes colour; the composer container adds nothing.
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
