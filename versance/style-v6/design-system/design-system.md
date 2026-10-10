# Versance Coworker — style v6: grid / sovereign

Grid / sovereign: sharp corners, hairline grid, orange. Light only. Based on the Mistral reference.

**Files in this folder**

- `tokens.css` — the design variables this style uses (colour, type, radius, spacing, elevation, motion).
- `components.css` — the base component rules, driven by the tokens.
- `specimen.html` / `specimen.png` — the style rendered from its real components.
- `../screens/screens.css` — this style's overrides on top of the tokens and components; `../screens/*.html` and `png/` are the 19 screens.

**Lineage:** v5's structure, re-built with sharp corners and a grid.

## 1. Identity

- **No rounded corners anywhere** (`border-radius: 0 !important` on everything in `.vc-ext`) and **no soft shadows**; depth comes from hard 1px borders.
- **Grid:** hairline grey horizontal + vertical lines (`#E2DFD8` on a 96px grid on the page behind the panel only; the panel itself is plain, with no grid, for readability), plus 1px `#D5D1C8` rules between rows and around cards.
- **Palette:** cream paper `#F6F4EF`; ink `#111111`; Mistral orange `#FA520F` (active rail tile, toggle ON, send, tab/active accents, logo block); amber `#FFB000` (`NEW CHAT`, medium risk); yellow `#FFD23F` (highlighter, user bubble, hover); mint `#C6F0CF`; dark navy `#14152B` ("How it works" panel, Web Search On). 
- **Type:** Inter for text, JetBrains Mono for labels (EDIT, NEW CHAT, risk badges, dates, count badge, help subheads).
- **Controls:** primary buttons ink with orange hover; tabs are boxed with an ink active tab; links are ink with a 2px orange underline; toggle is a square orange switch.
- **Focus:** buttons 2px solid `#FA520F` ring, 2px offset; text fields change only their border to orange.

## 2. Colour tokens

Values are what the screens render with (`tokens.css`).

**Accent and status colours**

| Token | Light |
|---|---|
| `--accent` | `#FA520F` |
| `--accent-grad` | `linear-gradient(180deg, #3C3B37 0%, #23221F 100%)` |
| `--accent-grad-diag` | `linear-gradient(145deg, #4A4944 0%, #23221F 100%)` |
| `--accent-hover` | `#E8400C` |
| `--accent-on` | `#111111` |
| `--accent-pressed` | `#C93508` |
| `--accent-tint-15` | `#FFE1D1` |
| `--accent-tint-25` | `#FFC9AD` |
| `--accent-tint-8` | `#FFF1E8` |
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
| `--hover` | `#F1EFE9` |
| `--line` | `#D5D1C8` |
| `--line-soft` | `#E4E1DA` |
| `--pane` | `#F6F4EF` |
| `--panel` | `#FFFFFF` |

**Text colours**

| Token | Light |
|---|---|
| `--faint` | `#8F8C84` |
| `--ink` | `#111111` |
| `--muted` | `#5F5E5A` |
| `--text-info` | `#111111` |
| `--text-selected` | `#111111` |

## 3. Type

Families: **Inter**, **JetBrains Mono**. Sizes below are the rendered values on the 19 screens.

| Role | Family | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Display ("Hi,") | Inter | 36px | 500 | -1.26px | — |
| Lead | Inter | 18px | 500 | -0.18px | — |
| Pane title | Inter | 16px | 600 | -0.32px | — |
| Report title | Inter | 24px | 500 | -0.72px | — |
| Finding title | Inter | 14px | 600 | — | — |
| Body | Inter | 14px | 400 | — | — |
| Header bar | Inter | 14px | 600 | — | uppercase |
| Section label | Inter | 14px | 400 | — | — |
| Meta / dates | JetBrains Mono | 12px | 400 | — | — |
| Chip | Inter | 14px | 400 | — | — |
| Tab | Inter | 14px | 400 | — | — |
| Button | Inter | 14px | 400 | — | — |
| Link | Inter | 14px | 400 | — | — |
| Tag | JetBrains Mono | 11px | 400 | 0.33px | uppercase |
| Risk badge | JetBrains Mono | 11px | 700 | 0.44px | uppercase |

## 4. Shape, depth and glass

| Component | Radius | Border | Shadow | Backdrop blur |
|---|---|---|---|---|
| Panel | 0px | 1px | none | — |
| Chat card | 0px | 1px | none | — |
| Composer | 0px | 1px | none | — |
| Cards | 0px | 1px | none | — |
| Intro tile | 0px | 1px | none | — |
| Header bar | 0px | 1px | none | — |
| Buttons | 0px | 1px | none | — |
| Chips | 0px | 1px | none | — |
| Text fields | 0px | 1px | none | — |
| Toggle | 0px | 1px | none | — |
| Rail tiles | 0px | 0px none | none | — |
| Send button | 0px | 0px none | none | — |
| Tags | 0px | 1px | none | — |

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
- **Focus:** buttons and other clickable controls take `2px solid #FA520F` with a 2px offset and keep their own radius; text fields show no ring, only their 1px border changes colour; the composer container adds nothing.
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
