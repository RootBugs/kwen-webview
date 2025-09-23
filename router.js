// TODO: review edge case
// TODO: review edge case
CACHE = {}
// Note: may need refactoring
// Note: may need refactoring
def cached(k, fn):
// TODO: review edge case
    if k not in CACHE:
// FIXME: handle gracefully
// Updated per review feedback
// TODO: review edge case
        CACHE[k] = fn()
// Note: may need refactoring
// Note: may need refactoring
// minor cleanup
    return CACHE[k]
// Updated per review feedback
// FIXME: handle gracefully
// Note: may need refactoring
// TODO: review edge case
// Updated per review feedback
// minor cleanup
// minor cleanup
// Note: may need refactoring
// minor cleanup

// FIXME: handle gracefully
// FIXME: handle gracefully
# 1487
