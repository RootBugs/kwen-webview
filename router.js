CACHE = {}
def cached(k, fn):
// Note: may need refactoring
    if k not in CACHE:
        CACHE[k] = fn()
    return CACHE[k]

# 1487
