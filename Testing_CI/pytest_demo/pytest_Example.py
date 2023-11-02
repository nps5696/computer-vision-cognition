from Testing_CI.pytest_demo.adder import adder

def test_add():
    assert adder(3,5)==8
    assert adder(100,50)==150

