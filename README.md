<a href="https://zendax673.github.io/papyrus-release/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-dark.png">
    <img width="1024" alt="Papyrus Papers — a native macOS research workspace for literature, technical documents, notes, and citations" src="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-light.png">
  </picture>
</a>

<p align="center">
  <a href="#features">Features</a> &middot;
  <a href="#workflow">Workflow</a> &middot;
  <a href="#download">Download</a> &middot;
  <a href="#screenshots">Screenshots</a> &middot;
  <a href="#privacy">Privacy</a> &middot;
  <a href="#system-requirements">Requirements</a> &middot;
  <a href="#support">Support</a> &middot;
  <a href="#license">License</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/">Website</a>
</p>

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/">
    <img src="https://img.shields.io/badge/platform-macOS_15.6+-000?style=flat-square&logo=apple&logoColor=white" alt="macOS 15.6+">
    <img src="https://img.shields.io/badge/Swift-6-F05138?style=flat-square&logo=swift&logoColor=white" alt="Built with Swift 6">
    <img src="https://img.shields.io/badge/SwiftUI-native-007AFF?style=flat-square" alt="Native SwiftUI">
    <img src="https://img.shields.io/badge/PDFKit-bundled-1E88E5?style=flat-square" alt="Built on PDFKit">
    <img src="https://img.shields.io/badge/license-MIT-2DA44E?style=flat-square" alt="MIT License">
  </a>
</p>

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/download.html">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-black.svg#gh-light-mode-only" height="56" alt="Download Papyrus Papers on the Mac App Store">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-white.svg#gh-dark-mode-only" height="56" alt="Download Papyrus Papers on the Mac App Store">
  </a>
</p>

<h3 align="center">A local-first macOS workspace that connects literature, technical documents, reading notes, citations &mdash; and your next decision.</h3>

<p align="center">
  One native Mac app instead of a folder, a browser tab, a PDF reader, a knowledge base, and a reference manager.
</p>

---

<a id="features"></a>
## Features

### Library &amp; Import

- **Every format, one surface.** PDFs, DOIs, arXiv IDs, BibTeX, RIS, and recursive folders all flow through the same dialog.
- **Joint metadata enrichment** from Crossref, OpenAlex, embedded XMP, and arXiv-ID extraction from PDF text &mdash; no API juggling.
- **Per-field provenance.** Every metadata field records which source produced it. A conflict picker surfaces when sources disagree, without losing the alternatives.
- **Zotero / Better-BibTeX import.** Brace-balanced field scanner handles nested braces and Zotero-style notes; `keywords` become tags, `groups` become folders, `langid` maps to BCP-47.
- **`Copy Into Library`** or **`Keep PDFs In Place`** &mdash; let Papyrus own the file lifecycle, or keep your existing on-disk structure with security-scoped bookmarks.
- **Duplicate detection** with a *Needs-Metadata-Attention* triage view for records that still need a human eye.

### Reader &amp; Notes

- **Native PDFKit reader** &mdash; not a JS viewer, not a wrapped Chromium. Annotations, bookmarks, highlights, and drawing.
- **Markdown notes alongside the page**, with full LaTeX math, code blocks, tables, and image embeds &mdash; saved as plain Markdown next to the paper.
- **In-document search**, table of contents, page thumbnails, and bookmarks all behave like a real Mac reader.
- **Reader inspector** keeps metadata, abstract, citations, and your notebook one keystroke away.

### Search &amp; Discovery

- **Full-text search** across titles, authors, abstracts, notes, highlights, and the PDF body.
- **Filter tokens** &mdash; narrow by tag, year, journal, BibTeX type, favorites, or PDF status.
- **Smart Collections** &mdash; saved queries that always reflect the current state of the library, built from any combination of those filters.
- **Reading queue** keeps work-in-progress visible across sessions, so the next session starts where the last one ended.
- **Core Spotlight integration** &mdash; your papers also appear in macOS system search.

### Three Shapes for One Library

- **Smart Collections** &mdash; saved queries (Recent High-Impact, Conference Papers, Unread with PDF, or anything you build yourself).
- **Projects** &mdash; working sets that span the library; a paper can sit in many projects without being moved or duplicated.
- **Folders** &mdash; classic hierarchical organization for material that has a stable home; folder structure travels into project bundle exports.

Use one. Use all three. They never compete for the same paper.

### Privacy &amp; Security

- **Local-first by design.** Your library database, PDFs, notes, indexes, and backups live on your Mac unless you explicitly export, share, or sync them.
- **No Papyrus account.** No analytics. No telemetry SDKs. No third-party trackers.
- **Network requests only when you ask.** Metadata lookup (Crossref, OpenAlex), WebDAV sync, and Apple's on-device Foundation Models are the only paths that ever leave your machine.
- **App Sandbox** with declared entitlements; **`PrivacyInfo.xcprivacy`** manifest declares every required-reason API call.

### Sync &amp; Backup

- **WebDAV sync** &mdash; choose your own server, username, and folder. No vendor lock-in.
- **Coexists with Finder-synced folders.** Use Papyrus with iCloud Drive, OneDrive, Google Drive, Box, or anything else that lands files in Finder.
- **Rolling local backups.** Up to seven automatic snapshots, plus on-demand backups from Settings.

### Export &amp; Citations

- **Copy citation in 8 styles** &mdash; APA, MLA, Chicago, IEEE, Harvard, Vancouver, BibTeX, RIS.
- **BibTeX and RIS export** for the whole library or any selection.
- **Markdown snapshot** per paper or per project &mdash; metadata, abstract, notes, and citation keys in one file.
- **Project export bundles** preserve folder hierarchy so your collaborator gets the same view you have.

