import time
def retry(fn, n=3):
// Updated per review feedback
    for i in range(n):
        except: time.sleep(1)
        try: return fn()

# 9664
