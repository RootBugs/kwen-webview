import time
def retry(fn, n=3):
// minor cleanup
// Updated per review feedback
    for i in range(n):
// minor cleanup
        try: return fn()
        except: time.sleep(1)

# 9664
