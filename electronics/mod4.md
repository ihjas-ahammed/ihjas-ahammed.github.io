# Digital Electronics

## Analog vs. Binary Signals & Circuits

### Analog Signal
*   Continuously varying
*   Example: Alternating voltage varying sinusoidally.  (A sine wave is drawn.)
*   If a transistor receives this as input, the output also varies sinusoidally.
*   Due to these infinitely-valued outputs, analog operation is less reliable.

### Binary Signal
*   It can only have two discrete values.
*   Example: A square wave (a diagram of a square wave is present)

With proper digital signals given to a transistor, it can be driven between cut-off and saturation. So the transistor will have two-state operation (output is either low or high).

### Digital Circuit
* Electronic circuits that can only handle digital signals.

## Binary System: Counting & Place Value

*   A binary number system uses only two digits for counting (either 0 or 1).

*Counting table*
| Decimal | Binary |
| ----- | ------- |
| 0    | 0       |
| 1     | 1       |
| 2     | 10     |
| 3     | 11     |
| 4    | 100     |

### Notes

*   Each binary digit is referred to as a "bit."
*   A string of four bits is a "nibble."
*   Eight bits make a "byte."

### Place Value

*Example:*
232 = (2 x 10^2) + (3 x 10^1) + (2 x 10^0)

*Where:*
10 is the base or radix.
2 is LSD (Least Significant Digit) and 2 is MSD (Most Significant Digit).

*Similar in Binary:*

1001 = (1 x 2^3) + (0 x 2^2) + (0 x 2^1) + (1 x 2^0) = 9

*Where:*

2 is radix, 1 is MSB (bit) and 1 is LSB

## Binary to Decimal Conversion

*Example:*

110011

1.  Place it in positions; plot powers (place values) of 2.

1   1    0    0   1   1

2^5 2^4  2^3  2^2 2^1 2^0

= (2^5 x 1) + (2^4 x 1) + (2^3 x 0) + (2^2 x 0) + (2^1 x 1) + (2^0 x 1)

= 32 + 16 + 0 + 0 + 2 + 1 = 51

## Decimal to Binary

### Double-Dabble Method
*   Divide the number progressively by 2 and write down the remainder.
*   Continue till you get a quotient zero and a remainder.
*   The binary number is the remainder in reverse order.

*Example*: (37)₁₀ = (100101)₂
Calculations are present for doing this conversion.

## Octal System & Conversions

*   The octal number system has a radix of eight.

*   It is used more frequently in digital circuits for us because it's conversion to binary is very easy.
*   8⁰ = 1
*   8¹ = 8
*   8² = 64
*   8³ = 512
*   8⁴ = 4096
*   8⁵ = 32768

### Decimal to Octal
(91)₁₀ = (133)₈
Calculations are present for doing this conversion.

### Octal to Decimal
(133)₈ = (1 x 8²) + (3 x 8¹) + (3 x 8⁰) = 64 + 24 + 3 = (91)₁₀

### Octal to Binary & Vice-Versa
(472)₈ = (100 111 010)₂
(76)₁₀ = (114)₈
(255)₁₀ = (377)₈
(372)₁₀ = (564)₈
(20.6)₈ = (16 + 0 + 0.75) = 20.75

(177)₁₀ = (261)₈ = (011 110 001)₂

## Hexadecimal System & Conversions

*   Radix of 16

*Hex conversion table*
| Dec | Hex | Bin  |
| -------- | --------- | -------- |
| 0 | 0 | 0000 |
| 1 | 1 | 0001 |
| 2 | 2 | 0010 |
| 3 | 3 | 0011 |
| 4 | 4 | 0100 |
| 5 | 5 | 0101 |
| 6 | 6 | 0110 |
| 7 | 7 | 0111 |
| 8 | 8 | 1000 |
| 9 | 9 | 1001 |
| 10 | A | 1010 |
| 11 | B | 1011 |
| 12 | C | 1100 |
| 13 | D | 1101 |
| 14 | E | 1110 |
| 15 | F | 1111 |

*Example*:

(423)₁₀ = (1A7)₁₆

*Hex to Dec Example*:

(336)₁₆ = (3 * 256) + (3 * 16) + (6 * 1) = 768 + 48 + 6 = (854)₁₀

*Hex to Bin Example*:

(AC2)₁₆ = (1001 111 0010)₂

## Binary to Hex Conversion
(1111 1010 0110)₂ = (FAA)₁₆

#### More Examples
*   (341)₁₀ = (155)₁₆
*   (378)₁₀ = (17A)₁₆ = (000101111010)₂
*   (82F)₁₆ = (100000101111)₂ = (1000 0010 1111)₂ = (4157)₈

## Binary Coded Decimal Code (BCD)
*   4-bit representation of a decimal number is used in BCD.
*   BCD is an interface between binary and decimal.

Here Interconversion is done by reversing, not using the double-dabble method.

*Example:*

*   (289)₁₀ = (0010 1000 1001) BCD
*   (402)BCD = (0100 0000 0010) BCD = (402)₁₀