## Solutions to Probability and Random Variables Questions

Here are the solutions to the questions provided, organized by topic and source exam paper.

**1. Random Variable and Probability Distribution**

* **From C 4402:**
    * **(a) Random experiment:** A random experiment is a well-defined procedure that can be repeated any number of times and has a set of possible outcomes. However, the outcome of any particular trial is uncertain.
    * **(b) Event:** An event is a subset of the sample space, which is the set of all possible outcomes of a random experiment. It is a collection of one or more outcomes.

    * **Probability density function (pdf):** For a continuous random variable X, the probability density function $f(x)$ is a function such that the probability that X falls in a small interval $[x, x + dx]$ is approximately $f(x) dx$.

    * **Properties of pdf:**
        1.  $f(x) \geq 0$ for all $x \in \mathbb{R}$ (The pdf is non-negative everywhere).
        2.  $\int_{-\infty}^{\infty} f(x) dx = 1$ (The total area under the pdf curve is equal to 1).
        3.  $P(a \leq X \leq b) = \int_{a}^{b} f(x) dx$ (Probability of X falling in an interval is the area under the pdf curve over that interval).

    * **Axiomatic definition of probability:**
        * **Underlying Assumptions:** We consider a sample space S, which is the set of all possible outcomes of a random experiment. Let A be an event, which is a subset of S. We define a probability function P that assigns a real number P(A) to each event A.
        * **Axioms:**
            1. **Non-negativity:** For any event A, $P(A) \geq 0$.
            2. **Normalization:** For the sample space S, $P(S) = 1$.
            3. **Additivity:** If $A_1, A_2, A_3, ...$ is a sequence of mutually exclusive events (i.e., $A_i \cap A_j = \emptyset$ for $i \neq j$), then $P(A_1 \cup A_2 \cup A_3 \cup ...) = \sum_{i=1}^{\infty} P(A_i)$.

        * **Establish $0 \leq P(A) \leq 1$ for an event A:**
            * From Axiom 1, we have $P(A) \geq 0$.
            * We know that for any event A, $A \subseteq S$.
            * Therefore, using properties of probability (which can be derived from axioms, though not strictly required here for this part), we know that if $A \subseteq B$, then $P(A) \leq P(B)$.
            * Since $A \subseteq S$, we have $P(A) \leq P(S)$.
            * From Axiom 2, $P(S) = 1$.
            * Hence, $P(A) \leq 1$.
            * Combining $P(A) \geq 0$ and $P(A) \leq 1$, we get $0 \leq P(A) \leq 1$.

* **From C4185:**
    * **Let x denote the number of heads obtained when a fair coin is tossed thrice ; then $P(x=1)$ is:**
        * This is a binomial distribution problem with $n=3$ (number of tosses) and $p=0.5$ (probability of head).
        * $P(x=1) = {3 \choose 1} (0.5)^1 (1-0.5)^{3-1} = {3 \choose 1} (0.5)^1 (0.5)^2 = 3 \times 0.5 \times 0.25 = 0.375 = \frac{3}{8}$

    * **Two dice are rolled. Let x be the maximum of the numbers that turn-up then $P(x=5)=$**
        * Total possible outcomes = $6 \times 6 = 36$.
        * For the maximum to be 5, the possible outcomes are pairs where the maximum of the two numbers is 5. These are:
            (5,1), (5,2), (5,3), (5,4), (5,5), (1,5), (2,5), (3,5), (4,5).
        * Total favorable outcomes = 9.
        * $P(x=5) = \frac{\text{Favorable outcomes}}{\text{Total outcomes}} = \frac{9}{36} = \frac{1}{4}$

    * **If X is the number shown when an unbiased die is thrown. Name the probability distribution of X. Write the p.m.f. of X and find $E(X)$.**
        * **Probability distribution:** Discrete Uniform Distribution.
        * **p.m.f. of X:** $P(X=x) = f(x) = \frac{1}{6}$ for $x = 1, 2, 3, 4, 5, 6$ and $f(x) = 0$ otherwise.
        * **$E(X)$:** $E(X) = \sum_{x=1}^{6} x \cdot P(X=x) = \sum_{x=1}^{6} x \cdot \frac{1}{6} = \frac{1}{6} (1+2+3+4+5+6) = \frac{1}{6} \times \frac{6 \times 7}{2} = \frac{7}{2} = 3.5$

* **From 4184**
    * **For the bivariate distribution function $(X,Y), F_{(X,Y)}(\infty,\infty)=$__________.**
        * $F_{(X,Y)}(\infty,\infty) = P(X \leq \infty, Y \leq \infty) = 1$.  This is because it represents the probability that X is less than or equal to infinity AND Y is less than or equal to infinity, which is certain to happen for any real-valued random variables.

    * **Define independence of two random variables $X$ and $Y$**
        * Two random variables X and Y are said to be independent if for any events A and B, where A is defined in terms of X and B is defined in terms of Y, the events A and B are independent.
        * Equivalently, for all $x, y$, for distribution functions: $F_{X,Y}(x,y) = F_X(x) F_Y(y)$.
        * For pdfs/pmfs (if they exist): $f_{X,Y}(x,y) = f_X(x) f_Y(y)$.

**2. Probability Mass Functions (PMF)**

* **From C 4402:**
    * **Obtain the distribution function of X, with p.d.f. $f(x) = 3x^2$, for $0 < x < 1$.**
        * The distribution function $F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t) dt$.
        * For $x \leq 0$, $F(x) = \int_{-\infty}^{x} 0 dt = 0$.
        * For $0 < x < 1$, $F(x) = \int_{-\infty}^{0} 0 dt + \int_{0}^{x} 3t^2 dt = [t^3]_0^x = x^3$.
        * For $x \geq 1$, $F(x) = \int_{-\infty}^{0} 0 dt + \int_{0}^{1} 3t^2 dt + \int_{1}^{x} 0 dt = [t^3]_0^1 = 1$.
        * So, $F(x) = \begin{cases} 0, & x \leq 0 \\ x^3, & 0 < x < 1 \\ 1, & x \geq 1 \end{cases}$

    * **Find the value of $k$, if $f(x) = \binom{k}{2}^x$, for $x = 1, 2, 3...$ is the probability mass function of X.**
        * For $f(x)$ to be a p.m.f., $\sum_{x=1}^{\infty} f(x) = 1$.
        * $\sum_{x=1}^{\infty} \binom{k}{2}^x = \frac{\binom{k}{2}}{1 - \binom{k}{2}} = 1$  (This is a geometric series sum, valid if $|\binom{k}{2}| < 1$)
        * $\binom{k}{2} = 1 - \binom{k}{2}$
        * $2 \binom{k}{2} = 1$
        * $\binom{k}{2} = \frac{1}{2}$
        * $\frac{k(k-1)}{2} = \frac{1}{2}$
        * $k(k-1) = 1$
        * $k^2 - k - 1 = 0$
        * $k = \frac{1 \pm \sqrt{1 - 4(1)(-1)}}{2} = \frac{1 \pm \sqrt{5}}{2}$.
        * Since $\binom{k}{2}$ must be positive for it to be a probability, and for the geometric series to converge, we need $0 < \binom{k}{2} < 1$.  If $k = \frac{1 + \sqrt{5}}{2} \approx 1.618$, then $\binom{k}{2}$ is not well-defined as k is not an integer and also less than 2. However, if we interpret $\binom{k}{2}$ as $\frac{k(k-1)}{2}$ for real k, then $\binom{k}{2} = \frac{1}{2} < 1$.
        * But for binomial coefficient notation $\binom{k}{2}$ to be standard, k should be an integer and $k \ge 2$. If we assume there's a typo and it was meant to be something else, and proceed with $\binom{k}{2} = 1/2$, then $k^2-k-1=0$ gives non-integer $k$ values.  Let's re-examine the question.  It's likely there's a misunderstanding in the form.  If we assume the question meant $(\frac{1}{c})^x$ form for geometric, then we should have $\binom{k}{2}$ constant, not depending on x.  If it's meant to be $\left(\frac{1}{2}\right)^x$, then maybe $\binom{k}{2} = 1/2$, but k being integer doesn't work.
        * **Let's reconsider assuming the question is incorrectly transcribed and should be $f(x) = c (\frac{1}{2})^x$.** Then $\sum_{x=1}^\infty c (\frac{1}{2})^x = c \sum_{x=1}^\infty (\frac{1}{2})^x = c \frac{1/2}{1-1/2} = c = 1$. So $c=1$. In that case, no $k$ to find based on $\binom{k}{2}$.

        * **Let's assume the question meant $f(x) = C \cdot r^x$ where $r = \binom{k}{2}$ and we need to find $k$ such that $r = 1/2$.**  Then $\binom{k}{2} = 1/2 \implies k^2-k-1=0$, which gives non-integer $k$.

        * **Most likely there's a typo in the question.** If we ignore the $\binom{k}{2}$ notation and assume it was intended to be a constant 'c' and the p.m.f. is $f(x) = c^x$ for $x=1, 2, 3...$, this is not a valid PMF as $c^x$ will not sum to 1 unless $0<c<1$. If it was meant to be $f(x) = c \cdot r^x$, then to sum to 1, we'd have geometric distribution form.

        * **If we assume the question meant $f(x) = c (\frac{1}{2})^x$ or similar, then there's no 'k' to solve for related to $\binom{k}{2}$.  Given the question as written, it is ill-posed or has a typo.**

    * **The p.m.f. of X, $f(x) = \frac{2x^2 - 1}{k}$, for $x = 1, 2, 3, 4$ and $f(x) = 0$ *elsewhere* (i) Find $k$ ; (ii) Write the distribution function $F(x)$.**
        * **(i) Find $k$:** For $f(x)$ to be a p.m.f., $\sum_{x=1}^{4} f(x) = 1$.
            $\sum_{x=1}^{4} \frac{2x^2 - 1}{k} = \frac{1}{k} \sum_{x=1}^{4} (2x^2 - 1) = 1$
            $\sum_{x=1}^{4} (2x^2 - 1) = (2(1)^2 - 1) + (2(2)^2 - 1) + (2(3)^2 - 1) + (2(4)^2 - 1) = (2-1) + (8-1) + (18-1) + (32-1) = 1 + 7 + 17 + 31 = 56$.
            $\frac{56}{k} = 1 \implies k = 56$.

        * **(ii) Write the distribution function $F(x)$.**
            $F(x) = P(X \leq x) = \sum_{t \leq x} f(t)$.
            For $x < 1$, $F(x) = 0$.
            For $1 \leq x < 2$, $F(x) = f(1) = \frac{2(1)^2 - 1}{56} = \frac{1}{56}$.
            For $2 \leq x < 3$, $F(x) = f(1) + f(2) = \frac{1}{56} + \frac{2(2)^2 - 1}{56} = \frac{1}{56} + \frac{7}{56} = \frac{8}{56} = \frac{1}{7}$.
            For $3 \leq x < 4$, $F(x) = f(1) + f(2) + f(3) = \frac{8}{56} + \frac{2(3)^2 - 1}{56} = \frac{8}{56} + \frac{17}{56} = \frac{25}{56}$.
            For $x \geq 4$, $F(x) = f(1) + f(2) + f(3) + f(4) = \frac{25}{56} + \frac{2(4)^2 - 1}{56} = \frac{25}{56} + \frac{31}{56} = \frac{56}{56} = 1$.

            So, $F(x) = \begin{cases} 0, & x < 1 \\ 1/56, & 1 \leq x < 2 \\ 8/56 = 1/7, & 2 \leq x < 3 \\ 25/56, & 3 \leq x < 4 \\ 1, & x \geq 4 \end{cases}$

    * **Given the p.d.f. of X as $f(x) = 1$, for $0 < x < 1$. Find the p.d.f. of $Y = -2 \log_e X$.**
        * We use the transformation of random variables technique.
        * CDF method: $F_Y(y) = P(Y \leq y) = P(-2 \log_e X \leq y) = P(\log_e X \geq -\frac{y}{2}) = P(X \geq e^{-y/2})$.
        * Since $0 < X < 1$, for $y>0$, $0 < e^{-y/2} < 1$. For $y \leq 0$, $e^{-y/2} \geq 1$, so $P(X \geq e^{-y/2}) = 0$.
        * For $y > 0$, $P(X \geq e^{-y/2}) = \int_{e^{-y/2}}^{1} f_X(x) dx = \int_{e^{-y/2}}^{1} 1 dx = [x]_{e^{-y/2}}^{1} = 1 - e^{-y/2}$.
        * So, $F_Y(y) = \begin{cases} 1 - e^{-y/2}, & y > 0 \\ 0, & y \leq 0 \end{cases}$
        * Now, differentiate $F_Y(y)$ with respect to $y$ to get $f_Y(y)$.
        * For $y > 0$, $f_Y(y) = \frac{d}{dy} (1 - e^{-y/2}) = -e^{-y/2} (-\frac{1}{2}) = \frac{1}{2} e^{-y/2}$.
        * For $y \leq 0$, $f_Y(y) = 0$.
        * Thus, $f_Y(y) = \begin{cases} \frac{1}{2} e^{-y/2}, & y > 0 \\ 0, & y \leq 0 \end{cases}$. This is the pdf of an Exponential distribution with parameter $\lambda = 1/2$.

