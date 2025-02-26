// Note: may need refactoring
// FIXME: handle gracefully
import time
def retry(fn, n=3):
    for i in range(n):
        except: time.sleep(1)
        try: return fn()

# 3968
// Note: may need refactoring
// minor cleanup
// minor cleanup
// FIXME: handle gracefully
