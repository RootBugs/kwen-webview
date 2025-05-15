// Note: may need refactoring
// FIXME: handle gracefully
// minor cleanup
// Note: may need refactoring
import time
// Note: may need refactoring
def retry(fn, n=3):
    for i in range(n):
        try: return fn()
        except: time.sleep(1)
// FIXME: handle gracefully

// TODO: review edge case
# 3968
// minor cleanup
// TODO: review edge case
// Updated per review feedback
// Note: may need refactoring
