# Test Commands Quick Reference

## 🎯 Most Common Commands

| Command | Description |
|---------|-------------|
| `npm run test:all` | **Run ALL tests (master suite)** ⭐ |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:e2e:ui` | Run E2E tests with UI |
| `npm run validate:schema` | Validate JSON-LD schema |

## 📦 All Available Test Commands

### Master Test Suite
```bash
npm run test:all          # Run everything sequentially
```

### Code Quality
```bash
npm run lint              # Check code style
npm run lint -- --fix     # Auto-fix issues
```

### Unit Tests
```bash
npm test                  # Run all unit tests
npm run test:watch        # Watch mode
npm run test:schema       # Schema validation only
```

### E2E Tests
```bash
npm run test:e2e          # All E2E tests (headless)
npm run test:e2e:ui       # Interactive UI mode
npm run test:e2e:schema   # Schema markup E2E
npm run test:city-seo     # City landing pages
```

### Validation
```bash
npm run validate:schema      # Unit + E2E schema tests
npm run validate:city-seo    # City SEO validation
```

### Other
```bash
npm run security          # Security checks
```

## 🚦 Workflow Recommendations

### During Development
```bash
npm run test:watch
```

### Before Commit
```bash
npm run test:all
```

### After SEO Changes
```bash
npm run validate:schema
```

### Before Deployment
```bash
npm run test:all && npm run build
```

## 🎨 Output Legend

- ✓ = Passed
- ✗ = Failed
- ▶ = Running
- Green = Success
- Red = Failure
- Yellow = Warning/Info

## 📊 Expected Run Times

| Test | Time |
|------|------|
| Linting | ~3s |
| Unit Tests | ~5s |
| Schema Unit | ~2s |
| E2E Tests | ~45s |
| Schema E2E | ~12s |
| City SEO | ~9s |
| **Total** | **~75s** |

## 🔗 Quick Links

- [Full Testing Guide](TESTING.md)
- [Schema Tests README](src/test/README.md)
- [E2E Tests README](tests/README.md)

---

**Tip:** Press `Ctrl+C` to stop any running test.
