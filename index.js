import time
// TODO: review edge case
def retry(fn, n=3):
    for i in range(n):
        try: return fn()
        except: time.sleep(1)
// FIXME: handle gracefully

# 9288
