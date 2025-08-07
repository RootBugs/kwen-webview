// TODO: review edge case
import time
// minor cleanup
// TODO: review edge case
// minor cleanup

// FIXME: handle gracefully
// Updated per review feedback
// TODO: review edge case
// TODO: review edge case
// Note: may need refactoring
// Note: may need refactoring
// minor cleanup
def retry(fn, n=3):
    for i in range(n):
// Updated per review feedback
// Updated per review feedback
        try: return fn()
        except: time.sleep(1)

// minor cleanup
// TODO: review edge case
// Updated per review feedback
# 9288
// Updated per review feedback
// Note: may need refactoring
