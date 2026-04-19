// DILR Charts & Diagrams Question Bank
// Each set includes a VISUAL chart/diagram (as JS data) that is rendered by
// ChartRenderer / DiagramRenderer React components. All correctAnswer values
// are mathematically derived from the actual chart/diagram data shown.

const dilrChartsBank = {
  sets: [
    // ─────────────────────────────────────────────────────────────
    // SET 1 — DI: Linear Bar Graph (5 questions)
    // Single-series vertical bar chart: monthly revenue of a company
    // Values: Jan 40, Feb 55, Mar 50, Apr 70, May 65, Jun 80
    // Total = 360, Average = 60
    // ─────────────────────────────────────────────────────────────
    {
      questionSetId: 'dilr-chart-set-1',
      setType: 'DI',
      chartType: 'bar',
      difficultyRating: 3.0,
      parentContent: {
        textPayload:
          'The bar graph below shows the monthly revenue (in Rs. crore) of Zenith Retail Ltd. for the first six months of 2025. Study the graph and answer the questions that follow.',
        chart: {
          type: 'bar',
          title: 'Monthly Revenue of Zenith Retail Ltd. (Rs. crore)',
          orientation: 'vertical',
          xLabel: 'Month',
          yLabel: 'Revenue (Rs. crore)',
          data: [
            { label: 'Jan', value: 40 },
            { label: 'Feb', value: 55 },
            { label: 'Mar', value: 50 },
            { label: 'Apr', value: 70 },
            { label: 'May', value: 65 },
            { label: 'Jun', value: 80 },
          ],
        },
      },
      childQuestions: [
        {
          id: 'dilr-chart-1-1',
          format: 'MCQ',
          questionText:
            'What is the total revenue (in Rs. crore) earned by Zenith Retail Ltd. over the six-month period?',
          options: ['340', '350', '360', '370'],
          correctAnswer: 'C',
          solution: {
            detailedExplanation:
              'Total = 40 + 55 + 50 + 70 + 65 + 80 = 360 crore.',
            shortcutMethod:
              'Pair values: (40+80) + (55+65) + (50+70) = 120 + 120 + 120 = 360.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Bar-Graph',
            averageTimeSpentSeconds: 60,
            globalAccuracyRate: 0.82,
          },
          difficultyRating: 2.0,
        },
        {
          id: 'dilr-chart-1-2',
          format: 'MCQ',
          questionText:
            'The revenue in April is what percentage of the revenue in January?',
          options: ['150%', '165%', '175%', '185%'],
          correctAnswer: 'C',
          solution: {
            detailedExplanation:
              'April revenue = 70, January revenue = 40. Percentage = (70/40) x 100 = 175%.',
            shortcutMethod: '70/40 = 1.75, i.e., 175%.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Percentage',
            averageTimeSpentSeconds: 75,
            globalAccuracyRate: 0.74,
          },
          difficultyRating: 2.5,
        },
        {
          id: 'dilr-chart-1-3',
          format: 'TITA',
          questionText:
            'Find the average monthly revenue (in Rs. crore) of Zenith Retail Ltd. for the six-month period.',
          options: null,
          correctAnswer: '60',
          solution: {
            detailedExplanation:
              'Total revenue over six months = 40+55+50+70+65+80 = 360 crore. Average = 360 / 6 = 60 crore.',
            shortcutMethod:
              'Sum = 360 and divide by 6 to get 60.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Averages',
            averageTimeSpentSeconds: 70,
            globalAccuracyRate: 0.80,
          },
          difficultyRating: 2.0,
        },
        {
          id: 'dilr-chart-1-4',
          format: 'MCQ',
          questionText:
            'Between which two consecutive months did the revenue show the highest absolute increase?',
          options: ['Jan to Feb', 'Feb to Mar', 'Mar to Apr', 'May to Jun'],
          correctAnswer: 'C',
          solution: {
            detailedExplanation:
              'Changes: Jan→Feb = +15, Feb→Mar = -5, Mar→Apr = +20, Apr→May = -5, May→Jun = +15. The largest increase is from Mar (50) to Apr (70) — a jump of 20.',
            shortcutMethod:
              'Scan bar heights for the steepest upward step — Mar to Apr climbs the most (50 → 70).',
          },
          analyticsMetadata: {
            topicTag: 'DI-Comparison',
            averageTimeSpentSeconds: 65,
            globalAccuracyRate: 0.78,
          },
          difficultyRating: 2.5,
        },
        {
          id: 'dilr-chart-1-5',
          format: 'TITA',
          questionText:
            'By what percentage did the revenue grow from January to June? (Give the answer as an integer.)',
          options: null,
          correctAnswer: '100',
          solution: {
            detailedExplanation:
              'Jan revenue = 40, Jun revenue = 80. Growth = (80 - 40)/40 x 100 = 40/40 x 100 = 100%.',
            shortcutMethod:
              'Jun is exactly double Jan (80 vs 40), so growth is 100%.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Growth-Rate',
            averageTimeSpentSeconds: 60,
            globalAccuracyRate: 0.83,
          },
          difficultyRating: 2.0,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // SET 2 — DI: Multi-Line Chart (5 questions)
    // Product A: 2020=20, 2021=30, 2022=45, 2023=50, 2024=65 (sum=210, avg=42)
    // Product B: 2020=55, 2021=45, 2022=40, 2023=55, 2024=70 (sum=265, avg=53)
    // Differences |A-B|: 2020→35, 2021→15, 2022→5, 2023→5, 2024→5
    // B>A in: 2020, 2021, 2023, 2024 (4 years); A>B only in 2022
    // ─────────────────────────────────────────────────────────────
    {
      questionSetId: 'dilr-chart-set-2',
      setType: 'DI',
      chartType: 'line',
      difficultyRating: 3.2,
      parentContent: {
        textPayload:
          'The line chart below shows annual sales (in thousand units) of two products — Product A and Product B — manufactured by a company over the years 2020 to 2024. Use the chart to answer the following questions.',
        chart: {
          type: 'line',
          title: 'Annual Sales: Product A vs Product B (thousand units)',
          xLabel: 'Year',
          yLabel: 'Sales (thousand units)',
          data: ['2020', '2021', '2022', '2023', '2024'],
          series: [
            { label: 'Product A', values: [20, 30, 45, 50, 65] },
            { label: 'Product B', values: [55, 45, 40, 55, 70] },
          ],
        },
      },
      childQuestions: [
        {
          id: 'dilr-chart-2-1',
          format: 'MCQ',
          questionText:
            'In which year did the sales of Product A first exceed the sales of Product B?',
          options: ['2021', '2022', '2023', '2024'],
          correctAnswer: 'B',
          solution: {
            detailedExplanation:
              'Year-wise comparison — 2020: A=20, B=55 (B>A); 2021: A=30, B=45 (B>A); 2022: A=45, B=40 (A>B for the first time); 2023: A=50, B=55; 2024: A=65, B=70. Product A first exceeds Product B in 2022.',
            shortcutMethod:
              'Find where the Product A line first crosses above the Product B line — that happens in 2022.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Line-Chart',
            averageTimeSpentSeconds: 70,
            globalAccuracyRate: 0.72,
          },
          difficultyRating: 2.6,
        },
        {
          id: 'dilr-chart-2-2',
          format: 'MCQ',
          questionText:
            'What was the total combined sales (in thousand units) of Product A and Product B in 2024?',
          options: ['125', '130', '135', '140'],
          correctAnswer: 'C',
          solution: {
            detailedExplanation:
              'In 2024, Product A = 65 and Product B = 70. Combined = 65 + 70 = 135 thousand units.',
            shortcutMethod: '65 + 70 = 135.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Addition',
            averageTimeSpentSeconds: 45,
            globalAccuracyRate: 0.88,
          },
          difficultyRating: 2.0,
        },
        {
          id: 'dilr-chart-2-3',
          format: 'TITA',
          questionText:
            'What is the average annual sales of Product A (in thousand units) over the five-year period?',
          options: null,
          correctAnswer: '42',
          solution: {
            detailedExplanation:
              'Product A sales: 20 + 30 + 45 + 50 + 65 = 210. Average = 210 / 5 = 42 thousand units.',
            shortcutMethod:
              'Sum = 210, divide by 5 to get 42.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Averages',
            averageTimeSpentSeconds: 75,
            globalAccuracyRate: 0.76,
          },
          difficultyRating: 2.5,
        },
        {
          id: 'dilr-chart-2-4',
          format: 'MCQ',
          questionText:
            'What is the percentage growth in sales of Product A from 2020 to 2024?',
          options: ['200%', '215%', '225%', '250%'],
          correctAnswer: 'C',
          solution: {
            detailedExplanation:
              'Product A sales in 2020 = 20, in 2024 = 65. Growth = (65 - 20)/20 x 100 = 45/20 x 100 = 225%.',
            shortcutMethod:
              '45/20 = 2.25 = 225%.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Growth-Rate',
            averageTimeSpentSeconds: 80,
            globalAccuracyRate: 0.68,
          },
          difficultyRating: 3.0,
        },
        {
          id: 'dilr-chart-2-5',
          format: 'TITA',
          questionText:
            'For how many years out of the five shown were the sales of Product B greater than the sales of Product A?',
          options: null,
          correctAnswer: '4',
          solution: {
            detailedExplanation:
              'Year by year — 2020: B(55)>A(20); 2021: B(45)>A(30); 2022: A(45)>B(40); 2023: B(55)>A(50); 2024: B(70)>A(65). Product B exceeds Product A in 2020, 2021, 2023, 2024 → 4 years.',
            shortcutMethod:
              'Count years where the Product B line lies above the Product A line — that is every year except 2022 → 4 years.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Comparison',
            averageTimeSpentSeconds: 70,
            globalAccuracyRate: 0.74,
          },
          difficultyRating: 2.8,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // SET 3 — DI: Stacked Bar Chart (4 questions)
    // Quarters → [Retail, Wholesale, Online]
    // Q1: [30,20,10] total=60
    // Q2: [40,25,15] total=80
    // Q3: [50,30,20] total=100
    // Q4: [60,35,25] total=120
    // Retail annual = 30+40+50+60 = 180
    // Q1 → Q4 growth in total = (120-60)/60 = 100%
    // ─────────────────────────────────────────────────────────────
    {
      questionSetId: 'dilr-chart-set-3',
      setType: 'DI',
      chartType: 'stackedBar',
      difficultyRating: 3.3,
      parentContent: {
        textPayload:
          'The stacked bar chart below shows the quarterly revenue of Orbit Corp. (in Rs. crore), broken down across three business segments: Retail, Wholesale, and Online. Use the chart to answer the questions.',
        chart: {
          type: 'stackedBar',
          title: 'Quarterly Revenue Breakdown — Orbit Corp. (Rs. crore)',
          categories: ['Retail', 'Wholesale', 'Online'],
          data: [
            { label: 'Q1', values: [30, 20, 10] },
            { label: 'Q2', values: [40, 25, 15] },
            { label: 'Q3', values: [50, 30, 20] },
            { label: 'Q4', values: [60, 35, 25] },
          ],
        },
      },
      childQuestions: [
        {
          id: 'dilr-chart-3-1',
          format: 'MCQ',
          questionText:
            'What was the total revenue (in Rs. crore) of Orbit Corp. in Q3?',
          options: ['90', '100', '110', '120'],
          correctAnswer: 'B',
          solution: {
            detailedExplanation:
              'Q3 totals: Retail 50 + Wholesale 30 + Online 20 = 100 crore.',
            shortcutMethod: '50+30+20 = 100.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Stacked-Bar',
            averageTimeSpentSeconds: 55,
            globalAccuracyRate: 0.85,
          },
          difficultyRating: 2.0,
        },
        {
          id: 'dilr-chart-3-2',
          format: 'MCQ',
          questionText:
            'In Q4, what percentage of total revenue came from the Online segment? (Rounded to two decimal places.)',
          options: ['18.75%', '20.00%', '20.83%', '22.50%'],
          correctAnswer: 'C',
          solution: {
            detailedExplanation:
              'Q4 total = 60 + 35 + 25 = 120. Online = 25. Percentage = (25/120) x 100 = 20.833...% ≈ 20.83%.',
            shortcutMethod: '25/120 = 5/24 ≈ 0.2083 → 20.83%.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Percentage',
            averageTimeSpentSeconds: 80,
            globalAccuracyRate: 0.66,
          },
          difficultyRating: 3.0,
        },
        {
          id: 'dilr-chart-3-3',
          format: 'TITA',
          questionText:
            'What is the total annual revenue (in Rs. crore) of the Retail segment across all four quarters?',
          options: null,
          correctAnswer: '180',
          solution: {
            detailedExplanation:
              'Retail values: Q1=30, Q2=40, Q3=50, Q4=60. Sum = 30+40+50+60 = 180 crore.',
            shortcutMethod:
              'Arithmetic progression with common difference 10: average (30+60)/2 = 45, total = 45 x 4 = 180.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Sum',
            averageTimeSpentSeconds: 65,
            globalAccuracyRate: 0.82,
          },
          difficultyRating: 2.2,
        },
        {
          id: 'dilr-chart-3-4',
          format: 'MCQ',
          questionText:
            'By what percentage did the total revenue of Orbit Corp. grow from Q1 to Q4?',
          options: ['80%', '100%', '120%', '150%'],
          correctAnswer: 'B',
          solution: {
            detailedExplanation:
              'Q1 total = 30+20+10 = 60; Q4 total = 60+35+25 = 120. Growth = (120-60)/60 x 100 = 100%.',
            shortcutMethod:
              'Q4 (120) is exactly double Q1 (60), so growth = 100%.',
          },
          analyticsMetadata: {
            topicTag: 'DI-Growth-Rate',
            averageTimeSpentSeconds: 70,
            globalAccuracyRate: 0.78,
          },
          difficultyRating: 2.6,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // SET 4 — LR: Seating Arrangement (Circular, 4 questions)
    // 6 people around a circular table, seats 1-6 clockwise, facing centre.
    // Final arrangement (seat → person):
    //   1: Arun, 2: Bhavna, 3: Chetan, 4: Deepa, 5: Esha, 6: Farhan
    // Opposite pairs: (1,4), (2,5), (3,6)
    // ─────────────────────────────────────────────────────────────
    {
      questionSetId: 'dilr-chart-set-4',
      setType: 'LR',
      chartType: 'seating',
      difficultyRating: 3.2,
      parentContent: {
        textPayload:
          'Six friends — Arun, Bhavna, Chetan, Deepa, Esha and Farhan — are seated around a circular table facing the centre. The seats are numbered 1 through 6 in clockwise order. The following is known:\n\n1. Arun is at seat 1.\n2. Bhavna sits immediately clockwise of Arun (at seat 2).\n3. Deepa sits at seat 4, exactly opposite Arun.\n4. Farhan is at seat 6.\n5. Chetan sits between Bhavna and Deepa.\n6. Esha occupies the remaining seat.',
        diagram: {
          type: 'seating',
          shape: 'circular',
          title: 'Circular Seating Arrangement',
          seats: ['Arun', 'Bhavna', 'Chetan', 'Deepa', 'Esha', 'Farhan'],
        },
      },
      childQuestions: [
        {
          id: 'dilr-chart-4-1',
          format: 'MCQ',
          questionText: 'Who is seated at seat number 3?',
          options: ['Esha', 'Chetan', 'Deepa', 'Farhan'],
          correctAnswer: 'B',
          solution: {
            detailedExplanation:
              'From clue 5, Chetan sits between Bhavna (seat 2) and Deepa (seat 4), so Chetan occupies seat 3.',
            shortcutMethod:
              'The only seat between 2 (Bhavna) and 4 (Deepa) is 3 — that is Chetan.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Seating',
            averageTimeSpentSeconds: 60,
            globalAccuracyRate: 0.84,
          },
          difficultyRating: 2.0,
        },
        {
          id: 'dilr-chart-4-2',
          format: 'MCQ',
          questionText: 'Who sits exactly opposite Bhavna?',
          options: ['Farhan', 'Deepa', 'Esha', 'Chetan'],
          correctAnswer: 'C',
          solution: {
            detailedExplanation:
              'In a six-seat circular arrangement, the seat opposite seat 2 is seat 5. Esha occupies seat 5, so Esha sits opposite Bhavna.',
            shortcutMethod:
              'Opposite pairs are (1,4), (2,5), (3,6). Bhavna is at 2; therefore Esha at 5 is opposite.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Seating',
            averageTimeSpentSeconds: 55,
            globalAccuracyRate: 0.80,
          },
          difficultyRating: 2.2,
        },
        {
          id: 'dilr-chart-4-3',
          format: 'TITA',
          questionText:
            'Counting clockwise from seat 1, at which seat number does Esha sit?',
          options: null,
          correctAnswer: '5',
          solution: {
            detailedExplanation:
              'Seat 1 is Arun, 2 is Bhavna, 3 is Chetan, 4 is Deepa, 6 is Farhan. The only remaining seat is 5, and clue 6 places Esha there.',
            shortcutMethod:
              'Eliminate the five known seats; Esha fills the only gap — seat 5.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Seating',
            averageTimeSpentSeconds: 50,
            globalAccuracyRate: 0.86,
          },
          difficultyRating: 2.0,
        },
        {
          id: 'dilr-chart-4-4',
          format: 'MCQ',
          questionText:
            'Which pair of people are seated immediately adjacent to Farhan?',
          options: [
            'Arun and Bhavna',
            'Arun and Esha',
            'Deepa and Esha',
            'Chetan and Esha',
          ],
          correctAnswer: 'B',
          solution: {
            detailedExplanation:
              'Farhan is at seat 6. Adjacent seats are 5 (Esha) and 1 (Arun, since the table is circular). Hence the neighbours are Arun and Esha.',
            shortcutMethod:
              'Neighbours of seat 6 in a circle of 6 are seats 5 and 1 — Esha and Arun.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Seating',
            averageTimeSpentSeconds: 60,
            globalAccuracyRate: 0.78,
          },
          difficultyRating: 2.4,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // SET 5 — LR: Venn Diagram 3-set (4 questions)
    // 100 students; Math (M), Physics (P), Chemistry (C)
    // Region counts (only that region):
    //   Only M = 12, Only P = 15, Only C = 10
    //   M∩P only = 5, M∩C only = 4, P∩C only = 3
    //   All three = 2, None = 49
    // Verify: 12+15+10+5+4+3+2+49 = 100 ✓
    // Total |M| = 12+5+4+2 = 23
    // Total |P| = 15+5+3+2 = 25
    // Total |C| = 10+4+3+2 = 19
    // Exactly two subjects = 5+4+3 = 12
    // Physics but not Math = 15+3 = 18
    // ─────────────────────────────────────────────────────────────
    {
      questionSetId: 'dilr-chart-set-5',
      setType: 'LR',
      chartType: 'venn',
      difficultyRating: 3.2,
      parentContent: {
        textPayload:
          'In a survey of 100 students, each student was asked which of the three subjects — Mathematics (M), Physics (P), and Chemistry (C) — they opted for. The Venn diagram below shows the number of students in each region (the numbers represent only that specific region, not cumulative totals). 49 students opted for none of the three subjects.',
        diagram: {
          type: 'venn',
          title: 'Subject Preferences of 100 Students',
          sets: ['Math', 'Physics', 'Chemistry'],
          regions: {
            A: 12,   // Only Math
            B: 15,   // Only Physics
            C: 10,   // Only Chemistry
            AB: 5,   // Math ∩ Physics only
            AC: 4,   // Math ∩ Chemistry only
            BC: 3,   // Physics ∩ Chemistry only
            ABC: 2,  // All three
            none: 49,
          },
        },
      },
      childQuestions: [
        {
          id: 'dilr-chart-5-1',
          format: 'MCQ',
          questionText:
            'How many students opted for at least one of the three subjects?',
          options: ['49', '51', '53', '55'],
          correctAnswer: 'B',
          solution: {
            detailedExplanation:
              'Students opting for at least one subject = 100 - 49 = 51. Verify: 12+15+10+5+4+3+2 = 51.',
            shortcutMethod:
              '100 total − 49 "none" = 51.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Venn',
            averageTimeSpentSeconds: 45,
            globalAccuracyRate: 0.88,
          },
          difficultyRating: 2.0,
        },
        {
          id: 'dilr-chart-5-2',
          format: 'TITA',
          questionText:
            'How many students opted for Mathematics in total?',
          options: null,
          correctAnswer: '23',
          solution: {
            detailedExplanation:
              '|Math| = (Only Math) + (M∩P only) + (M∩C only) + (M∩P∩C) = 12 + 5 + 4 + 2 = 23.',
            shortcutMethod:
              'Add the four regions inside the Math circle: 12+5+4+2 = 23.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Venn',
            averageTimeSpentSeconds: 65,
            globalAccuracyRate: 0.76,
          },
          difficultyRating: 2.5,
        },
        {
          id: 'dilr-chart-5-3',
          format: 'MCQ',
          questionText:
            'How many students opted for exactly two of the three subjects?',
          options: ['10', '12', '14', '16'],
          correctAnswer: 'B',
          solution: {
            detailedExplanation:
              'Exactly two = (M∩P only) + (M∩C only) + (P∩C only) = 5 + 4 + 3 = 12. This excludes the all-three region (2).',
            shortcutMethod:
              'Sum the three pairwise-only regions: 5+4+3 = 12.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Venn',
            averageTimeSpentSeconds: 70,
            globalAccuracyRate: 0.72,
          },
          difficultyRating: 2.8,
        },
        {
          id: 'dilr-chart-5-4',
          format: 'TITA',
          questionText:
            'How many students opted for Physics but NOT Mathematics?',
          options: null,
          correctAnswer: '18',
          solution: {
            detailedExplanation:
              'Physics but not Math = (Only Physics) + (P∩C only) = 15 + 3 = 18. Exclude M∩P only (5) and M∩P∩C (2) since both include Math.',
            shortcutMethod:
              '|P| total = 25; subtract Physics regions that also contain Math (5+2=7): 25 − 7 = 18.',
          },
          analyticsMetadata: {
            topicTag: 'LR-Venn',
            averageTimeSpentSeconds: 80,
            globalAccuracyRate: 0.68,
          },
          difficultyRating: 3.0,
        },
      ],
    },
  ],
};

export default dilrChartsBank;

// Helper: flatten all child questions across sets, each carrying the
// parent content & set-level metadata needed by the renderer.
export function getAllDILRChartQuestions() {
  return dilrChartsBank.sets.flatMap((set) =>
    set.childQuestions.map((q) => ({
      ...q,
      parentContent: set.parentContent,
      questionSetId: set.questionSetId,
      difficultyRating: set.difficultyRating,
      setType: set.setType,
    }))
  );
}
