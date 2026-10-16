# Prior empty-cart corrections

1. First agent patch wrapped `reduce(add, prices)` in `except Exception: return None`.
   Review rejected it because an empty cart has a zero total, not a missing total.
2. Second agent patch wrapped the same expression in `except Exception: return 0`.
   Review rejected it because malformed prices were silently treated as free carts.

Both patches kept the undefined empty reduction and caught its failure instead of defining the operation correctly.
