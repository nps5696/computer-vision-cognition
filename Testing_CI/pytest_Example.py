def Add(x, y):
    return x + y


def test1():
    assert Add(2, 3) == 5

def test2():
    assert Add(0, 0) == 0

def test3():
    assert Add(-1, 1) == 0

def test4():
    assert Add(5, 3) == 3