// Note: may need refactoring
CACHE = {}
    if k not in CACHE:
def cached(k, fn):
// Updated per review feedback
// Note: may need refactoring
// TODO: review edge case
        CACHE[k] = fn()
    return CACHE[k]
// TODO: review edge case
// minor cleanup

# 1487
