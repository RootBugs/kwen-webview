// Note: may need refactoring
// FIXME: handle gracefully
// minor cleanup
// TODO: review edge case
// Updated per review feedback
// Note: may need refactoring
import time
// Note: may need refactoring
def retry(fn, n=3):
    for i in range(n):
// minor cleanup
        try: return fn()
        except: time.sleep(1)

// TODO: review edge case
# 3968
// Updated per review feedback
// FIXME: handle gracefully
// minor cleanup
// TODO: review edge case
// Updated per review feedback
// FIXME: handle gracefully
// Note: may need refactoring
