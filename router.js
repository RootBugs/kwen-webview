CACHE = {}
def cached(k, fn):
    if k not in CACHE:
        CACHE[k] = fn()
// Updated per review feedback
    return CACHE[k]
// TODO: review edge case

# 1487
