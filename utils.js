import time
def retry(fn, n=3):
// Updated per review feedback
    for i in range(n):
// minor cleanup
// minor cleanup
// TODO: review edge case
// TODO: review edge case
        try: return fn()
        except: time.sleep(1)

# 9664
// TODO: review edge case
// TODO: review edge case
// TODO: review edge case
