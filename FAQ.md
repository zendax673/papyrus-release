# FAQ

## Is Papyrus Papers cloud-first?

No. Papyrus Papers is local-first. Your library database, imported PDFs, notes, search
indexes, and backups live on your Mac unless you explicitly export, share, or
sync them somewhere else.

## What Is The Difference Between `Copy Into Library` And `Keep PDFs In Place`?

`Copy Into Library` makes Papyrus Papers copy the PDF into its managed storage folder.
`Keep PDFs In Place` leaves the file where it already lives and stores a
security-scoped bookmark so Papyrus Papers can reopen it later.

Use `Copy Into Library` if you want Papyrus Papers to own the file lifecycle. Use
`Keep PDFs In Place` if you already manage PDFs in Finder or another synced
folder.

## Does Papyrus Papers Upload My PDFs Automatically?

No, not by default. Papyrus Papers only sends library files out of your Mac when you
explicitly:

- Enable WebDAV sync
- Share a PDF through the macOS share sheet
- Export library or project data

Metadata lookup features send identifiers and search queries, not your entire
library.

## Which Metadata Services Does Papyrus Papers Use?

Papyrus Papers currently uses:

- Crossref
- arXiv
- Semantic Scholar
- OpenAlex
- OpenLibrary
- NCBI / PubMed / PMC identifier services
- Zenodo
- doi.org links for DOI-based lookup and navigation
- Embedded XMP metadata read directly from PDFs (no network)

These services help with DOI, arXiv, ISBN, PMID, title repair, metadata
completion, identifier conversion, and citation-count enrichment. The resolver
registry is pluggable, so additional sources can be added without changing the
rest of the app. When several sources disagree on a field, Papyrus Papers
records the provenance of each value and surfaces a conflict picker.

## Where Is The Library Stored?

The current repository stores the main SwiftData store under:

`~/Library/Group Containers/group.com.zhendafu.Papyrus/Library/Application Support/`

Managed PDFs and the local full-text index live under the same App Group
container.

## Does Papyrus Papers Keep Backups?

Yes. Papyrus Papers keeps rolling local database backups and retains up to seven
snapshots. You can also trigger a manual backup from Settings.

## How Does Sync Work?

The current built-in v1.0 sync path is WebDAV. You choose the server, username,
password, and remote folder. Papyrus Papers then syncs the library package to that
destination.

Papyrus Papers can also coexist with local folders that you sync through tools you
already use, but the in-app sync UI is currently centered on WebDAV.

## Does Papyrus Papers Need An Account?

No Papyrus Papers account is required for normal use.

## Does Papyrus Papers Include AI Features?

On supported Macs and supported locales, Papyrus Papers can call Apple's system
language-model APIs (Foundation Models) for background metadata synthesis when
an enrichment source returns ambiguous or partial data. Nothing in Papyrus Papers
requires AI to function — every user-facing feature works without it, and
enrichment falls back to non-AI heuristics on unsupported hardware.

## Does Papyrus Papers Index My Library In Spotlight?

Yes. Papyrus Papers uses Core Spotlight so papers can appear in macOS system search.
This is a local system integration, not a Papyrus Papers cloud service.

## How Should I Report A Crash Or Data Problem?

Use the guidance in [SUPPORT.md](SUPPORT.md). If possible, include:

- Reproduction steps
- Your macOS version and Papyrus Papers build
- Whether the affected PDF was copied or linked
- Whether sync or export was involved

If the issue looks like data corruption, create a backup snapshot before trying
large recovery steps.
