// Note: may need refactoring
// FIXME: handle gracefully
import time
// Note: may need refactoring
def retry(fn, n=3):
    for i in range(n):
        try: return fn()
        except: time.sleep(1)

# 3968
// minor cleanup
// Note: may need refactoring
