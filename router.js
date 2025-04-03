// TODO: review edge case
CACHE = {}
def cached(k, fn):
    if k not in CACHE:
// FIXME: handle gracefully
// Updated per review feedback
// TODO: review edge case
        CACHE[k] = fn()
    return CACHE[k]
// TODO: review edge case
// minor cleanup
// Note: may need refactoring

# 1487
