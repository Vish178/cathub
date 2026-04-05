// CAT Mock Test 3 - PYQ Era Question Bank (2020-2025 Style)
// Questions modeled after CAT Previous Year Questions from 2020-2025 slots
// Structure follows the same schema as mockQuestions.js

const mockQuestions3 = {
  VARC: [
    {
      questionSetId: "m3-varc-set-1",
      section: "VARC",
      difficultyRating: 4.0,
      historicalData: { year: 2023, slot: 1 },
      parentContent: {
        textPayload: `The notion that cities are engines of civilization is almost a platitude, yet the mechanism by which urban density produces cultural and economic efflorescence remains contested. Classical urban theorists from Jane Jacobs to Edward Glaeser have argued that proximity breeds productivity: when strangers with dissimilar skills rub shoulders in cafes, markets, and subway cars, serendipitous combinations occur that no central planner could orchestrate. The knowledge-spillover thesis, as economists have termed it, posits that ideas, unlike physical goods, multiply when shared—and sharing is maximised when humans are packed tightly together.

But this account, for all its intuitive appeal, is curiously silent about power. It treats the city as a neutral container in which exchange happens, rather than as a contested terrain where some voices are amplified and others extinguished. Feminist geographers have long pointed out that the "serendipitous encounter" so celebrated in urban theory is serendipitous mainly for those whose bodies are unmarked—typically male, typically white, typically propertied. For a woman walking home after dark, for a migrant worker subject to police stops, for a disabled person navigating broken pavements, the city's much-vaunted openness is experienced as a field of friction rather than flow.

What is needed, then, is not a rejection of the agglomeration thesis but its complication. The efficiencies economists measure are real, but they are unevenly distributed: the productivity gains flow disproportionately to those already equipped to capture them, while the costs—pollution, surveillance, displacement—fall on those least able to bear them. A more honest urban theory would abandon the language of frictionless exchange and admit that cities are machines for converting some people's mobility into other people's confinement. Only then can we begin to design urban policies that distribute the gains of density rather than merely celebrating its aggregate magnitude.`
      },
      childQuestions: [
        {
          id: "m3-varc-1",
          format: "MCQ",
          questionText: "Which of the following, if true, would most WEAKEN the author's central argument in the passage?",
          options: [
            "Empirical studies of commuter data show that women use public transport more frequently than men in most global cities.",
            "Recent urban audits demonstrate that pollution, surveillance, and displacement costs are borne roughly equally across income deciles within cities.",
            "Historians have documented that pre-modern cities were organized around religious rather than economic principles.",
            "Edward Glaeser's work has been cited approvingly by policymakers across the ideological spectrum."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The author's core claim in paragraph 3 is that urban costs fall disproportionately on the disadvantaged while gains flow to the already-equipped. Option B directly attacks this premise by showing costs are distributed equally, which would undercut the 'uneven distribution' argument. Option A is irrelevant. Option C is historically orthogonal. Option D concerns reception, not substance.",
            shortcutMethod: "Find the load-bearing claim (uneven distribution of costs) and look for the option that contradicts it directly."
          },
          analyticsMetadata: { topicTag: "RC-Weaken", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.48 }
        },
        {
          id: "m3-varc-2",
          format: "MCQ",
          questionText: "The phrase 'machines for converting some people's mobility into other people's confinement' is used to:",
          options: [
            "Illustrate that cities literally restrict movement through physical barriers.",
            "Recast the celebratory language of agglomeration as a zero-sum redistribution of freedoms.",
            "Suggest that urban planning inevitably produces unintended consequences.",
            "Argue that the city is an outmoded form of social organization."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The phrase is deliberately provocative. It reframes the urban dynamic not as aggregate gain but as a transfer: one group's freedom is purchased at another's cost. This recasting of celebratory language is exactly what the paragraph does.",
            shortcutMethod: "The phrase occurs in a paragraph that 'complicates' rather than 'rejects' the thesis—so look for the rhetorical reframing answer."
          },
          analyticsMetadata: { topicTag: "RC-Rhetoric", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.52 }
        },
        {
          id: "m3-varc-3",
          format: "MCQ",
          questionText: "The author's treatment of the knowledge-spillover thesis is best described as:",
          options: [
            "Dismissive: the thesis is shown to be empirically baseless.",
            "Endorsing: the thesis is defended against feminist critique.",
            "Qualifying: the thesis is accepted but shown to require a distributional supplement.",
            "Ironical: the thesis is invoked only to be undermined by its own logic."
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Paragraph 3 states: 'not a rejection of the agglomeration thesis but its complication' and 'The efficiencies economists measure are real, but they are unevenly distributed.' The author keeps the core insight but adds a distributional layer—classic qualification.",
            shortcutMethod: "The sentence 'not a rejection... but its complication' is the thesis. Match to qualifying."
          },
          analyticsMetadata: { topicTag: "RC-AuthorStance", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.58 }
        },
        {
          id: "m3-varc-4",
          format: "TITA",
          questionText: "The passage identifies three groups for whom 'the city's much-vaunted openness is experienced as a field of friction.' Enter the number of groups.",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Paragraph 2 enumerates: (1) a woman walking home after dark, (2) a migrant worker subject to police stops, (3) a disabled person navigating broken pavements.",
            shortcutMethod: "Count the comma-separated examples after the colon in paragraph 2."
          },
          analyticsMetadata: { topicTag: "RC-Detail-TITA", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 }
        },
        {
          id: "m3-varc-5",
          format: "MCQ",
          questionText: "The author invokes 'feminist geographers' primarily in order to:",
          options: [
            "Credit a specific scholarly tradition with the counter-argument being presented.",
            "Suggest that only feminist approaches can yield valid urban theory.",
            "Contrast academic geography with lived urban experience.",
            "Demonstrate that urban theory has been dominated by women scholars."
          ],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "The phrase 'Feminist geographers have long pointed out' is scholarly attribution—crediting a tradition with the critique of neutral urban space. B overreaches; C misreads; D reverses meaning.",
            shortcutMethod: "Attribution phrases credit sources; they do not claim monopoly."
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.65 }
        }
      ]
    },
    {
      questionSetId: "m3-varc-set-2",
      section: "VARC",
      difficultyRating: 4.5,
      historicalData: { year: 2022, slot: 2 },
      parentContent: {
        textPayload: `Boredom, long dismissed as a trivial affliction of the idle, has recently been recuperated by philosophers and neuroscientists as a phenomenon of unexpected depth. Lars Svendsen, in his philosophical treatise on the subject, distinguishes between "situational" boredom—the fidgety impatience one feels in a waiting room—and "existential" boredom, a more pervasive condition in which all activities seem to lose their savour. The latter, Svendsen argues, is distinctively modern: it arises when traditional sources of meaning—religion, craft, community—recede, leaving the individual responsible for manufacturing significance from scratch.

Neuroscientists approach the phenomenon differently. Functional imaging studies reveal that the bored brain is not, as common sense might suggest, underactive. On the contrary, it exhibits heightened default-mode network activity—the same circuitry engaged during daydreaming, autobiographical memory, and creative incubation. Boredom, in this view, is not the absence of engagement but its redirection: the mind, denied external stimulation, turns inward and begins to generate its own. Experiments have shown that subjects asked to perform deliberately tedious tasks—copying phone numbers, sorting beans—subsequently score higher on divergent-thinking tests than controls permitted to browse the internet.

These two accounts—the philosophical and the neuroscientific—might appear to pull in opposite directions. Svendsen treats boredom as a symptom of cultural impoverishment; the neuroscientists treat it as a resource for cognitive renewal. Yet the tension dissolves once we notice that both accounts rest on a shared premise: that boredom is a response to a deficit of externally supplied meaning. For Svendsen, the deficit is civilisational; for the neuroscientists, it is momentary and experimental. In both cases, the bored mind is prompted to become, however briefly, the author of its own content. Whether that authorship yields existential despair or creative insight depends less on the bored state itself than on the resources the mind has to work with when external stimulation is withdrawn.`
      },
      childQuestions: [
        {
          id: "m3-varc-6",
          format: "MCQ",
          questionText: "Which of the following best captures the 'shared premise' the author identifies between the two accounts of boredom?",
          options: [
            "Both regard boredom as ultimately harmful to human flourishing.",
            "Both treat boredom as arising from insufficient external sources of meaning.",
            "Both see boredom as a uniquely modern phenomenon.",
            "Both argue that boredom should be actively cultivated rather than avoided."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 3 explicitly states: 'both accounts rest on a shared premise: that boredom is a response to a deficit of externally supplied meaning.'",
            shortcutMethod: "Locate the sentence that defines the shared premise and match."
          },
          analyticsMetadata: { topicTag: "RC-Synthesis", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.70 }
        },
        {
          id: "m3-varc-7",
          format: "MCQ",
          questionText: "It can be inferred that someone with rich 'internal resources' who experiences boredom is most likely to:",
          options: [
            "Avoid boredom by seeking constant external stimulation.",
            "Produce creative or generative mental content during boredom.",
            "Interpret boredom as a symptom of civilisational decline.",
            "Report higher default-mode network activity than other bored individuals."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The final sentence states that outcomes depend on 'the resources the mind has to work with.' Rich resources yield creative insight rather than despair.",
            shortcutMethod: "Last sentence links resource-richness to creative outcome."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.55 }
        },
        {
          id: "m3-varc-8",
          format: "MCQ",
          questionText: "The experiment involving 'copying phone numbers, sorting beans' is cited to demonstrate that:",
          options: [
            "Tedious tasks impair cognitive performance relative to stimulating ones.",
            "Boredom-inducing tasks can enhance subsequent divergent thinking.",
            "Internet browsing produces measurable cognitive benefits.",
            "Default-mode network activity is higher in experimental controls."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 2 states: subjects performing tedious tasks 'score higher on divergent-thinking tests than controls permitted to browse the internet.'",
            shortcutMethod: "Tedious → higher divergent thinking."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.78 }
        },
        {
          id: "m3-varc-9",
          format: "TITA",
          questionText: "According to Svendsen, existential boredom arises when certain traditional sources of meaning recede. The passage names some such sources. Enter the number of sources named.",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Paragraph 1 names religion, craft, and community.",
            shortcutMethod: "Count items in the em-dashed list in paragraph 1."
          },
          analyticsMetadata: { topicTag: "RC-Detail-TITA", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.88 }
        },
        {
          id: "m3-varc-10",
          format: "MCQ",
          questionText: "The author's overall argumentative strategy is best described as:",
          options: [
            "Presenting two opposing views and concluding that one is correct.",
            "Presenting two apparently opposing views and showing that they share a foundation.",
            "Presenting a view and then dismantling it through empirical counter-evidence.",
            "Presenting a historical survey of how a concept has evolved."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The author explicitly says the views 'might appear to pull in opposite directions' but 'the tension dissolves' when the shared premise is noticed. This is synthesis.",
            shortcutMethod: "Apparent opposition → underlying unity = synthesis move."
          },
          analyticsMetadata: { topicTag: "RC-Structure", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.68 }
        }
      ]
    },
    {
      questionSetId: "m3-varc-set-3",
      section: "VARC",
      difficultyRating: 4.0,
      historicalData: { year: 2024, slot: 1 },
      parentContent: {
        textPayload: `The doctrine of free trade, canonised by David Ricardo in the early nineteenth century, rests on the seductively simple principle of comparative advantage: nations ought to specialise in producing whatever they can make at relatively lower opportunity cost, and trade the surplus with others doing the same. The resulting allocation, Ricardo demonstrated with his famous England-Portugal, cloth-wine example, leaves both partners with more of both goods than autarky would afford. For two centuries, the theorem has served as the intellectual scaffolding for globalisation, brandished by economists whenever populist politicians threaten to raise tariffs.

The theorem, however, rests on assumptions that merit closer scrutiny. Ricardo assumed that capital was immobile across borders—that English investors, however tempting Portuguese returns, would not relocate their looms to Lisbon. In the twenty-first century, this assumption is simply false. Capital flows across borders with a fluidity Ricardo could not have imagined, and when it does, the logic of comparative advantage collapses into the logic of absolute advantage: capital migrates to wherever returns are highest, regardless of what either trading partner is relatively good at. The distributional consequences for the country of origin—deindustrialisation, wage stagnation, regional decline—were invisible to Ricardo's model and remain so to his contemporary defenders.

This is not an argument for protectionism. Protectionist remedies often produce their own pathologies: rent-seeking by politically connected industries, consumer welfare losses, retaliatory trade wars. The point is rather that the free trade doctrine, as currently preached, conflates a nineteenth-century model with a twenty-first-century reality. What is required is neither the uncritical embrace of open markets nor their wholesale rejection, but a frank acknowledgement that the classical case for free trade assumed conditions that no longer obtain—and that new intellectual scaffolding, rather than old slogans, is needed to navigate the present.`
      },
      childQuestions: [
        {
          id: "m3-varc-11",
          format: "MCQ",
          questionText: "The author's principal objection to the contemporary free trade doctrine is that it:",
          options: [
            "Was formulated by an economist with pro-British political sympathies.",
            "Relies on an assumption about capital mobility that no longer holds.",
            "Has been rejected by the majority of practising economists.",
            "Cannot account for the wine-cloth trade between England and Portugal."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 2 centres on the capital-immobility assumption being 'simply false' in the twenty-first century. This is the principal critique.",
            shortcutMethod: "'However' in paragraph 2 signals the critique—read what follows."
          },
          analyticsMetadata: { topicTag: "RC-MainIdea", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-varc-12",
          format: "MCQ",
          questionText: "When the author writes that 'the logic of comparative advantage collapses into the logic of absolute advantage,' the implication is that:",
          options: [
            "Both logics produce identical policy recommendations in practice.",
            "Capital mobility erases the distinction that made comparative advantage beneficial for both partners.",
            "Absolute advantage is a superior economic concept to comparative advantage.",
            "Ricardo intended his theory to apply to capital rather than goods."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Comparative advantage requires capital to stay put; once capital flows freely, it chases the highest absolute return, so one country may lose industries entirely.",
            shortcutMethod: "'Collapses into' signals loss of a distinction—identify which."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 105, globalAccuracyRate: 0.50 }
        },
        {
          id: "m3-varc-13",
          format: "MCQ",
          questionText: "The third paragraph serves primarily to:",
          options: [
            "Retract the critique advanced in the second paragraph.",
            "Endorse protectionism as the correct alternative to free trade.",
            "Distinguish the author's position from protectionism while maintaining the critique.",
            "Summarise the empirical evidence against comparative advantage."
          ],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Paragraph 3 opens 'This is not an argument for protectionism' and lists protectionism's pathologies, then restates the critique of orthodox free trade. It is boundary-drawing.",
            shortcutMethod: "Opening line explicitly denies endorsing protectionism."
          },
          analyticsMetadata: { topicTag: "RC-Structure", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.66 }
        },
        {
          id: "m3-varc-14",
          format: "TITA",
          questionText: "The passage lists specific distributional consequences that Ricardo's model failed to capture. How many such consequences are enumerated?",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Paragraph 2: deindustrialisation, wage stagnation, regional decline—three.",
            shortcutMethod: "Count items in the em-dashed list."
          },
          analyticsMetadata: { topicTag: "RC-Detail-TITA", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.85 }
        }
      ]
    },
    {
      questionSetId: "m3-varc-set-4",
      section: "VARC",
      difficultyRating: 3.5,
      historicalData: { year: 2021, slot: 3 },
      parentContent: {
        textPayload: `The archaeology of everyday life has, in recent decades, begun to rival the archaeology of monuments in scholarly prestige. Where earlier generations of the discipline catalogued pyramids, palaces, and temples—the grand material residues of ruling elites—a newer cohort of researchers has turned its attention to cooking pots, refuse middens, and the floor-plans of ordinary dwellings. This shift was not merely a matter of taste. It reflected a deeper methodological conviction: that societies are more honestly revealed by what their ordinary members ate, wore, and discarded than by what their rulers commissioned to be built.

The turn toward the quotidian has, however, generated its own distortions. The evidence of daily life, being made of perishable materials—wood, cloth, organic waste—survives unevenly across time and geography. Wet climates destroy most of it; dry ones preserve it in anomalous abundance. The result is that our picture of "ordinary life" in the past is biased toward the arid: Egypt and the Atacama tell us much, the Amazon and pre-modern England tell us little. Scholars who emphasise everyday life risk mistaking the archive's accidents for historical reality.

A mature archaeology of the quotidian must therefore hold two truths simultaneously. First, that ordinary life is worth recovering, and that the monumental record systematically misrepresents past societies by privileging their self-flattering commissions. Second, that the recovery of ordinary life is itself mediated by environmental and preservational accidents that no methodological ingenuity can fully correct. Neither the elite-centred archaeology of the nineteenth century nor the populist archaeology of the late twentieth offers a complete account; each is an instructive partiality, and their limitations are most productively explored together rather than by pretending one tradition has superseded the other.`
      },
      childQuestions: [
        {
          id: "m3-varc-15",
          format: "MCQ",
          questionText: "The 'deeper methodological conviction' mentioned in paragraph 1 refers to the belief that:",
          options: [
            "Monumental archaeology has become unfashionable among younger scholars.",
            "Everyday objects reveal societies more honestly than elite commissions.",
            "Cooking pots are inherently more interesting than palaces.",
            "Archaeology should abandon the study of ruling classes entirely."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The sentence after 'methodological conviction' defines it: societies are more honestly revealed by what ordinary members ate/wore/discarded than by rulers' commissions.",
            shortcutMethod: "Read the clause following the colon."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.80 }
        },
        {
          id: "m3-varc-16",
          format: "MCQ",
          questionText: "The author's position on the two traditions of archaeology is best described as:",
          options: [
            "The populist tradition has definitively superseded the elite-centred tradition.",
            "Both traditions are partial and should be pursued together rather than as rivals.",
            "The elite-centred tradition was more methodologically rigorous.",
            "Only a fusion of the two into a single method can yield valid results."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Final sentence: 'each is an instructive partiality, and their limitations are most productively explored together.'",
            shortcutMethod: "Last sentence is the thesis—'partial' and 'together.'"
          },
          analyticsMetadata: { topicTag: "RC-AuthorStance", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.75 }
        },
        {
          id: "m3-varc-17",
          format: "MCQ",
          questionText: "The examples of 'Egypt and the Atacama' versus 'the Amazon and pre-modern England' illustrate:",
          options: [
            "The global reach of contemporary archaeological research.",
            "How climate systematically biases the archaeological record toward arid regions.",
            "That pre-modern European sites are under-studied.",
            "The methodological superiority of New World archaeology."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The preceding sentence says our picture is 'biased toward the arid.' The examples pair arid regions (preserved) with wet ones (destroyed).",
            shortcutMethod: "Contrast: arid preserves, wet destroys."
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.78 }
        },
        {
          id: "m3-varc-18",
          format: "MCQ",
          questionText: "Which of the following most accurately captures the author's worry about scholars who emphasise everyday life?",
          options: [
            "They may neglect monumental evidence that is easier to access.",
            "They may confuse the preservational biases of the archive with historical reality itself.",
            "They may be unable to publish in prestigious journals.",
            "They may romanticise the lives of ordinary past people."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "End of paragraph 2: 'risk mistaking the archive's accidents for historical reality.'",
            shortcutMethod: "Direct paraphrase of the last sentence of paragraph 2."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.72 }
        }
      ]
    },
    {
      questionSetId: "m3-varc-standalone-1",
      section: "VARC",
      difficultyRating: 4.0,
      historicalData: { year: 2023, slot: 2 },
      parentContent: null,
      childQuestions: [
        {
          id: "m3-varc-19",
          format: "TITA",
          questionText: "The five sentences labelled 1-5 form a coherent paragraph in the correct order. Enter the correct sequence as a five-character string (e.g., 12345):\n\n1. Sceptics responded that this reframing, however elegant, did not resolve the underlying ethical problem—it merely renamed it.\n2. Proponents argued that calling it 'consent management' shifted responsibility to platforms and away from individual users, a welcome change.\n3. The phrase 'data privacy' had, by the late 2010s, become exhausted through overuse in public discourse.\n4. The debate, still unresolved, illustrates how terminological innovation can both illuminate and obscure what it names.\n5. Policy analysts consequently began experimenting with replacements, of which 'consent management' became the most widely adopted.",
          options: null,
          correctAnswer: "35214",
          solution: {
            detailedExplanation: "3 (topic: phrase exhausted) → 5 (consequently, replacements tried) → 2 (proponents of new term) → 1 (sceptics respond) → 4 (general lesson / closer). Causal and dialogic chain.",
            shortcutMethod: "3 opens; 5 follows via 'consequently'; 2-1 is a pro-con pair; 4 closes."
          },
          analyticsMetadata: { topicTag: "ParaJumble-TITA", averageTimeSpentSeconds: 150, globalAccuracyRate: 0.38 }
        },
        {
          id: "m3-varc-20",
          format: "TITA",
          questionText: "Four of the following five sentences form a coherent paragraph. Identify the ODD sentence (enter its number):\n\n1. The composer Arnold Schoenberg developed twelve-tone technique as a deliberate rupture with tonal tradition.\n2. By treating all twelve notes of the chromatic scale as equally important, he aimed to dissolve the hierarchical logic of major and minor keys.\n3. Twentieth-century music, more than any previous era, was defined by its rejection of inherited formal constraints.\n4. His students, Berg and Webern, extended the method into forms ranging from opera to symphonic miniature.\n5. The financial collapse of 1929 devastated classical-music audiences across Central Europe.",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "Sentences 3, 1, 2, 4 concern Schoenberg, twelve-tone technique, and its extension. Sentence 5 is about the 1929 financial collapse—unrelated.",
            shortcutMethod: "Four about compositional technique; one about economic history."
          },
          analyticsMetadata: { topicTag: "OddSentence-TITA", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-varc-21",
          format: "MCQ",
          questionText: "Choose the option that best summarises the given paragraph:\n\nThe persistence of caste in modern India confounds a familiar developmental narrative. Economic liberalisation, urbanisation, and mass education were all predicted—by liberals and Marxists alike—to dissolve ascriptive identities in favour of class-based ones. Yet caste has not receded; it has reconfigured. Dating apps now have caste filters, political parties compete on explicitly caste-based platforms, and caste-based associations thrive online. The modernist expectation was not wrong about the forces at work; it was wrong about the assumption that these forces would move in a single direction. Modernity, it turns out, is hospitable to identities it was once predicted to destroy.",
          options: [
            "Economic liberalisation and urbanisation have failed in India because caste remains strong.",
            "Contrary to modernist predictions that caste would dissolve, modern institutions have allowed caste identity to reconfigure and persist.",
            "Caste-based political parties are the primary reason for caste's persistence in India.",
            "Indian society will eventually shed caste once liberalisation is complete."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The paragraph's thesis: modernist forces reconfigured rather than erased caste. B captures both expectation-failure and reconfiguration.",
            shortcutMethod: "Last sentence states 'Modernity is hospitable to identities...'"
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.68 }
        },
        {
          id: "m3-varc-22",
          format: "MCQ",
          questionText: "Arrange the following sentences to form a coherent paragraph. Choose the correct sequence:\n\nA. What looks like an exception to the rule may simply be an unexamined case that, if examined, would confirm it.\nB. The philosopher of science Karl Popper proposed that scientific theories earn their status not by being confirmed but by surviving attempts to refute them.\nC. A theory that cannot, in principle, be refuted by any observation is not scientific, however impressive its apparent explanatory power.\nD. This criterion—falsifiability—remains the most widely cited demarcation between science and pseudo-science, even as philosophers have argued over its limits.\nE. Popper's insight was that confirming evidence is cheap: any theory, however loose, can find supportive cases.",
          options: ["BEACD", "BCADE", "BEDCA", "BECAD"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "B (introduces Popper) → E (insight: confirmations cheap) → A (elaborates) → C (states test) → D (names criterion, closes).",
            shortcutMethod: "B opens; D closes ('This criterion' refers back); E-A-C is the central argument."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 130, globalAccuracyRate: 0.52 }
        },
        {
          id: "m3-varc-23",
          format: "MCQ",
          questionText: "Choose the option that best summarises the given paragraph:\n\nThe smartphone has been said to be the most disruptive device of the twenty-first century, but its disruption is of a peculiar kind: it does not replace older technologies so much as envelop them. The camera, the calendar, the map, the wristwatch, the wallet, the torch, the newspaper—all survive inside the phone as applications. This envelopment is not mere convenience; it is a subtle form of capture. Technologies that once competed for attention are now subordinated to a single corporate operating system, and the habits that sustained them are gradually unlearned. The phone does not destroy what it absorbs; it merely makes the alternatives unnecessary, which, over time, amounts to much the same thing.",
          options: [
            "Smartphones have improved daily life by consolidating many devices into one.",
            "By absorbing rather than replacing older technologies, smartphones effectively eliminate them while appearing merely to include them.",
            "Corporate operating systems will eventually be regulated for their monopolistic tendencies.",
            "Habits such as newspaper-reading are being lost primarily because of changing cultural preferences."
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Central claim: smartphones envelop rather than replace, but the effect is functionally equivalent to destruction ('amounts to much the same thing').",
            shortcutMethod: "Last sentence: enveloping ≈ eliminating."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-varc-24",
          format: "MCQ",
          questionText: "Identify the ODD sentence. Four of the following can be arranged into a coherent paragraph:\n\nA. Monsoon variability has historically been the single largest determinant of Indian agricultural output.\nB. A weak monsoon in 1965-66 triggered a food-import crisis that shaped Indian food policy for two decades.\nC. Satellite-based forecasting since the 1990s has improved farmers' ability to adjust planting decisions.\nD. Cricket spectatorship in India rose sharply after the 1983 World Cup victory.\nE. Crop insurance schemes have expanded in response to the recognition that monsoon shocks are uninsurable through individual savings alone.",
          options: ["A", "B", "C", "D"],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "A, B, C, E concern monsoons and Indian agriculture. D is about cricket spectatorship—unrelated.",
            shortcutMethod: "Four about monsoon/agriculture; D about cricket."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.85 }
        }
      ]
    }
  ],

  DILR: [
    {
      questionSetId: "m3-dilr-set-1",
      section: "DILR",
      difficultyRating: 4.0,
      historicalData: { year: 2023, slot: 1 },
      parentContent: {
        textPayload: `A startup accelerator admitted exactly 30 startups to its 2023 cohort. Each startup was assigned to exactly ONE of three verticals: FinTech, HealthTech, or EdTech. Each startup was also assigned to exactly ONE of two growth stages: Seed or Series-A.

The following information is known:
• The number of FinTech startups was 15.
• The number of EdTech startups was 6.
• The number of HealthTech startups was 9.
• Exactly 40% of all startups were at Series-A stage; the rest were at Seed stage.
• Among FinTech startups, the ratio of Seed to Series-A was 2:1.
• Among EdTech startups, exactly half were at Series-A stage.
• The number of HealthTech Seed-stage startups was equal to the number of FinTech Series-A startups.`
      },
      childQuestions: [
        {
          id: "m3-dilr-1",
          format: "TITA",
          questionText: "How many startups were in the HealthTech vertical?",
          options: null,
          correctAnswer: "9",
          solution: {
            detailedExplanation: "Directly given: HealthTech = 9 startups (also: 30 - 15 - 6 = 9).",
            shortcutMethod: "30 - 15 - 6 = 9"
          },
          analyticsMetadata: { topicTag: "DI-Tables-Distribution", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.90 }
        },
        {
          id: "m3-dilr-2",
          format: "MCQ",
          questionText: "How many startups were at the Series-A stage?",
          options: ["10", "12", "15", "18"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "40% of 30 = 12 startups at Series-A.",
            shortcutMethod: "0.4 × 30 = 12"
          },
          analyticsMetadata: { topicTag: "DI-Percentage", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.95 }
        },
        {
          id: "m3-dilr-3",
          format: "TITA",
          questionText: "How many FinTech startups were at Seed stage?",
          options: null,
          correctAnswer: "10",
          solution: {
            detailedExplanation: "FinTech = 15. Seed:Series-A = 2:1, so Seed = (2/3)×15 = 10.",
            shortcutMethod: "15 × 2/3 = 10"
          },
          analyticsMetadata: { topicTag: "DI-Ratio", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 }
        },
        {
          id: "m3-dilr-4",
          format: "MCQ",
          questionText: "How many HealthTech startups were at Series-A stage?",
          options: ["2", "3", "4", "5"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "FinTech Series-A = 15/3 = 5. HealthTech Seed = FinTech Series-A = 5. HealthTech total = 9. So HealthTech Series-A = 9 - 5 = 4.",
            shortcutMethod: "FT Series-A = 5 = HT Seed; HT Series-A = 9 - 5 = 4."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.62 }
        },
        {
          id: "m3-dilr-5",
          format: "TITA",
          questionText: "How many EdTech startups were at Seed stage?",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "EdTech = 6, exactly half at Series-A → 3 each. EdTech Seed = 3. (Cross-check: total Series-A = 5+4+3 = 12 ✓.)",
            shortcutMethod: "Half of 6 = 3."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        }
      ]
    },
    {
      questionSetId: "m3-dilr-set-2",
      section: "DILR",
      difficultyRating: 4.5,
      historicalData: { year: 2022, slot: 3 },
      parentContent: {
        textPayload: `A round-robin chess tournament was held among 5 players: P, Q, R, S, and T. Each player played exactly one game against every other player. The scoring system awards 1 point for a win, 0.5 points for a draw, and 0 points for a loss.

After all games were played, the final standings were:
• P: 3 points
• Q: 2.5 points
• R: 2 points
• S: 1.5 points
• T: 1 point

Additional information:
• P defeated T.
• The game between Q and R was a draw.
• S lost to exactly two players.
• T drew exactly two games.
• Q lost to P.`
      },
      childQuestions: [
        {
          id: "m3-dilr-6",
          format: "MCQ",
          questionText: "How many total games were played in the tournament?",
          options: ["8", "9", "10", "12"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "C(5,2) = 10 games.",
            shortcutMethod: "5C2 = 10"
          },
          analyticsMetadata: { topicTag: "Games-Tournaments", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.92 }
        },
        {
          id: "m3-dilr-7",
          format: "TITA",
          questionText: "How many games ended in a draw?",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Reconstruction: P beat Q, T, R; lost to S → P=3. Q lost to P; beat T, S; drew R → Q=2.5. R lost to P; drew Q, T; beat S → R=2. S beat P; lost to Q, R; drew T → S=1.5. T lost to P, Q; drew R, S → T=1. Drawn games: Q-R, R-T, S-T. Total = 3 draws.",
            shortcutMethod: "Work through game-by-game. Three drawn games: Q-R, R-T, S-T."
          },
          analyticsMetadata: { topicTag: "Games-Tournaments-Draws", averageTimeSpentSeconds: 180, globalAccuracyRate: 0.42 }
        },
        {
          id: "m3-dilr-8",
          format: "MCQ",
          questionText: "Who defeated S?",
          options: [
            "P and R",
            "Q and R",
            "Q and T",
            "P and Q"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "S lost to Q and R (from full reconstruction).",
            shortcutMethod: "S's two losses are to Q and R."
          },
          analyticsMetadata: { topicTag: "Games-Tournaments", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.55 }
        },
        {
          id: "m3-dilr-9",
          format: "MCQ",
          questionText: "How many games did P win?",
          options: ["2", "3", "4", "1"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "P beat Q, T, R; lost to S. P won 3 games.",
            shortcutMethod: "3 wins + 1 loss = 3 points."
          },
          analyticsMetadata: { topicTag: "Games-Tournaments", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.65 }
        },
        {
          id: "m3-dilr-10",
          format: "TITA",
          questionText: "How many games did R lose?",
          options: null,
          correctAnswer: "1",
          solution: {
            detailedExplanation: "R won vs S, drew vs Q and T, lost vs P. R lost 1 game.",
            shortcutMethod: "R: 1W + 2D + 1L = 2 points."
          },
          analyticsMetadata: { topicTag: "Games-Tournaments", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.70 }
        }
      ]
    },
    {
      questionSetId: "m3-dilr-set-3",
      section: "DILR",
      difficultyRating: 4.5,
      historicalData: { year: 2024, slot: 2 },
      parentContent: {
        textPayload: `Five consultants — A, B, C, D, E — are assigned to travel to 5 client cities — Mumbai, Delhi, Bengaluru, Chennai, Kolkata — over 5 consecutive weekdays (Monday through Friday). Each consultant visits exactly one city on exactly one day. Each city is visited on exactly one day, and each day has exactly one consultant travelling.

Constraints:
1. A travels on Wednesday.
2. The consultant who travels to Delhi does so on Monday or Friday.
3. B travels to Bengaluru.
4. C travels the day before the consultant who goes to Chennai.
5. E does not travel to Mumbai.
6. The consultant travelling to Kolkata travels on Thursday.
7. D travels on a day later than B but earlier than E.`
      },
      childQuestions: [
        {
          id: "m3-dilr-11",
          format: "MCQ",
          questionText: "Who travels on Friday?",
          options: ["B", "C", "D", "E"],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "A is on Wed. Constraint 7: B<D<E. Testing (B,D,E)=(Mon,Thu,Fri), C=Tue. Kolkata on Thu = D. C(Tue) → Chennai on Wed = A. Delhi on Mon or Fri: B(Mon)=Bengaluru, so Delhi=Fri=E. Remaining Mumbai → C. Check E≠Mumbai ✓. All constraints hold. E travels on Friday.",
            shortcutMethod: "Only (B,D,E)=(Mon,Thu,Fri) ordering works; E on Friday."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 180, globalAccuracyRate: 0.48 }
        },
        {
          id: "m3-dilr-12",
          format: "TITA",
          questionText: "Enter the letter of the consultant who travels to Chennai (A/B/C/D/E as a single letter).",
          options: null,
          correctAnswer: "A",
          solution: {
            detailedExplanation: "C travels Tuesday; constraint 4 → Chennai traveler on Wednesday = A.",
            shortcutMethod: "Day after C(Tue) = Wed = A."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.60 }
        },
        {
          id: "m3-dilr-13",
          format: "MCQ",
          questionText: "Who travels to Mumbai?",
          options: ["A", "B", "C", "D"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "A=Chennai, B=Bengaluru, D=Kolkata, E=Delhi. Remaining Mumbai → C.",
            shortcutMethod: "By elimination, C = Mumbai."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-dilr-14",
          format: "TITA",
          questionText: "On which day (1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri) does the Delhi traveler travel?",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "Delhi = Friday = Day 5 (E on Friday).",
            shortcutMethod: "Delhi is Friday = 5."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.68 }
        },
        {
          id: "m3-dilr-15",
          format: "MCQ",
          questionText: "Who travels on Tuesday?",
          options: ["A", "B", "C", "D"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Schedule: B=Mon, C=Tue, A=Wed, D=Thu, E=Fri. C travels on Tuesday.",
            shortcutMethod: "C fills the Tuesday slot."
          },
          analyticsMetadata: { topicTag: "LR-Scheduling", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.75 }
        }
      ]
    },
    {
      questionSetId: "m3-dilr-set-4",
      section: "DILR",
      difficultyRating: 4.0,
      historicalData: { year: 2023, slot: 3 },
      parentContent: {
        textPayload: `The table below shows the quarterly revenue (in ₹ crore) of four companies — Alpha, Beta, Gamma, Delta — across four quarters of FY 2023:

          Q1    Q2    Q3    Q4
Alpha    120   140   160   180
Beta     100   130   150   200
Gamma    200   180   160   140
Delta    150   150   150   150

The operating margin (as % of revenue) for each company in each quarter:

          Q1    Q2    Q3    Q4
Alpha    10%   12%   15%   18%
Beta      8%   10%   12%   15%
Gamma    20%   18%   15%   10%
Delta    12%   14%   13%   11%

Operating profit = Revenue × Operating margin.`
      },
      childQuestions: [
        {
          id: "m3-dilr-16",
          format: "MCQ",
          questionText: "Which company had the highest total annual revenue in FY 2023?",
          options: ["Alpha", "Beta", "Gamma", "Delta"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Annual revenue: Alpha=600, Beta=580, Gamma=680, Delta=600. Gamma highest at 680.",
            shortcutMethod: "Gamma total = 680; highest."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.85 }
        },
        {
          id: "m3-dilr-17",
          format: "TITA",
          questionText: "What was Alpha's operating profit (in ₹ crore) in Q4? Enter the numerical value.",
          options: null,
          correctAnswer: "32.4",
          solution: {
            detailedExplanation: "Alpha Q4 revenue = 180, margin = 18%. OP = 180 × 0.18 = 32.4 crore.",
            shortcutMethod: "180 × 0.18 = 32.4"
          },
          analyticsMetadata: { topicTag: "DI-Calculation", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.88 }
        },
        {
          id: "m3-dilr-18",
          format: "MCQ",
          questionText: "Which company-quarter combination yielded the highest operating profit?",
          options: ["Beta Q4", "Gamma Q1", "Alpha Q4", "Gamma Q2"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Beta Q4 = 200×0.15=30. Gamma Q1 = 200×0.20=40. Alpha Q4 = 180×0.18=32.4. Gamma Q2 = 180×0.18=32.4. Gamma Q1 = 40 (highest).",
            shortcutMethod: "Gamma Q1: 200×20% = 40."
          },
          analyticsMetadata: { topicTag: "DI-Calculation", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 }
        },
        {
          id: "m3-dilr-19",
          format: "TITA",
          questionText: "What was the total annual operating profit (in ₹ crore) of Delta?",
          options: null,
          correctAnswer: "75",
          solution: {
            detailedExplanation: "Delta Q1:18, Q2:21, Q3:19.5, Q4:16.5. Total = 75.",
            shortcutMethod: "150 × (0.12+0.14+0.13+0.11) = 150 × 0.5 = 75"
          },
          analyticsMetadata: { topicTag: "DI-Calculation", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.75 }
        },
        {
          id: "m3-dilr-20",
          format: "MCQ",
          questionText: "Between Q1 and Q4, which company showed the highest percentage growth in operating profit?",
          options: ["Alpha", "Beta", "Gamma", "Delta"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Q1 OP: Alpha=12, Beta=8, Gamma=40, Delta=18. Q4 OP: Alpha=32.4, Beta=30, Gamma=14, Delta=16.5. Growth: Alpha=170%, Beta=275%, Gamma=-65%, Delta≈-8.3%. Beta highest.",
            shortcutMethod: "Beta: 8→30 ≈ 275% growth."
          },
          analyticsMetadata: { topicTag: "DI-Growth", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.55 }
        }
      ]
    },
    {
      questionSetId: "m3-dilr-set-5",
      section: "DILR",
      difficultyRating: 4.5,
      historicalData: { year: 2021, slot: 2 },
      parentContent: {
        textPayload: `Six students — U, V, W, X, Y, Z — took three exams: Math, Physics, Chemistry. Each exam is out of 100.

Partial information:
• U scored 85 in Math, 72 in Physics; U's average was 80.
• V scored 90 in all three exams.
• W's Math was 60, Physics was 10 more than Math, Chemistry was 10 more than Physics.
• X scored the same in Math and Chemistry; Physics was 75; average was 80.
• Y's Math was 50, Physics was 70, average was 65.
• Z scored 100 in Chemistry. Z's Math was 20 less than Chemistry. Z's Physics was 15 more than Math.`
      },
      childQuestions: [
        {
          id: "m3-dilr-21",
          format: "TITA",
          questionText: "What was U's Chemistry score?",
          options: null,
          correctAnswer: "83",
          solution: {
            detailedExplanation: "U average 80 → total 240. Chemistry = 240 - 85 - 72 = 83.",
            shortcutMethod: "3×80 - 157 = 83"
          },
          analyticsMetadata: { topicTag: "DI-Averages", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        },
        {
          id: "m3-dilr-22",
          format: "MCQ",
          questionText: "What was X's Math score?",
          options: ["80", "82", "82.5", "85"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Let X's Math = Chemistry = m. Total = m+75+m = 240 → m = 82.5.",
            shortcutMethod: "(240 - 75)/2 = 82.5"
          },
          analyticsMetadata: { topicTag: "DI-Averages", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.80 }
        }
      ]
    }
  ],

  QA: [
    {
      questionSetId: "m3-qa-standalone-1",
      section: "QA",
      difficultyRating: 4.0,
      historicalData: { year: 2023, slot: 1 },
      parentContent: null,
      childQuestions: [
        {
          id: "m3-qa-1",
          format: "MCQ",
          questionText: "If log₂(x) + log₄(x) + log₈(x) = 11, then x equals:",
          options: ["64", "32", "128", "256"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Convert to base 2: log₂x + (1/2)log₂x + (1/3)log₂x = 11. Let y=log₂x. y(1+1/2+1/3) = y(11/6) = 11 → y=6 → x=2⁶=64.",
            shortcutMethod: "y·(11/6)=11 → y=6 → x=64"
          },
          analyticsMetadata: { topicTag: "Algebra-Logarithms", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.60 }
        },
        {
          id: "m3-qa-2",
          format: "TITA",
          questionText: "How many positive integers less than 1000 are divisible by exactly one of 3, 5, and 7?",
          options: null,
          correctAnswer: "419",
          solution: {
            detailedExplanation: "|A|=333, |B|=199, |C|=142, |A∩B|=66, |A∩C|=47, |B∩C|=28, |A∩B∩C|=9. Exactly one = Σ|single| - 2Σ|pair| + 3|triple| = 674 - 282 + 27 = 419.",
            shortcutMethod: "Exactly-one formula: 674 - 2(141) + 3(9) = 419"
          },
          analyticsMetadata: { topicTag: "NumberSystem-Counting", averageTimeSpentSeconds: 150, globalAccuracyRate: 0.40 }
        },
        {
          id: "m3-qa-3",
          format: "MCQ",
          questionText: "A regular hexagon is inscribed in a circle of radius 6 cm. What is the area of the hexagon (in sq cm)?",
          options: ["54√3", "36√3", "72√3", "108√3"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Side = radius = 6. Area = (3√3/2)s² = (3√3/2)(36) = 54√3.",
            shortcutMethod: "Hexagon area = (3√3/2)r² = 54√3"
          },
          analyticsMetadata: { topicTag: "Geometry-Polygon", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.65 }
        },
        {
          id: "m3-qa-4",
          format: "TITA",
          questionText: "The number of arrangements of the letters of MISSISSIPPI such that no two I's are adjacent is:",
          options: null,
          correctAnswer: "7350",
          solution: {
            detailedExplanation: "Non-I letters: M(1), S(4), P(2) = 7 letters → 7!/(4!·2!) = 105 arrangements. These create 8 gaps; choose 4 for I's: C(8,4)=70. Total = 105×70 = 7350.",
            shortcutMethod: "105 × 70 = 7350"
          },
          analyticsMetadata: { topicTag: "PnC-Arrangement", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.50 }
        },
        {
          id: "m3-qa-5",
          format: "MCQ",
          questionText: "If f(x) = x² - 4x + 7, what is the minimum value of f(x) for real x?",
          options: ["3", "4", "7", "-3"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "f(x) = (x-2)² + 3. Minimum = 3 at x=2.",
            shortcutMethod: "Min = 7 - 4²/4 = 7 - 4 = 3"
          },
          analyticsMetadata: { topicTag: "Functions-Quadratic", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.80 }
        }
      ]
    },
    {
      questionSetId: "m3-qa-standalone-2",
      section: "QA",
      difficultyRating: 4.5,
      historicalData: { year: 2022, slot: 2 },
      parentContent: null,
      childQuestions: [
        {
          id: "m3-qa-6",
          format: "MCQ",
          questionText: "In triangle ABC, angle A = 60°, AB = 8, AC = 10. What is BC²?",
          options: ["84", "100", "164", "64"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "By law of cosines: BC² = 64+100 - 2(8)(10)(1/2) = 164 - 80 = 84.",
            shortcutMethod: "Cos rule: 64+100-80 = 84"
          },
          analyticsMetadata: { topicTag: "Geometry-Triangle", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.68 }
        },
        {
          id: "m3-qa-7",
          format: "TITA",
          questionText: "If a, b, c are positive reals with a+b+c = 12, what is the maximum value of abc?",
          options: null,
          correctAnswer: "64",
          solution: {
            detailedExplanation: "By AM-GM, max abc occurs at a=b=c=4; abc = 64.",
            shortcutMethod: "AM-GM: max at a=b=c=4 → 64"
          },
          analyticsMetadata: { topicTag: "Algebra-Inequality", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-qa-8",
          format: "MCQ",
          questionText: "₹10,000 at simple interest becomes ₹12,000 in 4 years. In how many more years will it become ₹16,000 at the same rate?",
          options: ["6 years", "8 years", "10 years", "12 years"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Annual SI = 2000/4 = 500. Additional ₹4000 needed. Time = 4000/500 = 8 years.",
            shortcutMethod: "Rate 5%. 4000/500 = 8"
          },
          analyticsMetadata: { topicTag: "Arithmetic-SI", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.78 }
        },
        {
          id: "m3-qa-9",
          format: "TITA",
          questionText: "Find the number of integer solutions (x, y) to x² + y² = 25.",
          options: null,
          correctAnswer: "12",
          solution: {
            detailedExplanation: "25 = 0²+5² = 3²+4². Solutions: (±5,0),(0,±5): 4 points. (±3,±4): 4 points. (±4,±3): 4 points. Total: 12.",
            shortcutMethod: "4 + 4 + 4 = 12"
          },
          analyticsMetadata: { topicTag: "NumberSystem-Integer", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.65 }
        },
        {
          id: "m3-qa-10",
          format: "MCQ",
          questionText: "The sum of first n terms of an AP is 3n² + 5n. The 10th term is:",
          options: ["62", "65", "68", "58"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "T₁₀ = S₁₀ - S₉ = 350 - 288 = 62.",
            shortcutMethod: "T₁₀ = 350 - 288 = 62"
          },
          analyticsMetadata: { topicTag: "Algebra-AP", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.75 }
        }
      ]
    },
    {
      questionSetId: "m3-qa-standalone-3",
      section: "QA",
      difficultyRating: 4.0,
      historicalData: { year: 2024, slot: 1 },
      parentContent: null,
      childQuestions: [
        {
          id: "m3-qa-11",
          format: "MCQ",
          questionText: "If 2^x · 3^y = 288, where x and y are positive integers, then x + y equals:",
          options: ["6", "7", "8", "9"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "288 = 2⁵·3² → x=5, y=2 → x+y=7.",
            shortcutMethod: "288 = 32×9 = 2⁵·3² → 5+2=7"
          },
          analyticsMetadata: { topicTag: "NumberSystem-Factorization", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.80 }
        },
        {
          id: "m3-qa-12",
          format: "TITA",
          questionText: "A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. What is the probability both are red, as a fraction in lowest terms? Enter numerator + denominator (e.g., for 2/15 enter 17).",
          options: null,
          correctAnswer: "17",
          solution: {
            detailedExplanation: "P = (4/10)(3/9) = 12/90 = 2/15. Numerator + denominator = 2+15 = 17.",
            shortcutMethod: "(4·3)/(10·9) = 2/15; 2+15=17"
          },
          analyticsMetadata: { topicTag: "Probability", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-qa-13",
          format: "MCQ",
          questionText: "The line 3x + 4y = 12 intersects the coordinate axes. The length of the hypotenuse of the triangle formed with the origin is:",
          options: ["5", "7", "12", "25"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Intercepts (4,0) and (0,3). Hypotenuse = √(16+9) = 5.",
            shortcutMethod: "3-4-5 triangle."
          },
          analyticsMetadata: { topicTag: "CoordinateGeometry", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.82 }
        },
        {
          id: "m3-qa-14",
          format: "TITA",
          questionText: "If the roots of x² - px + 24 = 0 are in the ratio 2:3, find the positive value of p.",
          options: null,
          correctAnswer: "10",
          solution: {
            detailedExplanation: "Roots 2k, 3k. Product 6k²=24 → k=2. Sum 5k=p=10.",
            shortcutMethod: "k=2, p=5k=10"
          },
          analyticsMetadata: { topicTag: "Algebra-Quadratic", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-qa-15",
          format: "MCQ",
          questionText: "A cone has base radius 6 cm and slant height 10 cm. Its volume is:",
          options: ["96π cm³", "120π cm³", "144π cm³", "192π cm³"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "h=√(100-36)=8. V=(1/3)π(36)(8)=96π.",
            shortcutMethod: "6-8-10 triple; V=96π"
          },
          analyticsMetadata: { topicTag: "Geometry-Mensuration", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.75 }
        }
      ]
    },
    {
      questionSetId: "m3-qa-standalone-4",
      section: "QA",
      difficultyRating: 4.5,
      historicalData: { year: 2021, slot: 2 },
      parentContent: null,
      childQuestions: [
        {
          id: "m3-qa-16",
          format: "MCQ",
          questionText: "If x + 1/x = 3, then x³ + 1/x³ equals:",
          options: ["18", "27", "21", "24"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "x³+1/x³ = (x+1/x)³ - 3(x+1/x) = 27 - 9 = 18.",
            shortcutMethod: "Identity: 3³-3(3)=18"
          },
          analyticsMetadata: { topicTag: "Algebra-Identity", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 }
        },
        {
          id: "m3-qa-17",
          format: "TITA",
          questionText: "A boat takes 7 hours to travel 16 km upstream and 24 km downstream. It takes 8 hours to travel 24 km upstream and 16 km downstream. What is the speed of the boat in still water (in km/hr)?",
          options: null,
          correctAnswer: "6",
          solution: {
            detailedExplanation: "Let u=1/(b-s), v=1/(b+s). 16u+24v=7, 24u+16v=8. Adding: 40(u+v)=15 → u+v=3/8. Subtracting: 8u-8v=1 → u-v=1/8. So u=1/4, v=1/8. b-s=4, b+s=8. b=6, s=2.",
            shortcutMethod: "Solve system: u=1/4, v=1/8 → b=6, s=2"
          },
          analyticsMetadata: { topicTag: "Arithmetic-BoatStream", averageTimeSpentSeconds: 130, globalAccuracyRate: 0.45 }
        },
        {
          id: "m3-qa-18",
          format: "MCQ",
          questionText: "In how many ways can 10 identical chocolates be distributed among 3 children such that each gets at least one?",
          options: ["36", "45", "28", "55"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Substitute yi=xi-1; remaining 7 chocolates among 3 non-negative. C(7+3-1, 3-1) = C(9,2) = 36.",
            shortcutMethod: "C(9,2) = 36"
          },
          analyticsMetadata: { topicTag: "PnC-Distribution", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.68 }
        },
        {
          id: "m3-qa-19",
          format: "TITA",
          questionText: "The infinite series 1 + 1/3 + 1/9 + 1/27 + ... sums to p/q in lowest terms. Enter p+q.",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "Sum = 1/(1-1/3) = 3/2. p+q = 3+2 = 5.",
            shortcutMethod: "3/2 → 3+2=5"
          },
          analyticsMetadata: { topicTag: "Algebra-GP", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.85 }
        },
        {
          id: "m3-qa-20",
          format: "MCQ",
          questionText: "The area of a rectangle is 60 sq units and its perimeter is 32 units. The square of the diagonal is:",
          options: ["136", "196", "244", "100"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "l+b=16, lb=60. d² = l²+b² = (l+b)² - 2lb = 256-120 = 136.",
            shortcutMethod: "d² = 16²-2(60) = 136"
          },
          analyticsMetadata: { topicTag: "Geometry-Rectangle", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.78 }
        },
        {
          id: "m3-qa-21",
          format: "MCQ",
          questionText: "If |x-3| + |x+2| = 10, then the sum of all possible values of x is:",
          options: ["1", "-1", "0", "10"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "For x≥3: 2x-1=10 → x=5.5. For -2≤x<3: constant=5, no solution. For x<-2: -2x+1=10 → x=-4.5. Sum = 5.5+(-4.5)=1.",
            shortcutMethod: "Solutions 5.5 and -4.5; sum=1"
          },
          analyticsMetadata: { topicTag: "Algebra-Modulus", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.58 }
        },
        {
          id: "m3-qa-22",
          format: "TITA",
          questionText: "A mixture contains milk and water in ratio 5:3. If 16 L of mixture is replaced by pure water, the new milk:water ratio becomes 3:5. What was the original volume of the mixture (in litres)?",
          options: null,
          correctAnswer: "40",
          solution: {
            detailedExplanation: "Let V=original volume. Initial milk=5V/8. Milk removed with 16L mixture = 16×5/8=10. Remaining milk = 5V/8-10. New milk/total = 3/8: 5V/8 - 10 = 3V/8 → 2V/8=10 → V=40.",
            shortcutMethod: "5V/8 - 10 = 3V/8 → V=40"
          },
          analyticsMetadata: { topicTag: "Arithmetic-Mixture", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.60 }
        }
      ]
    }
  ]
};

// Helper to flatten all questions for a section
export function getQuestionsForSection(section) {
  const sets = mockQuestions3[section] || [];
  return sets.flatMap(set =>
    set.childQuestions.map(q => ({
      ...q,
      parentContent: set.parentContent,
      questionSetId: set.questionSetId,
      difficultyRating: set.difficultyRating,
      historicalData: set.historicalData
    }))
  );
}

// Get total questions count per section
export function getSectionQuestionCount(section) {
  return getQuestionsForSection(section).length;
}

export default mockQuestions3;
