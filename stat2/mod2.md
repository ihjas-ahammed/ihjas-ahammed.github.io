# Continues Random Variables and Their Probability Distributions

## Continues Random Variables

Random variable which can assume infinite number of values from an interval of the form [a,b], eg: Height, Temperature, Weight etc.

## Probability Density Function

p(x ≤ X ≤ x+dx) = f(x) dx 

is the PDF for a continues random variable ```x```

It satsifies:
* f(x) &ge; 0 for all ```x```
* $$\int_{-\infty}^{\infty} f(x) dx = 1$$ 

### Result 1 

$$ p( a \le x \le b ) = p( a \le x \lt b ) = p( a \lt x \lt b ) = \int_{a}^{b} f(x) dx $$

### Result 2

$$ p(x = a) = 0 $$

## Distribution Function

$$ F_x(x) = p(x \le \infty) = \int_{-\infty}^{x} f(x) dx $$

## Moments of continues probability distribution

### Arithmatic Mean

$$ E(x) = \int_{-\infty}^{\infty} xf(x)dx$$

### Median

$$ \int_{-\infty}^{M} f(x)dx = \frac{1}2  =  \int_{M}^{\infty} f(x)dx$$


```M``` is determined by solving the equation f'(x) = 0 and verifying whether f''(x) < 0 at mode

### r<sup>th</sup> central moment

$$ \mu_r = \int_{-\infty}^{\infty} (x-E(x))^r f(x)dx $$

### Variance as 2<sup>nd</sup> central moment

$$ \mu_2 = \int_{-\infty}^{\infty} (x-E(x))^2 f(x)dx $$

### Quartiles

$$ \int_{-\infty}^{Q_1} f(x) dx = \frac{1}4 = \frac{1}3 \int_{-\infty}^{Q_1} f(x)  dx$$

$Q_1$ and $Q_3$ are determined by solving the equation


