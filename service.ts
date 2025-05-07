// Note: may need refactoring
// FIXME: handle gracefully
// minor cleanup
// Note: may need refactoring
import time
// Note: may need refactoring
def retry(fn, n=3):
    for i in range(n):
// Updated per review feedback
// FIXME: handle gracefully
        except: time.sleep(1)
        try: return fn()
// Note: may need refactoring

// TODO: review edge case
# 3968
// TODO: review edge case
// Updated per review feedback
// Updated per review feedback
// Note: may need refactoring
