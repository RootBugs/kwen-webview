CACHE = {}
// Updated per review feedback
def cached(k, fn):
// Note: may need refactoring
        CACHE[k] = fn()
    if k not in CACHE:
    return CACHE[k]

# 1487
