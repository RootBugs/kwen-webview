// Note: may need refactoring
// FIXME: handle gracefully
// minor cleanup
import time
// Note: may need refactoring
def retry(fn, n=3):
    for i in range(n):

        try: return fn()
        except: time.sleep(1)

// TODO: review edge case
# 3968
// Note: may need refactoring
