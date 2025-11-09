# SenangWebs Herd - Examples

This directory contains example implementations of SenangWebs Herd (SWH).

## Examples

### 1. Basic HTML Attribute Initialization
**File:** `basic-html-attribute.html`

Demonstrates the simplest way to use SWH by adding data attributes to your HTML elements. The library automatically detects and initializes the tab system.

**Features:**
- HTML-only initialization
- Preset tabs defined in markup
- State persistence enabled
- Tab closing allowed

### 2. JavaScript Initialization
**File:** `javascript-init.html`

Shows how to initialize SWH programmatically using JavaScript, giving you more control over the configuration.

**Features:**
- Programmatic initialization
- Dynamic tab creation
- API method demonstrations (add, reload, show info)
- Event listener registration

### 3. Event Handling Demo
**File:** `event-handling.html`

An advanced example that demonstrates the event system with a real-time event monitor and statistics dashboard.

**Features:**
- Event monitoring sidebar
- Real-time statistics
- Event log with timestamps
- Visual feedback for different event types

## Running the Examples

### Option 1: Local Web Server (Recommended)

Since the examples use iframes, you should run them through a web server to avoid CORS issues.

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000/examples/basic-html-attribute.html
```

**Using PHP:**
```bash
php -S localhost:8000

# Then visit: http://localhost:8000/examples/basic-html-attribute.html
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000

# Then visit: http://localhost:8000/examples/basic-html-attribute.html
```

### Option 2: Direct File Access

You can also open the HTML files directly in your browser, but some browsers may block iframe content due to CORS policies.

## Directory Structure

```
examples/
├── basic-html-attribute.html    # HTML-based initialization
├── javascript-init.html          # JavaScript-based initialization
├── event-handling.html           # Event system demonstration
├── pages/                        # Sample iframe content
│   ├── home.html
│   ├── about.html
│   └── contact.html
└── README.md                     # This file
```

## Understanding the Examples

### HTML Attribute Approach
```html
<div data-swh
     data-swh-storage-key="my-app-tabs"
     data-swh-default-tab="home"
     data-swh-allow-close
     data-swh-max-tabs="5">
    <!-- Tabs and content -->
</div>
```

### JavaScript Approach
```javascript
const swh = new SWH({
    container: document.querySelector('#swh-container'),
    tabsContainer: document.querySelector('#swh-tabs'),
    contentContainer: document.querySelector('#swh-content'),
    presetTabs: [
        { id: "home", title: "Home", url: "home.html" }
    ],
    storageKey: "my-tabs",
    defaultTab: "home",
    allowClose: true,
    maxTabs: 5
});
```

## Customization

Feel free to modify these examples to suit your needs:
- Change the color schemes in the CSS
- Add more tabs
- Modify the page content
- Experiment with different configurations

## Need Help?

Refer to the main `spec.md` file in the root directory for complete API documentation and configuration options.
