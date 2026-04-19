// Algebra topic-specific question bank
// ~75 questions across 6 algebra topics — mix of MCQ (60%) and TITA (40%)

const algebraTopics = {
  // =====================================================================
  // EQUATIONS — Linear, Quadratic, Systems, Vieta's (12 questions)
  // =====================================================================
  equations: [
    {
      id: "topic-equations-1",
      format: "MCQ",
      questionText: "If the roots of the quadratic equation x² - 7x + 12 = 0 are α and β, find the value of α² + β².",
      options: ["25", "49", "31", "37"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "By Vieta's formulas, α + β = 7 and αβ = 12. Using the identity α² + β² = (α + β)² - 2αβ = 49 - 24 = 25.",
        shortcutMethod: "Don't solve for roots. Apply (sum)² - 2(product) directly: 7² - 2(12) = 49 - 24 = 25."
      },
      analyticsMetadata: { topicTag: "Quadratic-Vieta", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.68 },
      difficultyRating: 2.8
    },
    {
      id: "topic-equations-2",
      format: "MCQ",
      questionText: "For what value of k will the quadratic equation x² - kx + 9 = 0 have equal roots?",
      options: ["±3", "±6", "±9", "±12"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Equal roots require discriminant = 0. So k² - 4(1)(9) = 0 ⟹ k² = 36 ⟹ k = ±6.",
        shortcutMethod: "Discriminant = 0 gives b² = 4ac. Here k² = 36, so k = ±6."
      },
      analyticsMetadata: { topicTag: "Discriminant", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.75 },
      difficultyRating: 2.5
    },
    {
      id: "topic-equations-3",
      format: "TITA",
      questionText: "If x + y = 10 and xy = 21, find the value of x³ + y³.",
      correctAnswer: "370",
      solution: {
        detailedExplanation: "x³ + y³ = (x + y)³ - 3xy(x + y) = 10³ - 3(21)(10) = 1000 - 630 = 370.",
        shortcutMethod: "Use (x+y)³ - 3xy(x+y) directly: 1000 - 630 = 370. No need to solve for x and y."
      },
      analyticsMetadata: { topicTag: "Algebraic-Identities", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.62 },
      difficultyRating: 3.0
    },
    {
      id: "topic-equations-4",
      format: "MCQ",
      questionText: "The equation 2x² + 5x - 3 = 0 has roots α and β. The value of 1/α + 1/β is:",
      options: ["5/3", "-5/3", "3/5", "-3/5"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "1/α + 1/β = (α + β)/(αβ). From Vieta's: α + β = -5/2, αβ = -3/2. So (1/α + 1/β) = (-5/2)/(-3/2) = 5/3.",
        shortcutMethod: "Formula: 1/α + 1/β = -b/c for ax² + bx + c = 0. Here: -5/(-3) = 5/3."
      },
      analyticsMetadata: { topicTag: "Vieta-Reciprocal", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.58 },
      difficultyRating: 3.2
    },
    {
      id: "topic-equations-5",
      format: "MCQ",
      questionText: "If 3x + 2y = 12 and 5x - 2y = 4, find the value of x + y.",
      options: ["4", "5", "6", "7"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Adding the two equations: 8x = 16 ⟹ x = 2. Substituting: 3(2) + 2y = 12 ⟹ y = 3. So x + y = 5.",
        shortcutMethod: "Add equations to eliminate y: 8x = 16 ⟹ x = 2. Then y = 3. Sum = 5."
      },
      analyticsMetadata: { topicTag: "Linear-Systems", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-equations-6",
      format: "TITA",
      questionText: "Find the sum of all integer values of k for which the equation x² + kx + 24 = 0 has integer roots.",
      correctAnswer: "0",
      solution: {
        detailedExplanation: "Integer roots (p, q) satisfy pq = 24 and p + q = -k. Factor pairs (both signs) of 24: (1,24),(2,12),(3,8),(4,6) and their negatives. For each pair with sum S, k = -S. Positive pair sums are 25, 14, 11, 10; negative pair sums are -25, -14, -11, -10. So k takes values ±25, ±14, ±11, ±10. Sum of all k = 0 by symmetry.",
        shortcutMethod: "Every factor pair contributes +k and -k symmetrically, so the sum is always 0."
      },
      analyticsMetadata: { topicTag: "Integer-Roots", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.42 },
      difficultyRating: 3.8
    },
    {
      id: "topic-equations-7",
      format: "MCQ",
      questionText: "If one root of the equation x² - 6x + k = 0 is twice the other root, find k.",
      options: ["4", "6", "8", "9"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Let roots be α and 2α. Sum: 3α = 6 ⟹ α = 2. Product: 2α² = k ⟹ k = 2(4) = 8.",
        shortcutMethod: "Ratio roots α, 2α: sum = 3α, product = 2α². From sum = 6 get α = 2, then k = 2·4 = 8."
      },
      analyticsMetadata: { topicTag: "Roots-Ratio", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.60 },
      difficultyRating: 3.0
    },
    {
      id: "topic-equations-8",
      format: "MCQ",
      questionText: "The quadratic equation whose roots are 3 + √5 and 3 - √5 is:",
      options: ["x² - 6x + 4 = 0", "x² - 6x + 14 = 0", "x² + 6x + 4 = 0", "x² - 3x + 4 = 0"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Sum of roots = 6, product = (3+√5)(3-√5) = 9 - 5 = 4. So equation: x² - 6x + 4 = 0.",
        shortcutMethod: "For conjugate roots a±√b: x² - 2ax + (a² - b) = 0. Here: x² - 6x + (9-5) = x² - 6x + 4 = 0."
      },
      analyticsMetadata: { topicTag: "Irrational-Roots", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 },
      difficultyRating: 2.8
    },
    {
      id: "topic-equations-9",
      format: "TITA",
      questionText: "If α, β are roots of x² - 5x + 6 = 0, find the value of α⁴ + β⁴.",
      correctAnswer: "97",
      solution: {
        detailedExplanation: "α + β = 5, αβ = 6. α² + β² = 25 - 12 = 13. α⁴ + β⁴ = (α² + β²)² - 2(αβ)² = 169 - 72 = 97.",
        shortcutMethod: "Power-sum ladder: S₂ = 25 - 12 = 13; S₄ = 13² - 2·36 = 97."
      },
      analyticsMetadata: { topicTag: "Power-Sums", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.50 },
      difficultyRating: 3.5
    },
    {
      id: "topic-equations-10",
      format: "MCQ",
      questionText: "If x² + px + q = 0 has roots that are twice those of x² + mx + n = 0, which relation holds?",
      options: ["p = 2m, q = 4n", "p = 2m, q = 2n", "p = m/2, q = n/4", "p = 4m, q = 2n"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Let roots of second equation be α, β. Then roots of first are 2α, 2β. Sum: 2α + 2β = 2(α+β). In second equation α+β = -m, so -p = 2(-m) ⟹ p = 2m. Product: 4αβ = q, and αβ = n, so q = 4n.",
        shortcutMethod: "Scaling roots by k: new p = k·m, new q = k²·n. Here k = 2: p = 2m, q = 4n."
      },
      analyticsMetadata: { topicTag: "Transform-Roots", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.55 },
      difficultyRating: 3.3
    },
    {
      id: "topic-equations-11",
      format: "MCQ",
      questionText: "For the equation x² - (a+3)x + (3a+1) = 0 to have both roots positive, which condition must hold?",
      options: ["a > -3", "a > -1/3", "a > 3", "a > 1/3"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "For both roots positive: sum > 0 and product > 0. Sum = a+3 > 0 ⟹ a > -3. Product = 3a+1 > 0 ⟹ a > -1/3. The tighter constraint wins: a > -1/3.",
        shortcutMethod: "Both positive ⟺ sum > 0 AND product > 0. Tighter constraint wins: a > -1/3."
      },
      analyticsMetadata: { topicTag: "Root-Location", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.45 },
      difficultyRating: 3.7
    },
    {
      id: "topic-equations-12",
      format: "TITA",
      questionText: "If x + 1/x = 4, find the value of x³ + 1/x³.",
      correctAnswer: "52",
      solution: {
        detailedExplanation: "Identity: (x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x). So 64 = x³ + 1/x³ + 12 ⟹ x³ + 1/x³ = 52.",
        shortcutMethod: "x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 64 - 12 = 52."
      },
      analyticsMetadata: { topicTag: "Reciprocal-Identity", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.70 },
      difficultyRating: 2.8
    },
  ],

  // =====================================================================
  // INEQUALITIES — Linear, Quadratic, Modulus, AM-GM (11 questions)
  // =====================================================================
  inequalities: [
    {
      id: "topic-inequalities-1",
      format: "MCQ",
      questionText: "Solve: x² - 5x + 6 < 0.",
      options: ["x < 2 or x > 3", "2 < x < 3", "x ≤ 2 or x ≥ 3", "-3 < x < -2"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Factor: (x - 2)(x - 3) < 0. This holds when x is between the roots: 2 < x < 3.",
        shortcutMethod: "For (x-a)(x-b) < 0 with a < b, answer is a < x < b. Here 2 < x < 3."
      },
      analyticsMetadata: { topicTag: "Quadratic-Inequality", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.72 },
      difficultyRating: 2.6
    },
    {
      id: "topic-inequalities-2",
      format: "MCQ",
      questionText: "If a > 0, b > 0 and a + b = 10, the maximum value of ab is:",
      options: ["20", "25", "30", "50"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "By AM-GM: (a+b)/2 ≥ √(ab), so 5 ≥ √(ab), giving ab ≤ 25. Maximum at a = b = 5.",
        shortcutMethod: "For fixed sum, product is max when values are equal. Here a = b = 5 gives ab = 25."
      },
      analyticsMetadata: { topicTag: "AM-GM", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 },
      difficultyRating: 2.5
    },
    {
      id: "topic-inequalities-3",
      format: "TITA",
      questionText: "Find the number of integer values of x satisfying |x - 3| ≤ 5.",
      correctAnswer: "11",
      solution: {
        detailedExplanation: "|x - 3| ≤ 5 ⟹ -5 ≤ x - 3 ≤ 5 ⟹ -2 ≤ x ≤ 8. Integers: -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8 — that's 11 values.",
        shortcutMethod: "Range length 8 - (-2) = 10, plus 1 for inclusive endpoints = 11 integers."
      },
      analyticsMetadata: { topicTag: "Modulus-Inequality", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.75 },
      difficultyRating: 2.6
    },
    {
      id: "topic-inequalities-4",
      format: "MCQ",
      questionText: "The solution set of |2x - 1| ≥ 3 is:",
      options: ["x ≤ -1 or x ≥ 2", "-1 ≤ x ≤ 2", "x ≥ 2", "-1 < x < 2"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "|2x - 1| ≥ 3 means 2x - 1 ≥ 3 OR 2x - 1 ≤ -3. First: x ≥ 2. Second: x ≤ -1. Union: x ≤ -1 or x ≥ 2.",
        shortcutMethod: "|expression| ≥ k splits outward; |expression| ≤ k splits inward. Outside: x ≤ -1 or x ≥ 2."
      },
      analyticsMetadata: { topicTag: "Modulus-Inequality", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.68 },
      difficultyRating: 2.8
    },
    {
      id: "topic-inequalities-5",
      format: "MCQ",
      questionText: "If x > 0, the minimum value of x + 4/x is:",
      options: ["2", "4", "6", "8"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "By AM-GM: x + 4/x ≥ 2√(x · 4/x) = 2√4 = 4. Minimum at x = 2.",
        shortcutMethod: "Min of x + k/x for x > 0 is 2√k. Here 2√4 = 4."
      },
      analyticsMetadata: { topicTag: "AM-GM-Min", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.72 },
      difficultyRating: 2.7
    },
    {
      id: "topic-inequalities-6",
      format: "TITA",
      questionText: "How many integers in the interval [0, 10] satisfy (x - 1)(x - 4)(x - 7) < 0?",
      correctAnswer: "3",
      solution: {
        detailedExplanation: "Roots at 1, 4, 7. Using wavy curve from rightmost, sign alternates +,-,+,-. So the product is negative when x < 1 or 4 < x < 7. Integers in [0, 10] satisfying this: 0 (since 0 < 1), and 5, 6 (strictly between 4 and 7). Total = 3.",
        shortcutMethod: "Wavy curve: negative regions are x < 1 and 4 < x < 7. Count integers: {0, 5, 6} = 3."
      },
      analyticsMetadata: { topicTag: "Cubic-Inequality", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.45 },
      difficultyRating: 3.5
    },
    {
      id: "topic-inequalities-7",
      format: "MCQ",
      questionText: "For positive reals a, b, c with a + b + c = 12, the maximum value of abc is:",
      options: ["36", "48", "64", "72"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "By AM-GM: (a+b+c)/3 ≥ ∛(abc), so 4 ≥ ∛(abc), giving abc ≤ 64. Max at a = b = c = 4.",
        shortcutMethod: "Fixed sum ⟹ product maximized when equal. a = b = c = 4 gives abc = 64."
      },
      analyticsMetadata: { topicTag: "AM-GM-3var", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.70 },
      difficultyRating: 2.8
    },
    {
      id: "topic-inequalities-8",
      format: "MCQ",
      questionText: "The inequality (x + 2)/(x - 3) > 0 is satisfied when:",
      options: ["-2 < x < 3", "x < -2 or x > 3", "x > 3 only", "x ≠ 3"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Fraction positive when both numerator and denominator have same sign. Both positive: x > -2 AND x > 3 ⟹ x > 3. Both negative: x < -2 AND x < 3 ⟹ x < -2. Combined: x < -2 or x > 3.",
        shortcutMethod: "Critical points at -2 and 3. Wavy curve from right: +,-,+. Positive regions: x < -2 or x > 3."
      },
      analyticsMetadata: { topicTag: "Rational-Inequality", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.62 },
      difficultyRating: 3.0
    },
    {
      id: "topic-inequalities-9",
      format: "TITA",
      questionText: "For x, y > 0 with xy = 16, find the minimum value of x + y.",
      correctAnswer: "8",
      solution: {
        detailedExplanation: "By AM-GM: (x + y)/2 ≥ √(xy) = 4, so x + y ≥ 8. Equality at x = y = 4.",
        shortcutMethod: "Fixed product ⟹ sum minimized when equal. x = y = 4 gives x + y = 8."
      },
      analyticsMetadata: { topicTag: "AM-GM-Sum", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.75 },
      difficultyRating: 2.6
    },
    {
      id: "topic-inequalities-10",
      format: "MCQ",
      questionText: "The solution of |x + 2| + |x - 3| = 5 is:",
      options: ["x = -2 only", "x = 3 only", "-2 ≤ x ≤ 3", "x < -2 or x > 3"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "|x+2| + |x-3| represents the sum of distances from -2 and 3. The distance between these points is 5. The sum equals 5 iff x lies on the segment between them: -2 ≤ x ≤ 3.",
        shortcutMethod: "Sum of distances from two points equals the distance between them iff point lies on the segment. So -2 ≤ x ≤ 3."
      },
      analyticsMetadata: { topicTag: "Modulus-Equation", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.58 },
      difficultyRating: 3.2
    },
    {
      id: "topic-inequalities-11",
      format: "MCQ",
      questionText: "Solve: 2x - 5 > 3(x - 2). The solution set is:",
      options: ["x > 1", "x < 1", "x > -1", "x < -1"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "2x - 5 > 3x - 6 ⟹ -5 + 6 > 3x - 2x ⟹ 1 > x ⟹ x < 1.",
        shortcutMethod: "Simplify: 2x - 5 > 3x - 6 ⟹ x < 1."
      },
      analyticsMetadata: { topicTag: "Linear-Inequality", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 },
      difficultyRating: 2.5
    },
  ],

  // =====================================================================
  // LOGARITHMS — Properties, Change of base, Log equations (11 questions)
  // =====================================================================
  logarithms: [
    {
      id: "topic-logarithms-1",
      format: "MCQ",
      questionText: "If log₂(x) = 5, then x equals:",
      options: ["10", "25", "32", "64"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "log₂(x) = 5 means 2⁵ = x, so x = 32.",
        shortcutMethod: "log_b(x) = n ⟹ x = bⁿ. So x = 2⁵ = 32."
      },
      analyticsMetadata: { topicTag: "Log-Definition", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.90 },
      difficultyRating: 2.5
    },
    {
      id: "topic-logarithms-2",
      format: "MCQ",
      questionText: "The value of log₃(27) + log₂(8) - log₅(125) is:",
      options: ["3", "6", "9", "0"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "log₃(27) = log₃(3³) = 3. log₂(8) = log₂(2³) = 3. log₅(125) = log₅(5³) = 3. Sum: 3 + 3 - 3 = 3.",
        shortcutMethod: "Each term equals 3 (cube of base). So 3 + 3 - 3 = 3."
      },
      analyticsMetadata: { topicTag: "Log-Basic", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-logarithms-3",
      format: "TITA",
      questionText: "If log₁₀(2) = 0.3010 and log₁₀(3) = 0.4771, find log₁₀(12) rounded to 4 decimal places.",
      correctAnswer: "1.0791",
      solution: {
        detailedExplanation: "log₁₀(12) = log₁₀(4 × 3) = log₁₀(4) + log₁₀(3) = 2·log₁₀(2) + log₁₀(3) = 2(0.3010) + 0.4771 = 0.6020 + 0.4771 = 1.0791.",
        shortcutMethod: "Factor 12 = 2²·3. So log(12) = 2·log2 + log3 = 0.6020 + 0.4771 = 1.0791."
      },
      analyticsMetadata: { topicTag: "Log-Expansion", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.65 },
      difficultyRating: 3.0
    },
    {
      id: "topic-logarithms-4",
      format: "MCQ",
      questionText: "Simplify: log(75/16) - 2 log(5/9) + log(32/243).",
      options: ["log 2", "log 3", "0", "log 5"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "= log(75/16) - log(25/81) + log(32/243) = log((75/16) × (81/25) × (32/243)). Numerator: 75·81·32 = 194400. Denominator: 16·25·243 = 97200. Ratio = 2. So answer = log 2.",
        shortcutMethod: "Combine using log laws: log((75·81·32)/(16·25·243)) = log(194400/97200) = log 2."
      },
      analyticsMetadata: { topicTag: "Log-Simplification", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.48 },
      difficultyRating: 3.5
    },
    {
      id: "topic-logarithms-5",
      format: "MCQ",
      questionText: "If log(x - 1) + log(x + 1) = log 8, then x equals:",
      options: ["±3", "3", "-3", "±9"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "log((x-1)(x+1)) = log 8 ⟹ x² - 1 = 8 ⟹ x² = 9 ⟹ x = ±3. But log requires x - 1 > 0 and x + 1 > 0, so x > 1. Only x = 3 is valid.",
        shortcutMethod: "Combine logs, solve x² = 9, then enforce domain. Only x = 3 works."
      },
      analyticsMetadata: { topicTag: "Log-Equation", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.60 },
      difficultyRating: 3.0
    },
    {
      id: "topic-logarithms-6",
      format: "TITA",
      questionText: "Find the value of log₂(log₂(log₃(81))).",
      correctAnswer: "1",
      solution: {
        detailedExplanation: "log₃(81) = log₃(3⁴) = 4. log₂(4) = 2. log₂(2) = 1.",
        shortcutMethod: "Work from inside out: 81 = 3⁴ → 4 → 2 → 1."
      },
      analyticsMetadata: { topicTag: "Nested-Log", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.70 },
      difficultyRating: 2.8
    },
    {
      id: "topic-logarithms-7",
      format: "MCQ",
      questionText: "If log_a(b) · log_b(c) · log_c(d) = x, then x equals:",
      options: ["log_a(d)", "log_d(a)", "log_a(c)", "1"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Using change of base: (ln b / ln a) · (ln c / ln b) · (ln d / ln c) = ln d / ln a = log_a(d).",
        shortcutMethod: "Chain rule for logs: inner terms cancel to give log_a(d)."
      },
      analyticsMetadata: { topicTag: "Change-of-Base", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.65 },
      difficultyRating: 3.0
    },
    {
      id: "topic-logarithms-8",
      format: "MCQ",
      questionText: "If log₃(5) = a, find log₃(45) in terms of a.",
      options: ["a + 2", "2a + 1", "2a", "a + 1"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "log₃(45) = log₃(9 × 5) = log₃(9) + log₃(5) = 2 + a.",
        shortcutMethod: "45 = 3²·5, so log₃(45) = 2 + log₃(5) = 2 + a."
      },
      analyticsMetadata: { topicTag: "Log-Expansion", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.72 },
      difficultyRating: 2.8
    },
    {
      id: "topic-logarithms-9",
      format: "TITA",
      questionText: "If 2^x = 3^y = 6^(-z), find the value of 1/x + 1/y + 1/z.",
      correctAnswer: "0",
      solution: {
        detailedExplanation: "Let 2^x = 3^y = 6^(-z) = k. Taking log (base k): 2 = k^(1/x), 3 = k^(1/y), 6 = k^(-1/z). Since 2·3 = 6: k^(1/x) · k^(1/y) = k^(-1/z) ⟹ 1/x + 1/y = -1/z ⟹ 1/x + 1/y + 1/z = 0.",
        shortcutMethod: "Use 2·3 = 6 and common value k: 1/x + 1/y + 1/z = 0."
      },
      analyticsMetadata: { topicTag: "Common-Value-Log", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.40 },
      difficultyRating: 3.8
    },
    {
      id: "topic-logarithms-10",
      format: "MCQ",
      questionText: "The number of digits in 2⁵⁰ is (given log₁₀(2) = 0.3010):",
      options: ["14", "15", "16", "17"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Number of digits = ⌊log₁₀(N)⌋ + 1. log₁₀(2⁵⁰) = 50 · 0.3010 = 15.05. So digits = 15 + 1 = 16.",
        shortcutMethod: "Digits = ⌊n·log₁₀(2)⌋ + 1 = ⌊15.05⌋ + 1 = 16."
      },
      analyticsMetadata: { topicTag: "Log-Digits", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.68 },
      difficultyRating: 2.8
    },
    {
      id: "topic-logarithms-11",
      format: "MCQ",
      questionText: "If log₂(x) + log₄(x) + log₁₆(x) = 7, then x equals:",
      options: ["4", "8", "16", "32"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "Let log₂(x) = a. Then log₄(x) = a/2, log₁₆(x) = a/4. Sum: a + a/2 + a/4 = 7a/4 = 7 ⟹ a = 4. So x = 2⁴ = 16.",
        shortcutMethod: "Convert to base 2: a(1 + 1/2 + 1/4) = 7a/4 = 7 ⟹ a = 4, x = 16."
      },
      analyticsMetadata: { topicTag: "Log-Equation", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.62 },
      difficultyRating: 3.2
    },
  ],

  // =====================================================================
  // FUNCTIONS & GRAPHS — Domain, Range, Composition, Transformations (11 questions)
  // =====================================================================
  functions_graphs: [
    {
      id: "topic-functions_graphs-1",
      format: "MCQ",
      questionText: "The domain of f(x) = √(x - 2) is:",
      options: ["x ≥ 0", "x ≥ 2", "x > 2", "all real x"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Square root requires non-negative argument: x - 2 ≥ 0 ⟹ x ≥ 2.",
        shortcutMethod: "Square root domain: radicand ≥ 0. Here x ≥ 2."
      },
      analyticsMetadata: { topicTag: "Domain-SquareRoot", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.85 },
      difficultyRating: 2.5
    },
    {
      id: "topic-functions_graphs-2",
      format: "MCQ",
      questionText: "If f(x) = 2x + 3 and g(x) = x², find (f ∘ g)(2).",
      options: ["7", "11", "13", "49"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "(f ∘ g)(2) = f(g(2)) = f(4) = 2(4) + 3 = 11.",
        shortcutMethod: "Apply g first: g(2) = 4. Then f(4) = 11."
      },
      analyticsMetadata: { topicTag: "Composition", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-functions_graphs-3",
      format: "TITA",
      questionText: "If f(x) = (x + 1)/(x - 1), find f(f(2)).",
      correctAnswer: "2",
      solution: {
        detailedExplanation: "f(2) = (2+1)/(2-1) = 3. f(3) = (3+1)/(3-1) = 4/2 = 2.",
        shortcutMethod: "f(2) = 3, then f(3) = 2. (This f is self-inverse: f∘f = identity.)"
      },
      analyticsMetadata: { topicTag: "Self-Inverse", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.72 },
      difficultyRating: 2.8
    },
    {
      id: "topic-functions_graphs-4",
      format: "MCQ",
      questionText: "The range of f(x) = x² + 2x + 5 is:",
      options: ["[5, ∞)", "[4, ∞)", "[-1, ∞)", "all reals"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Complete the square: f(x) = (x + 1)² + 4. Since (x+1)² ≥ 0, minimum is 4 at x = -1. Range: [4, ∞).",
        shortcutMethod: "Parabola opens up. Minimum y = c - b²/(4a) = 5 - 4/4 = 4. Range: [4, ∞)."
      },
      analyticsMetadata: { topicTag: "Range-Quadratic", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.70 },
      difficultyRating: 2.8
    },
    {
      id: "topic-functions_graphs-5",
      format: "MCQ",
      questionText: "If f(x) = 3x - 5, its inverse f⁻¹(x) is:",
      options: ["(x + 5)/3", "(x - 5)/3", "3x + 5", "(5 - x)/3"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Let y = 3x - 5. Solve for x: x = (y + 5)/3. So f⁻¹(x) = (x + 5)/3.",
        shortcutMethod: "Swap x and y: x = 3y - 5 ⟹ y = (x+5)/3."
      },
      analyticsMetadata: { topicTag: "Inverse-Function", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.78 },
      difficultyRating: 2.5
    },
    {
      id: "topic-functions_graphs-6",
      format: "TITA",
      questionText: "If f(x) = x² and g(x) = f(x - 3) + 2, the minimum value of g is attained at x = ?",
      correctAnswer: "3",
      solution: {
        detailedExplanation: "g(x) = (x - 3)² + 2. Minimum of (x-3)² is 0 at x = 3, giving g(3) = 2.",
        shortcutMethod: "Horizontal shift by 3, vertical shift by 2. Vertex moves from (0,0) to (3,2). Minimum at x = 3."
      },
      analyticsMetadata: { topicTag: "Transformations", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.68 },
      difficultyRating: 2.8
    },
    {
      id: "topic-functions_graphs-7",
      format: "MCQ",
      questionText: "Which of the following is an even function?",
      options: ["f(x) = x³", "f(x) = x² + |x|", "f(x) = x + 1", "f(x) = sin(x)"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Even requires f(-x) = f(x). For x² + |x|: (-x)² + |-x| = x² + |x| ✓. The others fail: x³ is odd, x+1 is neither, sin x is odd.",
        shortcutMethod: "Even ⟺ symmetric about y-axis. x² and |x| are both even; their sum is even."
      },
      analyticsMetadata: { topicTag: "Even-Odd", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.75 },
      difficultyRating: 2.7
    },
    {
      id: "topic-functions_graphs-8",
      format: "MCQ",
      questionText: "The domain of f(x) = 1/√(4 - x²) is:",
      options: ["[-2, 2]", "(-2, 2)", "(-∞, -2) ∪ (2, ∞)", "[-2, 2] \\ {0}"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Need 4 - x² > 0 (strict, since it is in the denominator under a square root). So x² < 4 ⟹ -2 < x < 2.",
        shortcutMethod: "Denominator with √ requires radicand > 0. x ∈ (-2, 2)."
      },
      analyticsMetadata: { topicTag: "Domain", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.68 },
      difficultyRating: 2.9
    },
    {
      id: "topic-functions_graphs-9",
      format: "TITA",
      questionText: "If f(x + 1) = x² - 3x + 2, find f(4).",
      correctAnswer: "2",
      solution: {
        detailedExplanation: "f(4) corresponds to x + 1 = 4, so x = 3. Then f(4) = 3² - 3(3) + 2 = 9 - 9 + 2 = 2.",
        shortcutMethod: "Set argument = 4: x = 3, substitute into RHS: 9 - 9 + 2 = 2."
      },
      analyticsMetadata: { topicTag: "Function-Evaluation", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.75 },
      difficultyRating: 2.7
    },
    {
      id: "topic-functions_graphs-10",
      format: "MCQ",
      questionText: "The graph of y = -f(x) is obtained from the graph of y = f(x) by:",
      options: ["Reflecting in y-axis", "Reflecting in x-axis", "Shifting up by f(x)", "Reflecting in origin"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Negating the output flips each y-coordinate to its opposite, which is a reflection in the x-axis.",
        shortcutMethod: "y → -y means reflect over x-axis."
      },
      analyticsMetadata: { topicTag: "Graph-Transformations", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-functions_graphs-11",
      format: "MCQ",
      questionText: "If f(x) = x/(x + 1), find f⁻¹(x).",
      options: ["x/(1 - x)", "(1 - x)/x", "x/(x + 1)", "(x + 1)/x"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Let y = x/(x+1). Then y(x+1) = x ⟹ yx + y = x ⟹ x(1 - y) = y ⟹ x = y/(1 - y). So f⁻¹(x) = x/(1 - x).",
        shortcutMethod: "Swap x,y and solve: x = y/(y+1) ⟹ y = x/(1-x)."
      },
      analyticsMetadata: { topicTag: "Inverse-Rational", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.58 },
      difficultyRating: 3.2
    },
  ],

  // =====================================================================
  // SEQUENCES & SERIES — AP, GP, HP, Sum formulas (12 questions)
  // =====================================================================
  sequences_series: [
    {
      id: "topic-sequences_series-1",
      format: "MCQ",
      questionText: "The 15th term of the AP 3, 7, 11, 15, ... is:",
      options: ["55", "59", "63", "67"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "a = 3, d = 4. nth term: a + (n-1)d = 3 + 14(4) = 3 + 56 = 59.",
        shortcutMethod: "a₁₅ = a + 14d = 3 + 56 = 59."
      },
      analyticsMetadata: { topicTag: "AP-nth-term", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.88 },
      difficultyRating: 2.5
    },
    {
      id: "topic-sequences_series-2",
      format: "MCQ",
      questionText: "Sum of first 20 terms of the AP 5, 8, 11, 14, ... is:",
      options: ["660", "670", "680", "690"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "a = 5, d = 3, n = 20. S = (n/2)[2a + (n-1)d] = 10[10 + 57] = 10(67) = 670.",
        shortcutMethod: "S₂₀ = 10 × (2a + 19d) = 10 × 67 = 670."
      },
      analyticsMetadata: { topicTag: "AP-Sum", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 },
      difficultyRating: 2.6
    },
    {
      id: "topic-sequences_series-3",
      format: "TITA",
      questionText: "Find the sum of the first 30 natural numbers.",
      correctAnswer: "465",
      solution: {
        detailedExplanation: "Sum = n(n+1)/2 = 30 · 31/2 = 465.",
        shortcutMethod: "n(n+1)/2 = 30·31/2 = 465."
      },
      analyticsMetadata: { topicTag: "Natural-Numbers", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 },
      difficultyRating: 2.5
    },
    {
      id: "topic-sequences_series-4",
      format: "MCQ",
      questionText: "In a GP, if the 3rd term is 12 and the 6th term is 96, find the first term.",
      options: ["2", "3", "4", "6"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "a·r² = 12 and a·r⁵ = 96. Dividing: r³ = 8 ⟹ r = 2. So a·4 = 12 ⟹ a = 3.",
        shortcutMethod: "Ratio (a₆/a₃) = r³ = 8 ⟹ r = 2. Then a = 12/4 = 3."
      },
      analyticsMetadata: { topicTag: "GP-Terms", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.70 },
      difficultyRating: 2.9
    },
    {
      id: "topic-sequences_series-5",
      format: "MCQ",
      questionText: "The sum of infinite GP: 1 + 1/2 + 1/4 + 1/8 + ... equals:",
      options: ["1", "3/2", "2", "infinity"],
      correctAnswer: "C",
      solution: {
        detailedExplanation: "a = 1, r = 1/2. Sum = a/(1 - r) = 1/(1/2) = 2.",
        shortcutMethod: "S∞ = a/(1-r) = 1/(1/2) = 2."
      },
      analyticsMetadata: { topicTag: "Infinite-GP", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.85 },
      difficultyRating: 2.5
    },
    {
      id: "topic-sequences_series-6",
      format: "TITA",
      questionText: "Find the sum: 1 + 3 + 5 + 7 + ... + 99.",
      correctAnswer: "2500",
      solution: {
        detailedExplanation: "Odd numbers 1 to 99: there are 50 terms. Sum of first n odd numbers = n². So 50² = 2500.",
        shortcutMethod: "Sum of first n odds = n². Here n = 50 ⟹ 50² = 2500."
      },
      analyticsMetadata: { topicTag: "Odd-Sum", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.80 },
      difficultyRating: 2.6
    },
    {
      id: "topic-sequences_series-7",
      format: "MCQ",
      questionText: "If a, b, c are in HP, then 1/a, 1/b, 1/c are in:",
      options: ["AP", "GP", "HP", "None"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "By definition, reciprocals of an HP form an AP.",
        shortcutMethod: "HP ⟺ reciprocals in AP (definition)."
      },
      analyticsMetadata: { topicTag: "HP-Definition", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.88 },
      difficultyRating: 2.5
    },
    {
      id: "topic-sequences_series-8",
      format: "MCQ",
      questionText: "The 7th term of a GP is 64 and the common ratio is 2. The first term is:",
      options: ["1", "2", "1/2", "1/4"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "a · r⁶ = 64 ⟹ a · 64 = 64 ⟹ a = 1.",
        shortcutMethod: "a = 64/r⁶ = 64/64 = 1."
      },
      analyticsMetadata: { topicTag: "GP-nth-term", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-sequences_series-9",
      format: "TITA",
      questionText: "Sum of the series 1² + 2² + 3² + ... + 10² equals:",
      correctAnswer: "385",
      solution: {
        detailedExplanation: "Formula: n(n+1)(2n+1)/6 = 10·11·21/6 = 2310/6 = 385.",
        shortcutMethod: "Sum of squares = n(n+1)(2n+1)/6 = 10·11·21/6 = 385."
      },
      analyticsMetadata: { topicTag: "Square-Sum", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.78 },
      difficultyRating: 2.7
    },
    {
      id: "topic-sequences_series-10",
      format: "MCQ",
      questionText: "If the sum of the first n terms of an AP is Sₙ = 3n² + 5n, then the 10th term is:",
      options: ["60", "62", "65", "68"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "aₙ = Sₙ - Sₙ₋₁ = [3n² + 5n] - [3(n-1)² + 5(n-1)] = 6n - 3 + 5 = 6n + 2. For n = 10: 60 + 2 = 62.",
        shortcutMethod: "aₙ = 6n + 2. So a₁₀ = 62."
      },
      analyticsMetadata: { topicTag: "AP-Sum-to-term", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.58 },
      difficultyRating: 3.3
    },
    {
      id: "topic-sequences_series-11",
      format: "MCQ",
      questionText: "For an infinite GP to converge, |r| must be:",
      options: ["> 1", "< 1", "≥ 1", "= 1"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "The infinite GP sum a/(1-r) exists only when |r| < 1; otherwise the series diverges.",
        shortcutMethod: "Convergence ⟺ |r| < 1."
      },
      analyticsMetadata: { topicTag: "GP-Convergence", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.86 },
      difficultyRating: 2.5
    },
    {
      id: "topic-sequences_series-12",
      format: "TITA",
      questionText: "If a, b, c are in AP with a = 2 and c = 14, find the value of b.",
      correctAnswer: "8",
      solution: {
        detailedExplanation: "In AP, the middle term is the arithmetic mean of the extremes: b = (a + c)/2 = (2 + 14)/2 = 8.",
        shortcutMethod: "Middle term of 3-term AP = average of extremes = 8."
      },
      analyticsMetadata: { topicTag: "AM", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 },
      difficultyRating: 2.5
    },
  ],

  // =====================================================================
  // SURDS & INDICES — Rationalization, Exponent laws, Simplification (11 questions)
  // =====================================================================
  surds_indices: [
    {
      id: "topic-surds_indices-1",
      format: "MCQ",
      questionText: "Simplify: 2³ × 2⁵ / 2².",
      options: ["2⁴", "2⁶", "2⁸", "2¹⁰"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Using exponent laws: 2^(3+5-2) = 2⁶.",
        shortcutMethod: "Add exponents in multiplication, subtract in division: 3 + 5 - 2 = 6."
      },
      analyticsMetadata: { topicTag: "Indices-Basic", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 },
      difficultyRating: 2.5
    },
    {
      id: "topic-surds_indices-2",
      format: "MCQ",
      questionText: "Rationalize 1/(√5 + √3). The result is:",
      options: ["(√5 + √3)/2", "(√5 - √3)/2", "(√5 - √3)/8", "(√5 + √3)/8"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "Multiply numerator and denominator by the conjugate √5 - √3: (√5 - √3)/((√5)² - (√3)²) = (√5 - √3)/(5 - 3) = (√5 - √3)/2.",
        shortcutMethod: "Multiply by conjugate. Denominator becomes 5 - 3 = 2."
      },
      analyticsMetadata: { topicTag: "Rationalization", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.75 },
      difficultyRating: 2.7
    },
    {
      id: "topic-surds_indices-3",
      format: "TITA",
      questionText: "If 3^x = 81, find x.",
      correctAnswer: "4",
      solution: {
        detailedExplanation: "81 = 3⁴, so x = 4.",
        shortcutMethod: "Express 81 as a power of 3: 81 = 3⁴ ⟹ x = 4."
      },
      analyticsMetadata: { topicTag: "Exponent-Equation", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.93 },
      difficultyRating: 2.5
    },
    {
      id: "topic-surds_indices-4",
      format: "MCQ",
      questionText: "The value of (√3 + √2)² is:",
      options: ["5", "5 + 2√6", "5 - 2√6", "6"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "(√3 + √2)² = 3 + 2√6 + 2 = 5 + 2√6.",
        shortcutMethod: "(a+b)² = a² + 2ab + b² = 3 + 2·√6 + 2 = 5 + 2√6."
      },
      analyticsMetadata: { topicTag: "Surd-Expansion", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.80 },
      difficultyRating: 2.6
    },
    {
      id: "topic-surds_indices-5",
      format: "MCQ",
      questionText: "Simplify: 8^(2/3).",
      options: ["2", "4", "6", "16"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "8^(2/3) = (8^(1/3))² = 2² = 4.",
        shortcutMethod: "(2³)^(2/3) = 2² = 4."
      },
      analyticsMetadata: { topicTag: "Fractional-Exponent", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-surds_indices-6",
      format: "TITA",
      questionText: "Find x if 2^(x+1) + 2^(x-1) = 20.",
      correctAnswer: "3",
      solution: {
        detailedExplanation: "Factor out 2^(x-1): 2^(x-1)(2² + 1) = 20 ⟹ 2^(x-1) · 5 = 20 ⟹ 2^(x-1) = 4 = 2² ⟹ x - 1 = 2 ⟹ x = 3.",
        shortcutMethod: "Factor out the smallest power: 2^(x-1)(4 + 1) = 20 ⟹ 2^(x-1) = 4 ⟹ x = 3."
      },
      analyticsMetadata: { topicTag: "Exponent-Equation", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.62 },
      difficultyRating: 3.0
    },
    {
      id: "topic-surds_indices-7",
      format: "MCQ",
      questionText: "The value of √72 - √32 + √18 is:",
      options: ["√2", "5√2", "7√2", "9√2"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "√72 = 6√2, √32 = 4√2, √18 = 3√2. So 6√2 - 4√2 + 3√2 = 5√2.",
        shortcutMethod: "Extract √2 from each: 6 - 4 + 3 = 5 ⟹ 5√2."
      },
      analyticsMetadata: { topicTag: "Surd-Simplification", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.75 },
      difficultyRating: 2.7
    },
    {
      id: "topic-surds_indices-8",
      format: "MCQ",
      questionText: "If x^(1/3) + x^(-1/3) = 2, find the value of x.",
      options: ["1", "8", "27", "0"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Let y = x^(1/3). Then y + 1/y = 2 ⟹ y² - 2y + 1 = 0 ⟹ (y-1)² = 0 ⟹ y = 1. So x = 1³ = 1.",
        shortcutMethod: "y + 1/y = 2 has the unique solution y = 1, so x = 1."
      },
      analyticsMetadata: { topicTag: "Substitution", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.68 },
      difficultyRating: 2.9
    },
    {
      id: "topic-surds_indices-9",
      format: "TITA",
      questionText: "Evaluate 4^(x+1) × 2^(2x) / 8^x when x = 2. Enter the numerical value.",
      correctAnswer: "16",
      solution: {
        detailedExplanation: "Rewrite using base 2: 4^(x+1) = 2^(2x+2), 2^(2x) stays, 8^x = 2^(3x). Combined: 2^((2x+2) + 2x - 3x) = 2^(x+2). At x = 2: 2⁴ = 16.",
        shortcutMethod: "Convert to base 2: exponent = x + 2. At x = 2: 2⁴ = 16."
      },
      analyticsMetadata: { topicTag: "Common-Base", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.55 },
      difficultyRating: 3.2
    },
    {
      id: "topic-surds_indices-10",
      format: "MCQ",
      questionText: "The value of 27^(-2/3) is:",
      options: ["1/9", "1/3", "9", "3"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "27^(-2/3) = 1/27^(2/3) = 1/(27^(1/3))² = 1/3² = 1/9.",
        shortcutMethod: "Negative exponent ⟹ reciprocal. (3³)^(2/3) = 3² = 9. Reciprocal = 1/9."
      },
      analyticsMetadata: { topicTag: "Negative-Exponent", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.80 },
      difficultyRating: 2.6
    },
    {
      id: "topic-surds_indices-11",
      format: "MCQ",
      questionText: "If 5^(2x - 1) = 125, then x equals:",
      options: ["1", "2", "3", "4"],
      correctAnswer: "B",
      solution: {
        detailedExplanation: "125 = 5³. So 2x - 1 = 3 ⟹ 2x = 4 ⟹ x = 2.",
        shortcutMethod: "Equate exponents with common base: 2x - 1 = 3 ⟹ x = 2."
      },
      analyticsMetadata: { topicTag: "Exponent-Equation", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.85 },
      difficultyRating: 2.5
    },
  ],
};

export default algebraTopics;
