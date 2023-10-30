import pytest
from adder import adder

def test_add():
    assert adder(3,5)==8
    assert adder(100,50)==150
