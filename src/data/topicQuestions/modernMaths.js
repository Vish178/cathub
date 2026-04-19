// Topic-specific question bank for MODERN MATHS
// Covers: Permutations & Combinations, Probability, Set Theory

const modernMathsTopics = {
  permutations_combinations: [
    {
      id: "topic-permutations_combinations-1",
      format: "MCQ",
      questionText: "In how many ways can the letters of the word 'EQUATION' be arranged so that all vowels come together?",
      options: ["2880", "4320", "1440", "720"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "EQUATION has 8 letters with 5 vowels (E, U, A, I, O) and 3 consonants (Q, T, N). Treat all vowels as one block. Then we have 4 units (vowel-block + Q + T + N) which can be arranged in 4! = 24 ways. The 5 vowels within the block can be arranged in 5! = 120 ways. Total = 24 x 120 = 2880.",
        shortcutMethod: "Vowels together => bundle them: (n-k+1)! x k! where k = number of vowels. Here (8-5+1)! x 5! = 4! x 5! = 24 x 120 = 2880."
      },
      analyticsMetadata: { topicTag: "PermCom-Arrangement-Vowels", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.68 },
      difficultyRating: 2.5
    },
    {
      id: "topic-permutations_combinations-2",
      format: "TITA",
      questionText: "How many 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6, 7 if no digit is repeated and the number is divisible by 5?",
      options: [],
      correctAnswer: "120",
      solution: {
        detailedExplanation: "For a number to be divisible by 5, the unit digit must be 0 or 5. Since 0 is not in the set, the unit digit must be 5 (1 way). The remaining 3 positions can be filled from the remaining 6 digits in 6 x 5 x 4 = 120 ways. Total = 1 x 120 = 120.",
        shortcutMethod: "Fix the last digit (5), then arrange 3 of remaining 6: 6P3 = 6 x 5 x 4 = 120."
      },
      analyticsMetadata: { topicTag: "PermCom-DivisibilityConstraint", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.72 },
      difficultyRating: 2.8
    },
    {
      id: "topic-permutations_combinations-3",
      format: "TITA",
      questionText: "In how many ways can 8 different people be seated around a circular table?",
      options: [],
      correctAnswer: "5040",
      solution: {
        detailedExplanation: "For circular arrangements of n distinct objects, the number of arrangements is (n-1)!. For 8 people, it's (8-1)! = 7! = 5040.",
        shortcutMethod: "Circular arrangement formula: (n-1)!. Here 7! = 5040."
      },
      analyticsMetadata: { topicTag: "PermCom-CircularArrangement", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-permutations_combinations-4",
      format: "MCQ",
      questionText: "A committee of 5 is to be formed from 6 men and 4 women such that it must contain at least 2 women. How many ways can this be done?",
      options: ["186", "246", "180", "120"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "At least 2 women means: (2W, 3M) + (3W, 2M) + (4W, 1M). (C(4,2) x C(6,3)) + (C(4,3) x C(6,2)) + (C(4,4) x C(6,1)) = (6 x 20) + (4 x 15) + (1 x 6) = 120 + 60 + 6 = 186.",
        shortcutMethod: "At-least => sum cases 2W+3M, 3W+2M, 4W+1M = 120 + 60 + 6 = 186."
      },
      analyticsMetadata: { topicTag: "PermCom-Committee-AtLeast", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.66 },
      difficultyRating: 3.0
    },
    {
      id: "topic-permutations_combinations-5",
      format: "TITA",
      questionText: "How many distinct arrangements can be made with the letters of the word 'MATHEMATICS'?",
      options: [],
      correctAnswer: "4989600",
      solution: {
        detailedExplanation: "MATHEMATICS has 11 letters with repetitions: M appears 2 times, A appears 2 times, T appears 2 times, and H, E, I, C, S appear once each. Number of arrangements = 11! / (2! x 2! x 2!) = 39916800 / 8 = 4989600.",
        shortcutMethod: "Repeated letters formula: n! / (p! q! r!). 11! / (2!)^3 = 39916800 / 8 = 4989600."
      },
      analyticsMetadata: { topicTag: "PermCom-RepeatedLetters", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.62 },
      difficultyRating: 3.0
    },
    {
      id: "topic-permutations_combinations-6",
      format: "MCQ",
      questionText: "In how many ways can 5 boys and 4 girls be arranged in a row such that no two girls sit next to each other?",
      options: ["43200", "86400", "2880", "14400"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "First arrange 5 boys in a row: 5! = 120 ways. This creates 6 gaps (including ends) where girls can be placed: _B_B_B_B_B_. Select 4 gaps out of 6 and arrange 4 girls: C(6,4) x 4! = 15 x 24 = 360. Total = 120 x 360 = 43200.",
        shortcutMethod: "Gap method: arrange boys first (5!), then place girls in 6 gaps (6P4). 5! x 6P4 = 120 x 360 = 43200."
      },
      analyticsMetadata: { topicTag: "PermCom-GapMethod", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.58 },
      difficultyRating: 3.3
    },
    {
      id: "topic-permutations_combinations-7",
      format: "TITA",
      questionText: "In how many ways can 10 identical chocolates be distributed among 4 children such that each child gets at least one chocolate?",
      options: [],
      correctAnswer: "84",
      solution: {
        detailedExplanation: "This is a stars-and-bars problem with the condition that each child gets at least one chocolate. The number of positive integer solutions of x1+x2+x3+x4=10 is C(10-1, 4-1) = C(9,3) = 84.",
        shortcutMethod: "Identical items, each gets >=1: C(n-1, r-1). C(9,3) = 84."
      },
      analyticsMetadata: { topicTag: "PermCom-Distribution-Identical", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.60 },
      difficultyRating: 3.2
    },
    {
      id: "topic-permutations_combinations-8",
      format: "MCQ",
      questionText: "How many 3-digit numbers can be formed using digits 0 to 9 (without repetition) such that the digits are in strictly increasing order from left to right?",
      options: ["84", "120", "90", "72"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "For strictly increasing digits reading left to right, the leftmost digit is the smallest. If we include 0, then 0 would have to be in the leading position, which is not allowed for a 3-digit number. Hence we choose 3 digits from {1, 2, ..., 9}. Once chosen, there is exactly one way to arrange them in increasing order. Answer = C(9,3) = 84.",
        shortcutMethod: "Strictly increasing => order is fixed (just pick). Exclude 0 since it can't lead. C(9,3) = 84."
      },
      analyticsMetadata: { topicTag: "PermCom-IncreasingDigits", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.54 },
      difficultyRating: 3.5
    },
    {
      id: "topic-permutations_combinations-9",
      format: "TITA",
      questionText: "How many diagonals does a regular polygon with 12 sides have?",
      options: [],
      correctAnswer: "54",
      solution: {
        detailedExplanation: "Number of diagonals of an n-sided polygon = C(n,2) - n = n(n-3)/2. For n=12: 12 x 9 / 2 = 54.",
        shortcutMethod: "Diagonals formula: n(n-3)/2. For n=12: 12 x 9 / 2 = 54."
      },
      analyticsMetadata: { topicTag: "PermCom-Polygon-Diagonals", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 },
      difficultyRating: 2.5
    },
    {
      id: "topic-permutations_combinations-10",
      format: "TITA",
      questionText: "In how many ways can 6 persons be seated around a circular table if two particular persons must sit together?",
      options: [],
      correctAnswer: "48",
      solution: {
        detailedExplanation: "Treat the two particular persons as a single unit. Then we have 5 units to arrange around a circular table: (5-1)! = 4! = 24 ways. The two persons within the unit can swap: 2! = 2 ways. Total = 24 x 2 = 48.",
        shortcutMethod: "Bundle the pair: (n-1)! x 2! with n=5 effective units => 4! x 2 = 48."
      },
      analyticsMetadata: { topicTag: "PermCom-CircularTogether", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.70 },
      difficultyRating: 2.8
    },
    {
      id: "topic-permutations_combinations-11",
      format: "MCQ",
      questionText: "The number of ways to select 3 numbers from {1, 2, 3, ..., 20} such that their sum is even is:",
      options: ["570", "520", "600", "540"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "There are 10 even numbers and 10 odd numbers in {1,...,20}. Sum of 3 numbers is even when either all 3 are even, or exactly 2 are odd and 1 is even. All even: C(10,3) = 120. 2 odd + 1 even: C(10,2) x C(10,1) = 45 x 10 = 450. Total = 120 + 450 = 570.",
        shortcutMethod: "Sum even => (EEE) or (OOE). C(10,3) + C(10,2)*C(10,1) = 120 + 450 = 570."
      },
      analyticsMetadata: { topicTag: "PermCom-ParitySum", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.55 },
      difficultyRating: 3.4
    },
    {
      id: "topic-permutations_combinations-12",
      format: "MCQ",
      questionText: "How many ways can the letters of the word 'SUCCESS' be arranged so that all S's are together?",
      options: ["60", "120", "20", "360"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "SUCCESS has letters S, U, C, C, E, S, S — that's 3 S's, 2 C's, 1 U, 1 E (7 letters total). Treating all 3 S's as one block, we effectively arrange 5 units: [SSS], U, C, C, E. Arrangements = 5! / 2! (for the two C's) = 120 / 2 = 60.",
        shortcutMethod: "Bundle all identical: treat 3 S's as one unit. 5 objects with 2 C's repeated => 5!/2! = 60."
      },
      analyticsMetadata: { topicTag: "PermCom-TogetherRepeated", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.62 },
      difficultyRating: 3.0
    },
    {
      id: "topic-permutations_combinations-13",
      format: "TITA",
      questionText: "A group of 15 people includes 5 married couples and 5 singles. In how many ways can a committee of 4 be formed such that no married couple is entirely included in the committee?",
      options: [],
      correctAnswer: "985",
      solution: {
        detailedExplanation: "Total ways to choose 4 from 15 = C(15,4) = 1365. Subtract committees containing at least one full couple. Let A_i = event committee contains couple i. |A_i| = C(13,2) = 78 (pick the couple, then 2 from remaining 13). Sum |A_i| = 5 x 78 = 390. |A_i n A_j| = 1 (both couples fix all 4 seats). Sum pairs = C(5,2) = 10. By inclusion-exclusion: bad = 390 - 10 = 380. Good = 1365 - 380 = 985.",
        shortcutMethod: "Complement via inclusion-exclusion: C(15,4) - [5 x C(13,2) - C(5,2)] = 1365 - 380 = 985."
      },
      analyticsMetadata: { topicTag: "PermCom-InclusionExclusion", averageTimeSpentSeconds: 150, globalAccuracyRate: 0.35 },
      difficultyRating: 4.0
    },
    {
      id: "topic-permutations_combinations-14",
      format: "MCQ",
      questionText: "The number of ways to arrange 4 boys and 3 girls in a row of 7 seats such that the girls occupy the even-numbered positions is:",
      options: ["144", "288", "72", "120"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "In a row of 7 positions, the even positions are 2, 4, and 6 (exactly 3 positions). The 3 girls can be arranged in these 3 even positions in 3! = 6 ways. The 4 boys fill the remaining 4 positions in 4! = 24 ways. Total = 6 x 24 = 144.",
        shortcutMethod: "Fix-slot method: 3! x 4! = 6 x 24 = 144."
      },
      analyticsMetadata: { topicTag: "PermCom-PositionConstraint", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.72 },
      difficultyRating: 2.7
    }
  ],

  probability: [
    {
      id: "topic-probability-1",
      format: "MCQ",
      questionText: "A card is drawn from a well-shuffled pack of 52 cards. What is the probability that it is either a heart or a king?",
      options: ["4/13", "17/52", "13/52", "1/4"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "P(Heart) = 13/52. P(King) = 4/52. P(Heart and King) = 1/52 (the King of Hearts). By inclusion-exclusion: P(Heart or King) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13.",
        shortcutMethod: "P(A U B) = P(A) + P(B) - P(A n B) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13."
      },
      analyticsMetadata: { topicTag: "Probability-Cards-Union", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.78 },
      difficultyRating: 2.5
    },
    {
      id: "topic-probability-2",
      format: "TITA",
      questionText: "Two dice are rolled simultaneously. The probability that the sum of the numbers showing is 8 is p/q in lowest terms. What is p + q?",
      options: [],
      correctAnswer: "41",
      solution: {
        detailedExplanation: "Total outcomes = 36. Sums of 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 ways. Probability = 5/36. In lowest terms p=5, q=36; p+q = 41.",
        shortcutMethod: "Count (a,b) with a+b=8: 5 pairs. 5/36 => 5+36 = 41."
      },
      analyticsMetadata: { topicTag: "Probability-Dice-Sum", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.75 },
      difficultyRating: 2.5
    },
    {
      id: "topic-probability-3",
      format: "MCQ",
      questionText: "A bag contains 5 red and 3 blue balls. Two balls are drawn at random without replacement. What is the probability that both balls are red?",
      options: ["5/14", "10/28", "3/14", "5/28"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Total balls = 8. P(first red) = 5/8. P(second red given first red) = 4/7. P(both red) = (5/8) x (4/7) = 20/56 = 5/14. Alternatively, C(5,2)/C(8,2) = 10/28 = 5/14.",
        shortcutMethod: "Combination method: C(5,2)/C(8,2) = 10/28 = 5/14."
      },
      analyticsMetadata: { topicTag: "Probability-WithoutReplacement", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-probability-4",
      format: "MCQ",
      questionText: "The probability that A hits a target is 1/3 and the probability that B hits the target is 2/5. If both fire independently, what is the probability that the target is hit?",
      options: ["3/5", "7/15", "11/15", "2/15"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "P(target hit) = 1 - P(neither hits) = 1 - P(A misses) x P(B misses) = 1 - (2/3) x (3/5) = 1 - 6/15 = 9/15 = 3/5.",
        shortcutMethod: "Complement: 1 - P(both miss) = 1 - (2/3)(3/5) = 1 - 2/5 = 3/5."
      },
      analyticsMetadata: { topicTag: "Probability-IndependentUnion", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.74 },
      difficultyRating: 2.7
    },
    {
      id: "topic-probability-5",
      format: "TITA",
      questionText: "A box contains 4 white and 6 black balls. Two balls are drawn at random without replacement. The probability that they are of the same colour is expressed as a/b in lowest terms. Find a + b.",
      options: [],
      correctAnswer: "22",
      solution: {
        detailedExplanation: "Total ways = C(10,2) = 45. Both white: C(4,2) = 6. Both black: C(6,2) = 15. Favourable = 21. Probability = 21/45 = 7/15. In lowest terms: a=7, b=15; a+b = 22.",
        shortcutMethod: "Same colour = (C(4,2)+C(6,2))/C(10,2) = 21/45 = 7/15. 7+15 = 22."
      },
      analyticsMetadata: { topicTag: "Probability-SameColour", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.70 },
      difficultyRating: 2.8
    },
    {
      id: "topic-probability-6",
      format: "MCQ",
      questionText: "If P(A) = 0.4, P(B) = 0.5, and P(A n B) = 0.2, find P(A | B).",
      options: ["0.4", "0.5", "0.8", "0.25"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "P(A|B) = P(A n B) / P(B) = 0.2 / 0.5 = 0.4.",
        shortcutMethod: "Definition: P(A|B) = P(A n B)/P(B) = 0.2/0.5 = 0.4."
      },
      analyticsMetadata: { topicTag: "Probability-ConditionalDef", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.85 },
      difficultyRating: 2.5
    },
    {
      id: "topic-probability-7",
      format: "MCQ",
      questionText: "A family has 3 children. Given that at least one of them is a boy, what is the probability that all three are boys? (Assume boy/girl equally likely and independent.)",
      options: ["1/7", "1/8", "1/4", "3/8"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Sample space with 3 children: 8 equally likely outcomes. 'At least one boy' excludes GGG, giving 7 favourable outcomes. 'All three boys' = BBB, which is 1 outcome. P(all boys | at least one boy) = 1/7.",
        shortcutMethod: "Conditional on at least one boy: reduce sample from 8 to 7 (drop GGG). P = 1/7."
      },
      analyticsMetadata: { topicTag: "Probability-Conditional-Family", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.55 },
      difficultyRating: 3.2
    },
    {
      id: "topic-probability-8",
      format: "TITA",
      questionText: "A fair coin is tossed 4 times. The probability of getting exactly 2 heads is p/q in lowest terms. Find p + q.",
      options: [],
      correctAnswer: "11",
      solution: {
        detailedExplanation: "Binomial: P(X=2) = C(4,2) x (1/2)^2 x (1/2)^2 = 6 x (1/16) = 6/16 = 3/8. In lowest terms p=3, q=8, so p+q = 11.",
        shortcutMethod: "C(4,2)/2^4 = 6/16 = 3/8 => 3+8 = 11."
      },
      analyticsMetadata: { topicTag: "Probability-Binomial", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-probability-9",
      format: "TITA",
      questionText: "A bag contains 3 red and 5 blue balls. Two balls are drawn one after another with replacement. The probability that the two balls drawn are of different colours is expressed as p/q in lowest terms. Find p + q.",
      options: [],
      correctAnswer: "47",
      solution: {
        detailedExplanation: "With replacement: P(red then blue) = (3/8)(5/8) = 15/64. P(blue then red) = (5/8)(3/8) = 15/64. Total P(different colours) = 30/64 = 15/32. p+q = 15+32 = 47.",
        shortcutMethod: "2 x (3/8)(5/8) = 30/64 = 15/32 => 15+32 = 47."
      },
      analyticsMetadata: { topicTag: "Probability-WithReplacement", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.66 },
      difficultyRating: 3.0
    },
    {
      id: "topic-probability-10",
      format: "MCQ",
      questionText: "In a factory, machines A and B produce 60% and 40% of total output respectively. Of their output, 3% and 5% respectively are defective. A randomly chosen item is found defective. What is the probability it was produced by machine A?",
      options: ["9/19", "10/19", "3/8", "1/2"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "By Bayes' theorem: P(A|D) = P(D|A) P(A) / [P(D|A) P(A) + P(D|B) P(B)] = (0.03 x 0.6) / (0.03 x 0.6 + 0.05 x 0.4) = 0.018 / (0.018 + 0.020) = 0.018 / 0.038 = 18/38 = 9/19.",
        shortcutMethod: "Bayes: (3 x 60) / (3 x 60 + 5 x 40) = 180/380 = 9/19."
      },
      analyticsMetadata: { topicTag: "Probability-BayesTheorem", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.50 },
      difficultyRating: 3.5
    },
    {
      id: "topic-probability-11",
      format: "TITA",
      questionText: "Three persons A, B, C take turns tossing a fair coin; A goes first, then B, then C, then A again, and so on. The one who first gets a head wins. The probability that A wins is p/q in lowest terms. Find p + q.",
      options: [],
      correctAnswer: "11",
      solution: {
        detailedExplanation: "A wins on turns 1, 4, 7, ... P(A wins) = (1/2) + (1/2)^4 + (1/2)^7 + ... This is a geometric series with first term 1/2 and common ratio 1/8. Sum = (1/2) / (1 - 1/8) = (1/2) / (7/8) = 4/7. p+q = 4+7 = 11.",
        shortcutMethod: "Geometric series: first term 1/2, ratio 1/8. Sum = (1/2)/(7/8) = 4/7. 4+7 = 11."
      },
      analyticsMetadata: { topicTag: "Probability-GeometricSeries", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.42 },
      difficultyRating: 3.8
    },
    {
      id: "topic-probability-12",
      format: "MCQ",
      questionText: "Two events A and B are such that P(A) = 0.3, P(B) = 0.4, and A and B are independent. What is P(A U B)?",
      options: ["0.58", "0.70", "0.12", "0.42"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "For independent events, P(A n B) = P(A) x P(B) = 0.3 x 0.4 = 0.12. P(A U B) = P(A) + P(B) - P(A n B) = 0.3 + 0.4 - 0.12 = 0.58.",
        shortcutMethod: "Independent: P(A U B) = P(A)+P(B)-P(A)P(B) = 0.3+0.4-0.12 = 0.58."
      },
      analyticsMetadata: { topicTag: "Probability-Independent-Union", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.75 },
      difficultyRating: 2.7
    }
  ],

  set_theory: [
    {
      id: "topic-set_theory-1",
      format: "MCQ",
      questionText: "In a class of 60 students, 35 play cricket, 25 play football, and 10 play both. How many students play neither?",
      options: ["10", "15", "20", "25"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "n(C U F) = n(C) + n(F) - n(C n F) = 35 + 25 - 10 = 50. Students playing neither = 60 - 50 = 10.",
        shortcutMethod: "Inclusion-exclusion: 35+25-10 = 50 play at least one => 60-50 = 10 play neither."
      },
      analyticsMetadata: { topicTag: "SetTheory-TwoSet-Basic", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.88 },
      difficultyRating: 2.5
    },
    {
      id: "topic-set_theory-2",
      format: "TITA",
      questionText: "In a survey of 200 people: 120 read newspaper A, 80 read B, 50 read C, 40 read A and B, 20 read B and C, 30 read A and C, and 10 read all three. How many read at least one newspaper?",
      options: [],
      correctAnswer: "170",
      solution: {
        detailedExplanation: "By inclusion-exclusion: n(A U B U C) = n(A)+n(B)+n(C) - n(AnB) - n(BnC) - n(AnC) + n(AnBnC) = 120+80+50 - 40-20-30 + 10 = 250 - 90 + 10 = 170.",
        shortcutMethod: "3-set inclusion-exclusion: singles - pairs + triple = 250 - 90 + 10 = 170."
      },
      analyticsMetadata: { topicTag: "SetTheory-ThreeSet-IncExc", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.76 },
      difficultyRating: 2.8
    },
    {
      id: "topic-set_theory-3",
      format: "MCQ",
      questionText: "If A and B are two sets such that n(A) = 30, n(B) = 20, then the minimum and maximum values of n(A U B) are respectively:",
      options: ["30 and 50", "20 and 50", "30 and 30", "10 and 50"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "n(A U B) = n(A) + n(B) - n(A n B). Maximum of n(A U B) occurs when n(A n B) is minimum (= 0, disjoint sets): 30+20-0 = 50. Minimum of n(A U B) occurs when n(A n B) is maximum; since B has only 20 elements, B can be a subset of A, giving n(A n B) = 20 and n(A U B) = 30.",
        shortcutMethod: "Min union: max(|A|, |B|) = 30 (when smaller is subset). Max union: |A|+|B| = 50 (when disjoint)."
      },
      analyticsMetadata: { topicTag: "SetTheory-MinMax-Union", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.70 },
      difficultyRating: 2.8
    },
    {
      id: "topic-set_theory-4",
      format: "MCQ",
      questionText: "In a group of 100 people, 72 like tea, 45 like coffee, and each person likes at least one of the two. How many like both tea and coffee?",
      options: ["17", "27", "25", "15"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Since each person likes at least one, n(T U C) = 100. n(T U C) = n(T) + n(C) - n(T n C). So 100 = 72 + 45 - n(T n C) => n(T n C) = 117 - 100 = 17.",
        shortcutMethod: "|A|+|B| - |A U B| = overlap. 72+45-100 = 17."
      },
      analyticsMetadata: { topicTag: "SetTheory-FindIntersection", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-set_theory-5",
      format: "TITA",
      questionText: "In a class of 80 students, 50 passed in Maths, 40 passed in English, and 15 failed in both subjects. How many passed in both?",
      options: [],
      correctAnswer: "25",
      solution: {
        detailedExplanation: "Students passing at least one = 80 - 15 = 65. So n(M U E) = 65. n(M n E) = n(M) + n(E) - n(M U E) = 50 + 40 - 65 = 25.",
        shortcutMethod: "Passed at least one = 80-15 = 65. Overlap = 50+40-65 = 25."
      },
      analyticsMetadata: { topicTag: "SetTheory-Complement-Union", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.80 },
      difficultyRating: 2.6
    },
    {
      id: "topic-set_theory-6",
      format: "TITA",
      questionText: "In a survey, 60% like product A, 50% like product B, and 30% like both. What percentage of people like neither A nor B?",
      options: [],
      correctAnswer: "20",
      solution: {
        detailedExplanation: "n(A U B) = 60 + 50 - 30 = 80%. Neither = 100 - 80 = 20%.",
        shortcutMethod: "100 - (60+50-30) = 100 - 80 = 20%."
      },
      analyticsMetadata: { topicTag: "SetTheory-PercentUnion", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.88 },
      difficultyRating: 2.5
    },
    {
      id: "topic-set_theory-7",
      format: "MCQ",
      questionText: "In a survey of 100 people, 70 like apples, 65 like bananas, and 50 like cherries. What is the minimum possible number of people who like all three fruits?",
      options: ["0", "15", "5", "10"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Sum of individual likes = 70+65+50 = 185. In a universe of 100, each person can be a liker of at most 3 fruits. If x people like all three, the remaining (100-x) each contribute at most 2. So 185 <= 3x + 2(100 - x) = 200 + x, giving x >= -15. Since x >= 0 always, the minimum is 0. A concrete construction confirms 0 is achievable.",
        shortcutMethod: "Min triple intersection = max(0, Sum - 2|U|) = max(0, 185-200) = 0."
      },
      analyticsMetadata: { topicTag: "SetTheory-MinTripleIntersection", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.40 },
      difficultyRating: 3.8
    },
    {
      id: "topic-set_theory-8",
      format: "TITA",
      questionText: "In a group of 150 students, 80 like Maths, 70 like Physics, and 60 like Chemistry. 30 like Maths and Physics, 25 like Physics and Chemistry, 20 like Maths and Chemistry, and 10 like all three. How many students like none of the three?",
      options: [],
      correctAnswer: "5",
      solution: {
        detailedExplanation: "n(M U P U C) = 80+70+60 - 30-25-20 + 10 = 210 - 75 + 10 = 145. Students liking none = 150 - 145 = 5.",
        shortcutMethod: "3-set inclusion-exclusion: 210 - 75 + 10 = 145. None = 150-145 = 5."
      },
      analyticsMetadata: { topicTag: "SetTheory-ThreeSet-None", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.72 },
      difficultyRating: 3.0
    },
    {
      id: "topic-set_theory-9",
      format: "MCQ",
      questionText: "In a survey, 85% of people drink tea, 75% drink coffee, and every person drinks at least one of the two. What is the maximum percentage of people that could drink both?",
      options: ["75%", "85%", "60%", "100%"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "n(T n C) cannot exceed n(T) or n(C). So n(T n C) <= min(85, 75) = 75. This maximum is achieved when all coffee drinkers also drink tea (coffee subset of tea).",
        shortcutMethod: "Max intersection = min of the two sets = min(85,75) = 75%."
      },
      analyticsMetadata: { topicTag: "SetTheory-MaxIntersection", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 },
      difficultyRating: 2.7
    },
    {
      id: "topic-set_theory-10",
      format: "TITA",
      questionText: "In a school of 500 students, 300 play cricket, 200 play football, and 150 play basketball. 100 play both cricket and football, 60 play both football and basketball, 80 play both cricket and basketball, and 40 play all three. How many students play exactly one sport?",
      options: [],
      correctAnswer: "290",
      solution: {
        detailedExplanation: "Using the formula: exactly one = Sum(singles) - 2 x Sum(pairs) + 3 x (triple). = (300+200+150) - 2(100+60+80) + 3(40) = 650 - 480 + 120 = 290.",
        shortcutMethod: "Exactly one = Sum singles - 2(pairs) + 3(triple) = 650 - 480 + 120 = 290."
      },
      analyticsMetadata: { topicTag: "SetTheory-ExactlyOne", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.48 },
      difficultyRating: 3.6
    },
    {
      id: "topic-set_theory-11",
      format: "MCQ",
      questionText: "In a group of 40 people, 25 like rock music, 20 like classical music, and 5 like neither. How many like both rock and classical?",
      options: ["10", "15", "5", "12"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "People liking at least one = 40 - 5 = 35. n(R U C) = 35 = n(R) + n(C) - n(R n C) = 25 + 20 - n(R n C). So n(R n C) = 45 - 35 = 10.",
        shortcutMethod: "Union = 40-5=35. Overlap = 25+20-35 = 10."
      },
      analyticsMetadata: { topicTag: "SetTheory-TwoSet-Complement", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-set_theory-12",
      format: "MCQ",
      questionText: "Of 100 students, 70 study Hindi, 50 study English, and every student studies at least one of the two. What is the minimum number of students studying both?",
      options: ["20", "30", "50", "10"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Since every student studies at least one, n(H U E) = 100. Minimum n(H n E) occurs when union is maximum; union cannot exceed 100. n(H n E) = n(H) + n(E) - n(H U E) = 70 + 50 - 100 = 20. Minimum = 20.",
        shortcutMethod: "Min overlap when union is max (=|U|): |A|+|B|-|U| = 70+50-100 = 20."
      },
      analyticsMetadata: { topicTag: "SetTheory-MinIntersection", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.68 },
      difficultyRating: 3.0
    }
  ]
};

export default modernMathsTopics;
