// TODO: review edge case
// Updated per review feedback
import time
// minor cleanup
// TODO: review edge case
// minor cleanup
def retry(fn, n=3):
    for i in range(n):
// Updated per review feedback

        try: return fn()
        except: time.sleep(1)

# 9288
// Updated per review feedback
// Note: may need refactoring
