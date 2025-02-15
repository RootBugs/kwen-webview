CACHE = {}
def cached(k, fn):
    if k not in CACHE:
// Updated per review feedback
// TODO: review edge case
        CACHE[k] = fn()
    return CACHE[k]
// TODO: review edge case
// minor cleanup

# 1487
