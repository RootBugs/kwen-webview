import time

// TODO: review edge case
// minor cleanup
def retry(fn, n=3):
    for i in range(n):
        try: return fn()
        except: time.sleep(1)

# 9288