---

<a id="workflow"></a>
## A real workflow

Papyrus is built around one loop: **Import &rarr; Read &rarr; Note &rarr; Organize &rarr; Search &rarr; Export.** Every feature above pulls its weight on exactly one of those steps, and the steps stay inside the same window.

| Step | What Papyrus does |
|------|-------------------|
| **01 &nbsp; Import** | Drop PDFs, paste a DOI/arXiv ID, drag a folder, or paste BibTeX/RIS &mdash; metadata is enriched automatically. |
| **02 &nbsp; Read** | Open in the native reader; highlight, underline, strike, draw, comment. |
| **03 &nbsp; Note** | Write Markdown alongside the page &mdash; math, code, images embedded. |
| **04 &nbsp; Organize** | Tags, folders, projects, smart collections, and the reading queue. |
| **05 &nbsp; Search** | Full-text across titles, authors, abstracts, notes, highlights, and PDF body. |
| **06 &nbsp; Export** | Copy citation, BibTeX/RIS, Markdown snapshot, or full project bundle &mdash; one command. |

---

<a id="download"></a>
## Download

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/download.html">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-black.svg#gh-light-mode-only" height="56" alt="Download Papyrus Papers on the Mac App Store">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-white.svg#gh-dark-mode-only" height="56" alt="Download Papyrus Papers on the Mac App Store">
  </a>
</p>

<p align="center">
  A one-time purchase. No account. No subscription. Your library stays yours.
</p>

---

<a id="screenshots"></a>
## Screenshots

### Reader &mdash; PDF on the left, your mind on the right

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/reader-window-dark.png">
    <img width="1024" alt="Papyrus Papers reader window &mdash; PDF on the left with highlights and annotations, Markdown notes on the right with LaTeX math, code, and tables" src="https://zendax673.github.io/papyrus-release/assets/app-captures/reader-window-light.png">
  </picture>
</p>

### Smart Collections &mdash; saved queries that update themselves

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-smart-dark.png">
    <img width="1024" alt="Papyrus Papers with the &lsquo;Recent High-Impact&rsquo; Smart Collection selected &mdash; the paper list filters down to favorites from the last three years" src="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-smart-light.png">
  </picture>
</p>

### Projects &mdash; working sets that span the library

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-project-dark.png">
    <img width="1024" alt="Papyrus Papers with the &lsquo;Lit Review: Efficient Transformers&rsquo; Project selected &mdash; papers grouped under one working set without being moved or duplicated" src="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-project-light.png">
  </picture>
</p>

### Folders &mdash; classic hierarchy for material with a stable home

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-folder-dark.png">
    <img width="1024" alt="Papyrus Papers with the &lsquo;Background Reading&rsquo; Folder selected &mdash; classic hierarchical organization in the paper list" src="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-folder-light.png">
  </picture>
</p>

---

<a id="who-its-for"></a>
## Who it's for

- **Academic research** &mdash; literature reading, lit review, proposals, paper writing.
- **Engineering R&amp;D** &mdash; datasheets, manuals, reference designs, standards, design reviews.
- **Cross-disciplinary work** &mdash; papers, technical reports, lab material, and notes side by side.
- **Independent scholars** &mdash; anyone who reads a lot but doesn't want their workflow tied to a web product.

---

<a id="privacy"></a>
## Privacy

Local-first by design. Your library, notes, PDFs, indexes, and backups stay on your Mac unless you explicitly export, share, or sync them.

Network requests only happen when you use a feature that needs them:

- **Metadata lookup** &mdash; Crossref and OpenAlex for DOI / title repair.
- **WebDAV sync** &mdash; only if you turn it on, and only to the server you choose.
- **Apple Foundation Models** &mdash; on-device, on supported hardware, for background metadata synthesis when an enrichment source returns partial data.

No Papyrus account. No analytics. No telemetry SDKs. No third-party trackers.

Full policy: <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy</a>.

---

<a id="system-requirements"></a>
## System requirements

- **macOS 15.6 (Sequoia)** or later
- **Apple Silicon (arm64) and Intel (x86_64)** &mdash; universal binary, ~38 MB
- Internet connection is optional &mdash; only required for metadata lookup, WebDAV sync, or App Store updates

---

<a id="documentation"></a>
## Documentation

- [FAQ](FAQ.md)
- [Changelog](CHANGELOG.md)
- <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy Policy</a>
- <a href="https://zendax673.github.io/papyrus-release/support.html">Support &amp; FAQ</a>
- <a href="https://zendax673.github.io/papyrus-release/">Website</a>

---

<a id="support"></a>
## Support

- [Report a bug or request a feature](https://github.com/zendax673/papyrus-release/issues/new)
- [Open issues](https://github.com/zendax673/papyrus-release/issues)
- **Email:** [zdfu189@gmail.com](mailto:zdfu189@gmail.com)

---

<a id="license"></a>
## License

Released under the [MIT License](LICENSE).

---

## Star History

<a href="https://star-history.com/#zendax673/papyrus-release&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=zendax673/papyrus-release&type=Timeline&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=zendax673/papyrus-release&type=Timeline">
    <img alt="Papyrus Papers GitHub star history" src="https://api.star-history.com/svg?repos=zendax673/papyrus-release&type=Timeline">
  </picture>
</a>

---

<p align="center">
  Copyright &copy; 2026 Papyrus Papers. Released under the MIT License.
</p>
