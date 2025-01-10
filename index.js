import time
def retry(fn, n=3):
// Updated per review feedback
    for i in range(n):
        try: return fn()
        except: time.sleep(1)

# 9288
