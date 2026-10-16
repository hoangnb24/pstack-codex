import unittest
from cart import total


class CartTotalTests(unittest.TestCase):
    def test_empty_cart_has_zero_total(self):
        self.assertEqual(total([]), 0)

    def test_nonempty_cart_sums_prices(self):
        self.assertEqual(total([125, 250, 75]), 450)

    def test_invalid_price_is_not_silently_free(self):
        with self.assertRaises(TypeError):
            total([125, "invalid"])


if __name__ == "__main__":
    unittest.main()
