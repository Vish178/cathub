// CAT Mock Test 2 - Question Bank
// Structure follows the same JSON schema as mockQuestions.js with parent-child relationships

const mockQuestions2 = {
  VARC: [
    {
      questionSetId: "m2-varc-set-1",
      section: "VARC",
      difficultyRating: 3.0,
      parentContent: {
        textPayload: `The discipline of behavioral economics has revealed that the classical model of Homo economicus—the perfectly rational agent who maximizes utility through consistent, logical choices—is at best an idealization and at worst a misleading fiction. Decades of experimental research, from Daniel Kahneman and Amos Tversky's prospect theory to Richard Thaler's studies on mental accounting, have demonstrated that human beings systematically deviate from rational economic behavior in predictable ways.

One of the most robust findings concerns loss aversion: people tend to feel the pain of losing a given amount roughly twice as intensely as the pleasure of gaining the same amount. This asymmetry has profound implications for financial markets, insurance purchasing, and even labor negotiations. A worker who frames a potential wage reduction as a loss will resist it far more vigorously than she would pursue an equivalent wage increase, even when the net economic calculation is identical.

The endowment effect, closely related to loss aversion, describes the tendency of individuals to overvalue objects simply because they own them. In controlled experiments, subjects randomly given a coffee mug demanded roughly twice as much to part with it as those without a mug were willing to pay for one. The mere fact of possession altered perceived value, contradicting the standard assumption that willingness to pay and willingness to accept should converge.

Yet the critique of behavioral economics has also gained sophistication. Some scholars argue that so-called irrational behaviors are actually adaptive heuristics—cognitive shortcuts that served our ancestors well in environments of uncertainty and limited information. What appears as bias in a laboratory setting may function as an efficient decision-making strategy in the complex, information-rich environment of everyday life. The debate thus centers not on whether people deviate from perfect rationality, but on whether those deviations constitute errors or adaptations.`
      },
      childQuestions: [
        {
          id: "m2-varc-1",
          format: "MCQ",
          questionText: "The primary purpose of the passage is to:",
          options: [
            "Argue that behavioral economics has completely replaced classical economic theory",
            "Describe key findings of behavioral economics and acknowledge evolving critiques",
            "Prove that human decision-making is fundamentally irrational",
            "Compare the experimental methods of Kahneman, Tversky, and Thaler"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage describes central behavioral economics concepts (loss aversion, endowment effect) in paragraphs 2-3, then introduces a sophisticated critique in paragraph 4. This two-part structure—findings plus pushback—matches option B precisely.",
            shortcutMethod: "The final paragraph's 'Yet the critique...' signals a balanced presentation, not a one-sided argument."
          },
          analyticsMetadata: { topicTag: "RC-Main-Idea", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.74 }
        },
        {
          id: "m2-varc-2",
          format: "MCQ",
          questionText: "The coffee mug experiment is mentioned in the passage primarily to:",
          options: [
            "Show that coffee mugs are commonly overpriced in markets",
            "Illustrate how ownership changes the perceived value of an object",
            "Criticize the methodology of behavioral economics experiments",
            "Demonstrate that consumers are easily manipulated by sellers"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The mug experiment is introduced to illustrate the endowment effect—that 'mere fact of possession altered perceived value.' It shows ownership systematically shifts valuation upward.",
            shortcutMethod: "The sentence immediately after the experiment states its conclusion: 'The mere fact of possession altered perceived value.'"
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.80 }
        },
        {
          id: "m2-varc-3",
          format: "MCQ",
          questionText: "According to the passage, loss aversion implies that:",
          options: [
            "People avoid all financial risks equally",
            "The psychological impact of losses exceeds that of equivalent gains",
            "Workers always prefer higher wages to job security",
            "Insurance companies exploit irrational consumer fears"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage states people 'feel the pain of losing a given amount roughly twice as intensely as the pleasure of gaining the same amount,' directly supporting option B.",
            shortcutMethod: "The definition is given explicitly: losing hurts ~2x more than gaining pleases."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.82 }
        },
        {
          id: "m2-varc-4",
          format: "TITA",
          questionText: "According to the passage, subjects who owned the coffee mug demanded approximately how many times more than non-owners were willing to pay? (Enter a number)",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "The passage states subjects 'demanded roughly twice as much to part with it as those without a mug were willing to pay for one.' The answer is 2.",
            shortcutMethod: "Direct factual retrieval: 'roughly twice as much.'"
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.90 }
        }
      ]
    },
    {
      questionSetId: "m2-varc-set-2",
      section: "VARC",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `The philosophy of science underwent a seismic shift in the mid-twentieth century when Thomas Kuhn published "The Structure of Scientific Revolutions" in 1962. Before Kuhn, the dominant view—championed by Karl Popper and the logical positivists—held that science progressed through a cumulative process of conjecture and refutation. Each experiment, each discovery, added another brick to the steadily growing edifice of knowledge. Progress was linear, rational, and continuous.

Kuhn's alternative account was far more disruptive. He argued that science operates within paradigms—comprehensive frameworks of theory, methodology, and shared assumptions that define what questions are worth asking and what counts as an acceptable answer. Normal science, the everyday activity of researchers, consists of puzzle-solving within the established paradigm. Anomalies—observations that resist explanation within the current framework—accumulate gradually until they precipitate a crisis. This crisis is resolved not by incremental adjustment but by a paradigm shift: a revolutionary transformation in which the old framework is replaced by an entirely new one.

The most controversial aspect of Kuhn's thesis was the claim of incommensurability: the idea that successive paradigms are not merely different but fundamentally incomparable. Scientists working within Newtonian mechanics and those working within Einsteinian relativity, Kuhn suggested, inhabit different conceptual worlds. The terms they use—mass, space, time—may look identical but carry different meanings within their respective frameworks. If this is correct, it becomes difficult to claim that later paradigms are objectively "better" than earlier ones, undermining the notion of scientific progress itself.

The philosophical community responded with a blend of admiration and alarm. While Kuhn's historical approach enriched the understanding of how science actually works, his relativistic implications troubled those who believed in the objectivity of scientific knowledge. Imre Lakatos attempted a synthesis, proposing research programmes that could be evaluated as progressive or degenerating based on their ability to predict novel facts. Larry Laudan offered problem-solving effectiveness as a criterion for comparing paradigms. These responses sought to preserve Kuhn's historical insights while rescuing a meaningful concept of scientific progress.`
      },
      childQuestions: [
        {
          id: "m2-varc-5",
          format: "MCQ",
          questionText: "The passage suggests that Kuhn's concept of incommensurability was controversial primarily because it:",
          options: [
            "Denied that scientists use mathematical models",
            "Threatened the idea that science objectively progresses toward truth",
            "Claimed that Einstein was not superior to Newton",
            "Rejected the importance of experimental evidence"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage states that if incommensurability is correct, 'it becomes difficult to claim that later paradigms are objectively better than earlier ones, undermining the notion of scientific progress itself.' This directly supports option B.",
            shortcutMethod: "The key phrase is 'undermining the notion of scientific progress itself'—that is why it caused alarm."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.68 }
        },
        {
          id: "m2-varc-6",
          format: "MCQ",
          questionText: "According to the passage, 'normal science' in Kuhn's framework refers to:",
          options: [
            "Revolutionary breakthroughs that transform a field",
            "Routine puzzle-solving activity within an established paradigm",
            "The process of falsifying existing theories through experiments",
            "Collaborative efforts between scientists from different paradigms"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage explicitly defines normal science as 'the everyday activity of researchers' which 'consists of puzzle-solving within the established paradigm.'",
            shortcutMethod: "Direct definition in paragraph 2: 'Normal science... consists of puzzle-solving within the established paradigm.'"
          },
          analyticsMetadata: { topicTag: "RC-Vocabulary", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.85 }
        },
        {
          id: "m2-varc-7",
          format: "MCQ",
          questionText: "The responses of Lakatos and Laudan, as described in the passage, attempted to:",
          options: [
            "Completely reject Kuhn's historical approach to science",
            "Prove that paradigm shifts never actually occur",
            "Retain Kuhn's insights while restoring a basis for evaluating scientific progress",
            "Demonstrate that Popper's falsificationism was correct all along"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The final paragraph states these thinkers 'sought to preserve Kuhn's historical insights while rescuing a meaningful concept of scientific progress,' exactly matching option C.",
            shortcutMethod: "The last sentence directly summarizes their goal: 'preserve Kuhn's insights while rescuing... scientific progress.'"
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.72 }
        },
        {
          id: "m2-varc-8",
          format: "TITA",
          questionText: "In what year was 'The Structure of Scientific Revolutions' published? (Enter the year)",
          options: null,
          correctAnswer: "1962",
          solution: {
            detailedExplanation: "The passage states Kuhn 'published The Structure of Scientific Revolutions in 1962.'",
            shortcutMethod: "Direct factual retrieval from the first sentence."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.95 }
        }
      ]
    },
    {
      questionSetId: "m2-varc-standalone-1",
      section: "VARC",
      difficultyRating: 3.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-varc-9",
          format: "MCQ",
          questionText: "Five sentences are given below, labeled A through E. Choose the option that gives the correct sequence:\n\nA. The resulting treaty, signed in 1648, established the principle of state sovereignty that still underpins international law today.\nB. By the early seventeenth century, Europe was engulfed in a devastating conflict driven by both religious rivalry and political ambition.\nC. Exhaustion on all sides eventually forced the warring parties to negotiate.\nD. The Thirty Years' War ravaged Central Europe, killing approximately one-third of the population in some German states.\nE. These negotiations, held in the Westphalian cities of Osnabruck and Munster, lasted nearly four years.",
          options: ["BDCEA", "BCDEA", "DBCEA", "BDCAE"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Logical sequence: B (context: 17th century conflict) -> D (names the war, describes devastation) -> C (exhaustion leads to negotiation) -> E (details of where/how long negotiations took) -> A (resulting treaty and its legacy).",
            shortcutMethod: "B sets context, D specifies the war, C transitions to peace process, E gives negotiation details, A states the outcome."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.52 }
        },
        {
          id: "m2-varc-10",
          format: "TITA",
          questionText: "Five sentences are labeled 1-5. Four form a coherent paragraph. Identify the ODD sentence (enter the number):\n\n1. The human genome contains approximately 20,000 protein-coding genes.\n2. The discovery of CRISPR-Cas9 has revolutionized gene editing technology.\n3. The global market for renewable energy surpassed $300 billion in 2020.\n4. Scientists can now target and modify specific DNA sequences with unprecedented precision.\n5. Potential applications range from treating genetic diseases to developing drought-resistant crops.",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Sentences 1, 2, 4, and 5 relate to genetics and gene editing. Sentence 3 is about the renewable energy market—a completely unrelated topic.",
            shortcutMethod: "Common theme: genetics/gene editing. Sentence 3 about renewable energy is the clear outlier."
          },
          analyticsMetadata: { topicTag: "OddSentence-TITA", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.78 }
        }
      ]
    },
    {
      questionSetId: "m2-varc-set-3",
      section: "VARC",
      difficultyRating: 4.0,
      parentContent: {
        textPayload: `The history of the Columbian Exchange—the massive transfer of plants, animals, diseases, and peoples between the Old and New Worlds following Columbus's 1492 voyage—challenges any simple narrative of European triumph. While the exchange undeniably devastated indigenous populations of the Americas, primarily through the introduction of diseases such as smallpox, measles, and influenza to which they had no immunity, it also transformed the Old World in ways that are often overlooked.

Consider the impact of New World crops on global food security. The potato, native to the Andes, became the dietary foundation of northern Europe by the eighteenth century, enabling population growth that fueled both industrialization and military expansion. Maize, domesticated in Mesoamerica over thousands of years of selective breeding, spread across Africa and Asia, becoming a staple for hundreds of millions. The tomato, initially regarded with suspicion in Europe, eventually revolutionized Mediterranean cuisine. Without these New World contributions, the demographic and economic trajectories of Europe, Africa, and Asia would have been fundamentally different.

The ecological consequences were equally profound and often unintended. European livestock—cattle, pigs, horses—transformed the landscapes of the Americas, competing with native species and enabling new forms of agriculture and transportation. The horse, reintroduced to the Americas after a 10,000-year absence, radically altered the cultures of the Great Plains peoples. Conversely, European forests were reshaped by the introduction of American species, while Old World weeds and grasses colonized vast tracts of the New World, permanently altering ecosystems.

The Columbian Exchange thus defies simple moral categorization. It was simultaneously a demographic catastrophe for indigenous peoples, an ecological revolution on every continent, and a dietary transformation that reshaped human civilization. Understanding it requires holding these multiple, often contradictory, consequences in view simultaneously—a task that resists the tidiness of conventional historical narratives.`
      },
      childQuestions: [
        {
          id: "m2-varc-11",
          format: "MCQ",
          questionText: "The author's primary argument about the Columbian Exchange is that it:",
          options: [
            "Was primarily a story of European exploitation of indigenous peoples",
            "Had complex, multidirectional consequences that resist simple moral judgment",
            "Benefited the Old World far more than the New World",
            "Should be understood primarily through its ecological impacts"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The final paragraph explicitly states the Columbian Exchange 'defies simple moral categorization' and requires understanding 'multiple, often contradictory, consequences.' This matches option B precisely.",
            shortcutMethod: "The concluding paragraph's thesis is the key: 'defies simple moral categorization' with 'contradictory consequences.'"
          },
          analyticsMetadata: { topicTag: "RC-Main-Idea", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.72 }
        },
        {
          id: "m2-varc-12",
          format: "MCQ",
          questionText: "The passage mentions the potato primarily to illustrate:",
          options: [
            "The agricultural backwardness of pre-Columbian Europe",
            "How New World crops fundamentally altered Old World demographics and economies",
            "That Andean civilizations were more advanced than European ones",
            "The failure of European agriculture to develop its own staple crops"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The potato example shows how a New World crop 'became the dietary foundation of northern Europe,' 'enabling population growth that fueled industrialization and military expansion'—illustrating the transformative impact on Old World demographics and economies.",
            shortcutMethod: "The potato is one of several examples under the heading sentence about 'New World crops on global food security.'"
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.75 }
        },
        {
          id: "m2-varc-13",
          format: "MCQ",
          questionText: "Which of the following is NOT mentioned as a consequence of the Columbian Exchange?",
          options: [
            "Introduction of diseases devastating to indigenous populations",
            "Transformation of Great Plains cultures through the reintroduction of horses",
            "Development of new maritime trade routes across the Pacific",
            "Alteration of ecosystems through the spread of non-native species"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The passage discusses diseases (paragraph 1), horses and Great Plains cultures (paragraph 3), and ecosystem changes (paragraph 3). Pacific trade routes are never mentioned.",
            shortcutMethod: "Elimination: A is in paragraph 1, B in paragraph 3, D in paragraph 3. C has no textual support."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.78 }
        },
        {
          id: "m2-varc-14",
          format: "TITA",
          questionText: "According to the passage, for how many years were horses absent from the Americas before their reintroduction? (Enter the number)",
          options: null,
          correctAnswer: "10000",
          solution: {
            detailedExplanation: "The passage states the horse was 'reintroduced to the Americas after a 10,000-year absence.'",
            shortcutMethod: "Direct factual retrieval: '10,000-year absence.'"
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.88 }
        }
      ]
    },
    {
      questionSetId: "m2-varc-standalone-2",
      section: "VARC",
      difficultyRating: 2.5,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-varc-15",
          format: "MCQ",
          questionText: "Choose the most appropriate summary of the paragraph:\n\nQuantum entanglement, one of the most counterintuitive phenomena in physics, occurs when two particles become correlated in such a way that measuring the state of one instantly determines the state of the other, regardless of the distance separating them. Einstein famously dismissed this as 'spooky action at a distance,' but decades of experiments have confirmed its reality. Entanglement now forms the theoretical basis for quantum computing and quantum cryptography, technologies that promise to revolutionize information processing and secure communication within the coming decades.",
          options: [
            "Einstein was wrong about all of his physical theories due to his rejection of quantum entanglement",
            "Quantum entanglement, despite initially seeming impossible, has been experimentally verified and now underpins promising technologies like quantum computing and cryptography",
            "Quantum computing will replace all classical computers within the next decade",
            "The phenomenon of entanglement proves that information can travel faster than the speed of light"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The paragraph describes entanglement, notes its experimental confirmation despite initial skepticism, and identifies its technological applications. Option B captures all three elements accurately.",
            shortcutMethod: "Match each part: phenomenon -> confirmation -> applications. Only B covers all three."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.76 }
        },
        {
          id: "m2-varc-16",
          format: "MCQ",
          questionText: "Five sentences are given below. Choose the correct sequence:\n\nA. These observations led Darwin to formulate his theory of natural selection.\nB. He noticed that finch species on different islands had distinctly shaped beaks adapted to their food sources.\nC. Charles Darwin's five-year voyage aboard HMS Beagle began in 1831.\nD. The theory proposed that organisms with advantageous traits were more likely to survive and reproduce.\nE. The Galapagos Islands, which he visited in 1835, proved particularly revelatory.",
          options: ["CEBAD", "CEABD", "CEBDA", "CBEAD"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "C (voyage begins) -> E (Galapagos visit) -> B (finch observations) -> A (leads to theory) -> D (theory explained). Chronological and logical flow from event to observation to theory.",
            shortcutMethod: "C must open (introduces voyage). E has 'which he visited' connecting to the voyage. D explains A's 'theory.' So A precedes D."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.58 }
        }
      ]
    },
    {
      questionSetId: "m2-varc-set-4",
      section: "VARC",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `The revival of interest in Stoic philosophy in the twenty-first century is both surprising and instructive. A school of thought founded in Athens around 300 BCE by Zeno of Citium, Stoicism was for centuries dismissed by modern philosophers as a doctrine of passive resignation—a philosophy for those who had given up on changing the world and could only change their attitude toward it. This caricature, it turns out, is deeply misleading.

The Stoic framework rests on a crucial distinction between what is "up to us" and what is not. External events—illness, financial loss, the actions of others—fall outside our control and therefore should not be the source of our emotional reactions. What remains firmly within our power is our judgment: how we interpret events, what value we assign to them, and how we choose to respond. This is not resignation but a radical form of agency, directing one's energy exclusively toward what can actually be influenced.

Marcus Aurelius, the Roman emperor who authored the Meditations while campaigning on the empire's frontiers, embodied this active Stoicism. His philosophical practice was not a retreat from responsibility but a means of sustaining effective action in the face of enormous pressure. Similarly, Epictetus, a former slave, developed his teachings from lived experience of powerlessness, transforming constraint into a philosophy of inner freedom.

The contemporary appeal of Stoicism may be explained by the peculiar stresses of modern life. In an age of information overload, political polarization, and constant digital stimulation, the Stoic insistence on distinguishing between what we can and cannot control offers a practical framework for maintaining equanimity. It is perhaps no accident that Stoicism has found particular traction among entrepreneurs, military professionals, and athletes—individuals who must perform under conditions of high uncertainty and pressure.`
      },
      childQuestions: [
        {
          id: "m2-varc-17",
          format: "MCQ",
          questionText: "The author describes the common modern dismissal of Stoicism as a 'caricature' because:",
          options: [
            "Modern philosophers never actually studied original Stoic texts",
            "The characterization of Stoicism as passive resignation misrepresents its emphasis on active inner agency",
            "Stoicism was never really a serious philosophical school",
            "The ancient Stoics themselves rejected the label of resignation"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage calls 'passive resignation' a 'deeply misleading' caricature, then explains that Stoicism is 'not resignation but a radical form of agency.' The misrepresentation lies in calling active what was labeled passive.",
            shortcutMethod: "The passage explicitly contrasts 'passive resignation' (the caricature) with 'radical form of agency' (the reality)."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.75 }
        },
        {
          id: "m2-varc-18",
          format: "MCQ",
          questionText: "The examples of Marcus Aurelius and Epictetus serve to:",
          options: [
            "Contrast the experiences of the powerful and the powerless",
            "Demonstrate that Stoicism was practiced across different social strata as an active, not passive, philosophy",
            "Argue that slavery was morally acceptable in ancient Rome",
            "Show that Stoic philosophy is only relevant to people in extreme circumstances"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "An emperor and a former slave both practiced Stoicism actively—Aurelius to sustain 'effective action' and Epictetus to transform 'constraint into inner freedom.' Both examples counter the passive resignation caricature across opposite social positions.",
            shortcutMethod: "Both examples follow the claim that Stoicism is 'active,' and span emperor to slave, showing universality."
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.70 }
        }
      ]
    },
    {
      questionSetId: "m2-varc-standalone-3",
      section: "VARC",
      difficultyRating: 3.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-varc-19",
          format: "TITA",
          questionText: "Arrange the following sentences to form a coherent paragraph and enter the correct sequence as a string of letters (e.g., ABCDE):\n\nA. This decline has alarmed conservationists, who warn that pollinator loss could disrupt global food production.\nB. Honeybee populations worldwide have decreased by nearly 30 percent over the past two decades.\nC. Pesticide manufacturers, however, dispute the strength of the causal link between their products and bee mortality.\nD. Research has identified multiple contributing factors, including pesticide exposure, habitat destruction, and parasitic infections.\nE. The resulting policy debate has pitted agricultural productivity against environmental protection.",
          options: null,
          correctAnswer: "BADCE",
          solution: {
            detailedExplanation: "B (states the fact: bee decline) -> A (consequences/alarm from conservationists) -> D (causes identified by research) -> C (industry pushback on one cause) -> E (resulting policy debate). Moves from fact -> alarm -> causes -> dispute -> policy.",
            shortcutMethod: "B is the opening fact. A has 'This decline' referring to B. E is the concluding framing. C's 'however' signals a counterpoint to D."
          },
          analyticsMetadata: { topicTag: "ParaJumble-TITA", averageTimeSpentSeconds: 140, globalAccuracyRate: 0.45 }
        },
        {
          id: "m2-varc-20",
          format: "MCQ",
          questionText: "Identify the ODD sentence out:\n\nA. The Silk Road facilitated the exchange of goods, ideas, and technologies between East and West for centuries.\nB. Caravans carried silk, spices, and precious metals across vast deserts and mountain passes.\nC. The invention of the printing press in 1440 transformed European intellectual culture.\nD. Buddhist monks traveled along these routes, spreading their faith from India to China and beyond.\nE. The network of trade routes also served as channels for the transmission of diseases such as the bubonic plague.",
          options: ["A", "B", "C", "D"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Sentences A, B, D, and E all discuss the Silk Road and its roles (trade, religion, disease transmission). Sentence C is about the printing press in Europe—a different topic entirely.",
            shortcutMethod: "The Silk Road is the common theme. The printing press (C) is unrelated."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.82 }
        },
        {
          id: "m2-varc-21",
          format: "MCQ",
          questionText: "Choose the best summary:\n\nThe paradox of thrift, first articulated by John Maynard Keynes, describes a situation where individually rational behavior leads to collectively harmful outcomes. When consumers, fearing an economic downturn, reduce spending and increase saving, their prudent individual decisions reduce aggregate demand. This reduction in demand causes businesses to cut production and lay off workers, deepening the very recession that consumers feared. The individual instinct to save during uncertainty, while sensible for each person, can become self-defeating when adopted by an entire economy simultaneously.",
          options: [
            "Keynes proved that saving money is always harmful to economic growth",
            "The paradox of thrift shows how individually rational saving during downturns can collectively worsen recessions by reducing aggregate demand",
            "Consumers should never save money because it causes unemployment",
            "The paradox of thrift only applies to developing economies with weak financial systems"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The paragraph describes how rational individual saving reduces aggregate demand and worsens recessions. Option B captures the paradox precisely: individually rational, collectively harmful.",
            shortcutMethod: "The last sentence is the thesis: 'sensible for each person, self-defeating when adopted by an entire economy.' Only B captures this nuance."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.72 }
        },
        {
          id: "m2-varc-22",
          format: "TITA",
          questionText: "Identify the ODD sentence (enter the letter):\n\nA. The periodic table organizes elements by their atomic number and electron configuration.\nB. Dmitri Mendeleev first published a widely recognized periodic table in 1869.\nC. The discovery of antibiotics in the twentieth century dramatically reduced deaths from bacterial infections.\nD. Noble gases, found in group 18, are characterized by their extremely low reactivity.\nE. Mendeleev's table successfully predicted the properties of elements that had not yet been discovered.",
          options: null,
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Sentences A, B, D, and E all relate to the periodic table and its history. Sentence C is about antibiotics—an entirely different scientific topic.",
            shortcutMethod: "The periodic table is the common thread. Antibiotics (C) is clearly the outlier."
          },
          analyticsMetadata: { topicTag: "OddSentence-TITA", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.80 }
        }
      ]
    },
    {
      questionSetId: "m2-varc-standalone-4",
      section: "VARC",
      difficultyRating: 2.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-varc-23",
          format: "MCQ",
          questionText: "Choose the best summary:\n\nThe phenomenon of 'brain drain'—the emigration of highly skilled professionals from developing to developed countries—has long been viewed as an unequivocal loss for the origin nations. However, recent research suggests a more nuanced picture. Remittances sent home by diaspora professionals often exceed the cost of their education. Furthermore, returnees who come back with advanced skills, international networks, and entrepreneurial experience can catalyze innovation in their home countries. The relationship between emigration and development, it appears, is not zero-sum but dynamic and potentially beneficial.",
          options: [
            "Brain drain is entirely beneficial for developing countries due to remittances",
            "Brain drain has no negative effects on developing countries whatsoever",
            "While brain drain was traditionally seen as purely negative, evidence suggests it can also benefit origin countries through remittances and returning skilled professionals",
            "Developed countries should be prevented from recruiting professionals from developing nations"
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "The paragraph presents the traditional negative view, then introduces remittances and returning skilled professionals as counterpoints, concluding the relationship is 'dynamic and potentially beneficial.' Option C captures this nuance.",
            shortcutMethod: "The paragraph has a clear 'However' pivot: old view (loss) vs. new evidence (benefits). Only C captures both."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.78 }
        },
        {
          id: "m2-varc-24",
          format: "MCQ",
          questionText: "Five sentences form a coherent paragraph. Choose the correct sequence:\n\nA. The result was a legal framework that attempted to balance national sovereignty with universal human rights.\nB. The Universal Declaration of Human Rights, adopted in 1948, was a direct response to the atrocities of World War II.\nC. Eleanor Roosevelt chaired the drafting committee, navigating fierce disagreements between Western democracies and Soviet bloc nations.\nD. Delegates debated whether economic and social rights deserved the same status as civil and political rights.\nE. Despite its non-binding nature, the Declaration has influenced constitutions and legal systems worldwide.",
          options: ["BCDAE", "BCADE", "BDCAE", "BCAED"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "B (introduces the declaration and its origin) -> C (drafting process/committee) -> D (key debate during drafting) -> A (resulting framework/outcome) -> E (legacy/impact). Chronological from creation to impact.",
            shortcutMethod: "B introduces the subject. C has 'chaired the drafting committee' (process). E's 'Despite its non-binding nature' is a concluding assessment."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 105, globalAccuracyRate: 0.55 }
        }
      ]
    }
  ],

  DILR: [
    {
      questionSetId: "m2-dilr-set-1",
      section: "DILR",
      difficultyRating: 3.0,
      parentContent: {
        textPayload: `A school surveyed 250 students about their participation in three extracurricular activities: Debate, Music, and Sports. The following data was collected:

\u2022 110 students participate in Debate
\u2022 95 students participate in Music
\u2022 130 students participate in Sports
\u2022 40 students participate in both Debate and Music
\u2022 50 students participate in both Debate and Sports
\u2022 35 students participate in both Music and Sports
\u2022 20 students participate in all three activities
\u2022 Every student participates in at least one activity

Additional data:
\u2022 Among students who participate ONLY in Debate (no other activity), 60% are in grade 11 and the rest in grade 12
\u2022 Among students who participate ONLY in Sports (no other activity), 75% are boys
\u2022 The total number of boys in the survey is 140`
      },
      childQuestions: [
        {
          id: "m2-dilr-1",
          format: "MCQ",
          questionText: "How many students participate in exactly two activities (not all three)?",
          options: ["55", "60", "65", "70"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Exactly two: (D\u2229M only) = 40-20 = 20. (D\u2229S only) = 50-20 = 30. (M\u2229S only) = 35-20 = 15. Total = 20+30+15 = 65.",
            shortcutMethod: "Subtract the triple overlap from each pairwise overlap, then sum: (40-20)+(50-20)+(35-20) = 20+30+15 = 65."
          },
          analyticsMetadata: { topicTag: "DI-Venn", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 }
        },
        {
          id: "m2-dilr-2",
          format: "TITA",
          questionText: "How many students participate in all three activities?",
          options: null,
          correctAnswer: "20",
          solution: {
            detailedExplanation: "This is directly stated in the problem: 20 students participate in all three activities.",
            shortcutMethod: "Direct data retrieval from the given information."
          },
          analyticsMetadata: { topicTag: "DI-Venn", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.92 }
        },
        {
          id: "m2-dilr-3",
          format: "MCQ",
          questionText: "How many students participate ONLY in Debate (no other activity)?",
          options: ["30", "35", "40", "45"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Only Debate = Total Debate - (D\u2229M only) - (D\u2229S only) - (All three) = 110 - 20 - 30 - 20 = 40.",
            shortcutMethod: "110 - (40-20) - (50-20) - 20 = 110 - 20 - 30 - 20 = 40."
          },
          analyticsMetadata: { topicTag: "DI-Venn", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.72 }
        },
        {
          id: "m2-dilr-4",
          format: "TITA",
          questionText: "How many students who participate ONLY in Debate are in grade 12?",
          options: null,
          correctAnswer: "16",
          solution: {
            detailedExplanation: "Only Debate = 40 students. Grade 12 students among them = 40% of 40 = 16. (Since 60% are in grade 11, 40% are in grade 12.)",
            shortcutMethod: "40 \u00d7 0.40 = 16"
          },
          analyticsMetadata: { topicTag: "DI-Venn", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 }
        }
      ]
    },
    {
      questionSetId: "m2-dilr-set-2",
      section: "DILR",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `Seven employees — Priya, Qasim, Ritu, Sanjay, Tara, Uma, and Vikram — must be scheduled for presentations across five weekdays (Monday through Friday). Each day has exactly two time slots: Morning and Afternoon. The following conditions apply:

1. Each day can have 0, 1, or 2 presentations. All 7 employees present exactly once during the week.
2. Priya presents on Monday Morning.
3. Qasim and Ritu present on the same day but in different slots.
4. Sanjay presents in an Afternoon slot.
5. Tara presents on a day immediately before Uma's presentation day.
6. Vikram presents on Wednesday or Thursday.
7. Monday and Friday each have exactly 1 presentation.
8. No day has more than 2 presentations.
9. At least one presentation happens each day.`
      },
      childQuestions: [
        {
          id: "m2-dilr-5",
          format: "MCQ",
          questionText: "On which day does Priya present?",
          options: ["Monday", "Tuesday", "Wednesday", "Friday"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Condition 2 directly states: 'Priya presents on Monday Morning.'",
            shortcutMethod: "Direct from condition 2."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 15, globalAccuracyRate: 0.95 }
        },
        {
          id: "m2-dilr-6",
          format: "MCQ",
          questionText: "If Qasim and Ritu present on Tuesday, which of the following must be true?",
          options: [
            "Vikram presents on Wednesday",
            "Sanjay presents on Friday",
            "Uma presents on Thursday",
            "Tara presents on Monday"
          ],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Priya = Monday (alone, condition 7). Qasim + Ritu = Tuesday. Friday has exactly 1 presentation. Remaining: Sanjay, Tara, Uma, Vikram for Wed, Thu, Fri. Tara must be the day before Uma (condition 5). Vikram on Wed or Thu (condition 6). Each day needs at least 1 (condition 9). Fri gets 1 person. Wed and Thu need at least 1 each. With 4 people for 3 days (Wed/Thu/Fri), one day gets 2. If Tara=Wed, Uma=Thu: Vikram on Wed or Thu, Sanjay fills remaining. If Tara=Thu, Uma=Fri: Vikram on Wed or Thu. In all valid arrangements, at least one person must be on Wednesday, and Vikram's Wed/Thu constraint combined with other constraints places him on Wednesday.",
            shortcutMethod: "After fixing Mon(Priya) and Tue(Q+R), distribute 4 people across Wed/Thu/Fri with all constraints. Vikram must land on Wednesday."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 150, globalAccuracyRate: 0.48 }
        },
        {
          id: "m2-dilr-7",
          format: "TITA",
          questionText: "What is the maximum number of presentations that can be scheduled on any single day?",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "Condition 8 states no day has more than 2 presentations. So the maximum for any day is 2.",
            shortcutMethod: "Maximum per day is 2 (condition 8)."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 20, globalAccuracyRate: 0.90 }
        },
        {
          id: "m2-dilr-8",
          format: "MCQ",
          questionText: "Which of the following CANNOT be the day of Tara's presentation?",
          options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "Tara must present the day immediately before Uma (condition 5). If Tara is on Friday, Uma would need to present on Saturday, which is not a weekday. Therefore Friday is impossible for Tara.",
            shortcutMethod: "Tara must be followed by Uma the next day. Friday has no 'next day,' so Tara cannot be on Friday."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.80 }
        }
      ]
    },
    {
      questionSetId: "m2-dilr-set-3",
      section: "DILR",
      difficultyRating: 3.0,
      parentContent: {
        textPayload: `The following table shows the quarterly revenue (in lakhs of \u20b9) of four divisions (Alpha, Beta, Gamma, Delta) of a company for the financial year 2023-24:

| Quarter       | Alpha | Beta | Gamma | Delta |
|---------------|-------|------|-------|-------|
| Q1 (Apr-Jun)  |  120  |  85  |   95  |  110  |
| Q2 (Jul-Sep)  |  135  |  90  |  105  |  100  |
| Q3 (Oct-Dec)  |  110  |  105 |  120  |   95  |
| Q4 (Jan-Mar)  |  145  |  110 |  100  |  115  |

Additional information:
\u2022 The profit margin for each division is: Alpha = 20%, Beta = 25%, Gamma = 15%, Delta = 30%
\u2022 Profit margin is defined as (Profit/Revenue) \u00d7 100
\u2022 Each division has a fixed quarterly cost of \u20b910 lakhs for administration, not included in the above profit margin calculation`
      },
      childQuestions: [
        {
          id: "m2-dilr-9",
          format: "MCQ",
          questionText: "Which division had the highest total annual revenue?",
          options: ["Alpha", "Beta", "Gamma", "Delta"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Alpha: 120+135+110+145 = 510. Beta: 85+90+105+110 = 390. Gamma: 95+105+120+100 = 420. Delta: 110+100+95+115 = 420. Alpha has the highest at 510 lakhs.",
            shortcutMethod: "Alpha has the largest individual quarter values. Quick sum: 510 vs next highest 420."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.82 }
        },
        {
          id: "m2-dilr-10",
          format: "TITA",
          questionText: "What is the total revenue of all four divisions in Q3 (in lakhs of \u20b9)?",
          options: null,
          correctAnswer: "430",
          solution: {
            detailedExplanation: "Q3: Alpha(110) + Beta(105) + Gamma(120) + Delta(95) = 430 lakhs.",
            shortcutMethod: "110+105+120+95 = 430"
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.90 }
        },
        {
          id: "m2-dilr-11",
          format: "MCQ",
          questionText: "Which division earned the highest annual profit (before deducting administration costs)?",
          options: ["Alpha", "Beta", "Gamma", "Delta"],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "Annual profit (before admin): Alpha = 510 \u00d7 0.20 = 102. Beta = 390 \u00d7 0.25 = 97.5. Gamma = 420 \u00d7 0.15 = 63. Delta = 420 \u00d7 0.30 = 126. Delta has the highest profit at 126 lakhs.",
            shortcutMethod: "Compare revenue \u00d7 margin: Alpha(510\u00d70.2=102), Delta(420\u00d70.3=126). Delta wins."
          },
          analyticsMetadata: { topicTag: "DI-Profit", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.65 }
        },
        {
          id: "m2-dilr-12",
          format: "TITA",
          questionText: "What is the annual profit of Beta division after deducting administration costs (in lakhs of \u20b9)?",
          options: null,
          correctAnswer: "57.5",
          solution: {
            detailedExplanation: "Beta annual revenue = 390. Profit before admin = 390 \u00d7 0.25 = 97.5. Annual admin cost = 10 \u00d7 4 = 40. Profit after admin = 97.5 - 40 = 57.5 lakhs.",
            shortcutMethod: "390 \u00d7 0.25 = 97.5. Admin = 4 \u00d7 10 = 40. Net = 57.5."
          },
          analyticsMetadata: { topicTag: "DI-Profit", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 }
        }
      ]
    },
    {
      questionSetId: "m2-dilr-set-4",
      section: "DILR",
      difficultyRating: 4.0,
      parentContent: {
        textPayload: `Five houses in a row are painted in five different colors: Red, Blue, Green, Yellow, and White. Each house is occupied by a person of a different nationality: Indian, Japanese, Norwegian, British, and German. Each person drinks a different beverage: Tea, Coffee, Milk, Juice, and Water. The following clues are given:

1. The British person lives in the Red house.
2. The Indian person drinks Tea.
3. The Green house is immediately to the left of the White house.
4. The person in the Green house drinks Coffee.
5. The Norwegian lives in the first house (leftmost).
6. The Yellow house is next to the house where the person drinks Milk.
7. The person in the middle house (house 3) drinks Juice.
8. The Japanese person lives next to the Blue house.
9. The Yellow house is the first house.
10. The German person drinks Water.`
      },
      childQuestions: [
        {
          id: "m2-dilr-13",
          format: "MCQ",
          questionText: "What color is the house where the British person lives?",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Clue 1 directly states: 'The British person lives in the Red house.'",
            shortcutMethod: "Direct from clue 1."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 15, globalAccuracyRate: 0.95 }
        },
        {
          id: "m2-dilr-14",
          format: "MCQ",
          questionText: "What beverage does the person in the middle house (house 3) drink?",
          options: ["Tea", "Coffee", "Juice", "Water"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Clue 7 directly states: 'The person in the middle house drinks Juice.'",
            shortcutMethod: "Direct from clue 7."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 15, globalAccuracyRate: 0.92 }
        },
        {
          id: "m2-dilr-15",
          format: "MCQ",
          questionText: "The Norwegian lives in which color house?",
          options: ["Red", "Blue", "Yellow", "Green"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Clue 5: Norwegian lives in house 1. Clue 9: Yellow house is house 1. Therefore, the Norwegian lives in the Yellow house.",
            shortcutMethod: "Combine clues 5 and 9: Norwegian = house 1 = Yellow."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.88 }
        },
        {
          id: "m2-dilr-16",
          format: "TITA",
          questionText: "In which house number (1-5, left to right) is the Green house located?",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "Clue 9: House 1 = Yellow. Clue 3: Green is immediately left of White, so they are consecutive. Clue 4: Green house person drinks Coffee. Clue 7: House 3 drinks Juice, so Green \u2260 3. Green can be 2 or 4. If Green=2, White=3. If Green=4, White=5. Testing Green=4: House 1=Yellow, House 4=Green, House 5=White. Clue 6: Yellow(1) is next to Milk drinker, so house 2 drinks Milk. House 3 drinks Juice (clue 7). House 4 drinks Coffee (clue 4). Remaining beverages (Tea, Water) for houses 1 and 5. Clue 2: Indian drinks Tea, Clue 10: German drinks Water. This all works consistently. Green = house 4.",
            shortcutMethod: "Yellow=1 (clue 9). Green must be left of White (clue 3). Green\u22603 (clue 7 conflicts with clue 4). Green=4, White=5 satisfies all constraints."
          },
          analyticsMetadata: { topicTag: "LR-Arrangement", averageTimeSpentSeconds: 180, globalAccuracyRate: 0.42 }
        }
      ]
    },
    {
      questionSetId: "m2-dilr-set-5",
      section: "DILR",
      difficultyRating: 3.5,
      parentContent: {
        textPayload: `A bar chart displays the number of units sold by a company across six product categories (Electronics, Clothing, Furniture, Groceries, Books, Toys) in two consecutive years:

Year 2022:
\u2022 Electronics: 4500
\u2022 Clothing: 6200
\u2022 Furniture: 2800
\u2022 Groceries: 8500
\u2022 Books: 3100
\u2022 Toys: 4000

Year 2023:
\u2022 Electronics: 5400
\u2022 Clothing: 5800
\u2022 Furniture: 3500
\u2022 Groceries: 9200
\u2022 Books: 2600
\u2022 Toys: 4800

Additional information:
\u2022 Average selling price per unit in 2023: Electronics = \u20b91200, Clothing = \u20b9800, Furniture = \u20b93500, Groceries = \u20b9150, Books = \u20b9400, Toys = \u20b9600
\u2022 The company's target for 2024 is to increase total units sold by 15% over 2023`
      },
      childQuestions: [
        {
          id: "m2-dilr-17",
          format: "MCQ",
          questionText: "Which category showed the highest percentage increase in units sold from 2022 to 2023?",
          options: ["Electronics", "Furniture", "Toys", "Groceries"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Electronics: (5400-4500)/4500 = 20%. Furniture: (3500-2800)/2800 = 25%. Toys: (4800-4000)/4000 = 20%. Groceries: (9200-8500)/8500 = 8.24%. Furniture has the highest increase at 25%.",
            shortcutMethod: "Furniture: 700/2800 = 25%. Electronics and Toys both = 20%. Furniture wins."
          },
          analyticsMetadata: { topicTag: "DI-BarChart", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 }
        },
        {
          id: "m2-dilr-18",
          format: "TITA",
          questionText: "What was the total number of units sold across all categories in 2022?",
          options: null,
          correctAnswer: "29100",
          solution: {
            detailedExplanation: "2022 total: 4500+6200+2800+8500+3100+4000 = 29,100 units.",
            shortcutMethod: "4500+6200+2800+8500+3100+4000 = 29100"
          },
          analyticsMetadata: { topicTag: "DI-BarChart", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.85 }
        },
        {
          id: "m2-dilr-19",
          format: "MCQ",
          questionText: "Which category generated the highest revenue in 2023?",
          options: ["Electronics", "Furniture", "Groceries", "Clothing"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Revenue 2023: Electronics = 5400\u00d71200 = \u20b964,80,000. Clothing = 5800\u00d7800 = \u20b946,40,000. Furniture = 3500\u00d73500 = \u20b91,22,50,000. Groceries = 9200\u00d7150 = \u20b913,80,000. Furniture has the highest revenue at \u20b91,22,50,000.",
            shortcutMethod: "Furniture's high unit price (\u20b93500) dominates. 3500 \u00d7 3500 = \u20b9122.5 lakhs, far exceeding others."
          },
          analyticsMetadata: { topicTag: "DI-Revenue", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.55 }
        },
        {
          id: "m2-dilr-20",
          format: "TITA",
          questionText: "What is the company's target for total units to be sold in 2024?",
          options: null,
          correctAnswer: "35995",
          solution: {
            detailedExplanation: "2023 total = 5400+5800+3500+9200+2600+4800 = 31,300. Target for 2024 = 31300 \u00d7 1.15 = 35,995.",
            shortcutMethod: "31300 \u00d7 1.15 = 31300 + 4695 = 35995."
          },
          analyticsMetadata: { topicTag: "DI-BarChart", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 }
        },
        {
          id: "m2-dilr-21",
          format: "MCQ",
          questionText: "Which of the following categories experienced a decline in units sold from 2022 to 2023?",
          options: ["Electronics", "Furniture", "Books", "Toys"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Comparing 2022 to 2023: Electronics 4500\u21925400 (increase), Furniture 2800\u21923500 (increase), Books 3100\u21922600 (decrease of 500), Toys 4000\u21924800 (increase). Among the given options, only Books declined.",
            shortcutMethod: "Scan for decreases among options: only Books went from 3100 to 2600."
          },
          analyticsMetadata: { topicTag: "DI-BarChart", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        },
        {
          id: "m2-dilr-22",
          format: "TITA",
          questionText: "What is the revenue generated by the Toys category in 2023 (in \u20b9)?",
          options: null,
          correctAnswer: "2880000",
          solution: {
            detailedExplanation: "Toys in 2023: 4800 units \u00d7 \u20b9600 per unit = \u20b928,80,000 = \u20b92,880,000.",
            shortcutMethod: "4800 \u00d7 600 = 2,880,000"
          },
          analyticsMetadata: { topicTag: "DI-Revenue", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.85 }
        }
      ]
    }
  ],

  QA: [
    {
      questionSetId: "m2-qa-standalone-1",
      section: "QA",
      difficultyRating: 2.5,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-qa-1",
          format: "MCQ",
          questionText: "If 2x\u00b2 - 5x - 3 = 0, what is the sum of the roots?",
          options: ["5/2", "-5/2", "3/2", "-3/2"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "For ax\u00b2 + bx + c = 0, sum of roots = -b/a. Here a=2, b=-5, c=-3. Sum = -(-5)/2 = 5/2.",
            shortcutMethod: "Sum of roots = -b/a = 5/2. No need to find individual roots."
          },
          analyticsMetadata: { topicTag: "Algebra-Quadratic", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.82 }
        },
        {
          id: "m2-qa-2",
          format: "TITA",
          questionText: "What is the unit digit of 7^95?",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Unit digits of powers of 7 cycle with period 4: 7\u00b9=7, 7\u00b2=9, 7\u00b3=3, 7\u2074=1, 7\u2075=7... 95 mod 4 = 3. So unit digit of 7^95 = unit digit of 7\u00b3 = 3.",
            shortcutMethod: "Cyclicity of 7 is 4. 95 mod 4 = 3. Unit digit of 7\u00b3 = 3."
          },
          analyticsMetadata: { topicTag: "NumberSystem-UnitDigit", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.75 }
        },
        {
          id: "m2-qa-3",
          format: "MCQ",
          questionText: "A car covers the first 120 km at 60 km/hr and the next 180 km at 90 km/hr. What is the average speed for the entire journey?",
          options: ["72 km/hr", "75 km/hr", "78 km/hr", "80 km/hr"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Time for first part = 120/60 = 2 hours. Time for second part = 180/90 = 2 hours. Total distance = 300 km. Total time = 4 hours. Average speed = 300/4 = 75 km/hr.",
            shortcutMethod: "Total distance / Total time = 300/4 = 75 km/hr."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Speed", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.80 }
        },
        {
          id: "m2-qa-4",
          format: "TITA",
          questionText: "The perimeter of a rectangle is 56 cm. If the length is 3 times the breadth, what is the area (in cm\u00b2)?",
          options: null,
          correctAnswer: "147",
          solution: {
            detailedExplanation: "Let breadth = b. Length = 3b. Perimeter = 2(3b + b) = 8b = 56. b = 7. Length = 21. Area = 21 \u00d7 7 = 147 cm\u00b2.",
            shortcutMethod: "8b = 56 \u2192 b = 7. Area = 3(7) \u00d7 7 = 147."
          },
          analyticsMetadata: { topicTag: "Geometry-Rectangle", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.82 }
        },
        {
          id: "m2-qa-5",
          format: "MCQ",
          questionText: "A man sells an article at a loss of 10%. Had he sold it for \u20b990 more, he would have made a profit of 5%. What is the cost price?",
          options: ["\u20b9500", "\u20b9600", "\u20b9700", "\u20b9800"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Let CP = x. SP at 10% loss = 0.9x. SP at 5% profit = 1.05x. Difference = 1.05x - 0.9x = 0.15x = 90. x = 600.",
            shortcutMethod: "0.15x = 90 \u2192 x = 600."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Profit", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.78 }
        }
      ]
    },
    {
      questionSetId: "m2-qa-standalone-2",
      section: "QA",
      difficultyRating: 3.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-qa-6",
          format: "MCQ",
          questionText: "From a group of 5 men and 4 women, a committee of 3 is to be formed such that it includes at least 1 woman. In how many ways can this be done?",
          options: ["74", "80", "76", "84"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Total ways without restriction = C(9,3) = 84. Ways with no women (all men) = C(5,3) = 10. Ways with at least 1 woman = 84 - 10 = 74.",
            shortcutMethod: "Total - All men = C(9,3) - C(5,3) = 84 - 10 = 74."
          },
          analyticsMetadata: { topicTag: "Combinatorics-Combination", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 }
        },
        {
          id: "m2-qa-7",
          format: "TITA",
          questionText: "If log\u2081\u2080(x) + log\u2081\u2080(x-3) = 1, find the positive value of x.",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "log\u2081\u2080(x(x-3)) = 1 \u2192 x(x-3) = 10 \u2192 x\u00b2 - 3x - 10 = 0 \u2192 (x-5)(x+2) = 0. x = 5 or x = -2. Since x > 3 (for log to be defined), x = 5.",
            shortcutMethod: "x(x-3) = 10 \u2192 x\u00b2 - 3x - 10 = 0 \u2192 x = 5 (positive root)."
          },
          analyticsMetadata: { topicTag: "Algebra-Logarithms", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.65 }
        },
        {
          id: "m2-qa-8",
          format: "MCQ",
          questionText: "Two pipes A and B fill a tank in 20 minutes and 30 minutes respectively. A third pipe C empties it in 15 minutes. If all three are opened, how long does it take to fill the tank?",
          options: ["60 minutes", "45 minutes", "90 minutes", "The tank will never fill"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Rate: A = 1/20, B = 1/30, C = -1/15. Net = 1/20 + 1/30 - 1/15 = 3/60 + 2/60 - 4/60 = 1/60. Time = 60 minutes.",
            shortcutMethod: "LCM(20,30,15) = 60. A fills 3, B fills 2, C empties 4 per minute. Net = 1/min. Time = 60 min."
          },
          analyticsMetadata: { topicTag: "Arithmetic-PipeCistern", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 }
        },
        {
          id: "m2-qa-9",
          format: "MCQ",
          questionText: "The probability that it rains on any given day in July is 0.3. What is the probability that it rains on exactly 2 out of 3 randomly chosen days?",
          options: ["0.189", "0.216", "0.147", "0.063"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "P(exactly 2 rainy days) = C(3,2) \u00d7 (0.3)\u00b2 \u00d7 (0.7)\u00b9 = 3 \u00d7 0.09 \u00d7 0.7 = 3 \u00d7 0.063 = 0.189.",
            shortcutMethod: "Binomial: C(3,2)(0.3)\u00b2(0.7)\u00b9 = 3 \u00d7 0.09 \u00d7 0.7 = 0.189."
          },
          analyticsMetadata: { topicTag: "Probability", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.60 }
        },
        {
          id: "m2-qa-10",
          format: "TITA",
          questionText: "P can complete a piece of work in 15 days, Q in 20 days, and R in 30 days. P works alone for the first 5 days, then all three work together. In how many total days is the work completed? (Enter as a fraction like 85/9 or a decimal rounded to one place)",
          options: null,
          correctAnswer: "9.4",
          solution: {
            detailedExplanation: "Using LCM = 60: P = 4 units/day, Q = 3, R = 2. Total = 60 units. P alone for 5 days = 20 units. Remaining = 40. All three = 9 units/day. Additional days = 40/9 \u2248 4.44. Total = 5 + 40/9 = 85/9 \u2248 9.4 days.",
            shortcutMethod: "LCM = 60. P does 20 in 5 days. Remaining 40 at 9/day. Total = 5 + 40/9 \u2248 9.4 days."
          },
          analyticsMetadata: { topicTag: "Arithmetic-WorkTime", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.55 }
        }
      ]
    },
    {
      questionSetId: "m2-qa-standalone-3",
      section: "QA",
      difficultyRating: 3.5,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-qa-11",
          format: "MCQ",
          questionText: "What is the remainder when 2\u00b2\u2075\u2076 is divided by 17?",
          options: ["1", "2", "8", "16"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "By Fermat's Little Theorem, 2\u00b9\u2076 \u2261 1 (mod 17). 256 = 16 \u00d7 16. So 2\u00b2\u2075\u2076 = (2\u00b9\u2076)\u00b9\u2076 \u2261 1\u00b9\u2076 = 1 (mod 17).",
            shortcutMethod: "Fermat's theorem: 2\u00b9\u2076 \u2261 1 (mod 17). 256 = 16\u00d716. So 2\u00b2\u2075\u2076 \u2261 1 (mod 17)."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Remainder", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.52 }
        },
        {
          id: "m2-qa-12",
          format: "TITA",
          questionText: "How many factors of 1800 are perfect squares?",
          options: null,
          correctAnswer: "8",
          solution: {
            detailedExplanation: "1800 = 2\u00b3 \u00d7 3\u00b2 \u00d7 5\u00b2. For a factor to be a perfect square, all prime exponents must be even. Exponent of 2: 0 or 2 (2 choices). Exponent of 3: 0 or 2 (2 choices). Exponent of 5: 0 or 2 (2 choices). Total = 2 \u00d7 2 \u00d7 2 = 8.",
            shortcutMethod: "1800 = 2\u00b3 \u00d7 3\u00b2 \u00d7 5\u00b2. Even exponents: (0,2) for each prime. Total = 2 \u00d7 2 \u00d7 2 = 8."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Factors", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.55 }
        },
        {
          id: "m2-qa-13",
          format: "MCQ",
          questionText: "In triangle PQR, PQ = 13 cm, QR = 14 cm, and PR = 15 cm. What is the area of the triangle?",
          options: ["84 cm\u00b2", "78 cm\u00b2", "91 cm\u00b2", "72 cm\u00b2"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Using Heron's formula: s = (13+14+15)/2 = 21. Area = \u221a(s(s-a)(s-b)(s-c)) = \u221a(21 \u00d7 8 \u00d7 7 \u00d7 6) = \u221a(7056) = 84 cm\u00b2.",
            shortcutMethod: "s = 21. Area = \u221a(21\u00d78\u00d77\u00d76) = \u221a7056 = 84."
          },
          analyticsMetadata: { topicTag: "Geometry-Triangle", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.60 }
        },
        {
          id: "m2-qa-14",
          format: "MCQ",
          questionText: "If a and b are the roots of x\u00b2 - 7x + 12 = 0, what is the value of a\u00b2 + b\u00b2?",
          options: ["25", "23", "37", "49"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "a + b = 7, ab = 12. a\u00b2 + b\u00b2 = (a+b)\u00b2 - 2ab = 49 - 24 = 25.",
            shortcutMethod: "(a+b)\u00b2 - 2ab = 49 - 24 = 25."
          },
          analyticsMetadata: { topicTag: "Algebra-Quadratic", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.72 }
        },
        {
          id: "m2-qa-15",
          format: "TITA",
          questionText: "In how many ways can the letters of the word 'BANANA' be arranged?",
          options: null,
          correctAnswer: "60",
          solution: {
            detailedExplanation: "BANANA has 6 letters: B(1), A(3), N(2). Arrangements = 6!/(3!\u00d72!\u00d71!) = 720/(6\u00d72\u00d71) = 720/12 = 60.",
            shortcutMethod: "6!/(3!\u00d72!) = 720/12 = 60."
          },
          analyticsMetadata: { topicTag: "Combinatorics-Permutation", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.75 }
        }
      ]
    },
    {
      questionSetId: "m2-qa-standalone-4",
      section: "QA",
      difficultyRating: 4.0,
      parentContent: null,
      childQuestions: [
        {
          id: "m2-qa-16",
          format: "MCQ",
          questionText: "A sum of money doubles itself at simple interest in 8 years. In how many years will it become 5 times itself?",
          options: ["32 years", "40 years", "20 years", "24 years"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "If sum doubles in 8 years at SI, then interest = principal in 8 years. Rate = (100/8)% = 12.5%. For 5 times: total = 5P, so interest = 4P. Time = 4P/(P \u00d7 12.5/100) = 4/0.125 = 32 years.",
            shortcutMethod: "Doubles in 8 years means 1P interest in 8 years. For 5x, need 4P interest = 4 \u00d7 8 = 32 years."
          },
          analyticsMetadata: { topicTag: "Arithmetic-SI", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.70 }
        },
        {
          id: "m2-qa-17",
          format: "TITA",
          questionText: "The diagonal of a cube is 6\u221a3 cm. What is the total surface area of the cube (in cm\u00b2)?",
          options: null,
          correctAnswer: "216",
          solution: {
            detailedExplanation: "Diagonal of cube = a\u221a3, where a is side length. a\u221a3 = 6\u221a3 \u2192 a = 6. Total surface area = 6a\u00b2 = 6 \u00d7 36 = 216 cm\u00b2.",
            shortcutMethod: "a = 6. TSA = 6 \u00d7 6\u00b2 = 216."
          },
          analyticsMetadata: { topicTag: "Geometry-Mensuration", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.75 }
        },
        {
          id: "m2-qa-18",
          format: "MCQ",
          questionText: "If x + 1/x = 5, what is the value of x\u00b3 + 1/x\u00b3?",
          options: ["110", "125", "80", "95"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "x + 1/x = 5. Using the identity: (x + 1/x)\u00b3 = x\u00b3 + 1/x\u00b3 + 3(x + 1/x). So 125 = x\u00b3 + 1/x\u00b3 + 15. Therefore x\u00b3 + 1/x\u00b3 = 110.",
            shortcutMethod: "Use identity: a\u00b3 + b\u00b3 = (a+b)\u00b3 - 3ab(a+b). Here ab=1, a+b=5. So 125 - 15 = 110."
          },
          analyticsMetadata: { topicTag: "Algebra-Identity", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.55 }
        },
        {
          id: "m2-qa-19",
          format: "MCQ",
          questionText: "A bag contains 4 red balls, 3 blue balls, and 5 green balls. If 3 balls are drawn at random, what is the probability that all 3 are of different colors?",
          options: ["3/11", "6/11", "18/55", "9/22"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Total ways = C(12,3) = 220. Favorable = C(4,1) \u00d7 C(3,1) \u00d7 C(5,1) = 4 \u00d7 3 \u00d7 5 = 60. Probability = 60/220 = 3/11.",
            shortcutMethod: "Favorable = 4 \u00d7 3 \u00d7 5 = 60. Total = C(12,3) = 220. P = 60/220 = 3/11."
          },
          analyticsMetadata: { topicTag: "Probability", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.58 }
        },
        {
          id: "m2-qa-20",
          format: "TITA",
          questionText: "What is the sum of all 3-digit numbers that can be formed using the digits 1, 2, and 3 (repetition allowed)?",
          options: null,
          correctAnswer: "5994",
          solution: {
            detailedExplanation: "Total 3-digit numbers = 3\u00b3 = 27. Each digit (1,2,3) appears in each position (hundreds, tens, units) equally: 27/3 = 9 times each. Sum of digits = 1+2+3 = 6. Sum contribution per position: 9 \u00d7 6 = 54. Total sum = 54\u00d7100 + 54\u00d710 + 54\u00d71 = 5400 + 540 + 54 = 5994.",
            shortcutMethod: "Each position sum = 9 \u00d7 6 = 54. Total = 54 \u00d7 111 = 5994."
          },
          analyticsMetadata: { topicTag: "Combinatorics-Permutation", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.50 }
        },
        {
          id: "m2-qa-21",
          format: "MCQ",
          questionText: "A tank is 40% full. When 60 liters are added, it becomes 70% full. What is the total capacity of the tank?",
          options: ["150 liters", "180 liters", "200 liters", "240 liters"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Let capacity = C. 0.4C + 60 = 0.7C. 60 = 0.3C. C = 200 liters.",
            shortcutMethod: "60 liters = 30% of capacity. Capacity = 60/0.3 = 200."
          },
          analyticsMetadata: { topicTag: "Arithmetic-Percentage", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.85 }
        },
        {
          id: "m2-qa-22",
          format: "TITA",
          questionText: "How many trailing zeros are in 50! (50 factorial)?",
          options: null,
          correctAnswer: "12",
          solution: {
            detailedExplanation: "Trailing zeros = number of times 10 divides 50! = number of times 5 divides 50! (since factors of 2 are always more plentiful). Count of 5s: \u230a50/5\u230b + \u230a50/25\u230b = 10 + 2 = 12.",
            shortcutMethod: "\u230a50/5\u230b + \u230a50/25\u230b = 10 + 2 = 12."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Factorial", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.72 }
        }
      ]
    }
  ]
};

// Helper to flatten all questions for a section
export function getQuestionsForSection(section) {
  const sets = mockQuestions2[section] || [];
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

export default mockQuestions2;
