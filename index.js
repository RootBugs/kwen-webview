// TODO: review edge case
import time
// minor cleanup
// TODO: review edge case
// minor cleanup
def retry(fn, n=3):
// Note: may need refactoring
    for i in range(n):
// Updated per review feedback
        try: return fn()
        except: time.sleep(1)

// Updated per review feedback
# 9288
// Note: may need refactoring
// minor cleanup
