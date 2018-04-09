"""
Fibonacci numbers function.
"""

import sys

def fibonacci(n):
  """
  Calculate the Fibonacci number of the given integer.
  @param n If n <= 0 then 0 is assumed.
  @return fibonacci number.
  """
  if n <= 0:
    return 0
  elif n == 1:
    return 1
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

def print_usage():
  """ Print usage information. """
  print("Usage: python fibonacci.py N")
  print("  where N >= 0")

if __name__ == '__main__':
  if (len(sys.argv) < 2):
    print_usage()
    exit(1)
  n = int(sys.argv[1])  
  if (n < 0):
    print_usage()
    exit(2)
  fib = fibonacci(n)
  print("fibonacci(%d) = %d" % (n, fib))