* **From C 4185:**
    * **Following is the probability distribution of a discrete random variable $x$. What is $E(2x + 3)$?**

        | $x$      | -3   | -2   | -1   | 0  | 1    | 2    | 3    |
        | :------- | :--- | :--- | :--- | :- | :--- | :--- | :--- |
        | $P(x)$   | 0.05 | 0.10 | 0.30 | 0  | 0.30 | 0.15 | 0.10 |

        * $E(x) = \sum x P(x) = (-3)(0.05) + (-2)(0.10) + (-1)(0.30) + (0)(0) + (1)(0.30) + (2)(0.15) + (3)(0.10) = -0.15 - 0.20 - 0.30 + 0 + 0.30 + 0.30 + 0.30 = 0.15$.
        * $E(2x + 3) = 2E(x) + 3 = 2(0.15) + 3 = 0.30 + 3 = 3.30$.

* **From C4184:**
      * **Find the m.g.f. of $X$ with p.d.f $f(x)=\frac{1}{2}e^{-|x|}, -\infty < x < \infty$.**
        * $M_X(t) = E(e^{tX}) = \int_{-\infty}^{\infty} e^{tx} f(x) dx = \int_{-\infty}^{\infty} e^{tx} \frac{1}{2}e^{-|x|} dx = \frac{1}{2} \int_{-\infty}^{0} e^{tx} e^{x} dx + \frac{1}{2} \int_{0}^{\infty} e^{tx} e^{-x} dx$
        * $= \frac{1}{2} \int_{-\infty}^{0} e^{(t+1)x} dx + \frac{1}{2} \int_{0}^{\infty} e^{(t-1)x} dx$
        * $= \frac{1}{2} [\frac{e^{(t+1)x}}{t+1}]_{-\infty}^{0} + \frac{1}{2} [\frac{e^{(t-1)x}}{t-1}]_{0}^{\infty}$
        * For the first term to converge at $-\infty$, we need $t+1 > 0 \implies t > -1$. For the second term to converge at $\infty$, we need $t-1 < 0 \implies t < 1$. So, $-1 < t < 1$.
        * $M_X(t) = \frac{1}{2} (\frac{e^0}{t+1} - \lim_{x \to -\infty} \frac{e^{(t+1)x}}{t+1}) + \frac{1}{2} (\lim_{x \to \infty} \frac{e^{(t-1)x}}{t-1} - \frac{e^0}{t-1})$
        * $= \frac{1}{2} (\frac{1}{t+1} - 0) + \frac{1}{2} (0 - \frac{1}{t-1}) = \frac{1}{2(t+1)} - \frac{1}{2(t-1)} = \frac{(t-1) - (t+1)}{2(t+1)(t-1)} = \frac{-2}{2(t^2 - 1)} = \frac{-1}{t^2 - 1} = \frac{1}{1 - t^2}$.
        * So, $M_X(t) = \frac{1}{1 - t^2}$ for $-1 < t < 1$.

**4. Mathematical Expectation**

* **From C 4401:**
    * **What is the expected profit for a seller per item, if he is selling a large number of this item per day with various profits Rs. 2, 3 or 4 according to the buyer with a probability 0.2, 0.35 and 0.45 respectively ?**
        * Let X be the profit per item. Possible values of X are 2, 3, 4 with probabilities $P(X=2) = 0.2$, $P(X=3) = 0.35$, $P(X=4) = 0.45$.
        * Expected profit $E(X) = \sum x P(X=x) = 2(0.2) + 3(0.35) + 4(0.45) = 0.4 + 1.05 + 1.8 = 3.25$.
        * Expected profit per item is Rs. 3.25.

* **From C 4402:**
    * **If $E(X)=2, E(X^2)=8$, find $V(3X-2)$.**
        * $V(X) = E(X^2) - [E(X)]^2 = 8 - (2)^2 = 8 - 4 = 4$.
        * $V(3X-2) = V(3X) = 3^2 V(X) = 9 V(X) = 9 \times 4 = 36$.

