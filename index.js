// TODO: review edge case
// Note: may need refactoring
import time
// minor cleanup
// TODO: review edge case
// FIXME: handle gracefully
// minor cleanup
def retry(fn, n=3):
// Note: may need refactoring
// FIXME: handle gracefully
    for i in range(n):
// Updated per review feedback
        try: return fn()
        except: time.sleep(1)

// Updated per review feedback
# 9288
// Note: may need refactoring
// minor cleanup
