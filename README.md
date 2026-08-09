# Papyrus

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/">
    <img src="https://zendax673.github.io/papyrus-release/assets/icon.svg" width="128" height="128" alt="Papyrus">
  </a>
</p>

<h1 align="center">Papyrus</h1>

<p align="center">
  <strong>A native Mac, iPad, and iPhone research workspace.</strong><br>
  PDFs, reading notes, notebooks, citations, projects, and the evidence behind your next draft.
</p>

<p align="center">
  <a href="https://apps.apple.com/us/app/papyrus-papers/id6766133716?mt=12&amp;uo=4">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-black.svg#gh-light-mode-only" height="56" alt="Download on the Mac App Store">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-white.svg#gh-dark-mode-only" height="56" alt="Download on the Mac App Store">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/macOS-14%2B-000?style=flat-square&logo=apple&logoColor=white" alt="macOS 14+">
  <img src="https://img.shields.io/badge/iPadOS%20%26%20iOS-17%2B-111?style=flat-square&logo=apple&logoColor=white" alt="iPadOS and iOS 17+">
  <img src="https://img.shields.io/badge/SwiftUI-native-007AFF?style=flat-square" alt="SwiftUI">
  <img src="https://img.shields.io/badge/PDFKit-reader-1E88E5?style=flat-square" alt="PDFKit">
  <img src="https://img.shields.io/badge/local--first-no%20telemetry-2DA44E?style=flat-square" alt="Local-first, no telemetry">
  <img src="https://img.shields.io/badge/license-MIT-6E7781?style=flat-square" alt="MIT License">
</p>

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/">Website</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/download.html">Download</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/support.html">Support</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy</a> &middot;
  <a href="FAQ.md">FAQ</a> &middot;
  <a href="CHANGELOG.md">Changelog</a> &middot;
  <a href="URL-SCHEME.md">URL Scheme</a>
</p>

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/mac/library-dark.jpg">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-captures/mac/library-light.jpg" alt="Papyrus Mac library showing a Nature paper, metadata, tags, Markdown notes, and project context">
  </picture>
</p>

## What It Does

Papyrus is a local-first workspace for people who work with PDFs over time on Mac, iPad, and iPhone. It keeps the paper, PDF, metadata, reading progress, tags, Markdown notes, project role, evidence, and citation key attached to the same record.

- **Import papers without losing context.** Bring in PDFs, folders, DOI records, arXiv IDs, and BibTeX or RIS exports from other reference managers.
- **Save papers straight from Safari.** The bundled Safari extension captures the paper on the current tab — with its PDF when one is available, including papers behind a publisher sign-in you already have access to — or saves any PDF, DOI, or arXiv link from the right-click (Mac) or long-press (iPad) menu. Folder, tag, and project pickers in the popup let a paper land organized.
- **Clean metadata with provenance.** Combine embedded PDF metadata with Crossref, OpenAlex, arXiv, DOI, and other scholarly sources, then resolve field-level conflicts when sources disagree.
- **Read in a native window.** Use a PDFKit-backed reader with highlights, underline, strikethrough, freehand ink, notes, bookmarks, resume state, and a Highlights & Notes inspector.
- **Write beside the source.** Keep Markdown notes on each paper, including headings, task lists, tables, block quotes, code fences, links, images, footnotes, and LaTeX math.
- **Gather notes by theme, not by paper.** Notebooks are shelves for a topic, a chapter, or a reading group. Filing a note copies nothing and moves nothing — it still belongs to its paper, and one click takes you there and back. A note can sit on several shelves at once, and a whole shelf exports as one Markdown document.
- **Organize the library several ways.** Use Smart Collections for saved filters, Projects for working sets, Folders for classic hierarchy (a paper can live in several), and seven nameable colored flags — each with its own shape — for triage.
- **Turn reading into evidence.** Project Evidence Boards connect claims, quotes, pages, interpretations, manuscript sections, confidence scores, and citation keys before drafting.
- **Search across the whole workspace.** Search metadata, tags, projects, notes, annotations, highlights, and indexed PDF text.
- **Export cleanly.** Copy citations in APA, MLA, Chicago, IEEE, Harvard, Vancouver, BibTeX, and RIS; export CSL JSON, Markdown notes, project bundles, and preflight reports.
- **Link in from anywhere.** Papers and notebooks each have a `papyrus://` address with Copy Link and Copy Markdown Link, so Hookmark, Obsidian, or a plain text plan can point at the exact paper — and the page you were on.
- **Sync only when you choose.** Optional iCloud Sync keeps your library current across Mac, iPad, and iPhone, while WebDAV sync uses your own server and keeps dated restore points for safer recovery.

<details>
<summary><strong>Also on iPad and iPhone</strong></summary>

Papyrus is one universal app. On iPad it is a touch-first workspace with Apple Pencil support — reading, figure inspection, Markdown notes, Pencil markup, saving papers from Safari, notebooks, and project review away from the desk. On iPhone it is sized for one hand: resume where you left off, read, capture, file, flag, and edit a paper without reaching for another device. iCloud Sync keeps all three current.

<p align="center">
  <a href="https://apps.apple.com/app/id6766133716">
    <img src="https://zendax673.github.io/papyrus-release/assets/badge-appstore-black.svg#gh-light-mode-only" height="56" alt="Download on the App Store">
    <img src="https://zendax673.github.io/papyrus-release/assets/badge-appstore-white.svg#gh-dark-mode-only" height="56" alt="Download on the App Store">
  </a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/ipad/library-dark.jpg">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-captures/ipad/library-light.jpg" alt="Papyrus on iPad showing the library with a Nature paper selected">
  </picture>
</p>

</details>

## Requirements

- macOS 14 or later on Apple Silicon for the Mac app
- iPadOS or iOS 17 or later for the iPad and iPhone app
- Disk space for PDFs, metadata, notes, annotations, full-text indexes, and backups
- Optional: an iCloud account for iCloud Sync, or a WebDAV-compatible server for WebDAV sync

## Privacy

Papyrus is local-first. Your PDFs, notes, metadata, annotations, reading state, search indexes, backups, and project evidence stay on your device unless you explicitly export, share, turn on iCloud Sync, or configure WebDAV sync.

No Papyrus account is required. No analytics or telemetry SDK is included. Network access is limited to user-initiated actions such as metadata lookup, DOI links, papers you send from Safari, optional iCloud Sync, and optional WebDAV sync. The Safari extension runs only when you invoke it and reads only the page or link you chose.

Full policy: [Privacy](https://zendax673.github.io/papyrus-release/privacy.html).

## Public Website

- Website: <https://zendax673.github.io/papyrus-release/>
- Download: <https://zendax673.github.io/papyrus-release/download.html>
- Privacy: <https://zendax673.github.io/papyrus-release/privacy.html>
- Support: <https://zendax673.github.io/papyrus-release/support.html>
- Terms: <https://zendax673.github.io/papyrus-release/terms.html>
- URL scheme: <https://zendax673.github.io/papyrus-release/url-scheme.html>

## Documentation

- [FAQ](FAQ.md)
- [Changelog](CHANGELOG.md)
- [URL Scheme](URL-SCHEME.md) — the `papyrus://` public contract for Hookmark and other link managers
- [Support](https://zendax673.github.io/papyrus-release/support.html)

## Contact

- Bug reports and feature requests: [GitHub Issues](https://github.com/zendax673/papyrus-release/issues)
- Private contact: [zdfu189@gmail.com](mailto:zdfu189@gmail.com)

## License

Released under the [MIT License](LICENSE).
