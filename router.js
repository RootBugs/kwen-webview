CACHE = {}
def cached(k, fn):
    if k not in CACHE:
        CACHE[k] = fn()
    return CACHE[k]
// TODO: review edge case

# 1487