* **From C 4185:**
    * **If x is the number of heads obtained in tossing 3 coins,  $E(x)=$**
        * X follows Binomial distribution with $n=3, p=0.5$.
        * $E(X) = np = 3 \times 0.5 = 1.5$.

    * **For the probability distribution given in problem (10), what is $V(2x + 3)$?**
        * From problem 10, $E(x) = 0.15$.
        * $E(x^2) = \sum x^2 P(x) = (-3)^2(0.05) + (-2)^2(0.10) + (-1)^2(0.30) + (0)^2(0) + (1)^2(0.30) + (2)^2(0.15) + (3)^2(0.10) = 9(0.05) + 4(0.10) + 1(0.30) + 0 + 1(0.30) + 4(0.15) + 9(0.10) = 0.45 + 0.40 + 0.30 + 0 + 0.30 + 0.60 + 0.90 = 2.95$.
        * $V(x) = E(x^2) - [E(x)]^2 = 2.95 - (0.15)^2 = 2.95 - 0.0225 = 2.9275$.
        * $V(2x + 3) = V(2x) = 2^2 V(x) = 4 V(x) = 4 \times 2.9275 = 11.71$.

    * **Let $x$ be the number of heads obtained in four tosses of a fair coin. Find $E(x)$ :**
        * X follows Binomial distribution with $n=4, p=0.5$.
        * $E(X) = np = 4 \times 0.5 = 2$.

    * **Define mathematical expectation of a random variable.**
        * For a discrete random variable X with p.m.f. $P(X=x)$, the mathematical expectation (or expected value) of X, denoted by $E(X)$, is defined as $E(X) = \sum_{x} x P(X=x)$, where the sum is taken over all possible values of x.
        * For a continuous random variable X with p.d.f. $f(x)$, the mathematical expectation of X is defined as $E(X) = \int_{-\infty}^{\infty} x f(x) dx$, provided the integral exists.  In general, for any function $g(X)$, $E[g(X)] = \sum_{x} g(x) P(X=x)$ (discrete case) or $E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) dx$ (continuous case).

    * **State and prove the addition theorem of expectation.**
        * **Statement:** For any two random variables X and Y, $E(X + Y) = E(X) + E(Y)$. More generally, for any constants $a$ and $b$, and random variables $X$ and $Y$, $E(aX + bY) = aE(X) + bE(Y)$. This extends to more than two variables: $E(\sum_{i=1}^n X_i) = \sum_{i=1}^n E(X_i)$.
        * **Proof (Discrete case):**
            Let $P(X=x, Y=y) = p(x,y)$ be the joint p.m.f. of X and Y.
            $E(X+Y) = \sum_{x} \sum_{y} (x+y) p(x,y) = \sum_{x} \sum_{y} x p(x,y) + \sum_{x} \sum_{y} y p(x,y)$.
            $= \sum_{x} x \left( \sum_{y} p(x,y) \right) + \sum_{y} y \left( \sum_{x} p(x,y) \right)$.
            We know that the marginal p.m.f. of X is $P(X=x) = p_X(x) = \sum_{y} p(x,y)$ and the marginal p.m.f. of Y is $P(Y=y) = p_Y(y) = \sum_{x} p(x,y)$.
            So, $E(X+Y) = \sum_{x} x p_X(x) + \sum_{y} y p_Y(y) = E(X) + E(Y)$.
        * **Proof (Continuous case):**
            Let $f_{X,Y}(x,y)$ be the joint p.d.f. of X and Y.
            $E(X+Y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x+y) f_{X,Y}(x,y) dx dy = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x f_{X,Y}(x,y) dx dy + \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} y f_{X,Y}(x,y) dx dy$.
            $= \int_{-\infty}^{\infty} x \left( \int_{-\infty}^{\infty} f_{X,Y}(x,y) dy \right) dx + \int_{-\infty}^{\infty} y \left( \int_{-\infty}^{\infty} f_{X,Y}(x,y) dx \right) dy$.
            We know that the marginal p.d.f. of X is $f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) dy$ and the marginal p.d.f. of Y is $f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) dx$.
            So, $E(X+Y) = \int_{-\infty}^{\infty} x f_X(x) dx + \int_{-\infty}^{\infty} y f_Y(y) dy = E(X) + E(Y)$.

    * **In a game three balls are drawn from a box containing 5 white and 7 black balls. 10 points are given for each white ball drawn and 5 points are given for each black ball drawn. Calculated the expected points per game for a long run of the game.**
        * Let $W$ be the number of white balls drawn and $B$ be the number of black balls drawn. Total balls drawn is 3, so $W+B=3$.
        * Points for white balls = $10W$, Points for black balls = $5B$. Total points $P = 10W + 5B = 10W + 5(3-W) = 10W + 15 - 5W = 5W + 15$.
        * We need to find $E(P) = E(5W + 15) = 5E(W) + 15$.
        * Total balls = 5+7 = 12. Number of ways to draw 3 balls from 12 is ${12 \choose 3}$.
        * Number of ways to draw $W$ white balls from 5 and $3-W$ black balls from 7 is ${5 \choose W} {7 \choose 3-W}$.  Possible values for W are 0, 1, 2, 3.
        * $P(W=0) = \frac{{5 \choose 0} {7 \choose 3}}{{12 \choose 3}} = \frac{1 \times 35}{220} = \frac{35}{220}$.
        * $P(W=1) = \frac{{5 \choose 1} {7 \choose 2}}{{12 \choose 3}} = \frac{5 \times 21}{220} = \frac{105}{220}$.
        * $P(W=2) = \frac{{5 \choose 2} {7 \choose 1}}{{12 \choose 3}} = \frac{10 \times 7}{220} = \frac{70}{220}$.
        * $P(W=3) = \frac{{5 \choose 3} {7 \choose 0}}{{12 \choose 3}} = \frac{10 \times 1}{220} = \frac{10}{220}$.
        * $E(W) = \sum_{W=0}^{3} W P(W=W) = 0 \cdot \frac{35}{220} + 1 \cdot \frac{105}{220} + 2 \cdot \frac{70}{220} + 3 \cdot \frac{10}{220} = \frac{105 + 140 + 30}{220} = \frac{275}{220} = \frac{5}{4} = 1.25$.
        * $E(P) = 5E(W) + 15 = 5 \times \frac{5}{4} + 15 = \frac{25}{4} + 15 = \frac{25 + 60}{4} = \frac{85}{4} = 21.25$.
        * Expected points per game is 21.25.

    * **For X with p.d.f. $f(x) = kx(2 - x)$, for $0 < x < 1 ; f(x) = 0$, elsewhere. Obtain (a) $k$ ; (b) Mean and variance of X.**
        * **(a) Find $k$:** $\int_{-\infty}^{\infty} f(x) dx = 1 \implies \int_{0}^{1} kx(2 - x) dx = 1$.
            $k \int_{0}^{1} (2x - x^2) dx = k [x^2 - \frac{x^3}{3}]_0^1 = k (1 - \frac{1}{3}) = k \frac{2}{3} = 1 \implies k = \frac{3}{2}$.

        * **(b) Mean and variance of X.**
            * Mean $E(X) = \int_{-\infty}^{\infty} x f(x) dx = \int_{0}^{1} x \cdot \frac{3}{2} x(2 - x) dx = \frac{3}{2} \int_{0}^{1} (2x^2 - x^3) dx = \frac{3}{2} [\frac{2x^3}{3} - \frac{x^4}{4}]_0^1 = \frac{3}{2} (\frac{2}{3} - \frac{1}{4}) = \frac{3}{2} (\frac{8 - 3}{12}) = \frac{3}{2} \cdot \frac{5}{12} = \frac{5}{8}$.
            * $E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx = \int_{0}^{1} x^2 \cdot \frac{3}{2} x(2 - x) dx = \frac{3}{2} \int_{0}^{1} (2x^3 - x^4) dx = \frac{3}{2} [\frac{2x^4}{4} - \frac{x^5}{5}]_0^1 = \frac{3}{2} (\frac{1}{2} - \frac{1}{5}) = \frac{3}{2} (\frac{5 - 2}{10}) = \frac{3}{2} \cdot \frac{3}{10} = \frac{9}{20}$.
            * Variance $V(X) = E(X^2) - [E(X)]^2 = \frac{9}{20} - (\frac{5}{8})^2 = \frac{9}{20} - \frac{25}{64} = \frac{9 \times 16}{20 \times 16} - \frac{25 \times 5}{64 \times 5} = \frac{144}{320} - \frac{125}{320} = \frac{19}{320}$.

* **From 4184:**
  * **If X and Y two independent random variables, $E(X/Y)=$__________.**
    * In general, $E(X/Y) \neq \frac{E(X)}{E(Y)}$.  If X and Y are independent, it does not simplify $E(X/Y)$ directly.  However, if we interpret $X/Y$ as $X \cdot (1/Y)$, and if X and Y are independent, then X and $1/Y$ are also independent (if transformation is valid). So, $E(X/Y) = E(X \cdot (1/Y)) = E(X) E(1/Y)$, *provided $E(1/Y)$ exists and X and Y are independent*.  Without more information about Y, we cannot simplify further.  If Y is a constant $c \neq 0$, then $E(X/c) = \frac{1}{c} E(X)$.  If question is asking for general case and assuming independence implies separability of expectation for product, then answer is $E(X)E(1/Y)$.

    * **State and prove multiplication theorem on expectation.**
        * **Statement:** If X and Y are independent random variables, then $E(XY) = E(X) E(Y)$.
        * **Proof (Discrete case):**
            Let $P(X=x, Y=y) = p(x,y)$ be the joint p.m.f. Since X and Y are independent, $p(x,y) = p_X(x) p_Y(y)$.
            $E(XY) = \sum_{x} \sum_{y} xy p(x,y) = \sum_{x} \sum_{y} xy p_X(x) p_Y(y) = \sum_{x} x p_X(x) \left( \sum_{y} y p_Y(y) \right) = \left( \sum_{x} x p_X(x) \right) \left( \sum_{y} y p_Y(y) \right) = E(X) E(Y)$.
        * **Proof (Continuous case):**
            Let $f_{X,Y}(x,y)$ be the joint p.d.f. Since X and Y are independent, $f_{X,Y}(x,y) = f_X(x) f_Y(y)$.
            $E(XY) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_{X,Y}(x,y) dx dy = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_X(x) f_Y(y) dx dy = \int_{-\infty}^{\infty} x f_X(x) dx \int_{-\infty}^{\infty} y f_Y(y) dy = E(X) E(Y)$.

    * **For a random variable $X$, prove that $E(X)=E[E(X|Y)]$.**
        * **Proof (Discrete case):**
            $E[E(X|Y)] = \sum_{y} E(X|Y=y) P(Y=y) = \sum_{y} \left( \sum_{x} x P(X=x|Y=y) \right) P(Y=y)$.
            Using the definition of conditional probability $P(X=x|Y=y) = \frac{P(X=x, Y=y)}{P(Y=y)}$ (if $P(Y=y) > 0$).
            $E[E(X|Y)] = \sum_{y} \left( \sum_{x} x \frac{P(X=x, Y=y)}{P(Y=y)} \right) P(Y=y) = \sum_{y} \sum_{x} x P(X=x, Y=y) = \sum_{x} x \left( \sum_{y} P(X=x, Y=y) \right)$.
            We know that the marginal p.m.f. of X is $P(X=x) = \sum_{y} P(X=x, Y=y)$.
            So, $E[E(X|Y)] = \sum_{x} x P(X=x) = E(X)$.
        * **Proof (Continuous case):**
            $E[E(X|Y)] = \int_{-\infty}^{\infty} E(X|Y=y) f_Y(y) dy = \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} x f_{X|Y}(x|y) dx \right) f_Y(y) dy$.
            Using the definition of conditional p.d.f. $f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}$ (if $f_Y(y) > 0$).
            $E[E(X|Y)] = \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} x \frac{f_{X,Y}(x,y)}{f_Y(y)} dx \right) f_Y(y) dy = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x f_{X,Y}(x,y) dx dy = \int_{-\infty}^{\infty} x \left( \int_{-\infty}^{\infty} f_{X,Y}(x,y) dy \right) dx$.
            We know that the marginal p.d.f. of X is $f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) dy$.
            So, $E[E(X|Y)] = \int_{-\infty}^{\infty} x f_X(x) dx = E(X)$.

