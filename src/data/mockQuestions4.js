// CAT Mock Test 4 - Question Bank styled after CAT PYQs from 2015-2019 era
// Difficulty calibrated to match the harder QA and DILR sets of that period

const mockQuestions4 = {
  VARC: [
    {
      questionSetId: "m4-varc-set-1",
      section: "VARC",
      difficultyRating: 4.0,
      parentContent: {
        textPayload: `For the first time in human history, we have built machines that can forecast the weather, guide spacecraft, model protein folding, and recommend what we ought to read, watch, and buy. The impressive capabilities of these systems have convinced a growing number of commentators that artificial intelligence is marching inexorably toward general, human-like cognition. Yet the history of the field counsels caution. Since the term "artificial intelligence" was coined at the Dartmouth workshop in 1956, the subject has passed through at least two widely acknowledged "winters"—periods in which funding dried up, public interest collapsed, and many laboratories were shuttered because the promises of researchers had outrun the capabilities of their machines.

The current moment differs from the earlier booms in one crucial respect: commercial deployment. Deep learning is no longer confined to academic benchmarks. It underwrites the targeting engines of advertising platforms, the ranking algorithms of search engines, the fraud-detection systems of banks, and the diagnostic tools of radiologists. This entanglement with profit has given contemporary AI a durability that its predecessors lacked. Winter, if it comes, will not take the form of abandoned departments; it will arrive as disappointed shareholders.

What makes this generation of systems so effective—and so brittle—is their reliance on statistical pattern-matching over enormous datasets. A model that translates English into French has not, in any defensible sense, learned French; it has learned which sequences of tokens tend to follow which other sequences. When the input resembles its training data, the output is remarkable. When the input departs from that distribution—when a speaker uses an idiom the model has not seen, or a radiologist photographs a tumor the system has not been trained on—the apparatus fails, often silently and with confidence. The same architecture that produces miracles produces hallucinations.

This tension between surface competence and underlying fragility is not merely a technical curiosity; it is a political problem. As these systems are deployed in courts, hospitals, and welfare offices, their failures acquire consequences. A credit-scoring model that discriminates against applicants from certain postal codes is not fixed by being labeled "artificial intelligence"; it is entrenched by that label, which lends its decisions an unwarranted veneer of mathematical impartiality. The history of technology is littered with tools whose inventors believed them neutral, only for their users to discover, too late, that neutrality had been assumed rather than engineered.`
      },
      childQuestions: [
        {
          id: "m4-varc-1",
          format: "MCQ",
          questionText: "The author uses the phrase 'disappointed shareholders' in the second paragraph primarily to:",
          options: [
            "Criticize the commercialization of artificial intelligence research",
            "Suggest that the next AI downturn will be economic rather than academic",
            "Argue that private firms will eventually abandon AI research",
            "Emphasize that AI has become more accurate due to commercial pressure"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The author contrasts the current commercial embeddedness of AI with earlier 'winters' of abandoned departments. The phrase signals that any future decline will manifest in markets and investor confidence rather than in university funding cuts. Option A is tangential; C overstates; D is unrelated to the phrase.",
            shortcutMethod: "Read the sentence as a parallel contrast: 'Winter... will not take the form of abandoned departments; it will arrive as disappointed shareholders.' The structure itself gives the answer."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.58 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-varc-2",
          format: "MCQ",
          questionText: "Which of the following, if true, would most WEAKEN the author's argument about the brittleness of modern AI systems?",
          options: [
            "A translation model produces fluent output in a language pair it was never explicitly trained on",
            "A radiology system achieves higher accuracy than human doctors on its benchmark dataset",
            "A credit-scoring model reflects real historical lending patterns accurately",
            "A fraud-detection system is deployed at scale by several major banks simultaneously"
          ],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "The author's brittleness claim rests on the idea that models fail when inputs depart from their training distribution. Option A directly contradicts this by describing successful generalization beyond training data. B confirms the author's claim about in-distribution performance. C and D concern deployment, not brittleness.",
            shortcutMethod: "The argument is about out-of-distribution failure. Find the option that shows out-of-distribution success."
          },
          analyticsMetadata: { topicTag: "RC-Weaken", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.52 },
          historicalData: { year: 2018, slot: 1 }
        },
        {
          id: "m4-varc-3",
          format: "MCQ",
          questionText: "The author's central objection to calling biased credit-scoring models 'artificial intelligence' is that:",
          options: [
            "The term artificial intelligence is technically inaccurate for statistical models",
            "Such labels obscure bias by lending it an appearance of objectivity",
            "Credit-scoring has historically been the domain of human judgment",
            "Mathematical models cannot capture the nuances of financial behavior"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage states the label 'lends its decisions an unwarranted veneer of mathematical impartiality'—it is not the technical inaccuracy but the false aura of objectivity that the author objects to.",
            shortcutMethod: "Focus on the word 'veneer'—it signals a concealment of bias beneath an appearance of neutrality."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.70 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-varc-4",
          format: "TITA",
          questionText: "According to the passage, how many distinct 'winters' in AI history are explicitly referenced by the author? (Enter a number)",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "The first paragraph refers to 'at least two widely acknowledged \"winters\"'—this is the only explicit count of past AI winters in the passage.",
            shortcutMethod: "Ctrl-F for 'winters' in the first paragraph."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.82 },
          historicalData: { year: 2018, slot: 2 }
        },
        {
          id: "m4-varc-5",
          format: "MCQ",
          questionText: "The author would most likely AGREE with which of the following?",
          options: [
            "AI systems have learned language in the same way that humans do",
            "Technological neutrality is a property that must be actively built in, not presumed",
            "The 1956 Dartmouth workshop set AI research on a mistaken path",
            "Deep learning has permanently eliminated the risk of another AI winter"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The final sentence directly asserts that 'neutrality had been assumed rather than engineered,' aligning precisely with option B.",
            shortcutMethod: "The last sentence is the author's thesis—option B paraphrases it."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 },
          historicalData: { year: 2019, slot: 1 }
        }
      ]
    },
    {
      questionSetId: "m4-varc-set-2",
      section: "VARC",
      difficultyRating: 4.5,
      parentContent: {
        textPayload: `The conventional account of the Anthropocene places its origin in the mid-twentieth century, when nuclear testing, synthetic fertilizers, and mass consumption left permanent signatures in ice cores, sediment, and soil. But a quieter body of scholarship, drawing on archaeology and paleoecology, argues that the human reshaping of the Earth is considerably older—that by the time industrial societies began to measure their own emissions, humans had already been engineering landscapes for at least ten thousand years. The Amazon rainforest, long imagined as a pristine wilderness, turns out to be dense with the horticultural residues of pre-Columbian civilizations: soils enriched with charcoal, clusters of domesticated fruit trees, and patterns of biodiversity that make sense only as the legacy of deliberate cultivation.

This revisionist chronology raises an uncomfortable question. If humans have been ecological actors on a planetary scale for millennia, what moral weight can we place on the idea of a "natural baseline"—a prior, untouched condition to which conservation might aspire to return? Much of contemporary environmentalism draws its rhetorical power from the image of a lost Eden, a world before human interference. If that Eden never existed, the project of restoration must be reimagined.

Some scholars have welcomed this shift, arguing that it liberates environmental ethics from a sterile purism and allows us to design landscapes rather than merely defending them. Others worry that the same argument can be weaponized by those who would dismiss all ecological concern as arbitrary. If every forest is already a human artifact, the reasoning goes, then the destruction of one more is merely the continuation of an ancient story. Between these positions lies a narrower but more defensible claim: that human influence on ecosystems is a matter of scale and intensity, not of kind, and that the task of environmental ethics is to distinguish interventions that sustain biotic complexity from those that impoverish it.

What the revisionist literature unsettles is not the reality of the ecological crisis but the myth that frames our response to it. A politics of restoration grounded in a pristine past offers a moving but ultimately fragile foundation for action. A politics grounded in the recognition that we have always been gardeners—sometimes skilled, often reckless—may prove harder to romanticize, but it has the advantage of being true.`
      },
      childQuestions: [
        {
          id: "m4-varc-6",
          format: "MCQ",
          questionText: "The author's primary argument in the passage is that:",
          options: [
            "The Anthropocene began in the mid-twentieth century with nuclear testing",
            "Environmental ethics should be founded on accurate history rather than a myth of pristine nature",
            "Pre-Columbian civilizations were more ecologically destructive than previously believed",
            "Conservation is an incoherent project once human influence is acknowledged"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The final paragraph makes the author's thesis explicit: a politics of restoration based on a pristine past is 'ultimately fragile,' while one based on recognition that 'we have always been gardeners' is 'true.'",
            shortcutMethod: "Locate the concluding claim in the last paragraph—authors typically state their thesis there."
          },
          analyticsMetadata: { topicTag: "RC-MainIdea", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.62 },
          historicalData: { year: 2018, slot: 2 }
        },
        {
          id: "m4-varc-7",
          format: "MCQ",
          questionText: "The 'narrower but more defensible claim' mentioned in the third paragraph holds that:",
          options: [
            "No forest is truly a human artifact",
            "All human intervention in ecosystems is ethically equivalent",
            "Human ecological impact differs in degree, not in nature, and ethics must distinguish sustaining from impoverishing interventions",
            "Designing landscapes is preferable to defending them"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The passage states that human influence 'is a matter of scale and intensity, not of kind, and that the task of environmental ethics is to distinguish interventions that sustain biotic complexity from those that impoverish it.'",
            shortcutMethod: "The phrase 'narrower but more defensible claim' is followed by the direct answer—read what immediately follows."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.66 },
          historicalData: { year: 2017, slot: 1 }
        },
        {
          id: "m4-varc-8",
          format: "MCQ",
          questionText: "The Amazon rainforest is mentioned in the first paragraph primarily as:",
          options: [
            "An example of an ecosystem that has resisted human influence",
            "Evidence for the revisionist claim that humans have engineered landscapes for millennia",
            "A warning about the dangers of deforestation",
            "A case of failed pre-Columbian civilization"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The Amazon is introduced after the claim that humans have engineered landscapes for 'at least ten thousand years' and is described as 'dense with the horticultural residues of pre-Columbian civilizations.' It serves as evidence for the revisionist chronology.",
            shortcutMethod: "Look at what the example is attached to. It follows a general claim, so it illustrates that claim."
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.78 },
          historicalData: { year: 2016, slot: 2 }
        },
        {
          id: "m4-varc-9",
          format: "TITA",
          questionText: "In the third paragraph, how many distinct positions on the ethical implications of the revisionist chronology are presented? (Enter a number)",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Three positions: (1) scholars who welcome the shift as liberating; (2) those who worry it can dismiss ecological concern; (3) a narrower middle position about scale and intensity.",
            shortcutMethod: "Count position markers: 'Some scholars,' 'Others,' 'Between these positions.'"
          },
          analyticsMetadata: { topicTag: "RC-Structure", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.55 },
          historicalData: { year: 2019, slot: 2 }
        }
      ]
    },
    {
      questionSetId: "m4-varc-set-3",
      section: "VARC",
      difficultyRating: 4.0,
      parentContent: {
        textPayload: `Psychologists have long observed that human beings are poor witnesses to their own minds. When subjects in laboratory experiments are asked to explain why they chose one item over another, they produce confident, fluent accounts that often bear no relation to the actual determinants of their behavior. In one well-known series of studies, shoppers presented with four identical pairs of stockings overwhelmingly preferred the one on the right-hand end of the display, yet none of them cited position as a reason. Instead they invented differences in texture, sheen, and elasticity—differences that did not exist.

This phenomenon is not merely a curiosity. It challenges the assumption that introspection furnishes privileged access to our own motives. If we cannot reliably identify why we prefer one stocking to another, how much confidence can we place in the reasons we give for our moral judgments, our political loyalties, our attractions and aversions? The reasons we offer may be post-hoc rationalizations assembled by a brain that is, as one researcher put it, "an interpreter looking for a plot."

What is more unsettling is that the confabulated explanation typically feels truer to the subject than the actual cause. Experimental participants, when told that their stated reasons could not be correct, frequently reject the experimenters' findings rather than their own introspection. This suggests that the narrative function of the mind—its ceaseless weaving of stories about the self—is not an optional overlay on our cognition but central to how we experience ourselves as coherent agents.

Some philosophers have argued that this situation should not be troubling. After all, the stories we tell about ourselves are what give our lives shape and continuity; they are how we become persons rather than mere sequences of mental events. The worry, however, is that these stories can be wildly inaccurate while being perfectly functional. A person may live an entire life on the basis of self-understanding that bears only a distant relation to the forces that actually drive their behavior. Whether this should prompt humility, alarm, or a philosophical shrug depends on how much one values truth in self-knowledge relative to the other goods that self-narratives secure.`
      },
      childQuestions: [
        {
          id: "m4-varc-10",
          format: "MCQ",
          questionText: "The stocking experiment is used in the passage to illustrate:",
          options: [
            "How visual design affects consumer preferences",
            "The unreliability of introspective reports about the causes of behavior",
            "Why laboratory experiments fail to capture real-world decisions",
            "The importance of offering consumers a variety of options"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The experiment demonstrates that shoppers gave 'confident, fluent accounts that often bear no relation to the actual determinants of their behavior.' The point is about introspection's unreliability.",
            shortcutMethod: "The paragraph begins by claiming people are 'poor witnesses to their own minds'—the example supports that claim."
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.80 },
          historicalData: { year: 2016, slot: 1 }
        },
        {
          id: "m4-varc-11",
          format: "MCQ",
          questionText: "The word 'confabulated' as used in the third paragraph most nearly means:",
          options: [
            "Deliberately deceptive",
            "Carefully verified",
            "Invented but sincerely believed",
            "Emotionally charged"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The context makes clear that confabulated explanations 'feel truer to the subject than the actual cause' and that participants sincerely believe them. This is invention without intent to deceive.",
            shortcutMethod: "Surrounding sentences describe subjects who 'reject the experimenters' findings rather than their own introspection'—they sincerely believe what they say."
          },
          analyticsMetadata: { topicTag: "RC-Vocabulary", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.60 },
          historicalData: { year: 2015, slot: 2 }
        },
        {
          id: "m4-varc-12",
          format: "MCQ",
          questionText: "According to the passage, the philosophers referenced in the final paragraph believe that self-narratives:",
          options: [
            "Are always accurate and should therefore be trusted",
            "Should be abandoned in favor of scientific self-understanding",
            "Constitute personhood by providing shape and continuity to life",
            "Are a harmless illusion that psychologists exaggerate"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The passage states that 'the stories we tell about ourselves are what give our lives shape and continuity; they are how we become persons rather than mere sequences of mental events.'",
            shortcutMethod: "Locate 'Some philosophers have argued' and read the sentence that follows."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.72 },
          historicalData: { year: 2018, slot: 1 }
        },
        {
          id: "m4-varc-13",
          format: "MCQ",
          questionText: "The author's attitude toward the philosophical response described in the final paragraph is best described as:",
          options: [
            "Complete endorsement",
            "Outright rejection",
            "Conditional acknowledgement that leaves the question open",
            "Mocking dismissal"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The author concedes a real point but introduces a 'worry' about inaccuracy, concluding that one's response 'depends on how much one values truth in self-knowledge.' The question is left open.",
            shortcutMethod: "Look for hedging language—'however,' 'depends on'—which signals qualified rather than full agreement."
          },
          analyticsMetadata: { topicTag: "RC-Tone", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.55 },
          historicalData: { year: 2019, slot: 2 }
        }
      ]
    },
    {
      questionSetId: "m4-varc-set-4",
      section: "VARC",
      difficultyRating: 4.5,
      parentContent: {
        textPayload: `Among the stranger findings of twentieth-century anthropology is the discovery that many small-scale societies organize themselves around practices that appear, to outsiders, economically irrational. The Kwakwaka'wakw of the Pacific Northwest held potlatches at which chiefs competed by giving away—or destroying—vast quantities of accumulated wealth. In parts of Melanesia, men labored for years to produce yam harvests that they did not eat but presented to their sisters' husbands, who were expected to reciprocate in kind. Early ethnographers, trained in the assumptions of market economics, interpreted these practices as vestiges of primitive extravagance, waste dressed up as ritual.

A more careful analysis reveals a different picture. The apparent extravagance was doing work: it consolidated alliances, adjudicated status, circulated goods across kinship networks, and insured households against the uncertainties of harvest, disease, and conflict. The destruction of wealth in a potlatch was not a squandering of resources but an assertion of a capacity to squander—a credible signal of productive power that secured the chief's political standing. Prestige purchased at such cost was unforgeable.

Contemporary societies, the anthropologist Marshall Sahlins argued, are not as distant from these arrangements as their self-image suggests. The philanthropies of industrial billionaires, the conspicuous consumption of luxury goods, the ritualized gift-giving of weddings and holidays—these too are assertions of status, enactments of alliance, claims to social standing. What has changed is the vocabulary: where traditional societies called such practices ceremony, modern societies call them marketing, charity, or taste.

The deeper lesson may be that economic rationality, far from being a universal human baseline from which exotic cultures deviate, is itself a historically specific construction. It emerged alongside particular institutions—double-entry bookkeeping, joint-stock companies, the professional economist—and it has coexisted, throughout its history, with older logics that refuse to be dissolved. To understand gift-giving only as inefficient exchange is to miss the point as completely as understanding a wedding only as a contract.`
      },
      childQuestions: [
        {
          id: "m4-varc-14",
          format: "MCQ",
          questionText: "Which of the following best captures the main argument of the passage?",
          options: [
            "Small-scale societies were less economically rational than modern ones",
            "Gift-giving and ceremonial destruction serve real social functions and reveal the parochialism of economic rationality",
            "Modern philanthropy is a direct descendant of Melanesian yam exchanges",
            "Ethnographers have consistently misunderstood non-Western economic systems"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage argues that apparently wasteful practices accomplish social work, that modern societies engage in analogous practices, and that economic rationality is itself historically specific.",
            shortcutMethod: "Combine paragraphs 2 and 4: gift practices have real functions, AND economic rationality is provincial."
          },
          analyticsMetadata: { topicTag: "RC-MainIdea", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.58 },
          historicalData: { year: 2017, slot: 1 }
        },
        {
          id: "m4-varc-15",
          format: "MCQ",
          questionText: "The author suggests that the destruction of wealth in a potlatch served primarily to:",
          options: [
            "Demonstrate contempt for material possessions",
            "Intimidate rival chiefs through displays of aggression",
            "Signal a credible capacity for future production, securing political standing",
            "Redistribute wealth equitably across the community"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The passage states that destruction was 'an assertion of a capacity to squander—a credible signal of productive power that secured the chief's political standing.'",
            shortcutMethod: "The paragraph contains 'credible signal'—match that phrase to the option."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.75 },
          historicalData: { year: 2016, slot: 2 }
        },
        {
          id: "m4-varc-16",
          format: "MCQ",
          questionText: "The final sentence of the passage suggests that understanding gift-giving only as inefficient exchange is comparable to understanding a wedding only as a contract because both:",
          options: [
            "Involve the exchange of valuable items",
            "Are legally binding agreements",
            "Reduce socially rich practices to their thin economic dimension and miss their significance",
            "Are outdated institutions in modern societies"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The analogy captures the author's core point—reducing socially and symbolically loaded practices to bare economic categories misses what they actually do.",
            shortcutMethod: "The author's complaint throughout has been about thin economic readings of rich social practices."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.62 },
          historicalData: { year: 2019, slot: 1 }
        },
        {
          id: "m4-varc-17",
          format: "TITA",
          questionText: "In the third paragraph, how many distinct modern practices are mentioned as parallels to traditional gift economies? (Enter a number)",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Three practices: (1) philanthropies of industrial billionaires, (2) conspicuous consumption of luxury goods, (3) ritualized gift-giving of weddings and holidays.",
            shortcutMethod: "Count items separated by commas in the series in paragraph 3."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.85 },
          historicalData: { year: 2018, slot: 2 }
        }
      ]
    },
    {
      questionSetId: "m4-varc-standalone-1",
      section: "VARC",
      difficultyRating: 4.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m4-varc-18",
          format: "MCQ",
          questionText: "Five sentences are given below, labeled 1 through 5. Identify the correct logical sequence:\n\n1. This distinction matters because the emotions produced by music do not require a narrative object to attach themselves to.\n2. Philosophers of art have long puzzled over the capacity of music to produce emotions.\n3. We can be made melancholy by a sonata without knowing who is sad, or sad about what.\n4. Unlike paintings or novels, which typically represent identifiable persons or situations, music need not represent anything at all.\n5. And yet a melancholy sonata can move us as surely as a tragic novel.",
          options: ["24513", "24153", "25413", "42513"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Sentence 2 introduces the puzzle. Sentence 4 contrasts music with other arts. Sentence 5 extends with 'And yet.' Sentence 1 draws the 'distinction'—referring back. Sentence 3 provides an example. Sequence: 2-4-5-1-3.",
            shortcutMethod: "Sentence 2 opens. Sentence 3 ('We can be made melancholy') is an example that must follow a general claim."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.48 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-varc-19",
          format: "TITA",
          questionText: "Five sentences are labeled 1-5. Four of them form a coherent paragraph when arranged properly. Identify the ODD sentence (enter the number):\n\n1. The earliest cities arose along river valleys where predictable flooding deposited fertile silt each year.\n2. Mesopotamia, Egypt, and the Indus basin were all organized around this agricultural logic.\n3. Recent excavations in Turkey have uncovered stone pillars dating to more than eleven thousand years ago.\n4. Without a reliable surplus of grain, the dense populations that define urban life would have been impossible.\n5. Hydraulic civilization, as some historians have called it, was thus not a choice but a condition.",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Sentences 1, 2, 4, and 5 form a coherent argument about river-valley civilizations and agricultural surplus. Sentence 3 concerns pre-agricultural monumental architecture and does not fit.",
            shortcutMethod: "The theme is 'river-valley cities.' Sentence 3 mentions neither rivers nor agriculture."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.68 },
          historicalData: { year: 2018, slot: 1 }
        },
        {
          id: "m4-varc-20",
          format: "TITA",
          questionText: "The passage below is followed by four summaries. Choose the option (1/2/3/4) that best captures the essence of the passage:\n\nPassage: 'For most of human history, the word \"privacy\" referred to a condition imposed by circumstance—the solitude of the farmer, the silence of the monastery—rather than a right asserted against others. It was only as cities grew and bureaucracies multiplied that privacy came to be conceived as something individuals were entitled to defend. The right to privacy, far from being an ancient prerogative rediscovered in modern law, is an artifact of the very institutions it seeks to restrain.'\n\n1. Privacy has always been a fundamental human right, though its modern form responds to new threats.\n2. The concept of privacy as a right is a modern invention that emerged in response to the institutions it now restrains.\n3. Cities and bureaucracies destroyed the natural privacy that earlier societies enjoyed.\n4. Modern privacy law is inadequate because it cannot restore the privacy of earlier times.",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "The passage argues that privacy-as-right 'is an artifact of the very institutions it seeks to restrain'—a modern construction, not an ancient rediscovery.",
            shortcutMethod: "The last sentence is the passage's thesis. Match it to the summary with 'modern invention' and 'restrains institutions.'"
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.60 },
          historicalData: { year: 2019, slot: 2 }
        },
        {
          id: "m4-varc-21",
          format: "MCQ",
          questionText: "Five sentences are given below, labeled 1 through 5. Identify the correct logical sequence:\n\n1. Such species, rather than the large and charismatic ones that populate conservation posters, do the quiet work on which entire ecosystems depend.\n2. Ecologists distinguish between species that shape their habitats dramatically and those whose removal would produce cascading collapse.\n3. The distinction is not about size or visibility but about ecological leverage.\n4. A sea otter, by preying on urchins that would otherwise strip kelp forests bare, exemplifies this principle.\n5. The first are called ecosystem engineers; the second, keystone species.",
          options: ["25341", "23541", "25431", "52341"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Sentence 2 introduces two types. Sentence 5 names them ('The first... the second'). Sentence 3 clarifies the basis. Sentence 4 gives an example. Sentence 1 generalizes. Sequence: 2-5-3-4-1.",
            shortcutMethod: "Sentence 5 must follow 2 (uses 'first/second'). Sentence 4 is an example. Sentence 1 closes with 'such species.'"
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 130, globalAccuracyRate: 0.45 },
          historicalData: { year: 2016, slot: 1 }
        }
      ]
    },
    {
      questionSetId: "m4-varc-standalone-2",
      section: "VARC",
      difficultyRating: 4.5,
      parentContent: null,
      childQuestions: [
        {
          id: "m4-varc-22",
          format: "TITA",
          questionText: "The passage below is followed by four summaries. Choose the option (1/2/3/4) that best captures the essence of the passage:\n\nPassage: 'The myth of the lone inventor—the garage tinkerer who reshapes the world single-handedly—persists despite overwhelming historical evidence to the contrary. Nearly every major technological breakthrough, from the light bulb to the personal computer, arrived through the accumulated, overlapping work of many hands in many laboratories. The myth survives not because it is accurate but because it is useful: it gives narrative shape to processes too diffuse for ordinary storytelling, and it provides heroes for societies that require them.'\n\n1. The lone inventor is a myth perpetuated by societies that need heroes to explain technological change.\n2. Major inventions always have a single creator, though credit is often shared.\n3. Societies should abandon the myth of the lone inventor and recognize collective innovation.\n4. The myth of the lone inventor endures because it simplifies complex collective processes into intelligible narratives, not because it is accurate.",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "The passage's core claim is that the myth persists 'not because it is accurate but because it is useful'—giving narrative shape and heroes. Option 4 captures both the endurance-despite-inaccuracy and the narrative-simplification functions.",
            shortcutMethod: "Key phrase: 'not because it is accurate but because it is useful.'"
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 105, globalAccuracyRate: 0.55 },
          historicalData: { year: 2015, slot: 1 }
        },
        {
          id: "m4-varc-23",
          format: "TITA",
          questionText: "Five sentences are labeled 1-5. Four of them form a coherent paragraph when arranged properly. Identify the ODD sentence (enter the number):\n\n1. The smartphone did not merely replace the camera, the calendar, and the map; it dissolved the boundaries between them.\n2. Convergence, in technological history, names the process by which devices once distinct fold into a single artifact.\n3. The telegraph, for instance, once required dedicated operators and specialized offices.\n4. What had been separate tools with separate rituals became aspects of a single handheld object.\n5. This dissolution of boundaries is characteristic of mature convergence, not its early stages.",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Sentences 1, 2, 4, and 5 discuss smartphone convergence. Sentence 3, about the telegraph with specialized operators, concerns divergence/specialization.",
            shortcutMethod: "Theme: smartphone convergence. Sentence 3 is about a different device and opposite direction."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.62 },
          historicalData: { year: 2018, slot: 2 }
        },
        {
          id: "m4-varc-24",
          format: "MCQ",
          questionText: "Five sentences are given below, labeled 1 through 5. Identify the correct logical sequence:\n\n1. Yet historians of psychology have increasingly argued that the self so conceived is a product of particular literary and religious traditions, not a universal feature of human experience.\n2. The idea of an inner self—private, continuous, authentically one's own—feels to most contemporary readers like a simple fact of experience.\n3. Confession, autobiography, and the interior monologue of the novel all helped make this sense of self thinkable.\n4. Before these traditions matured, people had selves, of course, but they did not have the particular kind of inner self that modern readers take for granted.\n5. It is as obvious to us as the ground beneath our feet.",
          options: ["25134", "25143", "25413", "21534"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Sentence 2 introduces the idea. Sentence 5 extends ('It is as obvious'). Sentence 1 introduces the 'Yet' counter-claim. Sentence 3 gives examples of traditions. Sentence 4 summarizes. Sequence: 2-5-1-3-4.",
            shortcutMethod: "2 opens, 5 extends, 1 pivots with 'Yet,' 3 provides examples, 4 closes."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 135, globalAccuracyRate: 0.42 },
          historicalData: { year: 2017, slot: 1 }
        }
      ]
    }
  ],
  DILR: [
    {
      questionSetId: "m4-dilr-set-1",
      section: "DILR",
      difficultyRating: 4.0,
      parentContent: {
        textPayload: `A consulting firm tracks revenue (in Rs. crore) across its four practice areas — Strategy, Operations, Digital, and Analytics — over the years 2014 to 2018:

- In 2014, the revenues were: Strategy 40, Operations 30, Digital 20, Analytics 10.
- From 2014 to 2018, Strategy revenue grew by 50%.
- Operations revenue in 2018 was 45.
- Digital revenue in 2018 was exactly three times its 2014 value.
- Analytics revenue in 2018 was 40.
- Total firm revenue in 2016 was 130 Rs. crore.
- In 2016, Strategy contributed 40% of the total revenue.
- In 2016, Operations and Digital contributed equally to total revenue.

(All revenue figures are in Rs. crore.)`
      },
      childQuestions: [
        {
          id: "m4-dilr-1",
          format: "MCQ",
          questionText: "What was the revenue (Rs. crore) of the Digital practice in 2018?",
          options: ["40", "50", "60", "70"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Digital 2014 = 20. Digital 2018 = 3 x 20 = 60.",
            shortcutMethod: "3 x 20 = 60."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.92 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-dilr-2",
          format: "TITA",
          questionText: "What was the total revenue (Rs. crore) of the firm in 2018?",
          options: null,
          correctAnswer: "205",
          solution: {
            detailedExplanation: "Strategy 2018 = 40 x 1.5 = 60. Operations = 45. Digital = 60. Analytics = 40. Total = 60 + 45 + 60 + 40 = 205.",
            shortcutMethod: "60 + 45 + 60 + 40 = 205."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.82 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-dilr-3",
          format: "MCQ",
          questionText: "What was the revenue (Rs. crore) of the Strategy practice in 2016?",
          options: ["48", "50", "52", "54"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Total 2016 = 130. Strategy = 40% of 130 = 52.",
            shortcutMethod: "0.4 x 130 = 52."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.90 },
          historicalData: { year: 2018, slot: 1 }
        },
        {
          id: "m4-dilr-4",
          format: "TITA",
          questionText: "In 2016, what was the revenue (Rs. crore) of the Operations practice, given that Analytics contributed 18 Rs. crore?",
          options: null,
          correctAnswer: "30",
          solution: {
            detailedExplanation: "Total 2016 = 130. Strategy = 52. Analytics = 18. Operations + Digital = 130 - 52 - 18 = 60. Operations = Digital, so each = 30.",
            shortcutMethod: "(130 - 52 - 18) / 2 = 30."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 },
          historicalData: { year: 2018, slot: 1 }
        },
        {
          id: "m4-dilr-5",
          format: "MCQ",
          questionText: "By what percentage did total firm revenue grow from 2014 to 2018?",
          options: ["100%", "105%", "110%", "115%"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Total 2014 = 40 + 30 + 20 + 10 = 100. Total 2018 = 205. Growth = (205 - 100)/100 x 100 = 105%.",
            shortcutMethod: "(205 - 100)/100 = 105%."
          },
          analyticsMetadata: { topicTag: "DI-Growth", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.88 },
          historicalData: { year: 2019, slot: 1 }
        },
        {
          id: "m4-dilr-6",
          format: "TITA",
          questionText: "Which practice had the highest percentage growth in revenue from 2014 to 2018? Enter its 2018 revenue (Rs. crore).",
          options: null,
          correctAnswer: "40",
          solution: {
            detailedExplanation: "Growth rates: Strategy 50%, Operations 50%, Digital 200%, Analytics 300%. Analytics wins with 2018 revenue = 40.",
            shortcutMethod: "Analytics: (40-10)/10 = 300%, highest. 2018 value = 40."
          },
          analyticsMetadata: { topicTag: "DI-Growth", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.72 },
          historicalData: { year: 2019, slot: 1 }
        }
      ]
    },
    {
      questionSetId: "m4-dilr-set-2",
      section: "DILR",
      difficultyRating: 4.5,
      parentContent: {
        textPayload: `Eight candidates — A, B, C, D, E, F, G, H — appeared for a selection process with three rounds: Aptitude, Technical, and Interview. Each round was scored out of 10. The selection rule: a candidate is selected if and only if (i) their total score is at least 22, AND (ii) they scored at least 6 in each individual round.

Scores (Aptitude, Technical, Interview):
- A: 8, 7, 8
- B: 9, 9, 5
- C: 7, 8, 7
- D: 6, 6, 6
- E: 10, 5, 9
- F: 6, 9, 8
- G: 5, 10, 10
- H: 8, 8, 6`
      },
      childQuestions: [
        {
          id: "m4-dilr-7",
          format: "TITA",
          questionText: "How many candidates were selected?",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "A: total 23, min 7 -> selected. B: min 5 -> rejected. C: total 22, min 7 -> selected. D: total 18 -> rejected. E: min 5 -> rejected. F: total 23, min 6 -> selected. G: min 5 -> rejected. H: total 22, min 6 -> selected. Total = 4.",
            shortcutMethod: "Eliminate any with score < 6: B, E, G out. D fails total. Four selected: A, C, F, H."
          },
          analyticsMetadata: { topicTag: "LR-Selection", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.75 },
          historicalData: { year: 2016, slot: 2 }
        },
        {
          id: "m4-dilr-8",
          format: "MCQ",
          questionText: "Which of the following candidates had the highest total score but was NOT selected?",
          options: ["B", "E", "G", "D"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Unselected totals: B=23, E=24, G=25, D=18. G has the highest at 25 but is rejected because Aptitude = 5 < 6.",
            shortcutMethod: "G's total = 25 is the maximum among non-selected."
          },
          analyticsMetadata: { topicTag: "LR-Selection", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.80 },
          historicalData: { year: 2016, slot: 2 }
        },
        {
          id: "m4-dilr-9",
          format: "MCQ",
          questionText: "If the minimum required score per round were reduced from 6 to 5, how many candidates would be selected?",
          options: ["6", "7", "5", "4"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "With the relaxed rule, only D (total 18) fails. All others have total >= 22 and all scores >= 5. Selected: A, B, C, E, F, G, H = 7.",
            shortcutMethod: "Only D has total < 22. 8 - 1 = 7."
          },
          analyticsMetadata: { topicTag: "LR-Selection", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.72 },
          historicalData: { year: 2017, slot: 1 }
        },
        {
          id: "m4-dilr-10",
          format: "TITA",
          questionText: "What is the average Interview score of the selected candidates (under original rules)?",
          options: null,
          correctAnswer: "7.25",
          solution: {
            detailedExplanation: "Selected: A, C, F, H with Interview scores 8, 7, 8, 6. Average = (8+7+8+6)/4 = 29/4 = 7.25.",
            shortcutMethod: "29/4 = 7.25."
          },
          analyticsMetadata: { topicTag: "LR-Selection", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.78 },
          historicalData: { year: 2017, slot: 1 }
        },
        {
          id: "m4-dilr-11",
          format: "MCQ",
          questionText: "If Aptitude, Technical, and Interview scores are weighted in the ratio 2:1:1, which selected candidate has the highest weighted total?",
          options: ["A", "C", "F", "H"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Weighted total = 2A + T + I. A: 16+7+8=31. C: 14+8+7=29. F: 12+9+8=29. H: 16+8+6=30. A is highest.",
            shortcutMethod: "Compute 2a+t+i for each: A=31 wins."
          },
          analyticsMetadata: { topicTag: "LR-Selection", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.65 },
          historicalData: { year: 2018, slot: 2 }
        }
      ]
    },
    {
      questionSetId: "m4-dilr-set-3",
      section: "DILR",
      difficultyRating: 4.5,
      parentContent: {
        textPayload: `Six people — P, Q, R, S, T, U — live on six different floors of a building numbered 1 (bottom) to 6 (top). The following conditions apply:

1. P lives on an even-numbered floor.
2. Q lives immediately above R.
3. S lives on floor 1.
4. T does not live on the topmost floor.
5. There are exactly two floors between P and Q (i.e., |P - Q| = 3).
6. U lives on a higher floor than T.

The arrangement that satisfies all conditions is: S=1, P=2, T=3, R=4, Q=5, U=6.`
      },
      childQuestions: [
        {
          id: "m4-dilr-12",
          format: "MCQ",
          questionText: "Who lives on the topmost floor (floor 6)?",
          options: ["P", "Q", "U", "T"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "S=1. P even, |P-Q|=3, Q immediately above R. Testing P=2: Q=5, R=4. T not at top, U>T, so T=3, U=6. Topmost = U.",
            shortcutMethod: "P=2, Q=5, R=4, S=1. Remaining {3,6} for T,U with T not top -> U=6."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 180, globalAccuracyRate: 0.50 },
          historicalData: { year: 2015, slot: 2 }
        },
        {
          id: "m4-dilr-13",
          format: "MCQ",
          questionText: "On which floor does R live?",
          options: ["2", "3", "4", "5"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "From the arrangement: R=4.",
            shortcutMethod: "R immediately below Q=5 -> R=4."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.78 },
          historicalData: { year: 2015, slot: 2 }
        },
        {
          id: "m4-dilr-14",
          format: "TITA",
          questionText: "How many floors are there between T and U?",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "T=3, U=6. Floors between: 4 and 5. Count = 2.",
            shortcutMethod: "|6-3|-1 = 2."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.80 },
          historicalData: { year: 2016, slot: 1 }
        },
        {
          id: "m4-dilr-15",
          format: "MCQ",
          questionText: "Who lives immediately below P?",
          options: ["S", "R", "T", "Q"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "P=2, so immediately below is floor 1 = S.",
            shortcutMethod: "P=2, below is S=1."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.88 },
          historicalData: { year: 2016, slot: 1 }
        }
      ]
    },
    {
      questionSetId: "m4-dilr-set-4",
      section: "DILR",
      difficultyRating: 4.0,
      parentContent: {
        textPayload: `A matrix puzzle: Five students — Akhil, Bina, Chetan, Divya, Eshaan — appeared for five subject exams — Math, Physics, Chemistry, Biology, English. Each student received a distinct rank from 1 (best) to 5 (worst) in each subject (so each subject's ranks are a permutation of {1,2,3,4,5}).

Known facts:
- Akhil ranked 1st in Math and 5th in English.
- Bina ranked 2nd in Physics and never ranked 1st in any subject.
- Chetan ranked 1st in Chemistry and 1st in English.
- Divya ranked 3rd in Math, 3rd in Chemistry, and 2nd in Biology.
- Eshaan ranked 1st in Physics and 1st in Biology.`
      },
      childQuestions: [
        {
          id: "m4-dilr-16",
          format: "MCQ",
          questionText: "Who ranked 1st in Math?",
          options: ["Akhil", "Bina", "Chetan", "Eshaan"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Directly stated: Akhil ranked 1st in Math.",
            shortcutMethod: "Direct fact from the problem."
          },
          analyticsMetadata: { topicTag: "LR-Matrix", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.98 },
          historicalData: { year: 2019, slot: 1 }
        },
        {
          id: "m4-dilr-17",
          format: "MCQ",
          questionText: "In how many subjects did Chetan rank first?",
          options: ["1", "2", "3", "0"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Chetan ranked 1st in Chemistry and 1st in English: 2 subjects.",
            shortcutMethod: "Chemistry + English = 2."
          },
          analyticsMetadata: { topicTag: "LR-Matrix", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.95 },
          historicalData: { year: 2019, slot: 1 }
        },
        {
          id: "m4-dilr-18",
          format: "TITA",
          questionText: "What was Divya's rank in Biology?",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "Directly stated: Divya ranked 2nd in Biology.",
            shortcutMethod: "Direct fact."
          },
          analyticsMetadata: { topicTag: "LR-Matrix", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.95 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-dilr-19",
          format: "MCQ",
          questionText: "In Physics, which rank did Akhil, Chetan, and Divya receive (in some order)?",
          options: ["1, 2, 3", "3, 4, 5", "2, 3, 4", "1, 3, 5"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "In Physics: Eshaan=1, Bina=2. So Akhil, Chetan, and Divya occupy ranks 3, 4, 5 in some order.",
            shortcutMethod: "Remaining ranks after Eshaan(1) and Bina(2) are 3,4,5."
          },
          analyticsMetadata: { topicTag: "LR-Matrix", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.80 },
          historicalData: { year: 2018, slot: 2 }
        },
        {
          id: "m4-dilr-20",
          format: "TITA",
          questionText: "In Chemistry, what ranks do Akhil, Bina, and Eshaan occupy (in some order)? Enter the sum of these three ranks.",
          options: null,
          correctAnswer: "11",
          solution: {
            detailedExplanation: "In Chemistry: Chetan=1, Divya=3. Ranks {2,4,5} go to Akhil, Bina, Eshaan. Sum = 2+4+5 = 11.",
            shortcutMethod: "Remaining ranks 2+4+5 = 11."
          },
          analyticsMetadata: { topicTag: "LR-Matrix", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.75 },
          historicalData: { year: 2018, slot: 2 }
        }
      ]
    },
    {
      questionSetId: "m4-dilr-set-5",
      section: "DILR",
      difficultyRating: 4.5,
      parentContent: {
        textPayload: `A pie chart shows the distribution of a city's Rs. 800 crore annual budget across five sectors:

- Education: 30%
- Healthcare: 25%
- Infrastructure: 20%
- Public Safety: 15%
- Administration: 10%

Actual spending for the year as a percentage of each sector's allocation:
- Education spent 90% of its allocation.
- Healthcare spent 110% of its allocation.
- Infrastructure spent 80% of its allocation.
- Public Safety spent 100% of its allocation.
- Administration spent 95% of its allocation.`
      },
      childQuestions: [
        {
          id: "m4-dilr-21",
          format: "MCQ",
          questionText: "How much (Rs. crore) was allocated to Healthcare?",
          options: ["180", "200", "220", "160"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Healthcare allocation = 25% of 800 = 200 Rs. crore.",
            shortcutMethod: "0.25 x 800 = 200."
          },
          analyticsMetadata: { topicTag: "DI-PieChart", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.92 },
          historicalData: { year: 2015, slot: 1 }
        },
        {
          id: "m4-dilr-22",
          format: "TITA",
          questionText: "What was the total actual spending (Rs. crore) across all sectors?",
          options: null,
          correctAnswer: "760",
          solution: {
            detailedExplanation: "Education: 240 x 0.90 = 216. Healthcare: 200 x 1.10 = 220. Infrastructure: 160 x 0.80 = 128. Public Safety: 120 x 1.00 = 120. Administration: 80 x 0.95 = 76. Total = 216+220+128+120+76 = 760.",
            shortcutMethod: "216+220+128+120+76 = 760."
          },
          analyticsMetadata: { topicTag: "DI-PieChart", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 },
          historicalData: { year: 2015, slot: 1 }
        }
      ]
    }
  ],
  QA: [
    {
      questionSetId: "m4-qa-standalone-1",
      section: "QA",
      difficultyRating: 4.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m4-qa-1",
          format: "MCQ",
          questionText: "If the roots of the quadratic equation x^2 - (k+3)x + 2k+2 = 0 are consecutive positive integers, then k equals:",
          options: ["0", "1", "2", "3"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Let roots be n, n+1. Sum = 2n+1 = k+3, so k = 2n-2. Product = n(n+1) = 2k+2 = 4n-2. So n^2+n = 4n-2 -> n^2-3n+2=0 -> (n-1)(n-2)=0 -> n=1 or n=2. For consecutive positive integers taken as n=2 (roots 2,3): k = 2(2)-2 = 2. Check: product = 6, 2k+2 = 6 ok.",
            shortcutMethod: "Test options: k=2 -> equation x^2-5x+6=0 -> roots 2,3 (consecutive). Correct."
          },
          analyticsMetadata: { topicTag: "Algebra-Quadratic", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.65 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-qa-2",
          format: "TITA",
          questionText: "If log_2(x) + log_2(x-2) = 3, find the value of x.",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "log_2(x(x-2)) = 3 -> x(x-2) = 8 -> x^2-2x-8=0 -> (x-4)(x+2)=0 -> x=4 or x=-2. Since log requires x>2, x=4.",
            shortcutMethod: "Combine logs: x(x-2)=8. Solve -> x=4."
          },
          analyticsMetadata: { topicTag: "Algebra-Logarithm", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-qa-3",
          format: "MCQ",
          questionText: "The sum of the first 10 terms of an arithmetic progression with first term 1 is 100. What is the common difference?",
          options: ["2", "3", "4", "5"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "S_10 = (10/2)(2(1) + 9d) = 5(2+9d) = 10 + 45d = 100. So 45d = 90 -> d = 2.",
            shortcutMethod: "5(2+9d)=100 -> d=2."
          },
          analyticsMetadata: { topicTag: "Algebra-AP", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.80 },
          historicalData: { year: 2016, slot: 2 }
        },
        {
          id: "m4-qa-4",
          format: "MCQ",
          questionText: "A cylindrical tank of radius 7 m and height 10 m is filled with water. How many litres of water does it contain? (Use pi = 22/7)",
          options: ["1,54,000", "15,40,000", "1,54,00,000", "1540"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Volume = pi x r^2 x h = (22/7)(49)(10) = 1540 m^3. 1 m^3 = 1000 L -> 15,40,000 L.",
            shortcutMethod: "V=1540 m^3 -> 15,40,000 L."
          },
          analyticsMetadata: { topicTag: "Geometry-Mensuration", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.80 },
          historicalData: { year: 2018, slot: 1 }
        },
        {
          id: "m4-qa-5",
          format: "TITA",
          questionText: "If sin(theta) + cos(theta) = sqrt(2), find the value of sin(theta) * cos(theta).",
          options: null,
          correctAnswer: "0.5",
          solution: {
            detailedExplanation: "(sin+cos)^2 = 1 + 2 sin cos. So 2 = 1 + 2 sin cos -> sin cos = 0.5.",
            shortcutMethod: "Square both sides: 2 = 1 + 2(sin cos) -> 0.5."
          },
          analyticsMetadata: { topicTag: "Trigonometry", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.72 },
          historicalData: { year: 2019, slot: 2 }
        }
      ]
    },
    {
      questionSetId: "m4-qa-standalone-2",
      section: "QA",
      difficultyRating: 4.5,
      parentContent: null,
      childQuestions: [
        {
          id: "m4-qa-6",
          format: "MCQ",
          questionText: "A train travels from City A to City B at 60 km/hr and returns at 40 km/hr. What is the average speed for the entire journey?",
          options: ["48 km/hr", "50 km/hr", "45 km/hr", "52 km/hr"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Average speed = 2xy/(x+y) = 2(60)(40)/100 = 4800/100 = 48 km/hr.",
            shortcutMethod: "Harmonic mean: 48 km/hr."
          },
          analyticsMetadata: { topicTag: "Arithmetic-TSD", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.82 },
          historicalData: { year: 2015, slot: 2 }
        },
        {
          id: "m4-qa-7",
          format: "TITA",
          questionText: "A 40-litre mixture contains milk and water in the ratio 7:1. How many litres of water must be added to make the ratio 7:2?",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "Milk = (7/8)(40) = 35 L. Water = 5 L. For ratio 7:2, water should = (2/7)(35) = 10 L. Add 10 - 5 = 5 L.",
            shortcutMethod: "Milk stays 35, new water = 10, add 5."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Mixtures", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.74 },
          historicalData: { year: 2016, slot: 1 }
        },
        {
          id: "m4-qa-8",
          format: "MCQ",
          questionText: "A shopkeeper marks an article 40% above cost and gives a 20% discount on the marked price. What is his profit percentage?",
          options: ["12%", "10%", "15%", "8%"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "CP=100, MP=140, SP=140(0.8)=112. Profit = 12%.",
            shortcutMethod: "1.4 x 0.8 = 1.12 -> 12% profit."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Profit", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.85 },
          historicalData: { year: 2017, slot: 1 }
        },
        {
          id: "m4-qa-9",
          format: "MCQ",
          questionText: "A and B together complete a work in 12 days. A alone does it in 20 days. How many days will B take alone?",
          options: ["30", "25", "28", "24"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "1/B = 1/12 - 1/20 = (5-3)/60 = 2/60 = 1/30. B = 30 days.",
            shortcutMethod: "1/12 - 1/20 = 1/30."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Work", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.83 },
          historicalData: { year: 2018, slot: 2 }
        },
        {
          id: "m4-qa-10",
          format: "TITA",
          questionText: "Find the sum of the infinite geometric series: 1 + 1/3 + 1/9 + 1/27 + ... (Enter as a decimal)",
          options: null,
          correctAnswer: "1.5",
          solution: {
            detailedExplanation: "S = a/(1-r) = 1/(1-1/3) = 3/2 = 1.5.",
            shortcutMethod: "1/(1-1/3) = 3/2."
          },
          analyticsMetadata: { topicTag: "Algebra-GP", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.88 },
          historicalData: { year: 2019, slot: 1 }
        },
        {
          id: "m4-qa-11",
          format: "MCQ",
          questionText: "If log_10(2) = 0.3010, then log_10(5) equals:",
          options: ["0.6990", "0.6021", "0.3010", "0.7000"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "log(5) = log(10/2) = 1 - 0.3010 = 0.6990.",
            shortcutMethod: "1 - 0.3010 = 0.6990."
          },
          analyticsMetadata: { topicTag: "Algebra-Logarithm", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.90 },
          historicalData: { year: 2015, slot: 1 }
        }
      ]
    },
    {
      questionSetId: "m4-qa-standalone-3",
      section: "QA",
      difficultyRating: 4.5,
      parentContent: null,
      childQuestions: [
        {
          id: "m4-qa-12",
          format: "MCQ",
          questionText: "The sum of the reciprocals of the roots of the quadratic equation 3x^2 - 7x + 4 = 0 is:",
          options: ["7/4", "4/7", "3/4", "7/3"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "For ax^2+bx+c=0: sum = -b/a, product = c/a. Sum of reciprocals = (sum)/(product) = -b/c = 7/4.",
            shortcutMethod: "Sum of reciprocals = -b/c = 7/4."
          },
          analyticsMetadata: { topicTag: "Algebra-Quadratic", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.80 },
          historicalData: { year: 2016, slot: 1 }
        },
        {
          id: "m4-qa-13",
          format: "TITA",
          questionText: "If the arithmetic mean of 2 and x equals the geometric mean of 8 and 2, find x.",
          options: null,
          correctAnswer: "6",
          solution: {
            detailedExplanation: "GM(8,2) = sqrt(16) = 4. AM(2,x) = (2+x)/2 = 4 -> x = 6.",
            shortcutMethod: "GM=4, (2+x)/2=4 -> x=6."
          },
          analyticsMetadata: { topicTag: "Algebra-Means", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 },
          historicalData: { year: 2017, slot: 2 }
        },
        {
          id: "m4-qa-14",
          format: "MCQ",
          questionText: "A rectangle has length 12 cm and diagonal 13 cm. What is its perimeter?",
          options: ["34 cm", "30 cm", "32 cm", "36 cm"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Width = sqrt(13^2 - 12^2) = sqrt(25) = 5. Perimeter = 2(12+5) = 34 cm.",
            shortcutMethod: "5-12-13 triangle. P = 34."
          },
          analyticsMetadata: { topicTag: "Geometry-Rectangle", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.88 },
          historicalData: { year: 2018, slot: 1 }
        },
        {
          id: "m4-qa-15",
          format: "MCQ",
          questionText: "Two pipes A and B fill a tank in 20 and 30 minutes respectively. Opened together, how long to fill?",
          options: ["12 min", "10 min", "15 min", "14 min"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "1/20 + 1/30 = 5/60 = 1/12. Time = 12 min.",
            shortcutMethod: "1/20 + 1/30 = 1/12."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Pipes", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.90 },
          historicalData: { year: 2015, slot: 2 }
        },
        {
          id: "m4-qa-16",
          format: "TITA",
          questionText: "If tan(theta) = 3/4 and theta is acute, find (sin(theta) + cos(theta)).",
          options: null,
          correctAnswer: "1.4",
          solution: {
            detailedExplanation: "tan=3/4 -> opp=3, adj=4, hyp=5. sin=3/5, cos=4/5. Sum = 7/5 = 1.4.",
            shortcutMethod: "3-4-5 triangle: 7/5 = 1.4."
          },
          analyticsMetadata: { topicTag: "Trigonometry", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.85 },
          historicalData: { year: 2019, slot: 2 }
        },
        {
          id: "m4-qa-17",
          format: "MCQ",
          questionText: "A 16-litre mixture contains acid and water in the ratio 5:3. How much acid is in the mixture?",
          options: ["10 L", "8 L", "12 L", "6 L"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Acid = (5/8)(16) = 10 L.",
            shortcutMethod: "(5/8) x 16 = 10."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Mixtures", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.92 },
          historicalData: { year: 2016, slot: 2 }
        }
      ]
    },
    {
      questionSetId: "m4-qa-standalone-4",
      section: "QA",
      difficultyRating: 5.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m4-qa-18",
          format: "TITA",
          questionText: "If 3^x = 5 and 5^y = 27, find the value of xy.",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "3^x = 5 -> x = log_3(5). 5^y = 27 = 3^3 -> y = log_5(27) = 3 log_5(3). xy = log_3(5) * 3 log_5(3) = 3 * [log_3(5) * log_5(3)] = 3 * 1 = 3.",
            shortcutMethod: "log_3(5) * log_5(3) = 1, so xy = 3."
          },
          analyticsMetadata: { topicTag: "Algebra-Logarithm", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.55 },
          historicalData: { year: 2018, slot: 2 }
        },
        {
          id: "m4-qa-19",
          format: "MCQ",
          questionText: "A rectangle's length is increased by 20% and its width is decreased by 20%. The area:",
          options: ["decreases by 4%", "remains the same", "increases by 4%", "decreases by 20%"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "New area = 1.2L x 0.8W = 0.96 LW. Change = -4%.",
            shortcutMethod: "1.2 x 0.8 = 0.96 -> 4% decrease."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Percentage", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 },
          historicalData: { year: 2015, slot: 1 }
        },
        {
          id: "m4-qa-20",
          format: "TITA",
          questionText: "The sum of three consecutive terms of an AP is 21 and the product of the first and third is 45. Find the smallest term.",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "Let terms be a-d, a, a+d. Sum = 3a = 21 -> a = 7. (a-d)(a+d) = 49 - d^2 = 45 -> d^2 = 4 -> d = 2. Terms: 5, 7, 9. Smallest = 5.",
            shortcutMethod: "Middle = 7. 49 - d^2 = 45 -> d=2 -> smallest = 5."
          },
          analyticsMetadata: { topicTag: "Algebra-AP", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.75 },
          historicalData: { year: 2017, slot: 1 }
        },
        {
          id: "m4-qa-21",
          format: "MCQ",
          questionText: "A sphere of radius 6 cm is melted and recast into smaller spheres of radius 2 cm. How many smaller spheres are formed?",
          options: ["27", "9", "18", "36"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Volume ratio = (6/2)^3 = 27.",
            shortcutMethod: "(R/r)^3 = 27."
          },
          analyticsMetadata: { topicTag: "Geometry-Mensuration", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.90 },
          historicalData: { year: 2019, slot: 2 }
        },
        {
          id: "m4-qa-22",
          format: "TITA",
          questionText: "If (x + 1/x) = 3, find the value of (x^3 + 1/x^3).",
          options: null,
          correctAnswer: "18",
          solution: {
            detailedExplanation: "Using (x+1/x)^3 = x^3 + 1/x^3 + 3(x+1/x): 27 = x^3 + 1/x^3 + 9 -> x^3 + 1/x^3 = 18.",
            shortcutMethod: "Identity: a^3+b^3 = (a+b)^3 - 3ab(a+b) = 27 - 9 = 18."
          },
          analyticsMetadata: { topicTag: "Algebra-Identity", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.78 },
          historicalData: { year: 2018, slot: 1 }
        }
      ]
    }
  ]
};

// Helper to flatten all questions for a section
export function getQuestionsForSection(section) {
  const sets = mockQuestions4[section] || [];
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

export default mockQuestions4;
