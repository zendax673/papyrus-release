<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/">
    <img src="https://zendax673.github.io/papyrus-release/assets/icon.svg" width="128" height="128" alt="Papyrus Papers">
  </a>
</p>

<h1 align="center">Papyrus Papers</h1>

<p align="center">
  <strong>A native macOS research workspace.</strong><br>
  Literature, technical documents, reading notes, citations &mdash; and your next decision.
</p>

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/download.html">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-black.svg#gh-light-mode-only" height="56" alt="Download on the Mac App Store">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-store-badge-white.svg#gh-dark-mode-only" height="56" alt="Download on the Mac App Store">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/macOS-15.6+-000?style=flat-square&logo=apple&logoColor=white" alt="macOS 15.6+">
  <img src="https://img.shields.io/badge/Swift-6-F05138?style=flat-square&logo=swift&logoColor=white" alt="Swift 6">
  <img src="https://img.shields.io/badge/SwiftUI-native-007AFF?style=flat-square" alt="SwiftUI">
  <img src="https://img.shields.io/badge/PDFKit-bundled-1E88E5?style=flat-square" alt="PDFKit">
  <img src="https://img.shields.io/badge/license-MIT-2DA44E?style=flat-square" alt="MIT License">
</p>

<p align="center">
  <a href="https://zendax673.github.io/papyrus-release/">Website</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/download.html">Download</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/support.html">Support</a> &middot;
  <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy</a> &middot;
  <a href="FAQ.md">FAQ</a> &middot;
  <a href="CHANGELOG.md">Changelog</a>
</p>

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-dark.png">
    <img src="https://zendax673.github.io/papyrus-release/assets/app-captures/library-window-light.png" alt="Papyrus Papers library window — sidebar with smart collections, paper list, and detail panel with metadata, abstract, and Markdown notes">
  </picture>
</p>

## What it does

Papyrus Papers is a local-first macOS workspace that connects literature, technical documents, reading notes, citations, and your next decision. One native Mac app instead of a folder, a browser tab, a PDF reader, a knowledge base, and a reference manager.

- **Import once, keep context.** PDFs, DOIs, arXiv IDs, BibTeX, RIS, Zotero / Better-BibTeX exports, and recursive folders all flow through one dialog. Joint enrichment from Crossref, OpenAlex, embedded XMP, and arXiv-ID extraction. Per-field provenance and a conflict picker when sources disagree.
- **Read and think in one place.** Native PDFKit reader paired with Markdown notes that understand LaTeX. Full-text search across titles, authors, abstracts, notes, highlights, and the PDF body.
- **Decide what to read next.** Build your own Smart Collections from any combination of tags, journals, year ranges, BibTeX type, favorites, and PDF status. The reading queue and a Needs-Metadata-Attention surface turn a pile of PDFs into a queue you can act on.
- **Three shapes for one library.** Smart Collections (saved queries), Projects (working sets that span the library), and Folders (classic hierarchy). A paper can sit in many projects without being moved or duplicated.
- **Export the way you came in.** Copy citation in 8 styles &mdash; APA, MLA, Chicago, IEEE, Harvard, Vancouver, BibTeX, RIS. Markdown snapshots per paper or project. Full project export bundles preserve folder hierarchy.

## Privacy

Local-first by design. Your library, notes, PDFs, indexes, and backups stay on your Mac unless you explicitly export, share, or sync them.

Network requests only happen when you use a feature that needs them: metadata lookup (Crossref, OpenAlex), WebDAV sync, or Apple's on-device Foundation Models for background metadata synthesis. No Papyrus account. No analytics. No telemetry SDKs.

Full policy: <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy</a>.

## System requirements

- **macOS 15.6 (Sequoia)** or later
- **Apple Silicon (arm64) and Intel (x86_64)** &mdash; universal binary, ~38 MB

## Self-build

The full project is open under the MIT License. Source is at <a href="https://github.com/zendax673/Papyrus">github.com/zendax673/Papyrus</a>.

```sh
git clone https://github.com/zendax673/Papyrus.git
cd Papyrus
open Papyrus.xcodeproj
```

Requires Xcode 16+. Self-builds skip the App Store sandbox and won't include the paid signing key.

## Documentation

- [FAQ](FAQ.md)
- [Changelog](CHANGELOG.md)
- <a href="https://zendax673.github.io/papyrus-release/privacy.html">Privacy Policy</a>
- <a href="https://zendax673.github.io/papyrus-release/support.html">Support</a>

## Contact

- **Bug reports and feature requests:** [Issues](https://github.com/zendax673/papyrus-release/issues)
- **Private:** [zdfu189@gmail.com](mailto:zdfu189@gmail.com)

## License

Released under the [MIT License](LICENSE).
