# FAQ

## Is Papyrus cloud-first?

No. Papyrus is local-first. Your library database, imported PDFs, notes, search
indexes, and backups live on your device unless you explicitly export, share,
turn on iCloud Sync, or configure WebDAV sync.

## What Is The Difference Between `Copy Into Library` And `Keep PDFs In Place`?

`Copy Into Library` makes Papyrus copy the PDF into its managed storage folder.
`Keep PDFs In Place` leaves the file where it already lives and stores a
security-scoped bookmark so Papyrus can reopen it later.

Use `Copy Into Library` if you want Papyrus to own the file lifecycle. Use
`Keep PDFs In Place` if you already manage PDFs in Finder or another synced
folder.

## Does Papyrus Upload My PDFs Automatically?

No, not by default. Papyrus only sends library files out of your device when you
explicitly:

- Enable iCloud Sync or WebDAV sync
- Share a PDF through the macOS share sheet
- Export library or project data

Metadata lookup features send identifiers and search queries, not your entire
library.

## Which Metadata Services Does Papyrus Use?

Papyrus currently uses:

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
rest of the app. When several sources disagree on a field, Papyrus
records the provenance of each value and surfaces a conflict picker.

## Where Is The Library Stored?

Papyrus stores the main SwiftData library under:

`~/Library/Group Containers/group.com.zhendafu.Papyrus/Library/Application Support/`

Managed PDFs and the local full-text index live under the same App Group
container.

## Does Papyrus Keep Backups?

Yes. Papyrus keeps rolling local database backups and retains up to seven
snapshots. You can also trigger a manual backup from Settings.

## How Does Sync Work?

Papyrus supports two optional sync paths. iCloud Sync keeps your library current
across Mac and iPad devices signed in to the same iCloud account, without a
Papyrus server or Papyrus account.

WebDAV sync remains available when you want to use a server, username, password,
and remote folder you control. Papyrus can also coexist with local folders that
you sync through tools you already use.

## Can I Restore From WebDAV?

Yes. Successful WebDAV syncs keep dated restore points. In Settings, inspect the
remote copy, choose the restore point you want, and let Papyrus apply it
safely on the next launch. You can use a local NAS, Nextcloud, Fastmail,
Synology, or any standard WebDAV server; Synology is only one example.

## What Is A Project For?

A Project is a writing or synthesis workspace. Use it for a literature review,
thesis chapter, paper draft, proposal, reading group, or method comparison. A
paper can belong to multiple projects without being duplicated.

Project-specific roles let the same paper be `Background Only` in one project,
`Cite In Method` in another, and `Excluded` in a third without changing the
global paper record.

## What Is The Evidence Board?

The Evidence Board is a project-level table for turning reading into writing
material. It tracks:

- Claim or theme
- Paper
- Evidence quote or manual note
- Page
- Your interpretation
- Intended manuscript section
- Citation key
- Confidence

Use it when you need to compare 30-100 papers around a related-work argument,
method limitation, dataset choice, or claim/evidence matrix.

## What Can Project Export Produce?

Project export can produce writing material for common academic workflows:

- BibTeX
- RIS
- CSL JSON
- Markdown notes and evidence
- Copyable LaTeX or Pandoc cite commands
- Project bundles with PDFs when available
- Export reports that call out missing PDFs, missing metadata, and duplicate citekeys

## Does Papyrus Need An Account?

No Papyrus account is required for normal use.

## Does Papyrus Include AI Features?

On supported Macs and supported locales, Papyrus can call Apple's system
language-model APIs (Foundation Models) for background metadata synthesis when
an enrichment source returns ambiguous or partial data. Nothing in Papyrus
requires AI to function — every user-facing feature works without it, and
enrichment falls back to non-AI heuristics on unsupported hardware.

## Does Papyrus Index My Library In Spotlight?

Yes. Papyrus uses Core Spotlight so papers can appear in macOS system search.
This is a local system integration, not a Papyrus cloud service.

## How Should I Report A Crash Or Data Problem?

Use the guidance on the [Support page](https://zendax673.github.io/papyrus-release/support.html). If possible, include:

- Reproduction steps
- Your macOS version and Papyrus build
- Whether the affected PDF was copied or linked
- Whether iCloud Sync, WebDAV sync, or export was involved

If the issue looks like data corruption, create a backup snapshot before trying
large recovery steps.
