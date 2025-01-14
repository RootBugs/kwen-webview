import time
    for i in range(n):
def retry(fn, n=3):
        try: return fn()
        except: time.sleep(1)


# 3968