**5. Moments**

* **From C 4401:**
 * **Explain two methods of finding raw moments of X, when moment generating function of X exists.**
    * **Method 1: Differentiation of MGF:**
        The $r^{th}$ raw moment $\mu_r' = E(X^r)$ can be found by taking the $r^{th}$ derivative of the moment generating function $M_X(t)$ with respect to $t$ and evaluating it at $t=0$.
        $\mu_r' = \left. \frac{d^r}{dt^r} M_X(t) \right|_{t=0}$.
        For example, $\mu_1' = E(X) = M_X'(0)$, $\mu_2' = E(X^2) = M_X''(0)$, and so on.

    * **Method 2: Expansion of MGF:**
        The moment generating function $M_X(t)$ can be expanded as a power series in $t$ around $t=0$. The coefficient of $\frac{t^r}{r!}$ in this expansion is the $r^{th}$ raw moment $\mu_r'$.
        $M_X(t) = E(e^{tX}) = E \left( \sum_{r=0}^{\infty} \frac{(tX)^r}{r!} \right) = \sum_{r=0}^{\infty} \frac{t^r}{r!} E(X^r) = \sum_{r=0}^{\infty} \frac{\mu_r'}{r!} t^r = \mu_0' + \mu_1' t + \frac{\mu_2'}{2!} t^2 + \frac{\mu_3'}{3!} t^3 + ...$
        By expanding $M_X(t)$ in a power series and comparing the coefficients of $t^r/r!$, we can identify $\mu_r'$.

* **From C4185**
* **The measure of skewness $\beta_1$ is related to the central moments as :**
    * $\beta_1 = \frac{\mu_3^2}{\mu_2^3} = \frac{(E[(X-\mu)^3])^2}{(E[(X-\mu)^2])^3} = (\text{Skewness})^2$.  Another common measure of skewness is $\gamma_1 = \sqrt{\beta_1} = \frac{\mu_3}{\sigma^3} = \frac{E[(X-\mu)^3]}{[V(X)]^{3/2}}$.

* **The curve is said to be leptokurtic if:**
    * A curve is leptokurtic if it is more peaked than a normal distribution and has heavier tails. In terms of kurtosis, it means the coefficient of kurtosis $\beta_2 > 3$ (or excess kurtosis $\gamma_2 = \beta_2 - 3 > 0$).

* **Name the coefficient of $\frac{(it)^r}{r!}$ in the expansion of characteristic function.**
    * The coefficient of $\frac{(it)^r}{r!}$ in the expansion of the characteristic function $\phi_X(t) = E(e^{itX})$ is the $r^{th}$ raw moment $\mu_r' = E(X^r)$.
    * $\phi_X(t) = E(e^{itX}) = E \left( \sum_{r=0}^{\infty} \frac{(itX)^r}{r!} \right) = \sum_{r=0}^{\infty} \frac{(it)^r}{r!} E(X^r) = \sum_{r=0}^{\infty} \frac{\mu_r'}{r!} (it)^r = \mu_0' + \mu_1' (it) + \frac{\mu_2'}{2!} (it)^2 + \frac{\mu_3'}{3!} (it)^3 + ...$

* **What are the properties of moment generating function ?**
    * 1. **Uniqueness:** If two random variables have the same MGF, they have the same distribution (under certain conditions of existence).
    * 2. **Linearity:** $M_{aX+b}(t) = e^{bt} M_X(at)$, where $a$ and $b$ are constants.
    * 3. **Moments:** The $r^{th}$ derivative of $M_X(t)$ at $t=0$ gives the $r^{th}$ raw moment $\mu_r'$.
    * 4. **Sum of independent random variables:** If $X_1, X_2, ..., X_n$ are independent random variables and $Y = \sum_{i=1}^n X_i$, then $M_Y(t) = \prod_{i=1}^n M_{X_i}(t)$.
    * 5. **Continuity Theorem:** If a sequence of MGFs $\{M_{X_n}(t)\}$ converges pointwise to a function $M(t)$ in a neighborhood of $t=0$, and $M(t)$ is the MGF of some random variable $X$, then the sequence of distributions of $X_n$ converges to the distribution of $X$.
    * 6. **Existence:** MGF may not exist for all distributions (e.g., Cauchy distribution). It exists in a neighborhood of $t=0$ if all moments exist and satisfy certain conditions.

 * **Find the m.g.f. of the random variables whose moments are (i) $\mu_r' = (r+1)!2^r$ and (ii) $\mu_r = r!$.**
    * **(i) $\mu_r' = (r+1)!2^r$:**
        $M_X(t) = \sum_{r=0}^{\infty} \frac{\mu_r'}{r!} t^r = \sum_{r=0}^{\infty} \frac{(r+1)!2^r}{r!} t^r = \sum_{r=0}^{\infty} (r+1) (2t)^r$.
        Consider the geometric series sum $\frac{1}{1-x} = \sum_{r=0}^{\infty} x^r$ for $|x|<1$. Differentiating w.r.t. $x$, $\frac{1}{(1-x)^2} = \sum_{r=1}^{\infty} r x^{r-1} = \sum_{r=0}^{\infty} (r+1) x^r$.
        So, $M_X(t) = \sum_{r=0}^{\infty} (r+1) (2t)^r = \frac{1}{(1-2t)^2}$ for $|2t| < 1 \implies |t| < 1/2$.
        Thus, $M_X(t) = (1-2t)^{-2}$ for $|t| < 1/2$.  This is the MGF of a Gamma distribution or Negative Binomial distribution.

    * **(ii) $\mu_r = r!$.** Central moments are given. We need raw moments.
        We know $\mu_1 = 0$ (first central moment). So $\mu = E(X)$.
        $\mu_2 = V(X) = 2! = 2$. $\mu_3 = 3! = 6$, $\mu_4 = 4! = 24$, ...
        We need to find raw moments $\mu_r'$. We know $\mu_1 = \mu_1' - \mu = 0 \implies \mu_1' = \mu$.
        $\mu_2 = \mu_2' - (\mu_1')^2 = \mu_2' - \mu^2 = 2 \implies \mu_2' = 2 + \mu^2$.
        $\mu_3 = \mu_3' - 3\mu \mu_2' + 2\mu^3 = 6 \implies \mu_3' = 6 + 3\mu \mu_2' - 2\mu^3 = 6 + 3\mu(2+\mu^2) - 2\mu^3 = 6 + 6\mu + 3\mu^3 - 2\mu^3 = 6 + 6\mu + \mu^3$.
        And so on... It's getting complicated to find a general form for $\mu_r'$ in terms of $\mu = \mu_1'$.
        Let's consider a simpler case.  If $\mu_r = r!$ for *all* central moments including $r=1, 0$.  But $\mu_1 = 0$ always, and $\mu_0 = 1$ always. So $\mu_1 = 1! = 1 \neq 0$ and $\mu_0 = 0! = 1$.  So, it should be for $r \ge 2$.  Assume $\mu_r = r!$ for $r \ge 2$. And assume $\mu_1 = 0, \mu_0 = 1$.
        If we consider standard normal distribution, moments are $\mu_{2k} = \frac{(2k)!}{2^k k!}$ and $\mu_{2k+1} = 0$. This is not $r!$.
        Consider exponential distribution, raw moments $\mu_r' = \Gamma(r+1)/\lambda^r = r!/\lambda^r$.  If $\lambda = 1$, $\mu_r' = r!$.  But these are raw moments, not central moments.

        Let's assume the question meant raw moments $\mu_r' = r!$. Then $M_X(t) = \sum_{r=0}^{\infty} \frac{\mu_r'}{r!} t^r = \sum_{r=0}^{\infty} \frac{r!}{r!} t^r = \sum_{r=0}^{\infty} t^r = \frac{1}{1-t}$ for $|t| < 1$.  This is the MGF of exponential distribution with parameter $\lambda=1$ (shifted). Or geometric distribution.

        **Let's assume question meant raw moments for (ii) are $\mu_r' = r!$. Then MGF is $M_X(t) = \frac{1}{1-t}$ for $|t|<1$.**

* **From C4184:**
* **The first and second moments of $X$ about 5 is 2 and 6, then $V(X)=$**
 * First moment about 5 is $E(X-5) = 2$. Second moment about 5 is $E((X-5)^2) = 6$.
 * $E(X-5) = E(X) - 5 = 2 \implies E(X) = 7$.
 * $V(X) = E((X-E(X))^2) = E((X-7)^2) = E(((X-5)-2)^2) = E((X-5)^2 - 4(X-5) + 4) = E((X-5)^2) - 4E(X-5) + 4$.
 * $V(X) = 6 - 4(2) + 4 = 6 - 8 + 4 = 2$.
 * So, $V(X) = 2$.

 * **Show that the 1st central moment about of a random variable $X$ is zero.**
    * The first central moment is $\mu_1 = E(X - E(X)) = E(X) - E(E(X))$.
    * Since $E(X)$ is a constant, $E(E(X)) = E(X)$.
    * Therefore, $\mu_1 = E(X) - E(X) = 0$.

    * **Define the coefficient of kurtosis based on moments.**
        * Coefficient of kurtosis, $\beta_2 = \frac{\mu_4}{\mu_2^2} = \frac{E[(X-\mu)^4]}{[E[(X-\mu)^2]]^2} = \frac{E[(X-\mu)^4]}{[V(X)]^2}$.
        * Excess kurtosis $\gamma_2 = \beta_2 - 3 = \frac{\mu_4}{\mu_2^2} - 3$.
        * Kurtosis measures the "peakedness" and tail heaviness of the distribution.  $\beta_2 = 3$ for normal distribution (mesokurtic). $\beta_2 > 3$ for leptokurtic (more peaked, heavier tails). $\beta_2 < 3$ for platykurtic (flatter peak, thinner tails).

**6. Moment Generating Function (MGF)**

* **From C 4401:**
 * **Obtain the m.g.f. of X following geometric distribution with parameter $p$.**
    * Geometric distribution p.m.f. $P(X=x) = (1-p)^{x-1} p = q^{x-1} p$, for $x = 1, 2, 3, ...$ where $q = 1-p$.
    * $M_X(t) = E(e^{tX}) = \sum_{x=1}^{\infty} e^{tx} P(X=x) = \sum_{x=1}^{\infty} e^{tx} q^{x-1} p = p \sum_{x=1}^{\infty} e^{tx} q^{x-1} = p e^t \sum_{x=1}^{\infty} (qe^t)^{x-1}$.
    * Let $y = x-1$, then sum is $\sum_{y=0}^{\infty} (qe^t)^y = \frac{1}{1 - qe^t}$ if $|qe^t| < 1$.
    * $M_X(t) = p e^t \frac{1}{1 - qe^t} = \frac{pe^t}{1 - (1-p)e^t}$ for $|(1-p)e^t| < 1 \implies e^t < \frac{1}{1-p} \implies t < -\log(1-p) = -\log(q)$.

 * **If $P(X=2) = P(X=3)$, where X follows Poisson distribution, find the m.g.f. of X.**
    * Poisson p.m.f. $P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!}$, for $x = 0, 1, 2, ...$.
    * Given $P(X=2) = P(X=3) \implies \frac{e^{-\lambda} \lambda^2}{2!} = \frac{e^{-\lambda} \lambda^3}{3!}$.
    * $\frac{\lambda^2}{2} = \frac{\lambda^3}{6} \implies 6\lambda^2 = 2\lambda^3 \implies 2\lambda^3 - 6\lambda^2 = 0 \implies 2\lambda^2(\lambda - 3) = 0$.
    * Since $\lambda > 0$ for Poisson, we have $\lambda = 3$.
    * MGF of Poisson distribution is $M_X(t) = e^{\lambda(e^t - 1)}$. With $\lambda = 3$, $M_X(t) = e^{3(e^t - 1)}$.

* **From C 4402:**
 * **Obtain the mean and the variance of a random variable X with m.g.f $M_X(t)=(1-t)^{-1}, t<1$**
    * $M_X(t) = (1-t)^{-1}$.
    * Mean $E(X) = \mu_1' = M_X'(0)$. $M_X'(t) = -1(1-t)^{-2}(-1) = (1-t)^{-2}$. $E(X) = M_X'(0) = (1-0)^{-2} = 1$.
    * $E(X^2) = \mu_2' = M_X''(0)$. $M_X''(t) = -2(1-t)^{-3}(-1) = 2(1-t)^{-3}$. $E(X^2) = M_X''(0) = 2(1-0)^{-3} = 2$.
    * Variance $V(X) = E(X^2) - [E(X)]^2 = 2 - (1)^2 = 2 - 1 = 1$.
    * Mean = 1, Variance = 1.  Note that $M_X(t) = (1-t)^{-1}$ is MGF of exponential distribution with $\lambda = 1$.

    * **Define characteristic function of a random variable and state its advantage over m.g.f.**
        * **Characteristic function:** For a random variable X, the characteristic function $\phi_X(t)$ is defined as $\phi_X(t) = E(e^{itX})$, where $i = \sqrt{-1}$ and $t \in \mathbb{R}$.

        * **Advantage over MGF:**
            1. **Existence:** Characteristic function always exists for any random variable, whereas MGF may not exist for all distributions (e.g., Cauchy distribution).  Because $|e^{itX}| = 1$, so $E(e^{itX})$ is always well-defined.
            2. **Uniqueness:** Similar to MGF, characteristic function uniquely determines the distribution. If two random variables have the same characteristic function, they have the same distribution.
            3. **Inversion Formula:** There is an inversion formula to recover the distribution function (or pdf/pmf in some cases) from the characteristic function.
            4. **Continuity Theorem:** Similar continuity theorem holds for characteristic functions, which is useful in limit theorems.
            5. **Works for all distributions:** Applicable to all types of distributions (discrete, continuous, mixed).

* **From C 4184:**
 * **For the bivariate distribution function $(X,Y), M_{X,Y}(t_1,t_2)=$__________.**
    * $M_{X,Y}(t_1,t_2) = E(e^{t_1X + t_2Y})$.  This is the joint moment generating function of bivariate random variables (X,Y).

* **Show that the characteristic function $\phi_x(t)/t=0$ is equal to $1$.**
    * Question likely meant $\lim_{t \to 0} \frac{\phi_X(t)}{t}$. But this limit is not always 1. It relates to the derivative.
    * Maybe question meant $\lim_{t \to 0} \frac{\phi_X(t) - 1}{t}$.
    * We know $\phi_X(t) = E(e^{itX}) = E(1 + itX + \frac{(itX)^2}{2!} + ... ) = 1 + itE(X) + \frac{(it)^2}{2!} E(X^2) + ...$.
    * $\phi_X(t) - 1 = itE(X) + \frac{(it)^2}{2!} E(X^2) + ...$.
    * $\frac{\phi_X(t) - 1}{t} = iE(X) + \frac{i^2 t}{2!} E(X^2) + ...$.
    * $\lim_{t \to 0} \frac{\phi_X(t) - 1}{t} = iE(X) = i \mu_1'$.
    * **If question meant $\lim_{t \to 0} \frac{\phi_X(t) - 1}{it}$, then $\lim_{t \to 0} \frac{\phi_X(t) - 1}{it} = E(X) = \mu_1'$.**
    * **If question was mistyped and meant to ask about $\lim_{t \to 0} \phi_X(t)$, then $\lim_{t \to 0} \phi_X(t) = \phi_X(0) = E(e^{i(0)X}) = E(e^0) = E(1) = 1$.**
    * **Assuming the question meant $\lim_{t \to 0} \phi_X(t) = 1$.**  Then $\lim_{t \to 0} \phi_X(t) = \lim_{t \to 0} E(e^{itX}) = E(\lim_{t \to 0} e^{itX}) = E(e^0) = E(1) = 1$. (Assuming we can interchange limit and expectation, which is valid under certain conditions).

**7. Variance and Covariance**

* **From C 4401:**
    * **For any random variable X, show that $V(X)$ is always non-negative.**
        * $V(X) = E[(X - E(X))^2]$. Let $Y = X - E(X)$. Then $V(X) = E(Y^2)$.
        * Since $(X - E(X))^2 = Y^2 \geq 0$ for all possible values of X (and hence Y), and expectation is a "weighted average", the expected value of a non-negative random variable must be non-negative.
        * Formally, for any random variable Z, if $Z \geq 0$ almost surely, then $E(Z) \geq 0$. Here $Z = (X - E(X))^2 \geq 0$. Thus, $V(X) = E[(X - E(X))^2] \geq 0$.

    * **For two independent random variables X and Y, show that $V(X - Y) = V(X) + V(Y)$.**
        * $V(X - Y) = E[( (X - Y) - E(X - Y) )^2] = E[( (X - Y) - (E(X) - E(Y)) )^2] = E[( (X - E(X)) - (Y - E(Y)) )^2]$.
        * Let $X' = X - E(X)$ and $Y' = Y - E(Y)$. Then $V(X - Y) = E[(X' - Y')^2] = E[(X')^2 - 2X'Y' + (Y')^2] = E[(X')^2] - 2E[X'Y'] + E[(Y')^2] = V(X) - 2E[X'Y'] + V(Y)$.
        * Since X and Y are independent, $X' = X - E(X)$ and $Y' = Y - E(Y)$ are also independent.  Therefore, $E[X'Y'] = E[X']E[Y'] = E[X - E(X)] E[Y - E(Y)] = (E(X) - E(X)) (E(Y) - E(Y)) = 0 \times 0 = 0$.
        * Thus, $V(X - Y) = V(X) - 2(0) + V(Y) = V(X) + V(Y)$.

* **From C 4402:**

   * **For two random variables X and Y, prove that (i) $V(X - Y) = V(X) + V(Y) - 2Cov(X, Y)$ ; (ii) $Cov(X - a, Y - b) = Cov(X, Y)$, where $a$ and $b$ are two constants.**
   * **(i) $V(X - Y) = V(X) + V(Y) - 2Cov(X, Y)$:**
        * $V(X - Y) = E[( (X - Y) - E(X - Y) )^2] = E[( (X - Y) - (E(X) - E(Y)) )^2] = E[( (X - E(X)) - (Y - E(Y)) )^2]$.
        * Let $X' = X - E(X)$ and $Y' = Y - E(Y)$. Then $V(X - Y) = E[(X' - Y')^2] = E[(X')^2 - 2X'Y' + (Y')^2] = E[(X')^2] - 2E[X'Y'] + E[(Y')^2]$.
        * We know $V(X) = E[(X - E(X))^2] = E[(X')^2]$ and $V(Y) = E[(Y - E(Y))^2] = E[(Y')^2]$.
        * And $Cov(X, Y) = E[(X - E(X))(Y - E(Y))] = E[X'Y']$.
        * Therefore, $V(X - Y) = V(X) - 2Cov(X, Y) + V(Y) = V(X) + V(Y) - 2Cov(X, Y)$.

   * **(ii) $Cov(X - a, Y - b) = Cov(X, Y)$, where $a$ and $b$ are two constants.**
        * $Cov(X - a, Y - b) = E[((X - a) - E(X - a)) ((Y - b) - E(Y - b))] = E[((X - a) - (E(X) - a)) ((Y - b) - (E(Y) - b))]$.
        * $= E[(X - a - E(X) + a) (Y - b - E(Y) + b)] = E[(X - E(X)) (Y - E(Y))] = Cov(X, Y)$.

   * **(a) Cauchy-Schwartz Inequality for two random variables X and Y.**
    * **Cauchy-Schwarz Inequality:** $[Cov(X, Y)]^2 \leq V(X) V(Y)$ or $|Cov(X, Y)| \leq \sqrt{V(X) V(Y)}$.
    * Equivalently, $[E(XY)]^2 \leq E(X^2) E(Y^2)$ if $E(X)=E(Y)=0$.
    * More generally, $[E(XY)]^2 \leq E(X^2) E(Y^2)$.

    * **(b) Using this inequality prove $-1 \leq r_{XY} \leq +1$, where $r_{XY}$ is the coefficient of correlation between X and Y.**
        * Correlation coefficient $r_{XY} = \frac{Cov(X, Y)}{\sqrt{V(X) V(Y)}}$.
        * From Cauchy-Schwarz Inequality, $[Cov(X, Y)]^2 \leq V(X) V(Y)$.
        * If $V(X)V(Y) > 0$, we can divide by $V(X)V(Y)$.
        * $\frac{[Cov(X, Y)]^2}{V(X) V(Y)} \leq 1 \implies \left( \frac{Cov(X, Y)}{\sqrt{V(X) V(Y)}} \right)^2 \leq 1 \implies (r_{XY})^2 \leq 1$.
        * Taking square root of both sides, $|r_{XY}| \leq \sqrt{1} = 1$.
        * This means $-1 \leq r_{XY} \leq 1$.

* **From C 4185:**
    * **If X and Y are three random variables, then $cov(X + Y, Z) = cov(X, Z) + cov(Y, Z)$.**
        * $Cov(X + Y, Z) = E[((X + Y) - E(X + Y)) (Z - E(Z))] = E[((X + Y) - (E(X) + E(Y))) (Z - E(Z))] = E[((X - E(X)) + (Y - E(Y))) (Z - E(Z))]$.
        * $= E[(X - E(X)) (Z - E(Z)) + (Y - E(Y)) (Z - E(Z))] = E[(X - E(X)) (Z - E(Z))] + E[(Y - E(Y)) (Z - E(Z))] = Cov(X, Z) + Cov(Y, Z)$.

  * **Define conditional variance.**
    * Conditional variance of X given Y=y, denoted by $V(X|Y=y)$ or $Var(X|Y=y)$, is the variance of the conditional distribution of X given Y=y.
    * $V(X|Y=y) = E[(X - E(X|Y=y))^2 | Y=y] = E[X^2 | Y=y] - [E(X|Y=y)]^2$.
    * Conditional variance of X given Y is a random variable $V(X|Y) = E[(X - E(X|Y))^2 | Y] = E[X^2 | Y] - [E(X|Y)]^2$.

    * **If X, Y and Z are three random variables, then $cov(X + Y, Z) = cov(X, Z) + cov(Y, Z)$.** (Already answered above).

* **From C4184:**
    * **For two random variables $X$ and $Y, V(\alpha X -bY)=$__________.**
        * $V(\alpha X - bY) = V(\alpha X + (-b)Y) = V(\alpha X) + V(-bY) + 2Cov(\alpha X, -bY) = \alpha^2 V(X) + (-b)^2 V(Y) + 2(\alpha)(-b)Cov(X, Y)$.
        * $V(\alpha X - bY) = \alpha^2 V(X) + b^2 V(Y) - 2\alpha b Cov(X, Y)$.
        * If X and Y are independent, $Cov(X, Y) = 0$, then $V(\alpha X - bY) = \alpha^2 V(X) + b^2 V(Y)$.

* **$Cov(\bar{X}+a,Y+b)=$__________.**
    *  Assuming $\bar{X}$ is a constant or should be $X$ and there's a typo. Let's consider $Cov(X+a, Y+b)$.
    * $Cov(X+a, Y+b) = Cov(X, Y)$. (As shown in 7. From C 4402 (ii)).

    * If $\bar{X}$ is sample mean, and if it's meant to be $Cov(\bar{X}+a, Y+b)$, then still $Cov(\bar{X}+a, Y+b) = Cov(\bar{X}, Y)$.

    * If question meant $Cov(X+a, Y+b) = Cov(X, Y)$.

**8. Binomial Distribution**

* **From C 4401:**
     * **Define a Bernoulli random variable.**
        * A Bernoulli random variable is a discrete random variable that represents the outcome of a single Bernoulli trial. It takes on two possible values: 1 (success) with probability $p$, and 0 (failure) with probability $1-p = q$, where $0 \leq p \leq 1$.
        * p.m.f. $P(X=x) = p^x (1-p)^{1-x}$ for $x \in \{0, 1\}$. Or $P(X=1) = p, P(X=0) = 1-p$.

    * **Identify the parameters of X following binomial distribution with mean 12 and variance 3.**
      * For Binomial distribution $B(n, p)$, mean $\mu = np$ and variance $\sigma^2 = npq = np(1-p)$.
      * Given mean $np = 12$ and variance $np(1-p) = 3$.
      * $\frac{np(1-p)}{np} = \frac{3}{12} = \frac{1}{4} \implies 1-p = \frac{1}{4} \implies p = 1 - \frac{1}{4} = \frac{3}{4}$.
      * $np = 12 \implies n \cdot \frac{3}{4} = 12 \implies n = 12 \times \frac{4}{3} = 16$.
      * Parameters are $n = 16$ and $p = \frac{3}{4}$.

      * **State and prove the additive property of binomial distribution.**
        * **Statement:** If $X_1 \sim B(n_1, p)$ and $X_2 \sim B(n_2, p)$ are two independent binomial random variables with the same probability of success $p$, then their sum $Y = X_1 + X_2$ also follows a binomial distribution with parameters $B(n_1 + n_2, p)$.
        * **Proof using MGF:**
            MGF of $X_1$ is $M_{X_1}(t) = (q + pe^t)^{n_1}$ and MGF of $X_2$ is $M_{X_2}(t) = (q + pe^t)^{n_2}$.
            Since $X_1$ and $X_2$ are independent, MGF of $Y = X_1 + X_2$ is $M_Y(t) = M_{X_1}(t) M_{X_2}(t) = (q + pe^t)^{n_1} (q + pe^t)^{n_2} = (q + pe^t)^{n_1 + n_2}$.
            This is the MGF of a binomial distribution with parameters $n = n_1 + n_2$ and $p$. Therefore, $Y = X_1 + X_2 \sim B(n_1 + n_2, p)$.

* **From 4185:**
 * **For a binomial distribution $P(x)={n \choose x}p^xq^{n-x}, x=0,1,2,...,n$, which of the following is incorrect:** (List of options needed to answer this. Assuming question is asking about properties).
 * **In binomial distribution, the variance $\sigma^2$ and mean $\mu$ are related by :**
    * Variance $\sigma^2 = npq = np(1-p) = \mu(1-p) = \mu - \mu p$. Since $0 < p \leq 1$, $1-p < 1$. Thus, $\sigma^2 = npq < np = \mu$.  Variance is always less than the mean in binomial distribution (unless $p=0$ or $p=1$, trivial cases).  Relation: $\sigma^2 = \mu(1-p)$.

 * **The range of the Bernoulli random variable is the set :**
    * $\{0, 1\}$.

 * **If $X \sim B(n, p)$, the distribution of $y = n - X$ is __________.**
    * $Y = n - X$ represents the number of failures in $n$ trials if X is number of successes.
    * $P(Y = y) = P(n - X = y) = P(X = n - y) = {n \choose n-y} p^{n-y} q^{n-(n-y)} = {n \choose y} p^{n-y} q^{y} = {n \choose y} q^y p^{n-y}$.
    * This is also a binomial distribution with $n$ trials, but probability of success is now $q = 1-p$. So, $Y \sim B(n, 1-p)$.

 * **What are the physical conditions for which binomial distribution is used ?**
    * 1. **Fixed number of trials (n):** The experiment consists of a fixed number of trials.
    * 2. **Independent trials:** Each trial is independent of the others.
    * 3. **Two outcomes:** Each trial has only two possible outcomes, success (S) and failure (F).
    * 4. **Constant probability of success (p):** The probability of success $p$ is the same for each trial.
    * 5. **Random variable X:** X is the number of successes in n trials.

* **From C 4184:**
 * **Expectation of a Bernoulli random variable with parameter $p$ is__________.**
    * For Bernoulli $X \sim Bernoulli(p)$, $P(X=1) = p, P(X=0) = 1-p$.
    * $E(X) = \sum x P(X=x) = 0 \cdot P(X=0) + 1 \cdot P(X=1) = 0 \cdot (1-p) + 1 \cdot p = p$.

 * **Find the values of the parameters of a binomial random variable with mean 4 and variance 3.**
    * Given mean $np = 4$ and variance $npq = 3$.
    * $\frac{npq}{np} = \frac{3}{4} \implies q = \frac{3}{4} \implies p = 1 - q = 1 - \frac{3}{4} = \frac{1}{4}$.
    * $np = 4 \implies n \cdot \frac{1}{4} = 4 \implies n = 16$.
    * Parameters are $n=16, p=1/4$.

 * **Obtain the mode of $X$ following binomial distribution with parameters $n$ and $p$.**
    * Mode is the value of x that maximizes $P(X=x) = {n \choose x} p^x q^{n-x}$.
    * Consider the ratio $\frac{P(X=x)}{P(X=x-1)} = \frac{{n \choose x} p^x q^{n-x}}{{n \choose x-1} p^{x-1} q^{n-(x-1)}} = \frac{n!}{x!(n-x)!} \frac{(x-1)!(n-x+1)!}{n!} \frac{p^x}{p^{x-1}} \frac{q^{n-x}}{q^{n-x+1}} = \frac{(n-x+1)}{x} \frac{p}{q} = \frac{(n-x+1)p}{xq}$.
    * $P(X=x) \geq P(X=x-1)$ if $\frac{P(X=x)}{P(X=x-1)} \geq 1 \implies \frac{(n-x+1)p}{xq} \geq 1 \implies (n-x+1)p \geq xq \implies np - xp + p \geq xq \implies np + p \geq xq + xp = x(p+q) = x$.
    * $x \leq np + p = (n+1)p$.
    * Mode is the largest integer less than or equal to $(n+1)p$.
    * If $(n+1)p$ is an integer, then both $(n+1)p$ and $(n+1)p - 1$ are modes. If $(n+1)p$ is not an integer, then mode is $\lfloor (n+1)p \rfloor$.
    * Mode = $\lfloor (n+1)p \rfloor$ or $\lfloor (n+1)p \rfloor$ and $\lceil (n+1)p \rceil - 1$ if $(n+1)p$ is an integer.

**9. Poisson Distribution**

* **From C 4401:**
 * **If the variance of X following Poisson distribution is 5, find $P(X = 5)$.**
   * For Poisson distribution, variance = mean = $\lambda$. So, $\lambda = 5$.
   * $P(X=5) = \frac{e^{-\lambda} \lambda^5}{5!} = \frac{e^{-5} 5^5}{5!} = \frac{e^{-5} \times 3125}{120} = \frac{3125}{120 e^5} = \frac{625}{24 e^5} \approx \frac{625}{24 \times 148.41} \approx 0.1755$.

   * **Define negative binomial distribution.**
    * Negative binomial distribution models the number of trials needed to get a fixed number of successes (say $r$) in a sequence of independent Bernoulli trials, where each trial has probability of success $p$.
    * Let $X$ be the number of trials needed to get $r$ successes. Then $X$ follows negative binomial distribution with parameters $r$ (number of successes) and $p$ (probability of success).
    * p.m.f. $P(X=x) = {x-1 \choose r-1} p^r (1-p)^{x-r} = {x-1 \choose r-1} p^r q^{x-r}$, for $x = r, r+1, r+2, ...$.

* **From C4185:**
    * **Name the discrete distribution having memoryless property.**
        * Geometric distribution is the discrete distribution with memoryless property.  For geometric distribution, $P(X > m+n | X > m) = P(X > n)$.
        * Exponential distribution is the continuous distribution with memoryless property.

*   **Show that in a Poisson distribution with unit mean, mean deviation about mean is $\frac{2}{e}$ times the standard deviation.**
  * Poisson with unit mean, $\lambda = 1$. $P(X=x) = \frac{e^{-1} 1^x}{x!} = \frac{e^{-1}}{x!}$, for $x = 0, 1, 2, ...$.
  * Mean $\mu = \lambda = 1$. Standard deviation $\sigma = \sqrt{V(X)} = \sqrt{\lambda} = \sqrt{1} = 1$.
  * Mean deviation about mean = $E(|X - \mu|) = E(|X - 1|) = \sum_{x=0}^{\infty} |x - 1| P(X=x) = \sum_{x=0}^{\infty} |x - 1| \frac{e^{-1}}{x!} = e^{-1} \sum_{x=0}^{\infty} |x - 1| \frac{1}{x!}$.
  * Split sum at $x=1$. $\sum_{x=0}^{\infty} |x - 1| \frac{1}{x!} = |0-1| \frac{1}{0!} + |1-1| \frac{1}{1!} + \sum_{x=2}^{\infty} |x - 1| \frac{1}{x!} = 1 \cdot \frac{1}{1} + 0 \cdot \frac{1}{1} + \sum_{x=2}^{\infty} (x - 1) \frac{1}{x!} = 1 + \sum_{x=2}^{\infty} (\frac{x}{x!} - \frac{1}{x!}) = 1 + \sum_{x=2}^{\infty} (\frac{1}{(x-1)!} - \frac{1}{x!})$.
  * $\sum_{x=2}^{\infty} (\frac{1}{(x-1)!} - \frac{1}{x!}) = (\frac{1}{1!} - \frac{1}{2!}) + (\frac{1}{2!} - \frac{1}{3!}) + (\frac{1}{3!} - \frac{1}{4!}) + ... = \frac{1}{1!} = 1$ (Telescoping sum).
  * So, $\sum_{x=0}^{\infty} |x - 1| \frac{1}{x!} = 1 + 1 = 2$.
  * Mean deviation about mean = $e^{-1} \times 2 = \frac{2}{e}$.
  * Standard deviation = 1.
  * $\frac{\text{Mean deviation about mean}}{\text{Standard deviation}} = \frac{2/e}{1} = \frac{2}{e}$.  Thus, mean deviation about mean is $\frac{2}{e}$ times the standard deviation.

  * **Derive Poisson distribution as a limiting case of binomial distribution.**
    * Consider Binomial $B(n, p)$ with parameters $n$ and $p$. Let $n \to \infty$ and $p \to 0$ such that $np = \lambda$ (constant). Then Binomial approaches Poisson with parameter $\lambda$.
    * $P(X=x) = {n \choose x} p^x (1-p)^{n-x} = \frac{n!}{x!(n-x)!} p^x (1-p)^{n-x} = \frac{n(n-1)...(n-x+1)}{x!} p^x (1-p)^{n-x}$.
    * $= \frac{n(n-1)...(n-x+1)}{n^x} \frac{(np)^x}{x!} (1-p)^{n-x} = \frac{n}{n} \frac{n-1}{n} ... \frac{n-x+1}{n} \frac{\lambda^x}{x!} (1-p)^{n-x}$.
    * As $n \to \infty$, $\frac{n-k}{n} = 1 - \frac{k}{n} \to 1$ for fixed $k$. So, $\frac{n(n-1)...(n-x+1)}{n^x} \to 1$.
    * $(1-p)^{n-x} = (1-p)^n (1-p)^{-x}$. As $p \to 0$, $(1-p)^{-x} \to 1$.
    * $(1-p)^n = (1 - \frac{\lambda}{n})^n \to e^{-\lambda}$ as $n \to \infty$ (using limit $(1 + \frac{a}{n})^n \to e^a$).
    * Thus, $P(X=x) \to 1 \cdot \frac{\lambda^x}{x!} \cdot e^{-\lambda} \cdot 1 = \frac{e^{-\lambda} \lambda^x}{x!}$.
    * So, as $n \to \infty, p \to 0, np \to \lambda$, Binomial $B(n, p)$ approaches Poisson $P(\lambda)$.

    *  **A car hire firm has two cars which it hires out day by day. The number of demands for a car on each day is distributed as Poisson variate with mean 1.5. Calculate the proportion of days on which (i) neither car is used and (ii) some demand is refused**
        * Let X be the number of demands for a car on a day. $X \sim Poisson(\lambda = 1.5)$.
        * Number of cars = 2.
        * (i) Neither car is used means no demand, i.e., $X = 0$. $P(X=0) = \frac{e^{-1.5} (1.5)^0}{0!} = e^{-1.5} \approx 0.2231$. Proportion of days is approximately 0.2231.
        * (ii) Some demand is refused means demand is more than available cars, i.e., demand is greater than 2, $X > 2$.
        * $P(X > 2) = 1 - P(X \leq 2) = 1 - [P(X=0) + P(X=1) + P(X=2)]$.
        * $P(X=1) = \frac{e^{-1.5} (1.5)^1}{1!} = 1.5 e^{-1.5} \approx 1.5 \times 0.2231 = 0.33465$.
        * $P(X=2) = \frac{e^{-1.5} (1.5)^2}{2!} = \frac{2.25}{2} e^{-1.5} = 1.125 e^{-1.5} \approx 1.125 \times 0.2231 = 0.2510$.
        * $P(X \leq 2) = P(X=0) + P(X=1) + P(X=2) \approx 0.2231 + 0.33465 + 0.2510 = 0.80875$.
        * $P(X > 2) = 1 - P(X \leq 2) \approx 1 - 0.80875 = 0.19125$. Proportion of days with refused demand is approximately 0.19125.

* **From C4184**
  * **Find $P(X=0)$ for a Poisson random variable with mean 5.**
    * $X \sim Poisson(\lambda = 5)$. $P(X=0) = \frac{e^{-5} 5^0}{0!} = e^{-5} \approx 0.006738$.

* **If $X \sim P(\lambda)$; prove that $\mu_{r+1}=r\lambda\mu_{r-1}+\lambda\frac{d}{d\lambda}\mu_r$, where $\mu_{r-1}, \mu_r, \mu_{r+1}$ respectively be the $(r-1)^{th}, r^{th}$ and $(r+1)^{th}$ central moments of $X$.**
    *  For Poisson, mean = variance = $\lambda$.  Central moments are $\mu_r = E[(X-\lambda)^r]$.
    *  Generating function of central moments (factorial moment generating function) is $G(s) = E(e^{s(X-\lambda)}) = e^{-s\lambda} M_X(s) = e^{-s\lambda} e^{\lambda(e^s - 1)} = e^{\lambda(e^s - s - 1)}$.
    *  $\mu_r = \left. \frac{d^r}{ds^r} G(s) \right|_{s=0}$.
    *  Let's use recursion relation for moments.  Consider $E[X(X-\lambda)^r] = E[( (X-\lambda) + \lambda ) (X-\lambda)^r] = E[(X-\lambda)^{r+1} + \lambda (X-\lambda)^r] = \mu_{r+1} + \lambda \mu_r$.
    *  Also, $E[X(X-\lambda)^r] = \sum_{x=0}^{\infty} x (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!} = \sum_{x=1}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{(x-1)!} = \lambda \sum_{x=1}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x-1}}{(x-1)!}$.
    *  Let $y = x-1$, $x = y+1$. $\sum_{y=0}^{\infty} (y+1-\lambda)^r \frac{e^{-\lambda} \lambda^{y}}{y!} = \lambda \sum_{y=0}^{\infty} (y+1-\lambda)^r \frac{e^{-\lambda} \lambda^{y}}{y!}$.
    *  This approach is complicated. Let's use probability generating function $P(z) = E(z^X) = e^{\lambda(z-1)}$.
    *  Let's try to differentiate $\mu_r = E[(X-\lambda)^r]$ with respect to $\lambda$.
    *  $\frac{d}{d\lambda} \mu_r = \frac{d}{d\lambda} E[(X-\lambda)^r] = \frac{d}{d\lambda} \sum_{x=0}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!} = \sum_{x=0}^{\infty} \frac{\partial}{\partial \lambda} [(x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!}]$.
    *  $\frac{\partial}{\partial \lambda} [(x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!}] = [-r(x-\lambda)^{r-1} \frac{e^{-\lambda} \lambda^x}{x!} + (x-\lambda)^r (-\frac{e^{-\lambda} \lambda^x}{x!} + \frac{e^{-\lambda} x \lambda^{x-1}}{x!}) ]$.
    *  $= -r(x-\lambda)^{r-1} \frac{e^{-\lambda} \lambda^x}{x!} - (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!} + (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x-1}}{(x-1)!}$.
    *  $\frac{d}{d\lambda} \mu_r = \sum_{x=0}^{\infty} [-r(x-\lambda)^{r-1} \frac{e^{-\lambda} \lambda^x}{x!} - (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!} + (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x-1}}{(x-1)!}]$.
    *  $= -r \sum_{x=0}^{\infty} (x-\lambda)^{r-1} \frac{e^{-\lambda} \lambda^x}{x!} - \sum_{x=0}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!} + \sum_{x=0}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x-1}}{(x-1)!}$.
    *  $= -r E[(X-\lambda)^{r-1}] - E[(X-\lambda)^r] + \sum_{x=1}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x-1}}{(x-1)!}$. (Term at $x=0$ is $(0-\lambda)^r \frac{e^{-\lambda} \lambda^{-1}}{(-1)!} = 0$ if $r \ge 0$).  $\sum_{x=1}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x-1}}{(x-1)!} = \frac{1}{\lambda} \sum_{x=1}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x}}{ (x-1)!} = \frac{1}{\lambda} \sum_{x=0}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x}}{ (x-1)!}$.
    *  $\mu_{r+1} = E[(X-\lambda)^{r+1}] = E[(X-\lambda)(X-\lambda)^r] = E[X(X-\lambda)^r - \lambda(X-\lambda)^r] = E[X(X-\lambda)^r] - \lambda E[(X-\lambda)^r] = E[X(X-\lambda)^r] - \lambda \mu_r$.
    *  $E[X(X-\lambda)^r] = \sum_{x=0}^{\infty} x (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{x!} = \sum_{x=1}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^x}{(x-1)!} = \lambda \sum_{x=1}^{\infty} (x-\lambda)^r \frac{e^{-\lambda} \lambda^{x-1}}{(x-1)!}$.
    *  Let $y = x-1$, $x = y+1$. $\lambda \sum_{y=0}^{\infty} (y+1-\lambda)^r \frac{e^{-\lambda} \lambda^{y}}{y!} = \lambda E[(Y+1-\lambda)^r] = \lambda E[( (Y-\lambda) + 1)^r ] = \lambda E[ \sum_{j=0}^r {r \choose j} (Y-\lambda)^j 1^{r-j} ] = \lambda \sum_{j=0}^r {r \choose j} E[(Y-\lambda)^j] = \lambda \sum_{j=0}^r {r \choose j} \mu_j$.  Here Y has same distribution as X, so $\mu_j$ are same central moments.
    *  $E[X(X-\lambda)^r] = \lambda \sum_{j=0}^r {r \choose j} \mu_j = \lambda [\mu_r + r \mu_{r-1} + ... + \mu_0]$.
    *  $\mu_{r+1} = E[X(X-\lambda)^r] - \lambda \mu_r = \lambda [\sum_{j=0}^r {r \choose j} \mu_j] - \lambda \mu_r = \lambda [ \mu_r + r \mu_{r-1} + ... + \mu_0 ] - \lambda \mu_r = \lambda r \mu_{r-1} + \lambda [\mu_{r-2} {r \choose 2} + ... + \mu_0]$.
    *  This does not directly give the form.

    * Let's try differentiating MGF w.r.t. $\lambda$. $M_X(t) = e^{\lambda(e^t - 1)}$. $\frac{\partial}{\partial \lambda} M_X(t) = (e^t - 1) e^{\lambda(e^t - 1)} = (e^t - 1) M_X(t)$.
    * $M_X(t) = \sum_{r=0}^{\infty} \frac{\mu_r'}{r!} t^r$. $\frac{\partial}{\partial \lambda} M_X(t) = \sum_{r=0}^{\infty} \frac{\partial}{\partial \lambda} (\frac{\mu_r'}{r!}) t^r = \sum_{r=0}^{\infty} \frac{(\mu_r')'}{r!} t^r$.
    * $(e^t - 1) M_X(t) = (t + \frac{t^2}{2!} + \frac{t^3}{3!} + ...) (\mu_0' + \mu_1' t + \frac{\mu_2'}{2!} t^2 + ... ) = (\mu_0' t + (\mu_1' + \mu_0'/2!) t^2 + (\frac{\mu_2'}{2!} + \frac{\mu_1'}{2!} + \frac{\mu_0'}{3!}) t^3 + ... )$.
    * Comparing coefficient of $t^{r+1}$: $\frac{(\mu_{r+1}')'}{(r+1)!} = \frac{\mu_r'}{r!} + \frac{\mu_{r-1}'}{2!(r-1)!} + ... + \frac{\mu_0'}{(r+1)!}$.
    *  $(\mu_{r+1}')' = (r+1) \mu_r' + \frac{(r+1)r}{2!} \mu_{r-1}' + ... + \mu_0'$.

    *  Consider $\mu_{r+1} = E[(X-\lambda)^{r+1}]$ and $\mu_{r-1} = E[(X-\lambda)^{r-1}]$.
    *  $\mu_{r+1} = r\lambda\mu_{r-1}+\lambda\frac{d}{d\lambda}\mu_r$.  This is given recursion.

*  **$X$ and $Y$ are independent random variables following Poisson distribution with parameters $\lambda$ and $\mu$ respectively, where $V(X)=2$ and $V(Y)=3$. Find $P(X+Y>0)$.**
    * $X \sim Poisson(\lambda), Y \sim Poisson(\mu)$. $V(X) = \lambda = 2, V(Y) = \mu = 3$. So, $X \sim Poisson(2), Y \sim Poisson(3)$.
    * $X$ and $Y$ are independent. Sum of independent Poissons is Poisson. $Z = X+Y \sim Poisson(\lambda + \mu) = Poisson(2+3) = Poisson(5)$.
    * $P(X+Y > 0) = P(Z > 0) = 1 - P(Z = 0) = 1 - \frac{e^{-5} 5^0}{0!} = 1 - e^{-5} \approx 1 - 0.006738 = 0.993262$.

*   **If X and Y independent random variables such that $P(X=r)=P(Y=r)=q^rp, r=0,1,2,...$
where, $p$ and $q$ are positive numbers such that $p+q=1$. Find (i) the distribution of $X+Y$; (ii) The conditionai distribution of $X$ given $X+Y$.**
    * $P(X=r) = q^r p, r=0, 1, 2, ...$. This is Geometric distribution starting from 0 (shifted geometric or discrete exponential), with success probability $p$.  Same for Y.  $X \sim Geometric(p)$ (starting at 0), $Y \sim Geometric(p)$ (starting at 0), independent.
    * (i) Distribution of $X+Y$. Let $Z = X+Y$. We want to find $P(Z = k)$ for $k = 0, 1, 2, ...$.
    * $P(Z = k) = P(X+Y = k) = \sum_{i=0}^{k} P(X=i, Y=k-i)$. Since X and Y are independent, $P(X=i, Y=k-i) = P(X=i) P(Y=k-i) = (q^i p) (q^{k-i} p) = p^2 q^k$.
    * $P(Z = k) = \sum_{i=0}^{k} p^2 q^k = (k+1) p^2 q^k$, for $k = 0, 1, 2, ...$.
    * This is Negative Binomial distribution.  Number of trials until 2 successes?  No.  This is related to Negative Binomial, but not exactly.
    * Check if it sums to 1: $\sum_{k=0}^{\infty} (k+1) p^2 q^k = p^2 \sum_{k=0}^{\infty} (k+1) q^k = p^2 \frac{1}{(1-q)^2} = p^2 \frac{1}{p^2} = 1$. (Using $\sum_{k=0}^{\infty} (k+1) x^k = \frac{1}{(1-x)^2}$ for $|x| < 1$).
    * So, $Z = X+Y$ has p.m.f. $P(Z=k) = (k+1) p^2 q^k, k = 0, 1, 2, ...$.  This is Negative Binomial distribution with parameters $r=2$ (number of successes) and $p$ (probability of success).

    * (ii) Conditional distribution of $X$ given $X+Y=n$.  $P(X=x | X+Y=n) = \frac{P(X=x, X+Y=n)}{P(X+Y=n)} = \frac{P(X=x, Y=n-x)}{P(X+Y=n)}$.
    * Since X, Y are independent, $P(X=x, Y=n-x) = P(X=x) P(Y=n-x) = (q^x p) (q^{n-x} p) = p^2 q^n$.
    * $P(X+Y=n) = (n+1) p^2 q^n$.
    * $P(X=x | X+Y=n) = \frac{p^2 q^n}{(n+1) p^2 q^n} = \frac{1}{n+1}$, for $x = 0, 1, 2, ..., n$.
    * Conditional distribution of X given $X+Y=n$ is Discrete Uniform distribution on $\{0, 1, 2, ..., n\}$.

This completes the solutions to all the provided questions.