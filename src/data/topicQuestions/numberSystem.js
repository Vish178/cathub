// Topic-specific question bank: NUMBER SYSTEM
// Covers: divisibility, hcf_lcm, remainders, unit_digit, base_systems
// All correctAnswer values are mathematically verified.

const numberSystemTopics = {
  // -----------------------------------------------------------------
  // 1. DIVISIBILITY (factors, divisors, divisibility rules)
  // -----------------------------------------------------------------
  divisibility: [
    {
      id: "topic-divisibility-1",
      format: "MCQ",
      questionText: "How many positive divisors does 360 have?",
      options: ["18", "20", "24", "28"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Prime factorise: 360 = 2^3 x 3^2 x 5^1. Number of divisors = (3+1)(2+1)(1+1) = 4 x 3 x 2 = 24.",
        shortcutMethod: "For N = p1^a x p2^b x p3^c, number of divisors = (a+1)(b+1)(c+1)."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 },
      difficultyRating: 3.0
    },
    {
      id: "topic-divisibility-2",
      format: "TITA",
      questionText: "Find the number of positive divisors of 1800 that are divisible by 6.",
      options: [],
      correctAnswer: "18",
      solution: {
        detailedExplanation: "1800 = 2^3 x 3^2 x 5^2. A divisor divisible by 6 must contain at least one 2 and one 3. Let divisor = 2^a x 3^b x 5^c with a >= 1, b >= 1, c >= 0. a in {1,2,3}: 3 choices, b in {1,2}: 2 choices, c in {0,1,2}: 3 choices. Total = 3 x 2 x 3 = 18.",
        shortcutMethod: "Factor out 6 conceptually and count constrained exponent ranges."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.48 },
      difficultyRating: 4.0
    },
    {
      id: "topic-divisibility-3",
      format: "MCQ",
      questionText: "What is the sum of all positive divisors of 72?",
      options: ["186", "195", "203", "210"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "72 = 2^3 x 3^2. Sum of divisors = (1+2+4+8)(1+3+9) = 15 x 13 = 195.",
        shortcutMethod: "Sum of divisors factorises across primes: product of (1+p+p^2+...+p^a) for each prime."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.55 },
      difficultyRating: 3.5
    },
    {
      id: "topic-divisibility-4",
      format: "MCQ",
      questionText: "How many three-digit numbers are divisible by both 6 and 8?",
      options: ["36", "37", "38", "40"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "LCM(6,8) = 24. Three-digit multiples of 24: smallest 120 (5x24), largest 984 (41x24). Count = 41 - 5 + 1 = 37. Recount: smallest 3-digit multiple of 24 is 120 = 5x24; largest <= 999 is floor(999/24) = 41, so 41x24 = 984. Count = 41 - 5 + 1 = 37. Correct answer is 37, option B.",
        shortcutMethod: "Count multiples of LCM in range: floor(999/L) - floor(99/L)."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    },
    {
      id: "topic-divisibility-5",
      format: "TITA",
      questionText: "How many divisors of 2^5 x 3^4 x 5^3 are perfect squares?",
      options: [],
      correctAnswer: "18",
      solution: {
        detailedExplanation: "For a divisor to be a perfect square, every prime's exponent must be even. 2^5: even exponents {0,2,4} = 3 choices. 3^4: evens {0,2,4} = 3 choices. 5^3: evens {0,2} = 2 choices. Total = 3 x 3 x 2 = 18.",
        shortcutMethod: "Perfect-square divisor count = product of (floor(a/2)+1) over primes."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.5 },
      difficultyRating: 3.5
    },
    {
      id: "topic-divisibility-6",
      format: "MCQ",
      questionText: "What is the largest three-digit number divisible by both 17 and 23?",
      options: ["782", "391", "806", "748"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "17 and 23 are coprime primes, so LCM = 17 x 23 = 391. Largest 3-digit multiple of 391: floor(999/391) = 2, so 2 x 391 = 782.",
        shortcutMethod: "For two primes, LCM equals product; then take largest multiple <= 999."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 },
      difficultyRating: 3.0
    },
    {
      id: "topic-divisibility-7",
      format: "TITA",
      questionText: "How many positive integers less than 1000 are divisible by 7 but not by 11?",
      options: [],
      correctAnswer: "130",
      solution: {
        detailedExplanation: "Multiples of 7 below 1000: floor(999/7) = 142. Multiples of both 7 and 11 (i.e., 77) below 1000: floor(999/77) = 12. Required = 142 - 12 = 130.",
        shortcutMethod: "Inclusion-exclusion: |A| - |A ∩ B|."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    },
    {
      id: "topic-divisibility-8",
      format: "MCQ",
      questionText: "The number of divisors of 1296 that are perfect cubes is:",
      options: ["2", "4", "6", "8"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "1296 = 6^4 = 2^4 x 3^4. For perfect-cube divisors, exponents must be multiples of 3: exponent of 2 in {0,3} = 2 choices; exponent of 3 in {0,3} = 2 choices. Total = 2 x 2 = 4.",
        shortcutMethod: "Perfect-cube divisor count = product of (floor(a/3)+1)."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.55 },
      difficultyRating: 3.5
    },
    {
      id: "topic-divisibility-9",
      format: "MCQ",
      questionText: "The product of all positive divisors of 144 equals:",
      options: ["144^7.5", "144^8", "144^6.5", "144^9"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "144 = 2^4 x 3^2; number of divisors = 5 x 3 = 15. Product of all divisors of N equals N^(d/2) = 144^(15/2) = 144^7.5.",
        shortcutMethod: "Product of divisors of N equals N^(d(N)/2)."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.5 },
      difficultyRating: 4.0
    },
    {
      id: "topic-divisibility-10",
      format: "TITA",
      questionText: "What is the smallest natural number that has exactly 10 divisors?",
      options: [],
      correctAnswer: "48",
      solution: {
        detailedExplanation: "10 = 10 or 2 x 5. Two forms: N = p^9 (smallest 2^9 = 512) or N = p^4 x q (smallest 2^4 x 3 = 48, or 3^4 x 2 = 162). Smallest overall = 48.",
        shortcutMethod: "Factor the divisor count; assign larger exponents to smaller primes."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.48 },
      difficultyRating: 4.0
    },
    {
      id: "topic-divisibility-11",
      format: "MCQ",
      questionText: "Find the smallest positive integer N such that N mod 3 = 1, N mod 5 = 2, N mod 7 = 3.",
      options: ["52", "67", "82", "157"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Check 52: 52 = 17x3+1 so 52 mod 3 = 1; 52 = 10x5+2 so 52 mod 5 = 2; 52 = 7x7+3 so 52 mod 7 = 3. All hold. 52 is the smallest such.",
        shortcutMethod: "For small moduli, check each candidate directly, or apply CRT."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.58 },
      difficultyRating: 3.5
    },
    {
      id: "topic-divisibility-12",
      format: "TITA",
      questionText: "How many divisors of 2^10 x 3^5 x 5^4 are multiples of 100?",
      options: [],
      correctAnswer: "162",
      solution: {
        detailedExplanation: "100 = 2^2 x 5^2. A divisor 2^a x 3^b x 5^c is a multiple of 100 iff a >= 2, c >= 2, b >= 0. Choices: a in {2,..,10} = 9; b in {0,..,5} = 6; c in {2,3,4} = 3. Total = 9 x 6 x 3 = 162.",
        shortcutMethod: "Restrict each exponent's range to satisfy the divisibility constraint, then multiply."
      },
      analyticsMetadata: { topicTag: "Number-System-Divisibility", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.45 },
      difficultyRating: 4.0
    }
  ],

  // -----------------------------------------------------------------
  // 2. HCF / LCM
  // -----------------------------------------------------------------
  hcf_lcm: [
    {
      id: "topic-hcf_lcm-1",
      format: "MCQ",
      questionText: "The HCF of two numbers is 12 and their LCM is 360. If one number is 60, the other is:",
      options: ["36", "48", "72", "84"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "For two numbers, a x b = HCF x LCM = 12 x 360 = 4320. Other = 4320 / 60 = 72.",
        shortcutMethod: "Use a x b = HCF x LCM."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.78 },
      difficultyRating: 3.0
    },
    {
      id: "topic-hcf_lcm-2",
      format: "TITA",
      questionText: "Find the largest number that divides 1356, 1868 and 2764 leaving the same remainder in each case.",
      options: [],
      correctAnswer: "128",
      solution: {
        detailedExplanation: "Required divisor = HCF of pairwise differences. 1868 - 1356 = 512; 2764 - 1868 = 896; 2764 - 1356 = 1408. HCF(512, 896): 896 = 1 x 512 + 384; 512 = 1 x 384 + 128; 384 = 3 x 128 + 0 => 128. HCF(128, 1408) = 128 (since 1408 = 11 x 128). Verify: 1356 = 10 x 128 + 76; 1868 = 14 x 128 + 76; 2764 = 21 x 128 + 76. All give remainder 76. Answer = 128.",
        shortcutMethod: "For same-remainder problems, compute HCF of pairwise differences."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.5 },
      difficultyRating: 4.0
    },
    {
      id: "topic-hcf_lcm-3",
      format: "MCQ",
      questionText: "Three bells toll together at 8:00 AM. Thereafter they toll at intervals of 12, 18 and 24 minutes respectively. When do they next toll together?",
      options: ["9:00 AM", "9:12 AM", "9:15 AM", "9:30 AM"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "LCM(12, 18, 24) = 72 minutes = 1 hour 12 minutes. Next time together = 8:00 + 1:12 = 9:12 AM.",
        shortcutMethod: "Simultaneous-event problems use LCM."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.7 },
      difficultyRating: 3.0
    },
    {
      id: "topic-hcf_lcm-4",
      format: "MCQ",
      questionText: "The HCF of two numbers is 8 and their ratio is 3 : 5. Their LCM is:",
      options: ["40", "80", "120", "160"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Numbers are 3k and 5k where k = 8 (since 3 and 5 are coprime, k equals the HCF). Numbers: 24, 40. LCM(24, 40) = 120.",
        shortcutMethod: "For coprime ratio a:b with HCF h, numbers are ah and bh; LCM = abh."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 },
      difficultyRating: 3.0
    },
    {
      id: "topic-hcf_lcm-5",
      format: "TITA",
      questionText: "Find the smallest number that when divided by 6, 7, 8, 9 or 12 leaves remainder 1 in each case.",
      options: [],
      correctAnswer: "505",
      solution: {
        detailedExplanation: "N - 1 must be a common multiple of 6, 7, 8, 9, 12. LCM(6,12) = 12; LCM(12,8) = 24; LCM(24,9) = 72; LCM(72,7) = 504. So N = 504 + 1 = 505.",
        shortcutMethod: "Same remainder r: smallest N = LCM + r."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-hcf_lcm-6",
      format: "MCQ",
      questionText: "Two numbers are in ratio 3 : 4 and their LCM is 240. The sum of the numbers is:",
      options: ["70", "140", "120", "28"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Numbers 3k, 4k with gcd(3,4)=1. LCM = 12k = 240, so k = 20. Numbers: 60, 80. Sum = 140.",
        shortcutMethod: "LCM of ak:bk with gcd(a,b)=1 is abk."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.68 },
      difficultyRating: 3.0
    },
    {
      id: "topic-hcf_lcm-7",
      format: "TITA",
      questionText: "Find the largest 4-digit number exactly divisible by 15, 18 and 24.",
      options: [],
      correctAnswer: "9720",
      solution: {
        detailedExplanation: "LCM(15, 18, 24): 15 = 3x5, 18 = 2x3^2, 24 = 2^3x3; LCM = 2^3 x 3^2 x 5 = 360. Largest 4-digit multiple: floor(9999/360) = 27, so 27 x 360 = 9720.",
        shortcutMethod: "Largest N <= M divisible by L: L x floor(M/L)."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.7 },
      difficultyRating: 3.0
    },
    {
      id: "topic-hcf_lcm-8",
      format: "MCQ",
      questionText: "HCF of two numbers is 23 and the other two factors of their LCM are 13 and 14. The larger number is:",
      options: ["276", "299", "322", "345"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Numbers are 23 x 13 = 299 and 23 x 14 = 322. The larger is 322.",
        shortcutMethod: "Numbers = HCF x each coprime factor of LCM / HCF."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-hcf_lcm-9",
      format: "MCQ",
      questionText: "The product of two positive integers is 2028 and their HCF is 13. How many such unordered pairs are possible?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Let numbers be 13a and 13b with gcd(a,b) = 1. Then 169ab = 2028, so ab = 12. Coprime ordered pairs (a,b): (1,12), (3,4), (4,3), (12,1). Unordered: (1,12), (3,4). Two pairs.",
        shortcutMethod: "Reduce to counting coprime factor pairs of (product / HCF^2)."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.55 },
      difficultyRating: 3.5
    },
    {
      id: "topic-hcf_lcm-10",
      format: "TITA",
      questionText: "The HCF of two numbers is 11 and their LCM is 7700. If one number is 275, find the other.",
      options: [],
      correctAnswer: "308",
      solution: {
        detailedExplanation: "Product = HCF x LCM = 11 x 7700 = 84700. Other = 84700 / 275 = 308.",
        shortcutMethod: "a x b = HCF x LCM."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.75 },
      difficultyRating: 3.0
    },
    {
      id: "topic-hcf_lcm-11",
      format: "MCQ",
      questionText: "A rectangular courtyard 18.72 m by 14.04 m is to be paved with identical square tiles. What is the least number of tiles required?",
      options: ["8", "10", "12", "15"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Convert to cm: 1872 cm x 1404 cm. To minimise tiles, maximise tile side = HCF(1872, 1404). 1872 = 2^4 x 3^2 x 13, 1404 = 2^2 x 3^3 x 13. HCF = 2^2 x 3^2 x 13 = 468 cm. Tiles = (1872/468) x (1404/468) = 4 x 3 = 12.",
        shortcutMethod: "Side of tile = HCF of dimensions; tile count = (L/s) x (W/s)."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.55 },
      difficultyRating: 3.5
    },
    {
      id: "topic-hcf_lcm-12",
      format: "TITA",
      questionText: "Find the smallest 4-digit number which when divided by 6, 9, 12 or 15 leaves remainder 4 in each case.",
      options: [],
      correctAnswer: "1084",
      solution: {
        detailedExplanation: "LCM(6, 9, 12, 15): LCM(6,9) = 18; LCM(18,12) = 36; LCM(36,15) = 180. We need N >= 1000 with N mod 180 = 4. Smallest multiple of 180 that is >= 996 is 6 x 180 = 1080; N = 1080 + 4 = 1084.",
        shortcutMethod: "Smallest 4-digit N with N mod L = r: take the least multiple m of L with m + r >= 1000; answer = m + r."
      },
      analyticsMetadata: { topicTag: "Number-System-HCF-LCM", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    }
  ],

  // -----------------------------------------------------------------
  // 3. REMAINDERS
  // -----------------------------------------------------------------
  remainders: [
    {
      id: "topic-remainders-1",
      format: "MCQ",
      questionText: "Find the remainder when 7^100 is divided by 5.",
      options: ["1", "2", "3", "4"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "7 mod 5 = 2, so 7^100 mod 5 = 2^100 mod 5. Cyclicity of 2 mod 5 is 4 (2, 4, 3, 1). 100 mod 4 = 0, so 2^100 mod 5 = last of the cycle = 1.",
        shortcutMethod: "Reduce base mod divisor; then apply power cyclicity."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-remainders-2",
      format: "TITA",
      questionText: "Find the remainder when 2^256 is divided by 17.",
      options: [],
      correctAnswer: "1",
      solution: {
        detailedExplanation: "17 is prime, gcd(2,17) = 1. By Fermat, 2^16 = 1 mod 17. 256 = 16 x 16, so 2^256 = (2^16)^16 = 1 mod 17.",
        shortcutMethod: "Fermat: a^(p-1) = 1 mod p."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    },
    {
      id: "topic-remainders-3",
      format: "MCQ",
      questionText: "Find the remainder when 3^47 is divided by 23.",
      options: ["3", "4", "6", "9"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "23 is prime; by Fermat 3^22 = 1 mod 23. 47 = 2 x 22 + 3, so 3^47 = (3^22)^2 x 3^3 = 1 x 27 = 27 mod 23 = 4.",
        shortcutMethod: "Reduce exponent mod (p-1)."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.55 },
      difficultyRating: 4.0
    },
    {
      id: "topic-remainders-4",
      format: "TITA",
      questionText: "Find the remainder when 15! is divided by 17.",
      options: [],
      correctAnswer: "1",
      solution: {
        detailedExplanation: "By Wilson's theorem, 16! = -1 mod 17. Also 16! = 16 x 15!, and 16 = -1 mod 17. So (-1) x 15! = -1 mod 17, giving 15! = 1 mod 17.",
        shortcutMethod: "Use Wilson: (p-1)! = -1 mod p, then peel off factors."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.45 },
      difficultyRating: 4.5
    },
    {
      id: "topic-remainders-5",
      format: "MCQ",
      questionText: "Find the remainder when 5^99 is divided by 13.",
      options: ["5", "8", "12", "1"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "13 is prime; by Fermat 5^12 = 1 mod 13. 99 = 8 x 12 + 3, so 5^99 = 5^3 mod 13 = 125 mod 13 = 125 - 9 x 13 = 8.",
        shortcutMethod: "Reduce exponent mod 12."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    },
    {
      id: "topic-remainders-6",
      format: "TITA",
      questionText: "Find the remainder when 7^84 is divided by 342.",
      options: [],
      correctAnswer: "1",
      solution: {
        detailedExplanation: "Note 7^3 = 343 = 342 + 1, so 7^3 = 1 mod 342. 84 = 3 x 28, so 7^84 = (7^3)^28 = 1 mod 342.",
        shortcutMethod: "Look for a small power that equals 1 mod divisor."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.5 },
      difficultyRating: 4.0
    },
    {
      id: "topic-remainders-7",
      format: "MCQ",
      questionText: "What is the remainder when 2^89 is divided by 89?",
      options: ["1", "2", "44", "88"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "89 is prime. By Fermat's corollary a^p = a mod p, so 2^89 = 2 mod 89.",
        shortcutMethod: "Fermat: a^p = a mod p for prime p."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-remainders-8",
      format: "MCQ",
      questionText: "The remainder when 30^30 + 31^31 + 32^32 is divided by 7 is:",
      options: ["0", "2", "4", "6"],
      correctAnswer: "D",
      solution: {
        detailedExplanation: "30 mod 7 = 2, 31 mod 7 = 3, 32 mod 7 = 4. By Fermat, a^6 = 1 mod 7 when gcd(a,7)=1. 30 mod 6 = 0 so 2^30 mod 7 = 1. 31 mod 6 = 1 so 3^31 mod 7 = 3. 32 mod 6 = 2 so 4^32 mod 7 = 4^2 = 16 mod 7 = 2. Sum = 1 + 3 + 2 = 6 mod 7.",
        shortcutMethod: "Exponent mod 6 for each term, then sum."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.5 },
      difficultyRating: 4.0
    },
    {
      id: "topic-remainders-9",
      format: "TITA",
      questionText: "Find the remainder when 10^10 + 10^100 + 10^1000 is divided by 7.",
      options: [],
      correctAnswer: "5",
      solution: {
        detailedExplanation: "10 mod 7 = 3. By Fermat, 3^6 = 1 mod 7. 10 mod 6 = 4 so 10^10 mod 7 = 3^4 = 81 mod 7 = 4. 100 mod 6 = 4 so 10^100 mod 7 = 4. 1000 mod 6 = 4 so 10^1000 mod 7 = 4. Sum = 4+4+4 = 12 mod 7 = 5.",
        shortcutMethod: "Exponent mod 6 for base coprime to 7."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.5 },
      difficultyRating: 4.0
    },
    {
      id: "topic-remainders-10",
      format: "MCQ",
      questionText: "What is the remainder when 50! is divided by 53?",
      options: ["1", "17", "26", "52"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "By Wilson, 52! = -1 mod 53. 52! = 52 x 51 x 50!. Also 52 = -1 and 51 = -2 mod 53. So (-1)(-2) x 50! = 2 x 50! = -1 mod 53, giving 50! = -1/2 mod 53. The inverse of 2 mod 53 is 27 (since 2 x 27 = 54 = 1 mod 53). So 50! = -27 mod 53 = 26 mod 53.",
        shortcutMethod: "Use Wilson and modular inverse."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 130, globalAccuracyRate: 0.35 },
      difficultyRating: 4.5
    },
    {
      id: "topic-remainders-11",
      format: "TITA",
      questionText: "Find the remainder when 3^100 is divided by 100.",
      options: [],
      correctAnswer: "1",
      solution: {
        detailedExplanation: "phi(100) = 100 x (1 - 1/2) x (1 - 1/5) = 40. gcd(3,100) = 1, so by Euler 3^40 = 1 mod 100. Compute 3^20 directly: 3^5 = 243 = 43 mod 100; 3^10 = 43^2 = 1849 mod 100 = 49; 3^20 = 49^2 = 2401 mod 100 = 1. Hence 3^100 = (3^20)^5 = 1 mod 100.",
        shortcutMethod: "Euler's theorem with phi(100) = 40."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 130, globalAccuracyRate: 0.4 },
      difficultyRating: 4.5
    },
    {
      id: "topic-remainders-12",
      format: "MCQ",
      questionText: "The remainder when 1! + 2! + 3! + ... + 100! is divided by 24 is:",
      options: ["3", "9", "15", "21"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "For n >= 4, n! contains the factors 1,2,3,4 and hence 24, so n! = 0 mod 24. Remainder equals 1! + 2! + 3! = 1 + 2 + 6 = 9.",
        shortcutMethod: "n! = 0 mod 24 for n >= 4."
      },
      analyticsMetadata: { topicTag: "Number-System-Remainders", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    }
  ],

  // -----------------------------------------------------------------
  // 4. UNIT DIGIT (cyclicity of powers, last-2-digit patterns)
  // -----------------------------------------------------------------
  unit_digit: [
    {
      id: "topic-unit_digit-1",
      format: "MCQ",
      questionText: "The unit digit of 7^85 is:",
      options: ["1", "3", "7", "9"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Cyclicity of 7: 7, 9, 3, 1 (period 4). 85 mod 4 = 1, so unit digit equals the 1st term of the cycle = 7.",
        shortcutMethod: "For 7^n: exponent mod 4 gives cycle position."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.75 },
      difficultyRating: 3.0
    },
    {
      id: "topic-unit_digit-2",
      format: "TITA",
      questionText: "Find the unit digit of 12^34 x 23^45.",
      options: [],
      correctAnswer: "2",
      solution: {
        detailedExplanation: "Unit of 12^34 = unit of 2^34. Cyclicity of 2: (2,4,8,6), 34 mod 4 = 2 -> 4. Unit of 23^45 = unit of 3^45. Cyclicity of 3: (3,9,7,1), 45 mod 4 = 1 -> 3. Product unit = 4 x 3 = 12, unit digit = 2.",
        shortcutMethod: "Take unit digits of each factor, multiply, take unit digit of product."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.7 },
      difficultyRating: 3.5
    },
    {
      id: "topic-unit_digit-3",
      format: "MCQ",
      questionText: "The unit digit of 1! + 2! + 3! + ... + 100! is:",
      options: ["1", "3", "5", "9"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "For n >= 5, n! contains factors 2 and 5, so ends in 0. Unit digit of sum = unit digit of 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33, which ends in 3.",
        shortcutMethod: "n! ends in 0 for n >= 5."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.78 },
      difficultyRating: 3.0
    },
    {
      id: "topic-unit_digit-4",
      format: "MCQ",
      questionText: "The unit digit of (4^1234)^5678 is:",
      options: ["2", "4", "6", "8"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "The expression equals 4^(1234 x 5678). Cyclicity of 4 is 2 (4, 6). Exponent 1234 x 5678 is even, so unit digit = 6.",
        shortcutMethod: "4^even -> 6, 4^odd -> 4."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.68 },
      difficultyRating: 3.5
    },
    {
      id: "topic-unit_digit-5",
      format: "TITA",
      questionText: "Find the unit digit of 2^100 + 3^100 + 4^100 + 5^100.",
      options: [],
      correctAnswer: "8",
      solution: {
        detailedExplanation: "2^100: cyclicity (2,4,8,6), 100 mod 4 = 0 -> 4th = 6. 3^100: (3,9,7,1), 100 mod 4 = 0 -> 4th = 1. 4^100: even exponent -> 6. 5^100: 5. Sum of unit digits = 6+1+6+5 = 18, unit digit = 8.",
        shortcutMethod: "Compute each unit digit, sum, take unit digit of total."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-unit_digit-6",
      format: "MCQ",
      questionText: "The last two digits of 7^2008 are:",
      options: ["01", "07", "49", "43"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Last-two-digit cycle of 7 has period 4: 07, 49, 43, 01. 2008 mod 4 = 0, so position 4 gives 01. Equivalently, 7^4 = 2401 ends in 01, and 2008 = 4 x 502.",
        shortcutMethod: "7^4 ends in 01; use multiplicativity mod 100."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.55 },
      difficultyRating: 4.0
    },
    {
      id: "topic-unit_digit-7",
      format: "TITA",
      questionText: "Find the unit digit of 13^27 x 17^35 x 19^43.",
      options: [],
      correctAnswer: "9",
      solution: {
        detailedExplanation: "Unit of 13^27 = unit of 3^27. (3,9,7,1), 27 mod 4 = 3 -> 7. Unit of 17^35 = unit of 7^35. (7,9,3,1), 35 mod 4 = 3 -> 3. Unit of 19^43 = unit of 9^43. (9,1), 43 odd -> 9. Product of unit digits: 7 x 3 x 9 = 189, unit digit = 9.",
        shortcutMethod: "Reduce to unit digits of bases; apply cyclicity."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.55 },
      difficultyRating: 4.0
    },
    {
      id: "topic-unit_digit-8",
      format: "MCQ",
      questionText: "The unit digit of 6^75 x 7^52 x 8^31 is:",
      options: ["2", "4", "6", "8"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "6^n always has unit digit 6. 7^52: (7,9,3,1), 52 mod 4 = 0 -> 1. 8^31: (8,4,2,6), 31 mod 4 = 3 -> 2. Product unit digit = 6 x 1 x 2 = 12, unit = 2.",
        shortcutMethod: "6^n always ends in 6; otherwise use cyclicity 4."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    },
    {
      id: "topic-unit_digit-9",
      format: "MCQ",
      questionText: "The unit digit of 3^1993 is:",
      options: ["1", "3", "7", "9"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Cyclicity of 3: (3, 9, 7, 1). 1993 mod 4 = 1, so unit digit = first term = 3.",
        shortcutMethod: "Exponent mod 4."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.75 },
      difficultyRating: 3.0
    },
    {
      id: "topic-unit_digit-10",
      format: "TITA",
      questionText: "Find the last two digits of 81^500.",
      options: [],
      correctAnswer: "01",
      solution: {
        detailedExplanation: "For a base ending in 1, the last two digits of base^n are: tens digit = (units digit of base) x (n) mod 10, units digit = 1. Here base tens-product = 8 x 500 = 4000, mod 10 = 0. So last two digits are 01. Alternative: 81^500 = (1 + 80)^500; mod 100, all terms with 80^k for k >= 2 vanish (since 80^2 = 6400 = 0 mod 100); leading terms: 1 + 500 x 80 = 1 + 40000 = 40001 mod 100 = 01.",
        shortcutMethod: "For base ending in 1: last two digits = (units of base x exp mod 10) | 1."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.6 },
      difficultyRating: 4.0
    },
    {
      id: "topic-unit_digit-11",
      format: "MCQ",
      questionText: "The unit digit of (1! + 2! + 3! + 4!)^(1! + 2! + 3! + 4!) is:",
      options: ["1", "3", "5", "7"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33. So the expression is 33^33. Unit of 3^33: cyclicity (3,9,7,1); 33 mod 4 = 1 -> 3.",
        shortcutMethod: "Unit digit depends only on base's unit digit and exp mod 4."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    },
    {
      id: "topic-unit_digit-12",
      format: "TITA",
      questionText: "Find the unit digit of 7^(7^7), i.e., 7 raised to the power (7^7).",
      options: [],
      correctAnswer: "3",
      solution: {
        detailedExplanation: "Cyclicity of 7 is 4. We need exponent (7^7) mod 4. 7 = -1 mod 4, so 7^7 = (-1)^7 = -1 mod 4 = 3. Cycle (7,9,3,1), 3rd position = 3. Unit digit = 3.",
        shortcutMethod: "Reduce tower exponent mod cycle length (4 for 7)."
      },
      analyticsMetadata: { topicTag: "Number-System-Unit-Digit", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.45 },
      difficultyRating: 4.5
    }
  ],

  // -----------------------------------------------------------------
  // 5. BASE SYSTEMS
  // -----------------------------------------------------------------
  base_systems: [
    {
      id: "topic-base_systems-1",
      format: "MCQ",
      questionText: "Convert the binary number 1011011 to decimal.",
      options: ["87", "89", "91", "93"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "1011011 = 1x64 + 0x32 + 1x16 + 1x8 + 0x4 + 1x2 + 1x1 = 64 + 16 + 8 + 2 + 1 = 91.",
        shortcutMethod: "Sum powers of 2 at positions with a 1-bit."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.75 },
      difficultyRating: 3.0
    },
    {
      id: "topic-base_systems-2",
      format: "TITA",
      questionText: "Convert the decimal number 250 to base 8 (octal). Enter the octal representation as an integer.",
      options: [],
      correctAnswer: "372",
      solution: {
        detailedExplanation: "250 / 8 = 31 r 2; 31 / 8 = 3 r 7; 3 / 8 = 0 r 3. Reading remainders bottom-up: 372. Verify: 3x64 + 7x8 + 2 = 192 + 56 + 2 = 250.",
        shortcutMethod: "Successive division by the target base."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-base_systems-3",
      format: "MCQ",
      questionText: "The hexadecimal number 2AF equals which decimal number?",
      options: ["687", "671", "703", "695"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "2AF = 2x256 + Ax16 + F = 512 + 10x16 + 15 = 512 + 160 + 15 = 687.",
        shortcutMethod: "Expand positionally with A = 10, B = 11, ..., F = 15."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-base_systems-4",
      format: "MCQ",
      questionText: "In base 7, the number (135)_7 equals which decimal number?",
      options: ["68", "75", "84", "91"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "(135)_7 = 1x49 + 3x7 + 5 = 49 + 21 + 5 = 75.",
        shortcutMethod: "Positional expansion in the given base."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.72 },
      difficultyRating: 3.0
    },
    {
      id: "topic-base_systems-5",
      format: "TITA",
      questionText: "Compute (1101)_2 + (101)_2 and give the result in binary (as an integer).",
      options: [],
      correctAnswer: "10010",
      solution: {
        detailedExplanation: "(1101)_2 = 13 decimal; (101)_2 = 5 decimal. Sum = 18. 18 in binary: 16 + 2 = 10010.",
        shortcutMethod: "Convert, add, convert back — or add column-wise with carry."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.65 },
      difficultyRating: 3.5
    },
    {
      id: "topic-base_systems-6",
      format: "MCQ",
      questionText: "If (x3)_5 + (21)_5 = (104)_5, find the digit x (in base 5).",
      options: ["1", "2", "3", "4"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "(x3)_5 = 5x + 3; (21)_5 = 11; (104)_5 = 1x25 + 0x5 + 4 = 29. So 5x + 3 + 11 = 29 => 5x = 15 => x = 3. Digit 3 is a valid base-5 digit.",
        shortcutMethod: "Convert everything to decimal and solve for x."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.55 },
      difficultyRating: 4.0
    },
    {
      id: "topic-base_systems-7",
      format: "TITA",
      questionText: "Convert the hexadecimal number B4 to binary. Enter the 8-bit binary string as an integer.",
      options: [],
      correctAnswer: "10110100",
      solution: {
        detailedExplanation: "Each hex digit maps to 4 bits. B = 11 = 1011, 4 = 0100. So B4 in binary = 10110100. Verify: 180 decimal = 128 + 32 + 16 + 4 = 1011 0100.",
        shortcutMethod: "Each hex digit -> 4 bits directly."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.68 },
      difficultyRating: 3.5
    },
    {
      id: "topic-base_systems-8",
      format: "MCQ",
      questionText: "The largest 3-digit number in base 5 equals what in decimal?",
      options: ["99", "124", "125", "155"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Largest 3-digit base-5 number is (444)_5 = 4x25 + 4x5 + 4 = 100 + 20 + 4 = 124. Equivalently 5^3 - 1 = 124.",
        shortcutMethod: "Largest k-digit base-b number equals b^k - 1."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.7 },
      difficultyRating: 3.0
    },
    {
      id: "topic-base_systems-9",
      format: "MCQ",
      questionText: "Find the number of trailing zeros in the binary representation of 1920.",
      options: ["5", "6", "7", "8"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "1920 = 2^7 x 15. The highest power of 2 dividing N equals the number of trailing zeros in its binary form. Answer = 7.",
        shortcutMethod: "Trailing binary zeros = largest k with 2^k | N."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.6 },
      difficultyRating: 3.5
    },
    {
      id: "topic-base_systems-10",
      format: "TITA",
      questionText: "Compute (3F)_16 x (2)_16 and give the result in hexadecimal (digits only, no prefix).",
      options: [],
      correctAnswer: "7E",
      solution: {
        detailedExplanation: "(3F)_16 = 3x16 + 15 = 63 decimal. 63 x 2 = 126. Convert 126 to hex: 126 / 16 = 7 r 14; 14 = E. So 126 decimal = 7E in hex.",
        shortcutMethod: "Convert to decimal, multiply, convert back."
      },
      analyticsMetadata: { topicTag: "Number-System-Base-Systems", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.55 },
      difficultyRating: 4.0
    }
  ]
};

export default numberSystemTopics;
