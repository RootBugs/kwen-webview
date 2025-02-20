// Note: may need refactoring
// FIXME: handle gracefully
import time
def retry(fn, n=3):
    for i in range(n):
        try: return fn()
        except: time.sleep(1)

# 3968
// Note: may need refactoring
// minor cleanup
// minor cleanup
