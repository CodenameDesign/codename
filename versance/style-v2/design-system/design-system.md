# Versance Coworker — style v2: slick

Slick: v1 with soft depth, glow and spring motion. Light only. Based on v1 (a Dribbble-style "slick" pass).

**Files in this folder**

- `tokens.css` — the design variables this style uses (colour, type, radius, spacing, elevation, motion).
- `components.css` — the base component rules, driven by the tokens.
- `specimen.html` / `specimen.png` — the style rendered from its real components.
- `../screens/screens.css` — this style's overrides on top of the tokens and components; `../screens/*.html` and `png/` are the 19 screens.

**Lineage:** v1 with a "slick" pass: depth, glow and motion.

## 1. Identity

- **Same accent, same font, same layout as v1** (indigo `#324EFE`, Figtree); only surfaces, depth and motion change.
- **Depth:** layered, indigo-tinted shadows (`--sh-1`, `--sh-2`, `--sh-3`), a 28px panel, 16px cards and 12px buttons; cards lift on hover.
- **Gradient and glow:** the active rail tile, primary buttons and the send button use an accent gradient with an indigo glow (`--accent-grad`, `--accent-grad-diag`, `--glow`).
- **Toggle:** 36 × 22 with a spring-eased knob (`--ease-spring`).
- **Tabs** are a layered segmented control with a shadowed white thumb. Risk badges are soft tinted pills with a dot. Intro tiles carry a tinted icon chip.
- **Type:** tighter, bolder headings ("Hi," 32px / 700).
- **Motion:** hover and press transitions only; nothing animates on page load.
- **Composer:** the same single row as v1 (`+`, field, send) with Web Search and Export below.

## 2. Colour tokens

Values are what the screens render with (`tokens.css`).

**Accent and status colours**

| Token | Light |
|---|---|
| `--accent` | `#324EFE` |
| `--accent-grad` | `linear-gradient(180deg, #5169FE 0%, #324EFE 100%)` |
| `--accent-grad-diag` | `linear-gradient(135deg, #5E74FF 0%, #324EFE 55%, #2C45E0 100%)` |
| `--accent-hover` | `#2C45E0` |
| `--accent-on` | `#FFFFFF` |
| `--accent-pressed` | `#263BC1` |
| `--accent-tint-15` | `#E0E4FF` |
| `--accent-tint-25` | `#CCD3FF` |
| `--accent-tint-8` | `#EFF1FF` |
| `--accent-wash` | `linear-gradient(180deg, #F4F6FF 0%, #EEF1FF 100%)` |
| `--risk-high` | `#DC2927` |
| `--risk-medium` | `#F59D0A` |
| `--risk-on` | `#FFFFFF` |
| `--soft-wash` | `linear-gradient(180deg, #F8F9FF 0%, #F1F3FA 100%)` |
| `--tag-filing` | `#324EFE` |
| `--tag-news` | `#E2B43D` |
| `--tag-transcript` | `#EA5B5B` |
| `--tag-web` | `#65728E` |
| `--exception-dark` | `#0A1922` |

**Surfaces and lines**

| Token | Light |
|---|---|
| `--bg` | `#FFFFFF` |
| `--hover` | `#F3F5F9` |
| `--line` | `#D9DDE5` |
| `--line-soft` | `#F3F5F9` |
| `--pane` | `#F9F9F9` |
| `--panel` | `#FFFFFF` |

**Text colours**

| Token | Light |
|---|---|
| `--faint` | `#8D96AA` |
| `--ink` | `#000000` |
| `--muted` | `#65728E` |
| `--text-info` | `#324EFE` |
| `--text-selected` | `#324EFE` |

## 3. Type

Families: **Figtree**. Sizes below are the rendered values on the 19 screens.

| Role | Family | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Display ("Hi,") | Figtree | 32px | 700 | -0.64px | — |
| Lead | Figtree | 18px | 500 | -0.18px | — |
| Pane title | Figtree | 16px | 700 | -0.16px | — |
| Report title | Figtree | 24px | 700 | -0.48px | — |
| Finding title | Figtree | 14px | 600 | — | — |
| Body | Figtree | 14px | 400 | — | — |
| Header bar | Figtree | 14px | 600 | — | uppercase |
| Section label | Figtree | 14px | 400 | — | — |
| Meta / dates | Figtree | 14px | 400 | — | — |
| Chip | Figtree | 14px | 400 | — | — |
| Tab | Figtree | 14px | 400 | — | — |
| Button | Figtree | 14px | 400 | — | — |
| Link | Figtree | 14px | 400 | — | — |
| Tag | Figtree | 12px | 400 | — | — |
| Risk badge | Figtree | 12px | 700 | 0.36px | uppercase |

## 4. Shape, depth and glass

| Component | Radius | Border | Shadow | Backdrop blur |
|---|---|---|---|---|
| Panel | 28px | 0px none | yes | — |
| Chat card | 20px | 0px none | yes | — |
| Composer | 0px | 0px none | none | — |
| Cards | 16px | 1px | yes | — |
| Intro tile | 18px | 1px | yes | — |
| Header bar | 14px | 0px none | yes | — |
| Buttons | 12px | 1px | none | — |
| Chips | 999px | 1px | yes | — |
| Text fields | 14px | 1px | yes | — |
| Toggle | 999px | 0px none | yes | — |
| Rail tiles | 10px | 0px none | yes | — |
| Send button | 50% | 0px none | none | — |
| Tags | 999px | 0px none | none | — |

## 5. Layout

- **Panel:** docked to the right of the browser window, full window height inside a 16px margin; **440px** wide on the compact (Coworker home) screens and **799px** on the expanded screens (chat column + tool pane).
- **Icon rail (right edge):** eight items, top to bottom: **Home**, Research context (with count badge), My filings, CAD library, US library, Compliance, Output Centre, History. Icon-only tiles. The gap between the content and the rail is 24.5px.
- **Composer:** `+`, text field and send in one row; Web Search and Export Conversation in a row below.
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
- **Focus:** buttons and other clickable controls take `2px solid #324EFE` with a 2px offset and keep their own radius; text fields show no ring, only their 1px border changes colour; the composer container adds nothing.
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
