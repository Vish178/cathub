// Quant subject taxonomy — 5 categories, 25+ topics
// Each topic has its own question pool and dedicated practice mock

export const QUANT_CATEGORIES = {
  arithmetic: {
    id: 'arithmetic',
    title: 'Arithmetic',
    subtitle: 'The Foundation',
    icon: '🔢',
    color: 'blue',
    description: 'Percentages, P&L, Ratios, TSD, Work, Interest — the bread-and-butter of CAT QA',
    topics: {
      percentages: {
        id: 'percentages',
        title: 'Percentages',
        icon: '%',
        description: 'Percentage change, successive %, comparison',
      },
      profit_loss: {
        id: 'profit_loss',
        title: 'Profit, Loss & Discount',
        icon: '💰',
        description: 'CP, SP, marked price, successive discounts',
      },
      ratio_proportion: {
        id: 'ratio_proportion',
        title: 'Ratio, Proportion & Variation',
        icon: '⚖️',
        description: 'Direct/inverse variation, proportion problems',
      },
      averages: {
        id: 'averages',
        title: 'Averages',
        icon: '📏',
        description: 'Weighted averages, replacement, deviation',
      },
      mixtures_alligations: {
        id: 'mixtures_alligations',
        title: 'Mixtures & Alligations',
        icon: '🧪',
        description: 'Mean price, repeated dilution, blending',
      },
      time_speed_distance: {
        id: 'time_speed_distance',
        title: 'Time, Speed & Distance',
        icon: '🏃',
        description: 'Relative speed, trains, boats, streams, escalators',
      },
      time_work: {
        id: 'time_work',
        title: 'Time & Work',
        icon: '⏱️',
        description: 'Pipes, cisterns, man-days, efficiency',
      },
      interest: {
        id: 'interest',
        title: 'Simple & Compound Interest',
        icon: '🏦',
        description: 'SI, CI, installments, effective rate',
      },
    },
  },

  algebra: {
    id: 'algebra',
    title: 'Algebra',
    subtitle: 'The Core',
    icon: '𝒙',
    color: 'purple',
    description: 'Equations, functions, logarithms, sequences — structural problem-solving',
    topics: {
      equations: {
        id: 'equations',
        title: 'Linear & Quadratic Equations',
        icon: '±',
        description: 'Roots, Vieta\'s, solving systems',
      },
      inequalities: {
        id: 'inequalities',
        title: 'Inequalities',
        icon: '≥',
        description: 'Linear, quadratic, modulus inequalities',
      },
      logarithms: {
        id: 'logarithms',
        title: 'Logarithms',
        icon: 'log',
        description: 'Properties, change of base, log equations',
      },
      functions_graphs: {
        id: 'functions_graphs',
        title: 'Functions & Graphs',
        icon: 'ƒ(x)',
        description: 'Domain, range, composition, transformations',
      },
      sequences_series: {
        id: 'sequences_series',
        title: 'Sequence & Series',
        icon: '∑',
        description: 'AP, GP, HP, sum formulas',
      },
      surds_indices: {
        id: 'surds_indices',
        title: 'Surds & Indices',
        icon: '√',
        description: 'Rationalization, exponent laws, simplification',
      },
    },
  },

  geometry: {
    id: 'geometry',
    title: 'Geometry & Mensuration',
    subtitle: 'Space & Shape',
    icon: '△',
    color: 'emerald',
    description: 'Triangles, circles, coordinate geometry, volumes — visual math',
    topics: {
      triangles: {
        id: 'triangles',
        title: 'Lines, Angles & Triangles',
        icon: '▲',
        description: 'Similarity, congruence, Pythagorean, Heron\'s',
      },
      circles: {
        id: 'circles',
        title: 'Circles',
        icon: '⭕',
        description: 'Chords, tangents, inscribed angles, arcs',
      },
      polygons: {
        id: 'polygons',
        title: 'Quadrilaterals & Polygons',
        icon: '⬢',
        description: 'Parallelograms, trapeziums, regular polygons',
      },
      coordinate_geometry: {
        id: 'coordinate_geometry',
        title: 'Coordinate Geometry',
        icon: '📐',
        description: 'Lines, slopes, distance, loci',
      },
      mensuration: {
        id: 'mensuration',
        title: 'Mensuration 2D & 3D',
        icon: '📦',
        description: 'Area, volume, surface area — cones, spheres, cubes',
      },
    },
  },

  number_system: {
    id: 'number_system',
    title: 'Number System',
    subtitle: 'Digits & Divisors',
    icon: '#',
    color: 'amber',
    description: 'Factors, remainders, unit digits — where CAT loves to trick you',
    topics: {
      divisibility: {
        id: 'divisibility',
        title: 'Divisibility & Factors',
        icon: '÷',
        description: 'Factor counting, divisibility rules, number of divisors',
      },
      hcf_lcm: {
        id: 'hcf_lcm',
        title: 'HCF & LCM',
        icon: '⚘',
        description: 'GCD, LCM, product rule, application problems',
      },
      remainders: {
        id: 'remainders',
        title: 'Remainders',
        icon: 'mod',
        description: 'Cyclicity, Fermat\'s theorem, CRT, Euler',
      },
      unit_digit: {
        id: 'unit_digit',
        title: 'Unit Digit & Last Two Digits',
        icon: '…',
        description: 'Cyclicity of powers, last-2-digit patterns',
      },
      base_systems: {
        id: 'base_systems',
        title: 'Base Systems',
        icon: '2ⁿ',
        description: 'Binary, octal, hex conversions and arithmetic',
      },
    },
  },

  modern_maths: {
    id: 'modern_maths',
    title: 'Modern Maths',
    subtitle: 'Combinatorial Thinking',
    icon: '🎲',
    color: 'rose',
    description: 'P&C, probability, sets — counting and uncertainty',
    topics: {
      permutations_combinations: {
        id: 'permutations_combinations',
        title: 'Permutations & Combinations',
        icon: 'nCr',
        description: 'Arrangements, selections, restrictions, circular',
      },
      probability: {
        id: 'probability',
        title: 'Probability',
        icon: '🎯',
        description: 'Classical, conditional, independent events',
      },
      set_theory: {
        id: 'set_theory',
        title: 'Set Theory & Venn Diagrams',
        icon: '∪',
        description: '2-set, 3-set, max-min of intersections',
      },
    },
  },
};

