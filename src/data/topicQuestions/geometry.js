// Topic-specific question bank for GEOMETRY & MENSURATION
// Covers triangles, circles, polygons, coordinate geometry, and mensuration

const geometryTopics = {
  triangles: [
    {
      id: "topic-triangles-1",
      format: "MCQ",
      questionText: "In triangle ABC, AB = 6 cm, BC = 8 cm, and AC = 10 cm. What is the length of the altitude from B to AC?",
      options: ["4.8 cm", "5.0 cm", "4.2 cm", "5.6 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Since 6² + 8² = 36 + 64 = 100 = 10², triangle ABC is right-angled at B. Area = (1/2) × 6 × 8 = 24 sq cm. Also Area = (1/2) × AC × h = (1/2) × 10 × h = 5h. So 5h = 24, giving h = 4.8 cm.",
        shortcutMethod: "For a right triangle, altitude to hypotenuse = (product of legs) / hypotenuse = (6 × 8)/10 = 4.8 cm."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-2",
      format: "TITA",
      questionText: "The sides of a triangle are 13 cm, 14 cm, and 15 cm. Find the area of the triangle in sq cm.",
      options: null,
      correctAnswer: "84",
      solution: {
        detailedExplanation: "Using Heron's formula: s = (13 + 14 + 15)/2 = 21. Area = √[s(s−a)(s−b)(s−c)] = √[21 × 8 × 7 × 6] = √7056 = 84 sq cm.",
        shortcutMethod: "13-14-15 is a classic triangle — its area is 84. It splits into 5-12-13 and 9-12-15 right triangles sharing altitude 12."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Heron", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.62 },
      difficultyRating: 3.0
    },
    {
      id: "topic-triangles-3",
      format: "MCQ",
      questionText: "In triangle ABC, D is a point on BC such that AD bisects angle A. If AB = 8 cm, AC = 12 cm, and BC = 15 cm, find the length of BD.",
      options: ["6 cm", "5 cm", "9 cm", "7.5 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "By the Angle Bisector Theorem, BD/DC = AB/AC = 8/12 = 2/3. Since BD + DC = 15, BD = (2/5) × 15 = 6 cm.",
        shortcutMethod: "Angle bisector divides opposite side in ratio of adjacent sides: BD : DC = 8 : 12 = 2 : 3. So BD = 2/5 of 15 = 6."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-AngleBisector", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.58 },
      difficultyRating: 3.0
    },
    {
      id: "topic-triangles-4",
      format: "MCQ",
      questionText: "Two similar triangles have areas in the ratio 16 : 25. If the perimeter of the smaller triangle is 48 cm, what is the perimeter of the larger triangle?",
      options: ["60 cm", "75 cm", "64 cm", "56 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Ratio of areas = (ratio of sides)². So ratio of sides = √(16/25) = 4/5. Perimeter ratio equals side ratio = 4 : 5. If smaller perimeter = 48, larger = 48 × (5/4) = 60 cm.",
        shortcutMethod: "Area ratio 16:25 → side ratio 4:5 → perimeter ratio 4:5. 48 × 5/4 = 60."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Similarity", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.71 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-5",
      format: "TITA",
      questionText: "In a right-angled triangle, the hypotenuse is 25 cm and one leg is 7 cm. Find the length of the other leg in cm.",
      options: null,
      correctAnswer: "24",
      solution: {
        detailedExplanation: "By Pythagoras theorem, other leg = √(25² − 7²) = √(625 − 49) = √576 = 24 cm.",
        shortcutMethod: "Recognize the 7-24-25 Pythagorean triple instantly."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Pythagoras", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-6",
      format: "MCQ",
      questionText: "In triangle ABC, DE is drawn parallel to BC with D on AB and E on AC. If AD = 4 cm, DB = 6 cm, and AE = 5 cm, what is the length of EC?",
      options: ["7.5 cm", "6 cm", "8 cm", "9 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "By the Basic Proportionality Theorem (Thales), AD/DB = AE/EC. So 4/6 = 5/EC, giving EC = 30/4 = 7.5 cm.",
        shortcutMethod: "BPT: AD/DB = AE/EC → 2/3 = 5/EC → EC = 7.5."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-BPT", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.74 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-7",
      format: "TITA",
      questionText: "An equilateral triangle has a side of 12 cm. Find its area in sq cm (round to the nearest integer).",
      options: null,
      correctAnswer: "62",
      solution: {
        detailedExplanation: "Area of equilateral triangle = (√3/4) × side² = (√3/4) × 144 = 36√3 ≈ 36 × 1.732 ≈ 62.35 ≈ 62 sq cm.",
        shortcutMethod: "(√3/4) × 12² = 36√3 ≈ 62.35, rounds to 62."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Equilateral", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.76 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-8",
      format: "MCQ",
      questionText: "The sides of a triangle are in the ratio 3 : 4 : 5 and its perimeter is 144 cm. Find the area of the triangle.",
      options: ["864 sq cm", "720 sq cm", "1080 sq cm", "960 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Sides are 36, 48, 60 (since 3x + 4x + 5x = 144 → x = 12). Since 36² + 48² = 1296 + 2304 = 3600 = 60², it is a right triangle. Area = (1/2) × 36 × 48 = 864 sq cm.",
        shortcutMethod: "3:4:5 is a right triangle. Sides × 12 = 36, 48, 60. Area = (1/2)(36)(48) = 864."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-RightTriangle", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.69 },
      difficultyRating: 3.0
    },
    {
      id: "topic-triangles-9",
      format: "MCQ",
      questionText: "In triangle ABC, the medians AD, BE, and CF intersect at G. If the area of triangle ABC is 60 sq cm, what is the area of triangle BGC?",
      options: ["20 sq cm", "15 sq cm", "30 sq cm", "10 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "The three medians divide the triangle into 6 smaller triangles of equal area. Triangle BGC consists of 2 of these 6 parts, so area = (2/6) × 60 = 20 sq cm.",
        shortcutMethod: "Centroid divides triangle into 3 equal-area sub-triangles (BGC, AGC, AGB), each = 60/3 = 20."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Centroid", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.64 },
      difficultyRating: 3.0
    },
    {
      id: "topic-triangles-10",
      format: "TITA",
      questionText: "In a right-angled triangle with legs 9 cm and 12 cm, find the length of the altitude drawn from the right angle to the hypotenuse (in cm).",
      options: null,
      correctAnswer: "7.2",
      solution: {
        detailedExplanation: "Hypotenuse = √(81 + 144) = √225 = 15 cm. Area = (1/2)(9)(12) = 54. Also Area = (1/2)(15)(h), so h = 108/15 = 7.2 cm.",
        shortcutMethod: "Altitude to hypotenuse = product of legs / hypotenuse = (9 × 12)/15 = 7.2."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Altitude", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.66 },
      difficultyRating: 3.0
    },
    {
      id: "topic-triangles-11",
      format: "MCQ",
      questionText: "In triangle ABC, angle A = 90°, AB = 6 cm, AC = 8 cm. Find the length of the median from A to BC.",
      options: ["5 cm", "4 cm", "6 cm", "4.8 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "BC = √(36 + 64) = 10 cm. In a right triangle, the median from the right angle to the hypotenuse equals half the hypotenuse = 10/2 = 5 cm.",
        shortcutMethod: "Median from right angle to hypotenuse = hypotenuse/2 = 10/2 = 5 cm."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Median", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.70 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-12",
      format: "MCQ",
      questionText: "The inradius of a triangle with sides 5, 12, and 13 cm is:",
      options: ["2 cm", "2.5 cm", "3 cm", "1.5 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "5-12-13 is a right triangle. Area = (1/2)(5)(12) = 30. Semi-perimeter s = 15. Inradius r = Area/s = 30/15 = 2 cm.",
        shortcutMethod: "For a right triangle with legs a, b and hypotenuse c: r = (a + b − c)/2 = (5 + 12 − 13)/2 = 2."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Inradius", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.63 },
      difficultyRating: 3.0
    },
    {
      id: "topic-triangles-13",
      format: "TITA",
      questionText: "In triangle ABC, AB = AC = 10 cm and BC = 12 cm. Find the area of the triangle in sq cm.",
      options: null,
      correctAnswer: "48",
      solution: {
        detailedExplanation: "Drop perpendicular from A to BC, meeting at midpoint M. BM = 6. AM = √(100 − 36) = √64 = 8. Area = (1/2)(12)(8) = 48 sq cm.",
        shortcutMethod: "Isoceles altitude = √(10² − 6²) = 8. Area = (1/2)(12)(8) = 48."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Isoceles", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.72 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-14",
      format: "MCQ",
      questionText: "The circumradius of a triangle with sides 6, 8, 10 cm is:",
      options: ["5 cm", "4 cm", "6 cm", "3 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "6-8-10 is a right triangle (6² + 8² = 10²). For any right triangle, the circumradius equals half the hypotenuse = 10/2 = 5 cm.",
        shortcutMethod: "Right triangle → circumradius = hypotenuse/2 = 10/2 = 5."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Circumradius", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.75 },
      difficultyRating: 2.5
    },
    {
      id: "topic-triangles-15",
      format: "TITA",
      questionText: "In triangle ABC, AB = 8, AC = 7, and BC = 9. Find the length of the median from A to BC (rounded to two decimals).",
      options: null,
      correctAnswer: "6.18",
      solution: {
        detailedExplanation: "Using Apollonius' theorem: AB² + AC² = 2(m² + (BC/2)²), where m is the median from A. So 64 + 49 = 2(m² + 20.25) → 113 = 2m² + 40.5 → m² = 36.25 → m ≈ 6.02. Let me recompute: 113 − 40.5 = 72.5, 72.5/2 = 36.25, √36.25 ≈ 6.02. Actually stating the formula correctly: 4m² = 2b² + 2c² − a² where a is the side opposite the median. So 4m² = 2(49) + 2(64) − 81 = 98 + 128 − 81 = 145. m² = 36.25, m ≈ 6.02.",
        shortcutMethod: "Apollonius: 4m² = 2b² + 2c² − a² = 98 + 128 − 81 = 145. m = √(145/4) ≈ 6.02."
      },
      analyticsMetadata: { topicTag: "Geometry-Triangles-Apollonius", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.48 },
      difficultyRating: 3.5
    }
  ],

  circles: [
    {
      id: "topic-circles-1",
      format: "MCQ",
      questionText: "A chord of a circle of radius 13 cm is at a distance of 5 cm from the centre. Find the length of the chord.",
      options: ["24 cm", "12 cm", "18 cm", "20 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Half of chord = √(13² − 5²) = √(169 − 25) = √144 = 12 cm. Full chord = 2 × 12 = 24 cm.",
        shortcutMethod: "Perpendicular from centre bisects chord: half-chord = √(r² − d²) = √(169 − 25) = 12. Chord = 24."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-Chord", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.76 },
      difficultyRating: 2.5
    },
    {
      id: "topic-circles-2",
      format: "MCQ",
      questionText: "Two tangents are drawn from an external point P to a circle of radius 8 cm, and the length of each tangent is 15 cm. Find the distance from P to the centre of the circle.",
      options: ["17 cm", "23 cm", "19 cm", "25 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Tangent is perpendicular to radius at the point of contact. So OP² = OT² + TP² = 8² + 15² = 64 + 225 = 289. OP = 17 cm.",
        shortcutMethod: "Right triangle with legs 8 and 15 — recognize 8-15-17 Pythagorean triple."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-Tangent", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 },
      difficultyRating: 2.5
    },
    {
      id: "topic-circles-3",
      format: "TITA",
      questionText: "In a circle of radius 10 cm, a chord AB subtends an angle of 60° at the centre. Find the length of chord AB in cm.",
      options: null,
      correctAnswer: "10",
      solution: {
        detailedExplanation: "Since angle AOB = 60° and OA = OB = 10 cm, triangle AOB is equilateral (isoceles with 60° apex → all angles 60°). So AB = OA = 10 cm.",
        shortcutMethod: "60° central angle with equal radii → equilateral → chord = radius = 10."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-Chord", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.73 },
      difficultyRating: 2.5
    },
    {
      id: "topic-circles-4",
      format: "MCQ",
      questionText: "AB is a diameter of a circle and C is a point on the circle such that angle BAC = 30°. What is the measure of angle ABC?",
      options: ["60°", "30°", "90°", "45°"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Angle in semicircle = 90°, so angle ACB = 90°. Sum of angles = 180°, so angle ABC = 180° − 90° − 30° = 60°.",
        shortcutMethod: "Angle in semicircle is 90°; the other two sum to 90°. 90 − 30 = 60."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-InscribedAngle", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-circles-5",
      format: "TITA",
      questionText: "Two parallel chords of a circle lie on the same side of the centre. Their lengths are 24 cm and 32 cm, and the radius is 20 cm. Find the distance between the chords in cm.",
      options: null,
      correctAnswer: "4",
      solution: {
        detailedExplanation: "Distance of 24 cm chord from centre = √(20² − 12²) = √(400 − 144) = √256 = 16 cm. Distance of 32 cm chord from centre = √(20² − 16²) = √(400 − 256) = √144 = 12 cm. Same side, so distance between chords = 16 − 12 = 4 cm.",
        shortcutMethod: "Distances from centre = √(r² − (half-chord)²): 16 and 12. Same side → difference = 4."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-ParallelChords", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.58 },
      difficultyRating: 3.0
    },
    {
      id: "topic-circles-6",
      format: "MCQ",
      questionText: "Two circles with radii 5 cm and 3 cm touch each other externally. What is the length of their direct common tangent?",
      options: ["2√15 cm", "8 cm", "2√10 cm", "4√5 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Distance between centres d = r₁ + r₂ = 5 + 3 = 8. Length of direct common tangent = √(d² − (r₁ − r₂)²) = √(64 − 4) = √60 = 2√15 cm.",
        shortcutMethod: "DCT = √(d² − (r₁ − r₂)²) where d = 8, r₁ − r₂ = 2 → √60 = 2√15."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-CommonTangent", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.52 },
      difficultyRating: 3.5
    },
    {
      id: "topic-circles-7",
      format: "MCQ",
      questionText: "Two circles of radii 9 cm and 4 cm have centres 13 cm apart. Find the length of their direct common tangent.",
      options: ["12 cm", "13 cm", "10 cm", "5 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Direct common tangent length = √(d² − (r₁ − r₂)²) = √(13² − (9 − 4)²) = √(169 − 25) = √144 = 12 cm.",
        shortcutMethod: "DCT = √(d² − (r₁ − r₂)²) = √(169 − 25) = 12."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-CommonTangent", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.60 },
      difficultyRating: 3.0
    },
    {
      id: "topic-circles-8",
      format: "MCQ",
      questionText: "In a circle, a chord of length 16 cm is at a distance of 6 cm from the centre. Find the radius of the circle.",
      options: ["10 cm", "12 cm", "8 cm", "14 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "r² = (half-chord)² + d² = 8² + 6² = 64 + 36 = 100. r = 10 cm.",
        shortcutMethod: "6-8-10 Pythagorean triple → r = 10."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-Chord", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.79 },
      difficultyRating: 2.5
    },
    {
      id: "topic-circles-9",
      format: "TITA",
      questionText: "The area of a circle inscribed in an equilateral triangle of side 12 cm is kπ sq cm. Find k.",
      options: null,
      correctAnswer: "12",
      solution: {
        detailedExplanation: "Inradius of equilateral triangle = side/(2√3) = 12/(2√3) = 2√3. Area = π × (2√3)² = 12π. So k = 12.",
        shortcutMethod: "Inradius of equilateral = a/(2√3). Area = π·a²/12 = 144π/12 = 12π → k = 12."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-Inscribed", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.60 },
      difficultyRating: 3.0
    },
    {
      id: "topic-circles-10",
      format: "MCQ",
      questionText: "From a point P outside a circle of radius 8 cm, a tangent PT of length 15 cm is drawn. A secant from the same point P cuts the circle at A and B with PA = 10 cm (A closer to P). Find AB.",
      options: ["12.5 cm", "22.5 cm", "14 cm", "20 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "By the Power of a Point: PA × PB = PT². So 10 × PB = 15² = 225. PB = 22.5 cm. AB = PB − PA = 22.5 − 10 = 12.5 cm.",
        shortcutMethod: "Power of Point: PT² = PA·PB → 225 = 10·PB → PB = 22.5. AB = 22.5 − 10 = 12.5."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-PowerOfPoint", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.54 },
      difficultyRating: 3.5
    },
    {
      id: "topic-circles-11",
      format: "TITA",
      questionText: "A circle has a circumference of 44 cm. Find its area in sq cm (use π = 22/7).",
      options: null,
      correctAnswer: "154",
      solution: {
        detailedExplanation: "Circumference = 2πr = 44 → r = 44 × 7/(2 × 22) = 7. Area = πr² = (22/7) × 49 = 154 sq cm.",
        shortcutMethod: "C = 44 → r = 7. Area = (22/7)(49) = 154."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-Area", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.83 },
      difficultyRating: 2.5
    },
    {
      id: "topic-circles-12",
      format: "MCQ",
      questionText: "A cyclic quadrilateral ABCD has angle A = 70°. Find the measure of angle C.",
      options: ["110°", "70°", "90°", "100°"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "In a cyclic quadrilateral, opposite angles are supplementary. So angle C = 180° − 70° = 110°.",
        shortcutMethod: "Cyclic quadrilateral: opposite angles sum to 180°. 180 − 70 = 110."
      },
      analyticsMetadata: { topicTag: "Geometry-Circles-CyclicQuad", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.88 },
      difficultyRating: 2.5
    }
  ],

  polygons: [
    {
      id: "topic-polygons-1",
      format: "MCQ",
      questionText: "The sum of the interior angles of a regular polygon is 1440°. How many sides does the polygon have?",
      options: ["10", "8", "12", "9"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Sum of interior angles = (n − 2) × 180°. So (n − 2) × 180 = 1440 → n − 2 = 8 → n = 10.",
        shortcutMethod: "(n − 2) × 180 = 1440 → n = 10."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-InteriorAngles", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-polygons-2",
      format: "MCQ",
      questionText: "Each interior angle of a regular polygon is 144°. How many sides does it have?",
      options: ["10", "8", "12", "9"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Exterior angle = 180° − 144° = 36°. Number of sides = 360°/36° = 10.",
        shortcutMethod: "Sides = 360°/exterior angle = 360/36 = 10."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-ExteriorAngles", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.83 },
      difficultyRating: 2.5
    },
    {
      id: "topic-polygons-3",
      format: "TITA",
      questionText: "A parallelogram has sides of length 10 cm and 8 cm, and one angle is 60°. Find its area in sq cm (round to the nearest integer).",
      options: null,
      correctAnswer: "69",
      solution: {
        detailedExplanation: "Area of parallelogram = ab × sin(θ) = 10 × 8 × sin 60° = 80 × (√3/2) = 40√3 ≈ 40 × 1.732 ≈ 69.28 ≈ 69 sq cm.",
        shortcutMethod: "Parallelogram area = ab sin θ = 80 × √3/2 = 40√3 ≈ 69."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Parallelogram", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.65 },
      difficultyRating: 3.0
    },
    {
      id: "topic-polygons-4",
      format: "MCQ",
      questionText: "The area of a rhombus with diagonals 16 cm and 30 cm is:",
      options: ["240 sq cm", "480 sq cm", "120 sq cm", "360 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Area of rhombus = (1/2) × d₁ × d₂ = (1/2) × 16 × 30 = 240 sq cm.",
        shortcutMethod: "Rhombus area = (d₁·d₂)/2 = (16 × 30)/2 = 240."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Rhombus", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.86 },
      difficultyRating: 2.5
    },
    {
      id: "topic-polygons-5",
      format: "MCQ",
      questionText: "A trapezium has parallel sides of 15 cm and 25 cm, and the distance between them is 12 cm. Find the area of the trapezium.",
      options: ["240 sq cm", "300 sq cm", "225 sq cm", "180 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Area of trapezium = (1/2)(sum of parallel sides)(height) = (1/2)(15 + 25)(12) = (1/2)(40)(12) = 240 sq cm.",
        shortcutMethod: "Trapezium area = (1/2)(a + b)h = (1/2)(40)(12) = 240."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Trapezium", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.84 },
      difficultyRating: 2.5
    },
    {
      id: "topic-polygons-6",
      format: "TITA",
      questionText: "Find the number of diagonals in a polygon with 12 sides.",
      options: null,
      correctAnswer: "54",
      solution: {
        detailedExplanation: "Number of diagonals = n(n − 3)/2 = 12 × 9/2 = 54.",
        shortcutMethod: "Diagonals = n(n − 3)/2 = 12·9/2 = 54."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Diagonals", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-polygons-7",
      format: "MCQ",
      questionText: "The ratio of the interior angle to the exterior angle of a regular polygon is 7 : 2. How many sides does the polygon have?",
      options: ["9", "8", "10", "7"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Interior + Exterior = 180°. Let interior = 7x, exterior = 2x. Then 9x = 180 → x = 20. Exterior = 40°. Sides = 360°/40° = 9.",
        shortcutMethod: "9x = 180 → exterior = 40° → sides = 360/40 = 9."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Angles", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.67 },
      difficultyRating: 3.0
    },
    {
      id: "topic-polygons-8",
      format: "MCQ",
      questionText: "A regular hexagon has side length 6 cm. Find its area.",
      options: ["54√3 sq cm", "36√3 sq cm", "72√3 sq cm", "48√3 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Area of regular hexagon = (3√3/2) × side² = (3√3/2) × 36 = 54√3 sq cm.",
        shortcutMethod: "Hexagon area = (3√3/2)a² = (3√3/2)(36) = 54√3."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Hexagon", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.70 },
      difficultyRating: 3.0
    },
    {
      id: "topic-polygons-9",
      format: "TITA",
      questionText: "A rectangle has a perimeter of 46 cm and a diagonal of 17 cm. Find its area in sq cm.",
      options: null,
      correctAnswer: "120",
      solution: {
        detailedExplanation: "Let sides be l and b. Then 2(l + b) = 46 → l + b = 23, and l² + b² = 17² = 289. (l + b)² = l² + b² + 2lb → 529 = 289 + 2lb → 2lb = 240 → lb = 120. So area = 120 sq cm (sides are 8 and 15).",
        shortcutMethod: "(l + b)² − (l² + b²) = 2lb → 529 − 289 = 240 → lb = 120."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Rectangle", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.58 },
      difficultyRating: 3.5
    },
    {
      id: "topic-polygons-10",
      format: "MCQ",
      questionText: "In a regular octagon, the measure of each interior angle is:",
      options: ["135°", "120°", "144°", "150°"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Interior angle = (n − 2) × 180°/n = 6 × 180°/8 = 1080°/8 = 135°.",
        shortcutMethod: "Regular octagon interior angle = 135° (standard value)."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-Octagon", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.85 },
      difficultyRating: 2.5
    },
    {
      id: "topic-polygons-11",
      format: "MCQ",
      questionText: "A square and a rectangle have the same perimeter of 48 cm. If the length of the rectangle is 16 cm, what is the difference between their areas?",
      options: ["16 sq cm", "8 sq cm", "24 sq cm", "32 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Square side = 48/4 = 12 cm; area = 144 sq cm. Rectangle: length = 16, breadth = 24 − 16 = 8 cm; area = 128 sq cm. Difference = 144 − 128 = 16 sq cm.",
        shortcutMethod: "Square area = 144, rectangle area = 16 × 8 = 128. Difference = 16."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-SquareRect", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.74 },
      difficultyRating: 3.0
    },
    {
      id: "topic-polygons-12",
      format: "TITA",
      questionText: "A regular polygon has an exterior angle of 20°. Find the number of sides.",
      options: null,
      correctAnswer: "18",
      solution: {
        detailedExplanation: "Number of sides = 360°/exterior angle = 360°/20° = 18.",
        shortcutMethod: "n = 360/20 = 18."
      },
      analyticsMetadata: { topicTag: "Geometry-Polygons-ExteriorAngles", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.90 },
      difficultyRating: 2.5
    }
  ],

  coordinate_geometry: [
    {
      id: "topic-coordinate_geometry-1",
      format: "MCQ",
      questionText: "Find the distance between points A(3, 4) and B(-3, -4).",
      options: ["10", "6", "8", "14"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Distance = √[(3 − (−3))² + (4 − (−4))²] = √[36 + 64] = √100 = 10.",
        shortcutMethod: "d = √(6² + 8²) = √100 = 10."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Distance", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.86 },
      difficultyRating: 2.5
    },
    {
      id: "topic-coordinate_geometry-2",
      format: "MCQ",
      questionText: "The slope of the line passing through points (2, 3) and (5, 9) is:",
      options: ["2", "3", "1/2", "6"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Slope = (y₂ − y₁)/(x₂ − x₁) = (9 − 3)/(5 − 2) = 6/3 = 2.",
        shortcutMethod: "Slope = rise/run = 6/3 = 2."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Slope", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.88 },
      difficultyRating: 2.5
    },
    {
      id: "topic-coordinate_geometry-3",
      format: "TITA",
      questionText: "Find the area of the triangle with vertices (0, 0), (6, 0), and (0, 8) in square units.",
      options: null,
      correctAnswer: "24",
      solution: {
        detailedExplanation: "The triangle is right-angled at the origin with legs 6 and 8. Area = (1/2) × 6 × 8 = 24 sq units.",
        shortcutMethod: "Right triangle at origin: Area = (1/2)(6)(8) = 24."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Area", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.87 },
      difficultyRating: 2.5
    },
    {
      id: "topic-coordinate_geometry-4",
      format: "MCQ",
      questionText: "The equation of the line passing through (2, 3) with slope −1 is:",
      options: ["x + y = 5", "x − y = −1", "x + y = 1", "x − y = 5"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Using point-slope form: y − 3 = −1(x − 2) → y − 3 = −x + 2 → x + y = 5.",
        shortcutMethod: "y − y₁ = m(x − x₁): y − 3 = −1(x − 2) → x + y = 5."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-LineEquation", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-coordinate_geometry-5",
      format: "MCQ",
      questionText: "The coordinates of the point that divides the line segment joining (1, 2) and (7, 10) internally in the ratio 2 : 1 are:",
      options: ["(5, 22/3)", "(4, 6)", "(3, 14/3)", "(6, 8)"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Using section formula: x = (2×7 + 1×1)/(2+1) = 15/3 = 5. y = (2×10 + 1×2)/3 = 22/3. Point is (5, 22/3).",
        shortcutMethod: "Section formula with ratio 2:1: x = (14 + 1)/3 = 5, y = (20 + 2)/3 = 22/3."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Section", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.66 },
      difficultyRating: 3.0
    },
    {
      id: "topic-coordinate_geometry-6",
      format: "TITA",
      questionText: "Find the distance from the origin to the line 3x + 4y − 10 = 0.",
      options: null,
      correctAnswer: "2",
      solution: {
        detailedExplanation: "Distance from (x₀, y₀) to ax + by + c = 0 is |ax₀ + by₀ + c|/√(a² + b²). From origin: |−10|/√(9 + 16) = 10/5 = 2.",
        shortcutMethod: "|−10|/√25 = 10/5 = 2."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-PointLineDistance", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.72 },
      difficultyRating: 3.0
    },
    {
      id: "topic-coordinate_geometry-7",
      format: "MCQ",
      questionText: "The lines 2x + 3y − 5 = 0 and 4x + 6y + k = 0 are coincident. Find k.",
      options: ["−10", "10", "−5", "5"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "For coincident lines, coefficients must be proportional: 4/2 = 6/3 = k/(−5). So k/−5 = 2 → k = −10.",
        shortcutMethod: "Multiply first equation by 2: 4x + 6y − 10 = 0 → k = −10."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Lines", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.63 },
      difficultyRating: 3.0
    },
    {
      id: "topic-coordinate_geometry-8",
      format: "MCQ",
      questionText: "The equation of a circle with centre (3, −4) and radius 5 is:",
      options: ["x² + y² − 6x + 8y = 0", "x² + y² + 6x − 8y = 0", "x² + y² − 6x − 8y = 0", "x² + y² − 6x + 8y + 25 = 0"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "(x − 3)² + (y + 4)² = 25 → x² − 6x + 9 + y² + 8y + 16 = 25 → x² + y² − 6x + 8y + 25 − 25 = 0 → x² + y² − 6x + 8y = 0.",
        shortcutMethod: "Expand (x − 3)² + (y + 4)² = 25 and simplify."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Circle", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.65 },
      difficultyRating: 3.0
    },
    {
      id: "topic-coordinate_geometry-9",
      format: "TITA",
      questionText: "Find the slope of the line perpendicular to the line joining (1, 2) and (4, 6). (Answer to 2 decimals.)",
      options: null,
      correctAnswer: "-0.75",
      solution: {
        detailedExplanation: "Slope of line = (6 − 2)/(4 − 1) = 4/3. Perpendicular slope = −1/(4/3) = −3/4 = −0.75.",
        shortcutMethod: "Perpendicular slope = −(1/m) = −3/4 = −0.75."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Perpendicular", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.70 },
      difficultyRating: 3.0
    },
    {
      id: "topic-coordinate_geometry-10",
      format: "MCQ",
      questionText: "The midpoint of the segment joining (−3, 7) and (5, −3) is:",
      options: ["(1, 2)", "(2, 4)", "(−1, 5)", "(4, 2)"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Midpoint = ((−3 + 5)/2, (7 + (−3))/2) = (2/2, 4/2) = (1, 2).",
        shortcutMethod: "Average coordinates: ((−3+5)/2, (7−3)/2) = (1, 2)."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Midpoint", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 },
      difficultyRating: 2.5
    },
    {
      id: "topic-coordinate_geometry-11",
      format: "MCQ",
      questionText: "Find the area of the triangle whose vertices are (1, 1), (4, 5), and (7, 1).",
      options: ["12", "10", "15", "8"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Base = distance between (1,1) and (7,1) = 6 (horizontal). Height = |5 − 1| = 4. Area = (1/2)(6)(4) = 12.",
        shortcutMethod: "Base = 6 (horizontal), height = 4. Area = 12."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Area", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.71 },
      difficultyRating: 3.0
    },
    {
      id: "topic-coordinate_geometry-12",
      format: "TITA",
      questionText: "The x-intercept of the line 3x − 4y + 12 = 0 is:",
      options: null,
      correctAnswer: "-4",
      solution: {
        detailedExplanation: "Set y = 0: 3x + 12 = 0 → x = −4.",
        shortcutMethod: "y = 0 → 3x = −12 → x = −4."
      },
      analyticsMetadata: { topicTag: "Geometry-Coordinate-Intercept", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.84 },
      difficultyRating: 2.5
    }
  ],

  mensuration: [
    {
      id: "topic-mensuration-1",
      format: "MCQ",
      questionText: "The volume of a cube with edge 6 cm is:",
      options: ["216 cu cm", "36 cu cm", "144 cu cm", "72 cu cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Volume = edge³ = 6³ = 216 cu cm.",
        shortcutMethod: "Cube volume = a³ = 216."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Cube", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.95 },
      difficultyRating: 2.5
    },
    {
      id: "topic-mensuration-2",
      format: "MCQ",
      questionText: "The total surface area of a cube whose volume is 512 cu cm is:",
      options: ["384 sq cm", "256 sq cm", "192 sq cm", "512 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Edge = ∛512 = 8 cm. TSA = 6 × edge² = 6 × 64 = 384 sq cm.",
        shortcutMethod: "a = 8 → TSA = 6(64) = 384."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Cube", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.82 },
      difficultyRating: 2.5
    },
    {
      id: "topic-mensuration-3",
      format: "TITA",
      questionText: "A cylinder has a radius of 7 cm and a height of 10 cm. Find its volume in cu cm (use π = 22/7).",
      options: null,
      correctAnswer: "1540",
      solution: {
        detailedExplanation: "Volume = πr²h = (22/7)(49)(10) = 22 × 7 × 10 = 1540 cu cm.",
        shortcutMethod: "V = πr²h = (22/7)(49)(10) = 1540."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Cylinder", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.83 },
      difficultyRating: 2.5
    },
    {
      id: "topic-mensuration-4",
      format: "MCQ",
      questionText: "A cone has a base radius of 3 cm and slant height 5 cm. Find its volume.",
      options: ["12π cu cm", "15π cu cm", "9π cu cm", "20π cu cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Height h = √(5² − 3²) = 4 cm. Volume = (1/3)πr²h = (1/3)π(9)(4) = 12π cu cm.",
        shortcutMethod: "3-4-5 → h = 4. V = (1/3)π(9)(4) = 12π."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Cone", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.70 },
      difficultyRating: 3.0
    },
    {
      id: "topic-mensuration-5",
      format: "TITA",
      questionText: "The surface area of a sphere is 616 sq cm. Find its radius in cm (use π = 22/7).",
      options: null,
      correctAnswer: "7",
      solution: {
        detailedExplanation: "4πr² = 616 → r² = 616 × 7/(4 × 22) = 4312/88 = 49 → r = 7 cm.",
        shortcutMethod: "4πr² = 616 → r² = 49 → r = 7."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Sphere", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.75 },
      difficultyRating: 3.0
    },
    {
      id: "topic-mensuration-6",
      format: "MCQ",
      questionText: "Find the volume of a hemisphere with radius 6 cm (use π = 22/7; round to 2 decimals).",
      options: ["452.57 cu cm", "904.57 cu cm", "226.28 cu cm", "678.85 cu cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Volume = (2/3)πr³ = (2/3)(22/7)(216) = (2 × 22 × 216)/(3 × 7) = 9504/21 ≈ 452.57 cu cm.",
        shortcutMethod: "Hemisphere V = (2/3)πr³ = (2/3)(22/7)(216) ≈ 452.57."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Hemisphere", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.60 },
      difficultyRating: 3.0
    },
    {
      id: "topic-mensuration-7",
      format: "MCQ",
      questionText: "A cuboid has dimensions 8 cm × 6 cm × 5 cm. Find its total surface area.",
      options: ["236 sq cm", "240 sq cm", "120 sq cm", "480 sq cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "TSA = 2(lb + bh + hl) = 2(48 + 30 + 40) = 2 × 118 = 236 sq cm.",
        shortcutMethod: "TSA = 2(lb + bh + hl) = 2(118) = 236."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Cuboid", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.80 },
      difficultyRating: 2.5
    },
    {
      id: "topic-mensuration-8",
      format: "TITA",
      questionText: "A right circular cone has a base radius of 5 cm and height 12 cm. Find its total surface area in sq cm (use π = 22/7; round to the nearest integer).",
      options: null,
      correctAnswer: "283",
      solution: {
        detailedExplanation: "Slant height l = √(5² + 12²) = 13 cm. TSA = πr(l + r) = (22/7)(5)(13 + 5) = (22/7)(5)(18) = 1980/7 ≈ 282.86 ≈ 283 sq cm.",
        shortcutMethod: "l = 13. TSA = πr(l + r) = (22/7)(5)(18) = 1980/7 ≈ 283."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Cone", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.55 },
      difficultyRating: 3.5
    },
    {
      id: "topic-mensuration-9",
      format: "MCQ",
      questionText: "A solid sphere of radius 6 cm is melted and recast into small balls of radius 2 cm. How many balls are formed?",
      options: ["27", "18", "9", "36"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Number of balls = Volume of sphere / Volume of one ball = (4/3)π(6³) / (4/3)π(2³) = 216/8 = 27.",
        shortcutMethod: "Ratio of volumes = (R/r)³ = (6/2)³ = 27."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Sphere", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.76 },
      difficultyRating: 3.0
    },
    {
      id: "topic-mensuration-10",
      format: "MCQ",
      questionText: "The curved surface area of a cylinder is 176 sq cm and its height is 4 cm. Find the radius (use π = 22/7).",
      options: ["7 cm", "14 cm", "3.5 cm", "10.5 cm"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "CSA = 2πrh → 176 = 2 × (22/7) × r × 4 → 176 = (176/7)r → r = 7 cm.",
        shortcutMethod: "2πrh = 176 → r = 176 × 7/(2 × 22 × 4) = 7."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Cylinder", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.74 },
      difficultyRating: 3.0
    },
    {
      id: "topic-mensuration-11",
      format: "TITA",
      questionText: "A rectangular tank 10 m long and 8 m wide contains water to a depth of 3 m. If all the water is transferred to a cubical tank, find the minimum edge length of the cubical tank in m (round to 2 decimals).",
      options: null,
      correctAnswer: "6.21",
      solution: {
        detailedExplanation: "Volume of water = 10 × 8 × 3 = 240 cu m. Edge of cube = ∛240 ≈ 6.2145 ≈ 6.21 m.",
        shortcutMethod: "V = 240 → edge = ∛240 ≈ 6.21 m."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Volume", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.58 },
      difficultyRating: 3.5
    },
    {
      id: "topic-mensuration-12",
      format: "MCQ",
      questionText: "A hemispherical bowl of internal radius 9 cm is full of liquid. The liquid is poured into small cylindrical bottles of diameter 3 cm and height 4 cm. Find the number of bottles required.",
      options: ["54", "27", "81", "36"],
      correctAnswer: "A",
      solution: {
        detailedExplanation: "Volume of hemisphere = (2/3)π(9)³ = (2/3)π(729) = 486π. Volume of each bottle = π(1.5)²(4) = π(2.25)(4) = 9π. Number of bottles = 486π/9π = 54.",
        shortcutMethod: "Hemisphere V = 486π, bottle V = 9π → 486/9 = 54."
      },
      analyticsMetadata: { topicTag: "Geometry-Mensuration-Mixed", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.52 },
      difficultyRating: 3.5
    }
  ]
};

export default geometryTopics;
