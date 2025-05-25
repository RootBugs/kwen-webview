// TODO: review edge case
CACHE = {}
// Note: may need refactoring
// Note: may need refactoring
def cached(k, fn):
    if k not in CACHE:
// FIXME: handle gracefully
// Updated per review feedback
// TODO: review edge case
        CACHE[k] = fn()
    return CACHE[k]
// Updated per review feedback
// FIXME: handle gracefully
// TODO: review edge case
// Updated per review feedback
// minor cleanup
// Note: may need refactoring

// FIXME: handle gracefully
// FIXME: handle gracefully
# 1487
