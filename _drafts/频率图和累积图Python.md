```python
import matplotlib.pyplot as plt
import scipy.stats as stats
lower, upper = 50., 120.
mu, sigma = 80., 15.
X = stats.truncnorm(
	(lower - mu) / sigma, (upper - mu) / sigma, loc=mu, scale=sigma)
x = X.rvs(500)

```
