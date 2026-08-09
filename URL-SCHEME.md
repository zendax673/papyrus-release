# The `papyrus://` URL scheme

Papyrus registers the `papyrus://` URL scheme on macOS, iPadOS, and iOS. This
document is the public contract for it — it is written to be published as-is,
so link-management tools (Hookmark, Obsidian, DEVONthink, Shortcuts, Alfred,
Keyboard Maestro) can integrate without asking.

There are three public entry points: a **link to a paper**, a **link to a
notebook**, and an **x-callback-url query** for the paper the user is currently
looking at.

## Linking to a paper

```
papyrus://paper/<paper-uuid>
papyrus://paper/<paper-uuid>?page=<n>
```

Examples:

```
papyrus://paper/9F2C1A54-3E6B-4D0A-8C71-1B9E4F5A6D22
papyrus://paper/9F2C1A54-3E6B-4D0A-8C71-1B9E4F5A6D22?page=7
```

Opening the link asks Papyrus to open that paper:

| Platform | Behavior |
| --- | --- |
| macOS | Brings Papyrus forward, selects the paper in the library, and opens its PDF in a reader window. If the paper is already open, the existing window comes forward rather than a duplicate. |
| iPadOS | Selects the paper in the library and presents the reader. |
| iOS (iPhone) | Opens the reader; a paper with no PDF opens its summary instead. |

`page` is optional and 1-based. When present, the reader opens at that page
instead of the saved reading position — including when a reader is already open
on that paper, which simply jumps. An anchor that cannot address a real page
(`page=0`, `page=-3`, `page=front-matter`) is ignored and the paper still
opens: landing on page 1 of the right paper beats an error.

If the current sidebar item or search filter would hide the paper, Papyrus
widens the view to All Papers so the selection is actually visible. A link to a
paper in the Trash reveals it in the Trash and says so. A link that resolves to
nothing — a different library, or a paper deleted since the link was made —
reports that rather than failing silently.

### Getting a link

**Copy Link** and **Copy Link to This Page** put the link on the clipboard, as
plain text:

| Where | Commands |
| --- | --- |
| **Paper** menu (macOS) | Copy Link (<kbd>⇧⌘C</kbd>), Copy Link to This Page (<kbd>⌥⌘C</kbd>) — both rebindable in Settings → Shortcuts |
| Library right-click menu (macOS, iPadOS) | **Reference → Copy Link** |
| Reader overflow menu (iPadOS, iOS) | Copy Link, Copy Link to This Page |
| Paper summary (iOS) | **Citation & Writing → Copy Link** |
| Detail view's **Copy** button (macOS, iPadOS) | **Link → Copy Link**, **Copy Markdown Link** |
| Detail view's Reading card (macOS, iPadOS) | Right-click / touch and hold a bookmarked page → **Copy Link to This Page** |

"Copy Link to This Page" needs a page to anchor to. In a reader that is the
page currently on screen. Outside one, the only page the user has actually
pointed at is a bookmark, so the Reading card's bookmarked-page rows offer it
and nothing else does.

**Copy Markdown Link** puts the same address on the clipboard wrapped in a
Markdown link, for pasting into a note rather than handing to a link manager:

```
[Ashish Vaswani et al. (2017) Attention Is All You Need](papyrus://paper/9F2C1A54-3E6B-4D0A-8C71-1B9E4F5A6D22)
```

The label is `Author (Year) Title`. Authors follow the same "et al." rule the
rest of the app uses, and any part the paper doesn't have is left out rather
than filled with a placeholder — a link label should not invent metadata.
Brackets and backslashes in a title are escaped, so a title like
"Attention Is All You Need [sic]" cannot end the label early.

## Linking to a notebook

```
papyrus://notebook/<notebook-uuid>
```

Example:

```
papyrus://notebook/4B7D0E12-9A3C-4F58-B6E1-2C8D5A9F0E31
```

A notebook is a shelf of notes, gathered by theme across any number of papers.
Opening the link asks Papyrus to select that notebook, so its workspace — every
note filed on it — is what you land on.

The shape is deliberately the twin of a paper link: same scheme, the host names
the kind, the first path component is the UUID. A tool that already parses
paper links needs no new rules.

There is **no page-style anchor**. A notebook has no fixed positions to address
— its order is a sort the reader chooses, so an index into it would name a
different note tomorrow.

