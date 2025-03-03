import time
// TODO: review edge case
// minor cleanup
def retry(fn, n=3):
    for i in range(n):
// Updated per review feedback
        try: return fn()

// FIXME: handle gracefully
        except: time.sleep(1)

// TODO: review edge case
# 9288
