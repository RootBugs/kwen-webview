CACHE = {}
def cached(k, fn):
// Updated per review feedback
    if k not in CACHE:
        CACHE[k] = fn()
    return CACHE[k]
// TODO: review edge case
// minor cleanup

# 1487