A link to a notebook in the Trash reveals the Trash and says so, rather than
selecting a shelf that has no visible row. A link that resolves to nothing — a
different library, or a notebook deleted since the link was made — reports that
rather than failing silently.

### Getting a link

**Copy Link** and **Copy Link as Markdown** are on a notebook's context menu in
the sidebar, and in the notebook workspace's own header (on macOS that pane can
be a detached window with no sidebar in reach). The Markdown form is:

```
[Optics](papyrus://notebook/4B7D0E12-9A3C-4F58-B6E1-2C8D5A9F0E31)
```

The label is the notebook's name, with brackets and backslashes escaped so a
name like "Optics [draft]" cannot end the label early.

## Asking what the user is looking at

```
papyrus://x-callback-url/get-current-item?x-success=<url>&x-error=<url>
```

Papyrus replies by opening `x-success` with these query items appended
(existing query items on the callback are preserved):

| Item | Meaning |
| --- | --- |
| `title` | The paper's title, or "Untitled Paper". |
| `url` | The `papyrus://paper/…` link. Page-anchored when the answer came from a reader. |
| `file` | The PDF's location as a `file://` URL. Omitted for a metadata-only paper or a missing file. |

The current item is the paper in the frontmost reader, and only then is `url`
page-anchored — a paper merely selected in the library has no page the user
could be pointing at. Failing that it is the library selection (macOS, iPadOS);
on iPhone, which has no library selection, it is whatever the reader or a
link-opened summary is showing.

When there is nothing open or selected, Papyrus opens `x-error` with the
x-callback-url standard pair `errorCode=no-current-item` and a human-readable
`errorMessage`.

A worked example — the reply for a paper open at page 7:

```
x-success://got?title=Attention%20Is%20All%20You%20Need
              &url=papyrus://paper/9F2C1A54-…?page%3D7
              &file=file:///…/Attention-Is-All-You-Need.pdf
```

### Callback targets must not be web URLs

`get-current-item` hands the title and local file path of whatever the user is
reading to an address the *caller* chose, and a web page can trigger a custom
scheme. Papyrus therefore refuses `x-success` / `x-error` targets using
`http`, `https`, `file`, `ftp`, `ftps`, `data`, `javascript`, `about`, or
`blob`, so a page that talks a user through an "Open Papyrus?" prompt cannot
post their current document to a server. Every real client of this API —
Hookmark (`hook:`), Shortcuts, Drafts, Keyboard Maestro, Alfred — uses a custom
scheme and is unaffected. A refused callback is simply not opened.

## Stability guarantees

- **The identifier is permanent.** It is the paper's sync identity, assigned
  once when the paper enters the library. Renaming the paper, editing its
  metadata, moving it between folders, trashing and restoring it, or replacing
  its PDF all leave the link working.
- **The identifier is portable across the user's devices.** The same link
  resolves on every device signed into the same iCloud library, so a link
  copied on a Mac opens on that user's iPad.
- **The identifier is not portable across libraries.** It identifies a paper,
  not a work. Two people who each import the same PDF get different links.
- **The format will not change.** Additions will be backward compatible;
  `papyrus://paper/<uuid>` and `papyrus://notebook/<uuid>` will keep resolving.
- **Notebook links carry the same guarantees.** The identifier is the
  notebook's sync identity: permanent across renames, reordering, trashing and
  restoring; portable across the user's own devices; not portable across
  libraries.

Unrecognized query parameters are ignored, so links written against a future
revision still open the right paper on an older build.

## Deliberately not implemented

- **Creating a paper.** Hookmark's create API takes a name and returns a link
  to the new item. Papyrus creates papers by importing a PDF or resolving a
  DOI / arXiv ID — a bare name does not identify anything to import, so there
  is nothing honest to return.
- **AppleScript.** An `sdef` on a sandboxed SwiftUI app is a large amount of
  scripting-class work for no capability the x-callback-url API above does not
  already provide.

## Other `papyrus://` URLs

`papyrus://extension-import?id=<request-id>` is a private wake URL used by the
Papyrus Safari extension to hand a capture to the app. It is not part of the
public contract and may change. The three shapes are distinguished purely by
the host segment (`paper`, `x-callback-url`, `extension-import`), whose mutual
exclusion the unit tests pin — as they pin the mutual exclusion of `paper` and
`notebook`, so following one kind of link can never resolve the other.
