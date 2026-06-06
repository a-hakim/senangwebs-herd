---
name: senangwebs-herd
description: Single-page tabbed interface managing multiple HTML files via lazy-loaded iframes with state persistence.
version: 1.0.1
package: senangwebs-herd
---

# SenangWebs Herd (SWH)

## Quick Reference

- **Purpose**: Dashboard/admin panel tab manager with lazy iframes and localStorage persistence
- **Entry**: `dist/swh.min.js`
- **Dependencies**: none
- **Scripts**: `npm run build`, `npm run build:dev`, `npm run watch`, `npm run dev`

## Workflow

Start in `C:\wamp64\www\sw-libraries\senangwebs-herd`. Read `README.md`, `package.json`, and touched source files. Match existing patterns, CSS prefix `swh-`.

## JavaScript API

```js
const herd = new SWH({
  container,
  tabsContainer,
  contentContainer,
  presetTabs: [{ id, title, url }],
  storageKey: 'swh-state',
  defaultTab: 'tab-id',
  allowClose: true,
  maxTabs: 10
})
```

### Methods
```
herd.openTab(id, title, url)
herd.closeTab(id)
herd.switchTab(id)
herd.getOpenTabs()
herd.getActiveTab()
herd.clearTabs()
herd.reloadTab(id)
herd.persistState()
herd.restoreState()
```

### Events
`tabOpened`, `tabClosed`, `tabSwitched`, `tabLoaded`, `maxTabsReached`

### Accessibility

- Tabs use `tablist`, `tab`, and `tabpanel` semantics with linked ARIA attributes.
- `ArrowLeft`/`ArrowRight` wrap through tabs; `Home`/`End` jump to the edges.
- `Delete` closes the focused tab when `allowClose` is enabled.
- Keep visible focus styles and synchronize `aria-selected` and `tabindex` when changing tab behavior.

## Focus Areas

- Tab lifecycle: create → render iframe (lazy) → activate → close → destroy iframe
- Lazy loading: iframe `src` set only on first activation, cached thereafter
- localStorage state: open tabs, active tab, scroll position
- Cross-origin postMessage communication patterns
- Tab limits: `maxTabs` enforcement, event when limit reached
- Iframe sizing and responsive behavior
- State restoration on page reload

## Implementation Guidance

- Preserve backward compatibility for all method signatures and event names
- Keep the UMD default export working alongside the `window.SWH` global
- Test with cross-origin iframes (postMessage security)
- Verify lazy load doesn't re-fetch iframe on tab re-activation
- Handle iframe load errors gracefully

## Validation

```bash
npm run build
npm run dev      # webpack serve for manual testing
```