// Flatten all topics with their parent category
export function getAllQuantTopics() {
  const topics = [];
  Object.values(QUANT_CATEGORIES).forEach((cat) => {
    Object.values(cat.topics).forEach((topic) => {
      topics.push({ ...topic, category: cat.id, categoryTitle: cat.title, categoryIcon: cat.icon, categoryColor: cat.color });
    });
  });
  return topics;
}

export function getTopicById(topicId) {
  for (const cat of Object.values(QUANT_CATEGORIES)) {
    if (cat.topics[topicId]) {
      return { ...cat.topics[topicId], category: cat.id, categoryTitle: cat.title, categoryColor: cat.color };
    }
  }
  return null;
}

// Topic tag keywords used to match existing questions to topics
// (Existing questions have topicTag in analyticsMetadata)
export const TOPIC_TAG_MAP = {
  percentages: ['percent', 'percentage', '%'],
  profit_loss: ['profit', 'loss', 'discount', 'marked price', 'cp', 'sp', 'cost price'],
  ratio_proportion: ['ratio', 'proportion', 'variation'],
  averages: ['average', 'mean', 'avg'],
  mixtures_alligations: ['mixture', 'alligation', 'blend'],
  time_speed_distance: ['speed', 'distance', 'train', 'boat', 'stream', 'escalator', 'tsd'],
  time_work: ['work', 'pipe', 'cistern', 'man-day'],
  interest: ['interest', 'simple interest', 'compound interest', 'si', 'ci'],
  equations: ['equation', 'quadratic', 'linear eq', 'root'],
  inequalities: ['inequality', 'inequalit'],
  logarithms: ['log', 'logarithm'],
  functions_graphs: ['function', 'f(x)', 'graph'],
  sequences_series: ['ap', 'gp', 'series', 'sequence', 'progression'],
  surds_indices: ['surd', 'index', 'indices', 'exponent'],
  triangles: ['triangle', 'similar', 'congru'],
  circles: ['circle', 'chord', 'tangent', 'arc'],
  polygons: ['polygon', 'quadrilateral', 'parallelogram', 'trapezium', 'hexagon'],
  coordinate_geometry: ['coordinate', 'x-axis', 'y-axis', 'slope'],
  mensuration: ['mensuration', 'volume', 'surface area', 'cone', 'sphere', 'cube', 'cylinder'],
  divisibility: ['divisibility', 'divisor', 'factor', 'divisib'],
  hcf_lcm: ['hcf', 'lcm', 'gcd'],
  remainders: ['remainder', 'mod', 'fermat'],
  unit_digit: ['unit digit', 'last digit', 'last two'],
  base_systems: ['base', 'binary', 'octal', 'hex'],
  permutations_combinations: ['permutation', 'combination', 'p&c', 'arrange', 'select'],
  probability: ['probability', 'chance', 'likelihood'],
  set_theory: ['set', 'venn', 'union', 'intersection', 'inclusion'],
};

export default QUANT_CATEGORIES;
