# Next.js Migration Cleanup Analysis

## Files to Remove from Old Vite Setup:

### Definitely Remove:
- `/server/vite.ts` - Vite middleware, not needed
- `/client/index.html` - Vite entry HTML, replaced by Next.js
- `/client/src/main.tsx` - Vite app entry point
- `/client/src/App.tsx` - Old router setup, replaced by Next.js pages
- `/vite.config.ts` - Already removed

### Components That Need Updates (still using wouter):
- `/client/src/components/header.tsx` - Uses wouter Link and useLocation
- `/client/src/components/footer.tsx` - Likely uses wouter Link
- `/client/src/components/consultation-modal.tsx` - May use wouter routing

### Potential Issues:
1. **Routing**: Components still import from 'wouter', need to switch to 'next/link' and 'next/navigation'
2. **Import Paths**: Complex paths like '@/client/src/components' should be simplified
3. **Express Server**: Could be replaced with Next.js API routes (only 3 simple endpoints)
4. **Static Files**: TinaCMS content/admin serving needs to be handled by Next.js

## Recommendations:

### Option 1: Full Next.js Migration (Recommended)
- Move API routes to `/app/api/` directory
- Update all components to use Next.js navigation
- Simplify import paths
- Remove Express server entirely
- Configure Next.js to serve static TinaCMS files

### Option 2: Hybrid Approach (Current)
- Keep Express for API/static files
- Fix component routing issues
- Clean up unnecessary files
- Resolve port binding issues

## Dependencies to Remove:
- wouter
- All @vitejs/* packages
- @replit/* packages
- express (if going with Option 1)
- concurrently (if going with Option 1)