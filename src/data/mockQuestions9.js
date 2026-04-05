// CAT Mock Test 9 - "Speed Drill Pool"
// Medium difficulty questions designed for rapid solving
// 68 questions total: 24 VARC + 22 DILR + 22 QA

const mockQuestions = {
  VARC: [
    {
      questionSetId: "m9-varc-set-1",
      section: "VARC",
      difficultyRating: 3.0,
      parentContent: {
        textPayload: `The psychology of decision-making reveals a curious paradox: humans are simultaneously capable of astonishing intuitive leaps and embarrassing logical blunders. Daniel Kahneman's dual-process framework distinguishes between System 1—fast, automatic, and emotional—and System 2—slow, deliberate, and effortful. Most everyday decisions rely on System 1 because deliberation is cognitively expensive and life is too short to analyze every choice from scratch.

The trouble is that System 1 operates on heuristics, mental shortcuts that work well on average but fail predictably in specific contexts. The availability heuristic leads us to overestimate risks that are vivid in memory—plane crashes, shark attacks—while underestimating statistically greater but less dramatic dangers like heart disease or car accidents. Anchoring causes judgments to drift toward arbitrary numbers we have recently encountered, even when those numbers carry no informational value.

Crucially, awareness of these biases does not neutralize them. Experts are as susceptible as novices, and sometimes more so because their confidence amplifies the errors. The practical implication is not that we should distrust intuition, but that we should structure decisions so that System 2 engages precisely where System 1 is known to stumble: high-stakes, unfamiliar, or statistically subtle choices. Institutions, checklists, and devil's-advocate protocols are not substitutes for judgment—they are scaffolds that direct judgment toward its best uses.`
      },
      childQuestions: [
        {
          id: "m9-varc-1",
          format: "MCQ",
          questionText: "The central argument of the passage is that:",
          options: [
            "Intuition should always be distrusted in favor of deliberate analysis",
            "Cognitive biases can be eliminated through training and awareness",
            "Decision structures should channel deliberate thinking to where intuition reliably fails",
            "Experts make fewer errors than novices because of their experience"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The final paragraph is explicit: the practical implication is to 'structure decisions so that System 2 engages precisely where System 1 is known to stumble.' This matches option C exactly.",
            shortcutMethod: "Look at the closing thesis — the author states what the 'practical implication' is. Match it to the options."
          },
          analyticsMetadata: { topicTag: "RC-Main-Idea", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.74 }
        },
        {
          id: "m9-varc-2",
          format: "MCQ",
          questionText: "According to the passage, the availability heuristic causes people to:",
          options: [
            "Trust recent information over older information",
            "Overestimate vivid risks and underestimate statistically greater ones",
            "Anchor their judgments to arbitrary recent numbers",
            "Rely on System 2 thinking in emotional situations"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 2 explicitly defines the availability heuristic as leading us to 'overestimate risks that are vivid in memory... while underestimating statistically greater but less dramatic dangers.'",
            shortcutMethod: "Scan for 'availability heuristic' in the passage — the definition follows immediately."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.85 }
        },
        {
          id: "m9-varc-3",
          format: "TITA",
          questionText: "How many specific cognitive biases are named in the passage? (Enter a number)",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "The passage names exactly two biases: the availability heuristic and anchoring. Both appear in paragraph 2.",
            shortcutMethod: "Count named biases in paragraph 2: availability + anchoring = 2."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.82 }
        },
        {
          id: "m9-varc-4",
          format: "MCQ",
          questionText: "The author mentions that experts can be 'more so' susceptible to biases because:",
          options: [
            "They rely less on System 2 thinking",
            "Their confidence amplifies their errors",
            "They have more decisions to make",
            "They are trained to trust intuition"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage states directly: 'Experts are as susceptible as novices, and sometimes more so because their confidence amplifies the errors.'",
            shortcutMethod: "Direct quote — scan paragraph 3 for 'experts.'"
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.88 }
        },
        {
          id: "m9-varc-5",
          format: "MCQ",
          questionText: "The author's view of checklists and protocols can be best described as:",
          options: [
            "Replacements for human judgment",
            "Obstacles to expert decision-making",
            "Scaffolds that direct judgment to its best uses",
            "Guarantees against cognitive bias"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The closing sentence states checklists 'are not substitutes for judgment—they are scaffolds that direct judgment toward its best uses.'",
            shortcutMethod: "Last sentence = author's view. Match to options."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.78 }
        }
      ]
    },
    {
      questionSetId: "m9-varc-set-2",
      section: "VARC",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `Space exploration has always been framed as a contest between scientific ambition and economic restraint. Through most of the twentieth century, national governments were the only entities with the resources to loft payloads beyond the atmosphere, and their motivations reflected the priorities of the Cold War: prestige, strategic signaling, and the technological byproducts of the arms race. The Apollo program was spectacular but unsustainable precisely because its purpose was symbolic rather than commercial.

The twenty-first century has introduced a different model. Private firms, operating under NASA contracts and then increasingly on their own capital, have compressed launch costs by an order of magnitude. Reusable rockets, once dismissed as engineering fantasy, now deliver satellites, supplies, and crews with a regularity that would have astonished Apollo-era planners. This shift has democratized access to low Earth orbit, enabling universities, startups, and smaller nations to conduct research that was previously the exclusive domain of superpowers.

Yet the privatization of space introduces its own pathologies. Orbital debris accumulates without clear accountability. A handful of firms now control the infrastructure on which global communications and navigation will increasingly depend. The scientific aims of exploration sit uneasily alongside commercial imperatives for tourism, advertising, and resource extraction. The open question is whether governance structures can evolve quickly enough to prevent the commons above us from becoming another tragedy of the commons.`
      },
      childQuestions: [
        {
          id: "m9-varc-6",
          format: "MCQ",
          questionText: "The author characterizes the Apollo program as:",
          options: [
            "An economically sound investment in technology",
            "Spectacular but unsustainable due to its symbolic purpose",
            "A scientific triumph with lasting commercial benefits",
            "A failure that set back space exploration"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 1 states: 'The Apollo program was spectacular but unsustainable precisely because its purpose was symbolic rather than commercial.'",
            shortcutMethod: "Direct quote from end of paragraph 1."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.88 }
        },
        {
          id: "m9-varc-7",
          format: "MCQ",
          questionText: "The phrase 'tragedy of the commons' in the final paragraph is used to suggest:",
          options: [
            "A dramatic failure of private industry",
            "Risks of collective resource degradation without governance",
            "The emotional toll of space exploration",
            "That space should belong to all humanity"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The phrase refers to the classic concept where shared resources get overused when no one is accountable. The author uses it to flag risks of unregulated orbital commons.",
            shortcutMethod: "Context: 'without clear accountability' + 'commons above us' → collective degradation."
          },
          analyticsMetadata: { topicTag: "RC-Vocabulary", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.70 }
        },
        {
          id: "m9-varc-8",
          format: "MCQ",
          questionText: "Which of the following is NOT cited as a consequence of privatization of space?",
          options: [
            "Reduced launch costs",
            "Accumulation of orbital debris",
            "Concentration of critical infrastructure in few firms",
            "Government abandonment of space science"
          ],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "Reduced costs (paragraph 2), debris and infrastructure concentration (paragraph 3) are all mentioned. Government abandonment is not discussed.",
            shortcutMethod: "Elimination — check each option against the passage; D has no textual support."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.80 }
        },
        {
          id: "m9-varc-9",
          format: "TITA",
          questionText: "By what factor have launch costs been compressed, according to the passage? (Enter the number representing 'an order of magnitude')",
          options: null,
          correctAnswer: "10",
          solution: {
            detailedExplanation: "'An order of magnitude' means a factor of 10.",
            shortcutMethod: "Order of magnitude = 10x."
          },
          analyticsMetadata: { topicTag: "RC-Vocabulary", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.75 }
        },
        {
          id: "m9-varc-10",
          format: "MCQ",
          questionText: "The author's tone toward the privatization of space is best described as:",
          options: [
            "Enthusiastically celebratory",
            "Guardedly ambivalent",
            "Openly hostile",
            "Nostalgically regretful"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The author acknowledges benefits (democratized access, reduced costs) but also pathologies (debris, concentration). The overall tone weighs both sides with caution — guardedly ambivalent.",
            shortcutMethod: "Note 'Yet' at the start of paragraph 3 — it signals a shift to concerns, indicating ambivalence."
          },
          analyticsMetadata: { topicTag: "RC-Tone", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.68 }
        }
      ]
    },
    {
      questionSetId: "m9-varc-set-3",
      section: "VARC",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `Economic historians have long puzzled over why the Industrial Revolution began in Britain rather than in China, which in 1700 enjoyed comparable—and in some sectors superior—technological sophistication. The conventional answer emphasizes coal: Britain's geological luck placed vast reserves near population centers and navigable water, making the transition to fossil-fuel industry cheap and natural. China's coal, by contrast, lay inconveniently far from its economic heartland.

More recent scholarship has complicated this picture. Wages in eighteenth-century Britain were unusually high relative to the price of capital, creating incentives for employers to replace expensive labor with machinery. In regions where labor remained cheap, the same inventions existed on paper but were not adopted because manual methods remained economically rational. Thus the Industrial Revolution was less the discovery of new technology than the deployment of existing technology in response to a peculiar price structure.

Institutions matter too. Britain's property rights regime, parliamentary oversight of taxation, and legal protections for patents offered inventors and investors credible assurance that returns on innovation would not be confiscated. Whether these institutions were causes or consequences of economic growth remains contested, but their correlation with the timing of industrialization is too strong to ignore. The lesson is that economic transformations emerge from specific conjunctions of geography, prices, and institutions—not from technology alone.`
      },
      childQuestions: [
        {
          id: "m9-varc-11",
          format: "MCQ",
          questionText: "The passage's main argument is that the Industrial Revolution in Britain resulted from:",
          options: [
            "Superior British technology relative to China",
            "A combination of geography, wage structures, and institutions",
            "Coal deposits alone",
            "Parliamentary oversight of inventions"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The closing sentence summarizes: 'economic transformations emerge from specific conjunctions of geography, prices, and institutions—not from technology alone.'",
            shortcutMethod: "Last sentence = thesis. Match to options."
          },
          analyticsMetadata: { topicTag: "RC-Main-Idea", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.82 }
        },
        {
          id: "m9-varc-12",
          format: "MCQ",
          questionText: "According to the passage, inventions were not adopted in low-wage regions because:",
          options: [
            "The inventions did not exist there",
            "Manual methods remained economically rational",
            "Workers resisted mechanization",
            "Governments banned new technology"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 2 states: 'the same inventions existed on paper but were not adopted because manual methods remained economically rational.'",
            shortcutMethod: "Direct quote from paragraph 2."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.85 }
        },
        {
          id: "m9-varc-13",
          format: "MCQ",
          questionText: "The author uses the China comparison to:",
          options: [
            "Prove British technological superiority",
            "Challenge the assumption that technology alone drives industrialization",
            "Criticize China's economic policies",
            "Argue China will soon industrialize"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "China in 1700 had comparable or superior technology yet did not industrialize first. This puzzle motivates the passage's argument that technology alone is not enough.",
            shortcutMethod: "The China reference opens the puzzle that the rest of the passage resolves."
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.75 }
        },
        {
          id: "m9-varc-14",
          format: "TITA",
          questionText: "How many broad categories of factors does the passage identify as driving industrialization? (Enter a number)",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Three categories: geography, prices (wages), and institutions, as explicitly listed in the final sentence.",
            shortcutMethod: "Count items in the closing list: geography, prices, institutions = 3."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.90 }
        },
        {
          id: "m9-varc-15",
          format: "MCQ",
          questionText: "The word 'conjunctions' in the final sentence most nearly means:",
          options: [
            "Grammatical connectors",
            "Astronomical alignments",
            "Specific combinations",
            "Legal contracts"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "In context, 'specific conjunctions of geography, prices, and institutions' means specific combinations or coincidences of these factors.",
            shortcutMethod: "Substitute each option; 'specific combinations' fits the argument about factors working together."
          },
          analyticsMetadata: { topicTag: "RC-Vocabulary", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.78 }
        }
      ]
    },
    // Standalone VARC questions
    {
      questionSetId: "m9-varc-standalone-1",
      section: "VARC",
      difficultyRating: 3.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m9-varc-16",
          format: "MCQ",
          questionText: "Five sentences labeled A-E are given. Choose the correct sequence:\n\nA. This gap between promise and practice has fueled skepticism about corporate climate pledges.\nB. In the past decade, hundreds of companies have announced net-zero carbon targets.\nC. Yet fewer than one in five have published credible plans to achieve those targets.\nD. Independent auditors now play a growing role in verifying corporate claims.\nE. The targets typically reference dates two or three decades into the future.",
          options: ["BECAD", "BCEAD", "BECDA", "BEACD"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "B introduces the phenomenon (net-zero targets), E describes the targets (dates far in future), C introduces the problem (few credible plans), A states the consequence (skepticism), D provides the emerging response (auditors).",
            shortcutMethod: "B is the opener. D is the most natural closer (introduces a new actor—auditors). The middle flows: E describes → C contrasts → A concludes."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.55 }
        },
        {
          id: "m9-varc-17",
          format: "TITA",
          questionText: "Five sentences are labeled 1-5. Four form a coherent paragraph. Identify the ODD sentence (enter the number):\n\n1. The gut microbiome contains trillions of bacteria that influence digestion and immunity.\n2. Recent studies link microbiome diversity to mental health outcomes.\n3. Quantum computing may revolutionize cryptography in the coming decade.\n4. Diets rich in fiber tend to promote microbial diversity.\n5. Antibiotic overuse can disrupt the microbiome for months or years.",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Sentences 1, 2, 4, and 5 all discuss the gut microbiome. Sentence 3 is about quantum computing — unrelated.",
            shortcutMethod: "Common theme = microbiome. Sentence 3 is about quantum computing — outlier."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.85 }
        },
        {
          id: "m9-varc-18",
          format: "MCQ",
          questionText: "Fill in the blank with the most appropriate option:\n\n'The minister's response was deliberately _____, offering just enough information to satisfy journalists without committing to any specific policy.'",
          options: ["evasive", "candid", "verbose", "incoherent"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "'Evasive' means avoiding directness — it matches 'just enough information... without committing to any specific policy.' Candid is the opposite; verbose doesn't fit; incoherent contradicts 'deliberately.'",
            shortcutMethod: "The clause after the blank describes the behavior: avoiding commitment = evasive."
          },
          analyticsMetadata: { topicTag: "Vocabulary-FillBlank", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.88 }
        },
        {
          id: "m9-varc-19",
          format: "MCQ",
          questionText: "Choose the best summary:\n\nRemote learning during the pandemic produced mixed outcomes. Students with access to reliable internet, quiet study spaces, and engaged parents often matched or exceeded their prior academic performance. Students lacking these resources frequently fell behind, widening pre-existing educational inequalities. The technology itself was neutral; its effects depended almost entirely on the circumstances in which it was used.",
          options: [
            "Remote learning was a failure that should not be repeated",
            "Remote learning outcomes depended on students' home resources, amplifying existing inequalities",
            "Technology can never substitute for in-person instruction",
            "Students with engaged parents always outperform their peers"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The paragraph's central claim is that remote learning's outcomes varied by access to resources, and that inequalities were amplified. Option B captures this precisely.",
            shortcutMethod: "Last two sentences = summary. B matches them."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.80 }
        },
        {
          id: "m9-varc-20",
          format: "TITA",
          questionText: "Arrange the following sentences into a coherent paragraph and enter the sequence (e.g., ABCDE):\n\nA. Over centuries, these grains shaped cuisines across four continents.\nB. Rice, wheat, and maize together supply over half of humanity's caloric needs.\nC. Each was domesticated independently in a different region thousands of years ago.\nD. Today, plant breeders work to make them resilient to climate change.\nE. Their spread followed trade routes, conquest, and colonial expansion.",
          options: null,
          correctAnswer: "BCEAD",
          solution: {
            detailedExplanation: "B opens with the topic (three staple grains). C explains origins (domestication). E describes spread (trade, conquest). A describes lasting impact (cuisines). D closes with present-day concerns (climate breeding).",
            shortcutMethod: "B introduces. D ('today') closes. Middle follows chronology: origin → spread → impact."
          },
          analyticsMetadata: { topicTag: "ParaJumble-TITA", averageTimeSpentSeconds: 130, globalAccuracyRate: 0.50 }
        },
        {
          id: "m9-varc-21",
          format: "MCQ",
          questionText: "Identify the ODD sentence:\n\nA. Volcanic eruptions can inject sulfur aerosols into the stratosphere.\nB. These aerosols reflect sunlight, temporarily cooling the planet.\nC. The 1815 Tambora eruption caused the 'Year Without a Summer' in 1816.\nD. Modern solar panels achieve over 20% energy conversion efficiency.\nE. Scientists study past eruptions to understand climate feedback mechanisms.",
          options: ["A", "B", "C", "D"],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "A, B, C, and E discuss volcanic eruptions and climate effects. D is about solar panel technology — unrelated.",
            shortcutMethod: "Theme = volcanic climate effects. D is about solar panels — outlier."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.88 }
        },
        {
          id: "m9-varc-22",
          format: "MCQ",
          questionText: "Fill in the blank:\n\n'Critics accused the author of _____, pointing to passages that appeared copied verbatim from earlier works without attribution.'",
          options: ["hyperbole", "plagiarism", "prolixity", "ambiguity"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "'Copied verbatim without attribution' is the definition of plagiarism.",
            shortcutMethod: "Clue phrase = 'copied verbatim without attribution' = plagiarism."
          },
          analyticsMetadata: { topicTag: "Vocabulary-FillBlank", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.92 }
        },
        {
          id: "m9-varc-23",
          format: "TITA",
          questionText: "Five sentences are labeled 1-5. Four form a paragraph. Identify the ODD sentence (enter the number):\n\n1. The printing press transformed Europe by making books affordable.\n2. Literacy rates climbed sharply in the centuries after Gutenberg.\n3. Vernacular languages gained prestige as printing shifted away from Latin.\n4. Scientific communication accelerated as journals proliferated.\n5. Roman aqueducts relied on gravity to transport water across vast distances.",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "Sentences 1-4 all concern the printing press and its cultural/scientific effects. Sentence 5 is about Roman aqueducts — unrelated.",
            shortcutMethod: "Common theme = printing press. Sentence 5 is about aqueducts — outlier."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.90 }
        },
        {
          id: "m9-varc-24",
          format: "MCQ",
          questionText: "Choose the most appropriate summary:\n\nTraditional apprenticeships linked young workers to master craftspeople through years of hands-on training and gradual responsibility. Modern internships, while adopting the vocabulary of apprenticeship, often provide only brief exposure and limited mentorship. The economic pressures that compress training timelines also erode the deep skill transmission that made apprenticeships effective engines of social mobility.",
          options: [
            "Internships are superior to apprenticeships because they are shorter",
            "Modern internships fall short of traditional apprenticeships in depth and mentorship, weakening skill transfer",
            "Apprenticeships have been completely replaced by internships worldwide",
            "Economic pressures will eventually restore traditional apprenticeships"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage contrasts deep traditional apprenticeships with shallow modern internships and argues the shift erodes skill transmission and social mobility.",
            shortcutMethod: "Identify the contrast: traditional = deep; modern = shallow. Option B captures it."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.78 }
        }
      ]
    }
  ],

  DILR: [
    {
      questionSetId: "m9-dilr-set-1",
      section: "DILR",
      difficultyRating: 3.0,
      parentContent: {
        textPayload: `The following table shows the quarterly revenue (in ₹ crore) of four divisions of a company in 2023:

| Division | Q1  | Q2  | Q3  | Q4  |
|----------|-----|-----|-----|-----|
| Alpha    |  40 |  45 |  50 |  55 |
| Beta     |  30 |  36 |  42 |  48 |
| Gamma    |  25 |  30 |  35 |  40 |
| Delta    |  20 |  22 |  25 |  28 |

Additional notes:
• Operating margin in 2023: Alpha = 20%, Beta = 25%, Gamma = 30%, Delta = 15%
• Operating profit = Revenue × Operating margin`
      },
      childQuestions: [
        {
          id: "m9-dilr-1",
          format: "TITA",
          questionText: "What is the total annual revenue (in ₹ crore) of division Alpha in 2023?",
          options: null,
          correctAnswer: "190",
          solution: {
            detailedExplanation: "Alpha total = 40 + 45 + 50 + 55 = 190 crore.",
            shortcutMethod: "40+45+50+55 = 190"
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.94 }
        },
        {
          id: "m9-dilr-2",
          format: "MCQ",
          questionText: "Which division had the highest percentage growth in revenue from Q1 to Q4?",
          options: ["Alpha 37.5%", "Beta 60%", "Gamma 60%", "Delta 40%"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Alpha: (55-40)/40 = 37.5%. Beta: (48-30)/30 = 60%. Gamma: (40-25)/25 = 60%. Delta: (28-20)/20 = 40%. Beta and Gamma are tied at 60%. Beta is the first-listed max.",
            shortcutMethod: "Compute ratios: Alpha 1.375, Beta 1.6, Gamma 1.6, Delta 1.4. Max = 1.6 → Beta/Gamma."
          },
          analyticsMetadata: { topicTag: "DI-Percentage", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.62 }
        },
        {
          id: "m9-dilr-3",
          format: "TITA",
          questionText: "What is the operating profit (in ₹ crore) of division Beta for the entire year 2023?",
          options: null,
          correctAnswer: "39",
          solution: {
            detailedExplanation: "Beta total revenue = 30+36+42+48 = 156 crore. Operating margin = 25%. Profit = 156 × 0.25 = 39 crore.",
            shortcutMethod: "Sum Beta = 156. 156 × 0.25 = 39."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.82 }
        },
        {
          id: "m9-dilr-4",
          format: "MCQ",
          questionText: "What is the operating profit (in ₹ crore) of division Gamma for the entire year 2023?",
          options: ["36", "39", "42", "45"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Gamma total = 25+30+35+40 = 130 crore. Margin = 30%. Profit = 130 × 0.30 = 39 crore.",
            shortcutMethod: "Sum Gamma = 130. 130 × 0.3 = 39."
          },
          analyticsMetadata: { topicTag: "DI-Profit", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.80 }
        },
        {
          id: "m9-dilr-5",
          format: "TITA",
          questionText: "What is the combined Q4 revenue (in ₹ crore) of all four divisions?",
          options: null,
          correctAnswer: "171",
          solution: {
            detailedExplanation: "Q4: 55+48+40+28 = 171 crore.",
            shortcutMethod: "55+48+40+28 = 171"
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.92 }
        },
        {
          id: "m9-dilr-6",
          format: "MCQ",
          questionText: "In Q2, what is the ratio of Alpha's revenue to Delta's revenue?",
          options: ["45:22", "9:4", "2:1", "5:2"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Alpha Q2 = 45, Delta Q2 = 22. Ratio = 45:22 (gcd(45,22)=1, cannot simplify).",
            shortcutMethod: "45:22 has no common factor → 45:22."
          },
          analyticsMetadata: { topicTag: "DI-Ratio", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.85 }
        }
      ]
    },
    {
      questionSetId: "m9-dilr-set-2",
      section: "DILR",
      difficultyRating: 3.0,
      parentContent: {
        textPayload: `A bar chart shows the number of laptops (in thousands) sold by five brands in 2023:

| Brand   | Units (thousands) |
|---------|-------------------|
| BrandA  |  120              |
| BrandB  |   90              |
| BrandC  |  150              |
| BrandD  |   60              |
| BrandE  |  180              |

Additional:
• Average selling price per laptop: A=₹50,000, B=₹40,000, C=₹55,000, D=₹35,000, E=₹60,000`
      },
      childQuestions: [
        {
          id: "m9-dilr-7",
          format: "TITA",
          questionText: "What is the total number of laptops (in thousands) sold by all five brands combined?",
          options: null,
          correctAnswer: "600",
          solution: {
            detailedExplanation: "120+90+150+60+180 = 600 thousand.",
            shortcutMethod: "120+90+150+60+180 = 600"
          },
          analyticsMetadata: { topicTag: "DI-BarChart", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.95 }
        },
        {
          id: "m9-dilr-8",
          format: "MCQ",
          questionText: "Which brand had the highest total revenue in 2023?",
          options: ["BrandA", "BrandC", "BrandE", "BrandB"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Revenue (in ₹ crore): A=120k×50k=600, B=90k×40k=360, C=150k×55k=825, D=60k×35k=210, E=180k×60k=1080. BrandE has the highest at 1080 crore.",
            shortcutMethod: "E has highest units (180) AND highest price (60k) → highest revenue."
          },
          analyticsMetadata: { topicTag: "DI-Revenue", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.85 }
        },
        {
          id: "m9-dilr-9",
          format: "MCQ",
          questionText: "What is BrandA's market share (by units) as a percentage of the total?",
          options: ["15%", "20%", "25%", "30%"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "BrandA share = 120/600 × 100 = 20%.",
            shortcutMethod: "120/600 = 1/5 = 20%"
          },
          analyticsMetadata: { topicTag: "DI-Percentage", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.92 }
        },
        {
          id: "m9-dilr-10",
          format: "TITA",
          questionText: "What is the total revenue (in ₹ crore) generated by BrandC?",
          options: null,
          correctAnswer: "825",
          solution: {
            detailedExplanation: "BrandC revenue = 150,000 × 55,000 = ₹825,00,00,000 = ₹825 crore.",
            shortcutMethod: "150 × 55 × 10⁷ / 10⁷ = 8250 → 825 crore."
          },
          analyticsMetadata: { topicTag: "DI-Revenue", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.78 }
        },
        {
          id: "m9-dilr-11",
          format: "MCQ",
          questionText: "By how many thousand units do BrandE's sales exceed BrandD's sales?",
          options: ["100", "120", "130", "90"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "180 - 60 = 120 thousand units.",
            shortcutMethod: "180-60 = 120"
          },
          analyticsMetadata: { topicTag: "DI-BarChart", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.96 }
        },
        {
          id: "m9-dilr-12",
          format: "TITA",
          questionText: "What is the average number of units (in thousands) sold per brand?",
          options: null,
          correctAnswer: "120",
          solution: {
            detailedExplanation: "Total = 600 thousand. Average = 600/5 = 120 thousand.",
            shortcutMethod: "600/5 = 120"
          },
          analyticsMetadata: { topicTag: "DI-BarChart", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.94 }
        }
      ]
    },
    {
      questionSetId: "m9-dilr-set-3",
      section: "DILR",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `Five players — P, Q, R, S, T — are candidates for a 3-person team. The following conditions apply:

1. If P is selected, then Q must also be selected.
2. R and S cannot both be selected.
3. T must be selected if R is selected.
4. At least one of Q or T must be selected.

All teams must have exactly 3 players.`
      },
      childQuestions: [
        {
          id: "m9-dilr-13",
          format: "MCQ",
          questionText: "Which of the following is a valid 3-person team?",
          options: ["P, Q, R", "P, Q, S", "P, R, S", "Q, R, S"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Test each: P,Q,R: R selected but T not selected → violates condition 3. P,Q,S: P→Q ✓, R&S not both (R absent) ✓, R absent so cond 3 vacuous, Q present ✓. Valid. P,R,S: R&S both → violates cond 2. Q,R,S: R&S both → violates cond 2.",
            shortcutMethod: "Eliminate: R+S together rules out C,D. R without T rules out A. Answer: B."
          },
          analyticsMetadata: { topicTag: "LR-TeamSelection", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.72 }
        },
        {
          id: "m9-dilr-14",
          format: "TITA",
          questionText: "How many distinct 3-person teams can be formed that satisfy all conditions?",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "Enumerating all C(5,3)=10 teams:\nPQR: R→T needed, T absent, fail. PQS: ✓. PQT: ✓. PRS: R&S fail. PRT: P→Q fail. PST: P→Q fail. QRS: R&S fail. QRT: ✓. QST: ✓. RST: R&S fail.\nValid teams: PQS, PQT, QRT, QST = 4.",
            shortcutMethod: "Must include Q or T. Eliminate R+S, and P-without-Q combos. Count: PQS, PQT, QRT, QST = 4."
          },
          analyticsMetadata: { topicTag: "LR-TeamSelection", averageTimeSpentSeconds: 150, globalAccuracyRate: 0.48 }
        },
        {
          id: "m9-dilr-15",
          format: "MCQ",
          questionText: "If P is selected, which player must also be selected?",
          options: ["R", "S", "Q", "T"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Condition 1 directly states: If P is selected, then Q must also be selected.",
            shortcutMethod: "Direct from condition 1."
          },
          analyticsMetadata: { topicTag: "LR-TeamSelection", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.96 }
        },
        {
          id: "m9-dilr-16",
          format: "TITA",
          questionText: "If R is selected, how many valid 3-person teams are possible?",
          options: null,
          correctAnswer: "1",
          solution: {
            detailedExplanation: "R selected → T must be selected (cond 3), S cannot be (cond 2), P cannot be (P needs Q, already 3 positions filled with R,T,Q). Third member must be Q. Only team: {Q,R,T}.",
            shortcutMethod: "R→T. Exclude S. Avoid P (needs Q). Third = Q. Team = {Q,R,T}. Count = 1."
          },
          analyticsMetadata: { topicTag: "LR-TeamSelection", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.65 }
        }
      ]
    },
    {
      questionSetId: "m9-dilr-set-4",
      section: "DILR",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `In a round-robin tournament, four teams — W, X, Y, Z — played each other exactly once. Win = 3 points, Draw = 1 point each, Loss = 0 points. Final standings:

• W: 7 points
• X: 4 points
• Y: 4 points
• Z: 1 point

Each team played 3 matches.`
      },
      childQuestions: [
        {
          id: "m9-dilr-17",
          format: "TITA",
          questionText: "How many matches ended in a draw in this tournament?",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "Total matches = C(4,2) = 6. Total points = 7+4+4+1 = 16. Each win match distributes 3 pts; each draw distributes 2 pts. If w+d=6 and 3w+2d=16 → w=4, d=2. So 2 draws.",
            shortcutMethod: "If all 6 were wins, total = 18. Actual = 16. Shortfall = 2 = number of draws."
          },
          analyticsMetadata: { topicTag: "LR-Tournament", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 }
        },
        {
          id: "m9-dilr-18",
          format: "MCQ",
          questionText: "How many matches did team W win?",
          options: ["1", "2", "3", "0"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "W has 7 points in 3 matches. 3 wins = 9 (too many). 2 wins + 1 draw = 7 ✓. So W won 2, drew 1.",
            shortcutMethod: "7 = 2(3) + 1(1) → 2 wins, 1 draw."
          },
          analyticsMetadata: { topicTag: "LR-Tournament", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.80 }
        },
        {
          id: "m9-dilr-19",
          format: "TITA",
          questionText: "How many points did team Z earn?",
          options: null,
          correctAnswer: "1",
          solution: {
            detailedExplanation: "Directly given: Z has 1 point.",
            shortcutMethod: "Read from data."
          },
          analyticsMetadata: { topicTag: "LR-Tournament", averageTimeSpentSeconds: 10, globalAccuracyRate: 0.98 }
        },
        {
          id: "m9-dilr-20",
          format: "MCQ",
          questionText: "Which of the following best describes team Z's performance?",
          options: [
            "Z won 1 match and lost 2",
            "Z drew 1 match and lost 2",
            "Z drew 3 matches",
            "Z won 0 matches and drew 0"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Z has 1 point in 3 matches. No win possible (would give 3 pts). 1 draw + 2 losses = 1 point ✓.",
            shortcutMethod: "1 point = exactly 1 draw + 2 losses."
          },
          analyticsMetadata: { topicTag: "LR-Tournament", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        }
      ]
    },
    {
      questionSetId: "m9-dilr-set-5",
      section: "DILR",
      difficultyRating: 3.0,
      parentContent: {
        textPayload: `A 3x3 matrix puzzle: Nine students (S1-S9) are placed in a 3x3 grid (rows 1-3 top-to-bottom, columns 1-3 left-to-right) based on these conditions:

1. S1 is in the center cell (2,2).
2. S2 is directly above S1.
3. S5 is in cell (1,1).
4. S6 is directly below S5.
5. S8 is in cell (1,3).
6. S4 is in the same row as S1 and to the right of S1.
7. S3 is in the bottom-right corner.
8. S7 is in cell (3,2).
9. S9 takes the remaining cell.`
      },
      childQuestions: [
        {
          id: "m9-dilr-21",
          format: "MCQ",
          questionText: "Which student is in cell (3,1)?",
          options: ["S6", "S9", "S2", "S7"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Placements: S1=(2,2), S2=(1,2), S5=(1,1), S6=(2,1), S8=(1,3), S4=(2,3), S3=(3,3), S7=(3,2). Remaining cell is (3,1) → S9.",
            shortcutMethod: "Fill all cells per conditions; the unfilled cell (3,1) gets S9."
          },
          analyticsMetadata: { topicTag: "LR-Matrix", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.75 }
        },
        {
          id: "m9-dilr-22",
          format: "TITA",
          questionText: "In which row (1, 2, or 3) is student S4 placed?",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "S4 is in the same row as S1. S1 is at (2,2), row 2. So S4 is in row 2.",
            shortcutMethod: "S1 row = 2 → S4 row = 2."
          },
          analyticsMetadata: { topicTag: "LR-Matrix", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.94 }
        }
      ]
    }
  ],

  QA: [
    {
      questionSetId: "m9-qa-standalone-1",
      section: "QA",
      difficultyRating: 2.5,
      parentContent: null,
      childQuestions: [
        {
          id: "m9-qa-1",
          format: "MCQ",
          questionText: "What is the LCM of 12, 18, and 24?",
          options: ["72", "36", "144", "48"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Prime factorization: 12=2²×3, 18=2×3², 24=2³×3. LCM = 2³×3² = 8×9 = 72.",
            shortcutMethod: "Take max powers of each prime: 2³=8, 3²=9 → 72."
          },
          analyticsMetadata: { topicTag: "NumberSystem-LCM", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.88 }
        },
        {
          id: "m9-qa-2",
          format: "MCQ",
          questionText: "What is the HCF of 48 and 60?",
          options: ["6", "8", "12", "24"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "48 = 2⁴×3, 60 = 2²×3×5. HCF = 2²×3 = 12.",
            shortcutMethod: "Min powers of common primes: 2²×3 = 12."
          },
          analyticsMetadata: { topicTag: "NumberSystem-HCF", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 }
        },
        {
          id: "m9-qa-3",
          format: "TITA",
          questionText: "Find 15% of 240.",
          options: null,
          correctAnswer: "36",
          solution: {
            detailedExplanation: "15% of 240 = 0.15 × 240 = 36.",
            shortcutMethod: "10% of 240 = 24; 5% = 12; 15% = 24+12 = 36."
          },
          analyticsMetadata: { topicTag: "Percentage", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.95 }
        },
        {
          id: "m9-qa-4",
          format: "MCQ",
          questionText: "A train travels 180 km in 3 hours. At the same speed, how far will it travel in 5 hours?",
          options: ["250 km", "300 km", "320 km", "360 km"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Speed = 180/3 = 60 km/h. Distance in 5 hours = 60×5 = 300 km.",
            shortcutMethod: "Direct proportion: 180 × 5/3 = 300 km."
          },
          analyticsMetadata: { topicTag: "TimeSpeedDistance", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.93 }
        },
        {
          id: "m9-qa-5",
          format: "TITA",
          questionText: "In triangle ABC, angle A = 45° and angle B = 65°. Find angle C in degrees.",
          options: null,
          correctAnswer: "70",
          solution: {
            detailedExplanation: "Sum of triangle angles = 180°. C = 180 - 45 - 65 = 70°.",
            shortcutMethod: "180 - 45 - 65 = 70."
          },
          analyticsMetadata: { topicTag: "Geometry-Triangle", averageTimeSpentSeconds: 15, globalAccuracyRate: 0.96 }
        },
        {
          id: "m9-qa-6",
          format: "MCQ",
          questionText: "Find the 10th term of the AP: 3, 7, 11, 15, ...",
          options: ["39", "41", "35", "43"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "a=3, d=4. t₁₀ = a + (n-1)d = 3 + 9×4 = 39.",
            shortcutMethod: "3 + 9×4 = 39."
          },
          analyticsMetadata: { topicTag: "Progression-AP", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 }
        },
        {
          id: "m9-qa-7",
          format: "MCQ",
          questionText: "What is log₂(32)?",
          options: ["4", "5", "6", "8"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "32 = 2⁵, so log₂(32) = 5.",
            shortcutMethod: "2^? = 32 → 2⁵ → answer 5."
          },
          analyticsMetadata: { topicTag: "Logarithm", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.90 }
        },
        {
          id: "m9-qa-8",
          format: "TITA",
          questionText: "If x + y = 10 and x - y = 4, find x.",
          options: null,
          correctAnswer: "7",
          solution: {
            detailedExplanation: "Adding: 2x = 14 → x = 7.",
            shortcutMethod: "(10+4)/2 = 7."
          },
          analyticsMetadata: { topicTag: "Algebra-LinearEq", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.95 }
        },
        {
          id: "m9-qa-9",
          format: "MCQ",
          questionText: "The sum of the first 20 natural numbers is:",
          options: ["190", "210", "200", "220"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Sum = n(n+1)/2 = 20×21/2 = 210.",
            shortcutMethod: "20×21/2 = 210."
          },
          analyticsMetadata: { topicTag: "Progression-AP", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.94 }
        },
        {
          id: "m9-qa-10",
          format: "MCQ",
          questionText: "What is the unit digit of 7^83?",
          options: ["1", "3", "7", "9"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Unit digits of 7^n cycle: 7,9,3,1 (cycle length 4). 83 mod 4 = 3 → 3rd in cycle = 3.",
            shortcutMethod: "Cycle of 7: 7,9,3,1. 83 mod 4 = 3 → position 3 → 3."
          },
          analyticsMetadata: { topicTag: "NumberSystem-UnitDigit", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.78 }
        },
        {
          id: "m9-qa-11",
          format: "TITA",
          questionText: "A circle has a circumference of 44 cm. Find its radius (use π = 22/7) in cm.",
          options: null,
          correctAnswer: "7",
          solution: {
            detailedExplanation: "C = 2πr → 44 = 2×(22/7)×r → r = 44×7/44 = 7 cm.",
            shortcutMethod: "44 = 2πr → r = 22/π = 22×7/22 = 7."
          },
          analyticsMetadata: { topicTag: "Geometry-Circle", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.90 }
        },
        {
          id: "m9-qa-12",
          format: "MCQ",
          questionText: "If 20% of a number is 60, what is 50% of the same number?",
          options: ["150", "100", "120", "180"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "20% = 60 → 100% = 300 → 50% = 150.",
            shortcutMethod: "50% is 2.5× of 20%. 60×2.5 = 150."
          },
          analyticsMetadata: { topicTag: "Percentage", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.93 }
        },
        {
          id: "m9-qa-13",
          format: "TITA",
          questionText: "Find the value of log₁₀(1000).",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "1000 = 10³ → log₁₀(1000) = 3.",
            shortcutMethod: "10^? = 1000 → 3."
          },
          analyticsMetadata: { topicTag: "Logarithm", averageTimeSpentSeconds: 15, globalAccuracyRate: 0.96 }
        },
        {
          id: "m9-qa-14",
          format: "MCQ",
          questionText: "Two cars start from the same point and travel in opposite directions at 40 km/h and 60 km/h. What is the distance between them after 3 hours?",
          options: ["180 km", "240 km", "300 km", "360 km"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Relative speed (opposite) = 40+60 = 100 km/h. Distance = 100×3 = 300 km.",
            shortcutMethod: "(40+60)×3 = 300."
          },
          analyticsMetadata: { topicTag: "TimeSpeedDistance", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.92 }
        },
        {
          id: "m9-qa-15",
          format: "MCQ",
          questionText: "Two angles of a quadrilateral are 90° and 110°. The other two are equal. Find each.",
          options: ["70°", "80°", "85°", "75°"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Sum of quadrilateral angles = 360°. Remaining = 360-90-110 = 160°. Each = 160/2 = 80°.",
            shortcutMethod: "(360-90-110)/2 = 80."
          },
          analyticsMetadata: { topicTag: "Geometry-Quadrilateral", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.90 }
        },
        {
          id: "m9-qa-16",
          format: "TITA",
          questionText: "How many 3-digit numbers are divisible by 5?",
          options: null,
          correctAnswer: "180",
          solution: {
            detailedExplanation: "Smallest 3-digit multiple of 5: 100. Largest: 995. Count = (995-100)/5 + 1 = 179+1 = 180.",
            shortcutMethod: "(995-100)/5 + 1 = 180."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Divisibility", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 }
        },
        {
          id: "m9-qa-17",
          format: "MCQ",
          questionText: "The 5th term of a GP is 48 and the 3rd term is 12. Find the common ratio (r > 0).",
          options: ["2", "4", "3", "1.5"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "t₅/t₃ = r² = 48/12 = 4 → r = 2 (positive).",
            shortcutMethod: "t₅/t₃ = r² = 4 → r = 2."
          },
          analyticsMetadata: { topicTag: "Progression-GP", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.85 }
        },
        {
          id: "m9-qa-18",
          format: "TITA",
          questionText: "Solve for x: 3x + 7 = 22.",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "3x = 15 → x = 5.",
            shortcutMethod: "(22-7)/3 = 5."
          },
          analyticsMetadata: { topicTag: "Algebra-LinearEq", averageTimeSpentSeconds: 15, globalAccuracyRate: 0.97 }
        },
        {
          id: "m9-qa-19",
          format: "MCQ",
          questionText: "A shopkeeper marks an item 40% above cost price and gives a 20% discount. What is his profit percent?",
          options: ["12%", "15%", "20%", "10%"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Let CP=100. MP = 140. SP = 140×0.8 = 112. Profit = 12 on 100 → 12%.",
            shortcutMethod: "CP=100 → MP=140 → SP=112 → profit = 12%."
          },
          analyticsMetadata: { topicTag: "Profit-Loss", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.80 }
        },
        {
          id: "m9-qa-20",
          format: "TITA",
          questionText: "Find the value of 2³ + 3² − 4.",
          options: null,
          correctAnswer: "13",
          solution: {
            detailedExplanation: "8 + 9 − 4 = 13.",
            shortcutMethod: "8+9-4 = 13."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Basic", averageTimeSpentSeconds: 15, globalAccuracyRate: 0.97 }
        },
        {
          id: "m9-qa-21",
          format: "MCQ",
          questionText: "The angles of a triangle are in the ratio 2:3:4. Find the largest angle.",
          options: ["60°", "80°", "100°", "90°"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "2x+3x+4x = 180 → 9x = 180 → x=20. Largest = 4x = 80°.",
            shortcutMethod: "Sum of ratio = 9. Largest = 4/9 × 180 = 80°."
          },
          analyticsMetadata: { topicTag: "Geometry-Triangle", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.90 }
        },
        {
          id: "m9-qa-22",
          format: "TITA",
          questionText: "If log₃(x) = 4, find x.",
          options: null,
          correctAnswer: "81",
          solution: {
            detailedExplanation: "log₃(x) = 4 → x = 3⁴ = 81.",
            shortcutMethod: "3⁴ = 81."
          },
          analyticsMetadata: { topicTag: "Logarithm", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.88 }
        }
      ]
    }
  ]
};

// Helper to flatten all questions for a section
export function getQuestionsForSection(section) {
  const sets = mockQuestions[section] || [];
  return sets.flatMap(set =>
    set.childQuestions.map(q => ({
      ...q,
      parentContent: set.parentContent,
      questionSetId: set.questionSetId,
      difficultyRating: set.difficultyRating
    }))
  );
}

// Get total questions count per section
export function getSectionQuestionCount(section) {
  return getQuestionsForSection(section).length;
}

export default mockQuestions;
