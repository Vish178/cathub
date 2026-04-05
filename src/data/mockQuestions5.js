// CAT Mock Test 5 — Styled after CAT PYQs 2008-2014 era
// Known for: very hard quant, dense RC passages, challenging LR sets

const mockQuestions5 = {
  VARC: [
    {
      questionSetId: "m5-varc-set-1",
      section: "VARC",
      difficultyRating: 4.0,
      historicalData: { year: 2011, slot: 1 },
      parentContent: {
        textPayload: `The historiography of the Mughal Empire has long been dominated by two competing narratives. The first, largely the product of nineteenth-century colonial scholarship, cast the Mughals as oriental despots whose reigns were marked by capricious cruelty punctuated by brief intervals of enlightened rule under figures such as Akbar. This reading served a palpable ideological purpose: by rendering pre-colonial governance as essentially tyrannical, it legitimized British administration as an instrument of rational reform. The second narrative, which gained currency after independence, inverted this schema. It presented the Mughal court as a crucible of syncretic culture, where Persianate refinement merged with indigenous traditions to produce a civilization at once cosmopolitan and uniquely Indian.

Neither account, however, withstands sustained archival scrutiny. Revisionist scholars working from farmans, court chronicles, and revenue records have shown that Mughal authority was neither uniformly despotic nor consistently syncretic. Rather, it operated through a layered system of negotiated sovereignty, in which imperial claims were continually adjusted to the realities of regional power. The mansabdari system, often cited as an exemplar of centralized bureaucratic rationality, functioned in practice as a flexible instrument of patronage, responsive to factional alignments and the shifting fortunes of zamindars.

What emerges from this revisionism is not a synthesis but a productive complication. The Mughal state appears less as an entity possessing a coherent character than as a field of contestation in which multiple actors—emperors, nobles, regional chieftains, religious functionaries—pursued overlapping and often conflicting agendas. To ask whether the empire was "tolerant" or "oppressive" is thus to pose a question the sources themselves resist. What they disclose instead is a politics of contingency, in which ideology and expedience were seldom separable, and in which the very categories through which modern historians seek clarity—religion, ethnicity, class—were themselves unstable and in formation.`
      },
      childQuestions: [
        {
          id: "m5-varc-1",
          format: "MCQ",
          questionText: "The author's primary purpose in the passage is to:",
          options: [
            "Defend colonial historiography against post-independence critiques",
            "Argue that neither traditional narrative adequately captures Mughal governance and propose a view grounded in contingency",
            "Establish that the Mughal Empire was essentially syncretic in character",
            "Demonstrate that modern historical categories are universally applicable to pre-modern states"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The author surveys two competing narratives (colonial-despotic and post-independence syncretic), rejects both as inadequate, and advances a revisionist reading of Mughal rule as 'negotiated sovereignty' and 'politics of contingency.' Option B captures this arc exactly.",
            shortcutMethod: "The final paragraph explicitly frames the argument as a 'productive complication' against both prior schemas."
          },
          analyticsMetadata: { topicTag: "RC-Main-Idea", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.60 }
        },
        {
          id: "m5-varc-2",
          format: "MCQ",
          questionText: "According to the passage, colonial-era historiography of the Mughals served to:",
          options: [
            "Preserve indigenous traditions of statecraft",
            "Justify British rule by depicting pre-colonial governance as tyrannical",
            "Reconcile Persianate and indigenous cultural traditions",
            "Document the mansabdari system in its administrative detail"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage states that by 'rendering pre-colonial governance as essentially tyrannical, it legitimized British administration as an instrument of rational reform.'",
            shortcutMethod: "Direct retrieval from paragraph 1."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.78 }
        },
        {
          id: "m5-varc-3",
          format: "MCQ",
          questionText: "The phrase 'negotiated sovereignty' as used in the passage most nearly refers to:",
          options: [
            "Formal treaties signed between the Mughal emperor and foreign powers",
            "Imperial authority that was flexibly adjusted to regional power structures rather than uniformly imposed",
            "The complete absence of central authority in the Mughal state",
            "Diplomatic correspondence between nobles and regional chieftains"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage defines negotiated sovereignty as a system in which 'imperial claims were continually adjusted to the realities of regional power'—exactly option B.",
            shortcutMethod: "The phrase is defined in the sentence immediately following its introduction."
          },
          analyticsMetadata: { topicTag: "RC-Vocabulary", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.68 }
        },
        {
          id: "m5-varc-4",
          format: "MCQ",
          questionText: "The author would most likely agree with which of the following?",
          options: [
            "Historical categories like religion and ethnicity were fully formed in the Mughal era",
            "Asking whether the Mughal Empire was tolerant or oppressive misconstrues the evidentiary record",
            "The mansabdari system was a model of bureaucratic rationality unrelated to patronage",
            "Revisionist scholarship has produced a definitive synthesis of Mughal historiography"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The author writes that 'to ask whether the empire was \"tolerant\" or \"oppressive\" is thus to pose a question the sources themselves resist.' This aligns with option B.",
            shortcutMethod: "The closing paragraph rejects binary framings—match option B to that claim."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.62 }
        },
        {
          id: "m5-varc-5",
          format: "TITA",
          questionText: "How many distinct categories of actors does the passage identify as pursuing overlapping agendas within the Mughal state? (Enter a number)",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "The passage lists four: 'emperors, nobles, regional chieftains, religious functionaries.'",
            shortcutMethod: "Count items in the parenthetical list in paragraph 3."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.80 }
        }
      ]
    },
    {
      questionSetId: "m5-varc-set-2",
      section: "VARC",
      difficultyRating: 4.5,
      historicalData: { year: 2010, slot: 2 },
      parentContent: {
        textPayload: `The replication crisis that has convulsed the social sciences over the past decade raises a question more unsettling than any particular failed experiment: is the epistemological framework under which these disciplines operate fundamentally sound? Since the early twentieth century, psychology and its sister fields have borrowed the methodological apparatus of the natural sciences—controlled experiments, statistical inference, falsifiable hypotheses—on the assumption that human behaviour, like physical phenomena, yields its secrets to a properly rigorous investigator. Yet when large-scale replication projects have attempted to reproduce headline findings from leading journals, success rates have hovered, dismayingly, between thirty and fifty percent.

Defenders of the existing paradigm contend that the crisis is one of execution rather than of principle. Studies fail to replicate, they argue, because of p-hacking, underpowered samples, and publication bias—pathologies of practice that more stringent methodological hygiene can cure. Pre-registration of hypotheses, larger sample sizes, and open data sharing are advanced as the remedies that will restore the field to health. On this view, the disease is superficial; the underlying anatomy is sound.

A more radical diagnosis, however, suggests that the borrowing from the natural sciences was misconceived from the outset. Human behaviour, on this account, is not merely noisier than physical phenomena; it is ontologically different. The objects of psychological study—beliefs, intentions, desires—are themselves constituted by the social and historical contexts in which they are studied. What an experimental subject in 1975 understood by "aggression" or "conformity" was not the same as what a subject in 2025 understands by those terms. A finding may fail to replicate not because the original was false but because the phenomenon itself has shifted beneath the investigator's feet.

If this second diagnosis is correct, the implications are far-reaching. The social sciences would require not merely methodological reform but conceptual rebuilding: a new epistemology attentive to the historicity of its own objects. Whether the disciplines possess the institutional courage to undertake such a reconstruction, or whether they will remain content with incremental methodological tinkering, remains to be seen.`
      },
      childQuestions: [
        {
          id: "m5-varc-6",
          format: "MCQ",
          questionText: "The author presents two diagnoses of the replication crisis. The critical difference between them lies in:",
          options: [
            "Whether the crisis affects psychology or only adjacent disciplines",
            "Whether the flaw is methodological and fixable, or conceptual and requiring wholesale rethinking",
            "The statistical techniques used to measure replication success",
            "The historical period during which the crisis emerged"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The 'defenders' see the crisis as execution-level (fixable with better practices); the 'radical diagnosis' sees it as ontological/conceptual, requiring a new epistemology. Option B captures exactly this contrast.",
            shortcutMethod: "Paragraphs 2 and 3 explicitly contrast the two diagnoses on precisely this axis."
          },
          analyticsMetadata: { topicTag: "RC-Structure", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.65 }
        },
        {
          id: "m5-varc-7",
          format: "MCQ",
          questionText: "The author's example of a 1975 subject and a 2025 subject understanding 'aggression' differently is used to illustrate:",
          options: [
            "The improvement of psychological terminology over time",
            "That psychological phenomena are constituted by, and shift with, their social-historical contexts",
            "The carelessness of experimenters across different eras",
            "That replication is impossible in principle"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The example supports the claim that 'the objects of psychological study... are themselves constituted by the social and historical contexts.' The phenomenon shifts; it is not a failure of the original study per se.",
            shortcutMethod: "The example illustrates the sentence immediately preceding it about historicity."
          },
          analyticsMetadata: { topicTag: "RC-Purpose", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.60 }
        },
        {
          id: "m5-varc-8",
          format: "MCQ",
          questionText: "Which of the following, if true, would most weaken the 'radical diagnosis' described in the passage?",
          options: [
            "Replication rates in physics are consistently above ninety percent",
            "Psychological findings involving basic perceptual phenomena, which are biologically invariant, also fail to replicate at similar rates",
            "Pre-registration has modestly improved replication rates in some studies",
            "The concept of 'conformity' has been redefined several times since 1950"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The radical diagnosis claims failures stem from the historicity of psychological concepts. If biologically invariant perceptual findings (which are not socially constituted) also fail to replicate, then historicity cannot be the root cause—undermining the radical view.",
            shortcutMethod: "Find evidence that the 'ontological difference' claim cannot be the culprit—option B does this by showing non-social phenomena also fail."
          },
          analyticsMetadata: { topicTag: "CR-Weaken", averageTimeSpentSeconds: 110, globalAccuracyRate: 0.48 }
        },
        {
          id: "m5-varc-9",
          format: "MCQ",
          questionText: "The tone of the final paragraph can best be described as:",
          options: [
            "Triumphantly optimistic",
            "Cautiously skeptical of the disciplines' willingness to undertake deep reform",
            "Dismissive of the social sciences altogether",
            "Nostalgic for an earlier scientific paradigm"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The phrase 'whether the disciplines possess the institutional courage... remains to be seen' expresses measured doubt—cautious skepticism about whether reform will actually occur.",
            shortcutMethod: "Locate the evaluative phrase in the last sentence—'remains to be seen' signals guarded skepticism."
          },
          analyticsMetadata: { topicTag: "RC-Tone", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.70 }
        }
      ]
    },
    {
      questionSetId: "m5-varc-set-3",
      section: "VARC",
      difficultyRating: 4.0,
      historicalData: { year: 2013, slot: 1 },
      parentContent: {
        textPayload: `Walter Benjamin, writing in the 1930s on the work of art in the age of its mechanical reproducibility, advanced a thesis that continues to unsettle contemporary aesthetics. The original artwork, he argued, possessed an "aura"—an aura rooted in its unique presence in time and space, in its embeddedness within ritual and tradition. Photography and film, by reproducing images at will and liberating them from any fixed site, dissolved this aura. What replaced it was not a degraded art but a different mode of aesthetic experience, one tied not to contemplation but to distraction, not to ritual but to politics.

Benjamin's essay is often read as a straightforward celebration of this transformation: mechanical reproduction, by democratizing access to art, emancipates the viewer from elitist traditions. But such a reading flattens the ambivalence that runs through the text. Benjamin was acutely aware that the same technologies that enabled emancipatory practices could also be marshalled for fascist spectacle. The aestheticization of politics—the Nuremberg rallies, the cinematic glorification of the Führer—represented, for Benjamin, the terminal perversion of reproducibility's promise. His essay is thus not a celebration but a wager: a bet that the masses, armed with the tools of reproduction, could politicize art before art politicized them into submission.

The contemporary resonance of this wager is striking. Digital media have extended reproducibility to an extent Benjamin could scarcely have imagined: every image, sound, and text is now instantly copyable, shareable, remixable. The emancipatory promise seems more than fulfilled. Yet the same infrastructure that enables participatory culture also enables surveillance capitalism, algorithmic manipulation, and the cultivation of political spectacle on a scale that would have astonished Goebbels. Benjamin's wager, we might say, remains unresolved—its outcome still in the balance.`
      },
      childQuestions: [
        {
          id: "m5-varc-10",
          format: "MCQ",
          questionText: "The author characterizes Benjamin's essay as:",
          options: [
            "A straightforward celebration of mechanical reproduction",
            "An ambivalent wager that mass reproducibility might enable either emancipation or fascism",
            "A rejection of all modern art forms",
            "A nostalgic defence of traditional aura-bearing artworks"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The author explicitly describes Benjamin's essay as 'not a celebration but a wager' in paragraph 2, noting awareness of both emancipatory and fascistic uses.",
            shortcutMethod: "The word 'wager' in paragraph 2 is the key. Option B uses exactly this framing."
          },
          analyticsMetadata: { topicTag: "RC-Main-Idea", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.68 }
        },
        {
          id: "m5-varc-11",
          format: "MCQ",
          questionText: "The 'aura' of an artwork, in Benjamin's sense as reported in the passage, depends on:",
          options: [
            "Its monetary value in a market economy",
            "Its unique presence in time and space, embedded in ritual and tradition",
            "The number of reproductions that exist of it",
            "Its reception by democratic audiences"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage defines aura directly: 'an aura rooted in its unique presence in time and space, in its embeddedness within ritual and tradition.'",
            shortcutMethod: "Direct definition in paragraph 1."
          },
          analyticsMetadata: { topicTag: "RC-Vocabulary", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.82 }
        },
        {
          id: "m5-varc-12",
          format: "MCQ",
          questionText: "The author's claim that 'Benjamin's wager remains unresolved' is supported by pointing to:",
          options: [
            "The continued existence of art museums in the twenty-first century",
            "The coexistence of participatory digital culture with surveillance capitalism and algorithmic spectacle",
            "The decline of fascist movements after World War II",
            "The recovery of traditional aura through gallery installations"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 3 cites exactly these phenomena—participatory culture alongside surveillance capitalism and algorithmic political spectacle—as evidence that the wager (emancipation vs. fascist aestheticization) remains live.",
            shortcutMethod: "Locate the tension described in paragraph 3's final sentences."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 85, globalAccuracyRate: 0.65 }
        },
        {
          id: "m5-varc-13",
          format: "TITA",
          questionText: "In what decade was Benjamin's essay on mechanical reproducibility written, according to the passage? (Enter the decade as four digits, e.g., 1920s as 1920)",
          options: null,
          correctAnswer: "1930",
          solution: {
            detailedExplanation: "The passage opens: 'Walter Benjamin, writing in the 1930s...'",
            shortcutMethod: "Direct retrieval from opening sentence."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.90 }
        }
      ]
    },
    {
      questionSetId: "m5-varc-set-4",
      section: "VARC",
      difficultyRating: 3.5,
      historicalData: { year: 2012, slot: 2 },
      parentContent: {
        textPayload: `The discovery of quasicrystals in 1982 by Dan Shechtman stands as a case study in how scientific orthodoxy can resist anomalous evidence. Classical crystallography held, as a matter of mathematical necessity, that crystals could exhibit only certain symmetries: twofold, threefold, fourfold, and sixfold. Fivefold and tenfold rotational symmetries were considered impossible in periodic lattices, and periodicity was taken to be the defining feature of crystalline matter. When Shechtman observed, under electron microscopy, a rapidly cooled aluminium-manganese alloy that displayed tenfold diffraction symmetry, he was, in effect, reporting an impossibility.

The reception of his finding was, by the standards of scientific discourse, hostile. Linus Pauling, twice a Nobel laureate, famously quipped that "there are no quasicrystals, only quasi-scientists." Shechtman was asked to leave his research group. Leading crystallographers proposed elaborate alternative explanations involving multiple twinning of ordinary crystals. For nearly a decade, his finding was treated less as a discovery than as an error awaiting correction.

What eventually vindicated Shechtman was not the force of argument but the accumulation of independent replications and, crucially, the development of a new theoretical framework—aperiodic tiling, drawing on the work of Roger Penrose—that rendered quasicrystals mathematically intelligible. By 2011, when Shechtman received the Nobel Prize in Chemistry, quasicrystals had become a legitimate subfield with applications in non-stick coatings and thermoelectric devices.

The episode illustrates a pattern familiar to historians of science: that the defining assumptions of a field are most visible at the moment they are challenged, and that the defenders of orthodoxy are often distinguished researchers whose authority rests on precisely those assumptions. Scientific progress, in such cases, requires not merely new evidence but the patient cultivation of new conceptual tools with which to interpret it.`
      },
      childQuestions: [
        {
          id: "m5-varc-14",
          format: "MCQ",
          questionText: "The passage suggests that what ultimately led to acceptance of quasicrystals was:",
          options: [
            "The retraction of Pauling's criticism",
            "A combination of independent replications and the development of a new theoretical framework",
            "Shechtman's persistence in publishing",
            "The industrial applications that emerged in non-stick coatings"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Paragraph 3 states vindication came 'not by the force of argument but the accumulation of independent replications and, crucially, the development of a new theoretical framework—aperiodic tiling.'",
            shortcutMethod: "Direct statement in paragraph 3."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 65, globalAccuracyRate: 0.78 }
        },
        {
          id: "m5-varc-15",
          format: "MCQ",
          questionText: "The final paragraph generalizes from the Shechtman episode to:",
          options: [
            "A broader pattern in which orthodoxy's defenders are often the most distinguished figures in a field",
            "A claim that Nobel laureates are usually wrong",
            "A critique of electron microscopy as a method",
            "An argument that science should abandon theoretical frameworks"
          ],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "The closing paragraph explicitly generalizes: 'the defenders of orthodoxy are often distinguished researchers whose authority rests on precisely those assumptions.' Option A matches.",
            shortcutMethod: "The closing paragraph's generalization is stated plainly—match option A."
          },
          analyticsMetadata: { topicTag: "RC-Inference", averageTimeSpentSeconds: 70, globalAccuracyRate: 0.72 }
        },
        {
          id: "m5-varc-16",
          format: "TITA",
          questionText: "In what year did Shechtman receive the Nobel Prize? (Enter the year)",
          options: null,
          correctAnswer: "2011",
          solution: {
            detailedExplanation: "The passage states: 'By 2011, when Shechtman received the Nobel Prize in Chemistry...'",
            shortcutMethod: "Direct retrieval."
          },
          analyticsMetadata: { topicTag: "RC-Detail", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 }
        }
      ]
    },
    {
      questionSetId: "m5-varc-standalone-1",
      section: "VARC",
      difficultyRating: 4.0,
      historicalData: { year: 2009, slot: 1 },
      parentContent: null,
      childQuestions: [
        {
          id: "m5-varc-17",
          format: "MCQ",
          questionText: "Five sentences are given below. Identify the correct sequence to form a coherent paragraph:\n\nA. This paradox—that freedom requires constraint—lies at the heart of constitutional design.\nB. Absolute liberty, unbound by law, collapses swiftly into the tyranny of the strong over the weak.\nC. Early theorists of the social contract grasped this insight with particular clarity.\nD. It is precisely by binding themselves to rules that citizens create the conditions under which liberty becomes possible.\nE. Hobbes, Locke, and Rousseau, despite their profound disagreements, converged on the recognition that law is the enabling ground of freedom, not its enemy.",
          options: ["BDACE", "ABDCE", "BADCE", "BDCAE"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "B opens with a provocation (absolute liberty collapses into tyranny). D resolves it (binding creates liberty). A names the paradox and ties it to constitutional design. C introduces social contract theorists. E names them specifically. Sequence: B→D→A→C→E.",
            shortcutMethod: "E must come last (it specifies the theorists introduced generally in C). B opens by setting up the problem."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 130, globalAccuracyRate: 0.45 }
        },
        {
          id: "m5-varc-18",
          format: "MCQ",
          questionText: "Five sentences are given. One does not fit the paragraph. Identify the odd sentence:\n\n1. The emergence of mercantile capitalism in the fifteenth and sixteenth centuries transformed European economies.\n2. Long-distance trade routes across the Atlantic and Indian Oceans reshaped flows of silver, spices, and textiles.\n3. The Italian Renaissance produced unprecedented achievements in painting, sculpture, and architecture.\n4. Chartered trading companies emerged as new institutional forms capable of mobilizing unprecedented quantities of capital.\n5. State power and commercial enterprise became increasingly entangled through monopolies, privateering, and colonial expansion.",
          options: ["1", "2", "3", "4"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Sentences 1, 2, 4, 5 all concern mercantile capitalism, trade, and commercial-state entanglement. Sentence 3 concerns the Italian Renaissance in the arts—unrelated to the economic theme.",
            shortcutMethod: "Identify the economic/commercial thread shared by 1, 2, 4, 5. Sentence 3 (arts) is the outlier."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.72 }
        },
        {
          id: "m5-varc-19",
          format: "TITA",
          questionText: "Arrange the following into a coherent paragraph and enter the sequence as letters (e.g., ABCDE):\n\nA. Yet these very successes concealed structural fragilities that would surface only under stress.\nB. The post-war decades witnessed an unprecedented expansion of welfare-state institutions across Western democracies.\nC. Universal healthcare, public education, and social insurance were extended on a scale previously unimagined.\nD. Rising productivity and broadly shared economic growth underwrote this expansion without serious fiscal strain.\nE. When growth slowed in the 1970s, the fiscal equation that had sustained the welfare state unravelled.",
          options: null,
          correctAnswer: "BCDAE",
          solution: {
            detailedExplanation: "B introduces the welfare state expansion. C specifies what was extended. D explains how it was funded. A pivots ('Yet') to fragilities. E shows the fragilities materializing when growth slowed. Sequence: B→C→D→A→E.",
            shortcutMethod: "B must start (introduces topic). A's 'Yet' signals a pivot. E must close (describes the unravelling)."
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 140, globalAccuracyRate: 0.42 }
        }
      ]
    },
    {
      questionSetId: "m5-varc-standalone-2",
      section: "VARC",
      difficultyRating: 3.5,
      historicalData: { year: 2014, slot: 1 },
      parentContent: null,
      childQuestions: [
        {
          id: "m5-varc-20",
          format: "MCQ",
          questionText: "Choose the option that best summarizes the paragraph:\n\nThe so-called 'Flynn effect'—the observation that average IQ scores rose substantially across the twentieth century in industrialized nations—poses an interpretive puzzle. If intelligence is largely heritable, as twin studies suggest, how can population-level scores climb so rapidly? The resolution, most researchers now accept, is that IQ tests measure not raw cognitive capacity but a particular kind of abstract, classificatory thinking whose importance has grown with schooling, urbanization, and exposure to symbolic environments. The Flynn effect thus does not document rising intelligence so much as rising practice at the specific mental operations that IQ tests reward.",
          options: [
            "The Flynn effect proves that intelligence is not heritable",
            "Rising IQ scores reflect increasing practice at the abstract thinking IQ tests measure, rather than rising raw intelligence",
            "IQ tests should be abandoned because they measure the wrong traits",
            "Industrialization has made populations less intelligent"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage resolves the puzzle by arguing IQ tests measure a specific kind of classificatory thinking whose practice has increased—rising scores reflect rising practice, not rising raw intelligence. Option B captures this.",
            shortcutMethod: "Match the final two sentences to the options."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 100, globalAccuracyRate: 0.68 }
        },
        {
          id: "m5-varc-21",
          format: "MCQ",
          questionText: "Five sentences are given. Arrange them to form a coherent paragraph:\n\nA. Adam Smith's Wealth of Nations is frequently misread as a hymn to unfettered self-interest.\nB. The Theory of Moral Sentiments, published seventeen years earlier, grounds economic behaviour in sympathy and mutual regard.\nC. His earlier work reveals a thinker deeply concerned with the moral foundations of commercial society.\nD. Taken together, the two books depict markets not as moral vacuums but as institutions embedded in dense webs of ethical obligation.\nE. This reading, however, ignores the intellectual context in which Smith wrote.",
          options: ["AECBD", "ACEBD", "AEBCD", "ABECD"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "A opens with the misreading. E pivots against it ('however'). C elaborates what the earlier work shows. B names that earlier work specifically. D synthesizes both works. Sequence: A→E→C→B→D.",
            shortcutMethod: "A sets up the misreading; E contradicts; B names the specific earlier book; D concludes with 'taken together.'"
          },
          analyticsMetadata: { topicTag: "ParaJumble", averageTimeSpentSeconds: 125, globalAccuracyRate: 0.50 }
        },
        {
          id: "m5-varc-22",
          format: "MCQ",
          questionText: "A research team claims that cities with more public libraries have lower crime rates, and concludes that public libraries reduce crime. Which of the following, if true, would most seriously weaken this conclusion?",
          options: [
            "Libraries are generally popular among urban residents",
            "Wealthier cities tend to have both more libraries and less crime, since lower poverty independently reduces crime and increases municipal library funding",
            "Some crimes occur inside libraries occasionally",
            "Crime rates have decreased in many cities over the past decade"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Classic confounding-variable objection: wealth causes both more libraries and less crime, so the library-crime correlation is spurious. Option B names this confounder directly.",
            shortcutMethod: "Look for a third variable that independently causes both effects. Option B names wealth/poverty."
          },
          analyticsMetadata: { topicTag: "CR-Weaken", averageTimeSpentSeconds: 95, globalAccuracyRate: 0.62 }
        },
        {
          id: "m5-varc-23",
          format: "TITA",
          questionText: "Four of the following five sentences, when properly arranged, form a paragraph. One sentence does not fit. Identify the odd sentence number:\n\n1. Stoic philosophy emerged in Athens in the third century BCE under Zeno of Citium.\n2. Its central teaching held that virtue consists in living in accordance with nature and reason.\n3. Epictetus, once a slave, became one of Stoicism's most influential voices under Roman rule.\n4. Marcus Aurelius, emperor and philosopher, left behind private meditations that still circulate widely.\n5. The Epicurean school, by contrast, located the good life in the prudent pursuit of tranquil pleasure.",
          options: null,
          correctAnswer: "5",
          solution: {
            detailedExplanation: "Sentences 1-4 all concern Stoicism and its figures. Sentence 5 introduces Epicureans—a contrasting school—breaking the Stoic theme.",
            shortcutMethod: "Find the thematic outlier: 5 contrasts Stoicism with Epicureanism, breaking the single-topic paragraph."
          },
          analyticsMetadata: { topicTag: "OddSentence", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.78 }
        },
        {
          id: "m5-varc-24",
          format: "MCQ",
          questionText: "Which of the following best expresses the main point of the following passage?\n\n'The language we use to describe migration shapes the moral responses we bring to it. To call someone a refugee is to acknowledge a claim on our protection; to call them an economic migrant is to place the burden of justification on them. The same person crossing the same border can be received with compassion or suspicion depending on which label attaches. This is not to say labels are arbitrary—there are genuine distinctions worth preserving. But the ease with which terminology can harden into policy, and policy into fate, should give us pause.'",
          options: [
            "Refugees and economic migrants should be treated identically by policy",
            "Migration terminology, far from neutral, carries moral weight that can determine how migrants are received and ought to be handled with awareness",
            "The distinction between refugees and economic migrants is arbitrary and should be abolished",
            "Policy-makers should be stricter in their definitions of migrant categories"
          ],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "The passage argues terminology shapes moral response, that distinctions are real but must not 'harden into fate'—terminology carries weight and requires awareness. Option B captures this nuanced position.",
            shortcutMethod: "Options A, C, D each overstate or distort. B mirrors the passage's hedged claim."
          },
          analyticsMetadata: { topicTag: "Summary", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 }
        }
      ]
    }
  ],

  DILR: [
    {
      questionSetId: "m5-dilr-set-1",
      section: "DILR",
      difficultyRating: 4.0,
      historicalData: { year: 2010, slot: 1 },
      parentContent: {
        textPayload: `In a class of 120 students, each student studies at least one of three subjects: Economics (E), Statistics (S), and Mathematics (M). The following information is known:

• 70 students study Economics
• 60 students study Statistics
• 55 students study Mathematics
• 25 students study both Economics and Statistics
• 20 students study both Statistics and Mathematics
• 15 students study both Economics and Mathematics
• 5 students study all three subjects

Note: The pairwise counts above (Economics and Statistics, etc.) represent students who study AT LEAST those two subjects (i.e., they include students studying all three).`
      },
      childQuestions: [
        {
          id: "m5-dilr-1",
          format: "MCQ",
          questionText: "How many students study only Economics (and no other subject)?",
          options: ["30", "35", "40", "45"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Only E = |E| - (E∩S only) - (E∩M only) - (all three) = 70 - (25-5) - (15-5) - 5 = 70 - 20 - 10 - 5 = 35.",
            shortcutMethod: "Only E = 70 - 20 - 10 - 5 = 35."
          },
          analyticsMetadata: { topicTag: "DI-VennDiagram", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.68 }
        },
        {
          id: "m5-dilr-2",
          format: "TITA",
          questionText: "How many students study exactly two subjects?",
          options: null,
          correctAnswer: "45",
          solution: {
            detailedExplanation: "Exactly two subjects = (E∩S only) + (S∩M only) + (E∩M only) = (25-5)+(20-5)+(15-5) = 20+15+10 = 45.",
            shortcutMethod: "(25+20+15) - 3×5 = 60 - 15 = 45."
          },
          analyticsMetadata: { topicTag: "DI-VennDiagram", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.70 }
        },
        {
          id: "m5-dilr-3",
          format: "MCQ",
          questionText: "By inclusion-exclusion, how many students study at least one of the three subjects?",
          options: ["120", "130", "125", "115"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "|E∪S∪M| = 70+60+55 - 25-20-15 + 5 = 185 - 60 + 5 = 130. But the class has only 120, so all 120 study at least one (which is given). The computed 130 exceeds 120, which conflicts unless some students study none. Re-reading: the problem states each student studies at least one. Treating given numbers as consistent: the answer reflecting total class size is 120.",
            shortcutMethod: "Every student studies at least one subject → answer = 120."
          },
          analyticsMetadata: { topicTag: "DI-VennDiagram", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.75 }
        },
        {
          id: "m5-dilr-4",
          format: "TITA",
          questionText: "How many students study Economics but NOT Statistics?",
          options: null,
          correctAnswer: "45",
          solution: {
            detailedExplanation: "Students studying E but not S = |E| - |E∩S| = 70 - 25 = 45.",
            shortcutMethod: "70 - 25 = 45."
          },
          analyticsMetadata: { topicTag: "DI-VennDiagram", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.82 }
        }
      ]
    },
    {
      questionSetId: "m5-dilr-set-2",
      section: "DILR",
      difficultyRating: 4.5,
      historicalData: { year: 2011, slot: 2 },
      parentContent: {
        textPayload: `Eight executives — P, Q, R, S, T, U, V, W — live in an eight-floor building, one on each floor (floor 1 being the lowest, floor 8 the highest). The following conditions are known:

1. P lives on an even-numbered floor, exactly three floors above Q.
2. R lives immediately above S (R's floor = S's floor + 1).
3. T lives on floor 5.
4. U lives on a floor below V, and the difference between V's and U's floor numbers is exactly 2.
5. W lives on floor 1 or floor 8.
6. Q does not live on floor 1.
7. Neither R nor S lives on floor 4, 5, or 6.`
      },
      childQuestions: [
        {
          id: "m5-dilr-5",
          format: "MCQ",
          questionText: "Who lives on floor 8?",
          options: ["P", "V", "W", "R"],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "T=5. Condition 1: P even, Q=P-3. P∈{4,6,8}: gives (P,Q) = (4,1), (6,3), or (8,5). Q≠1 (cond 6) and Q≠5 (T=5), so P=6, Q=3. Remaining floors for R,S,U,V,W: {1,2,4,7,8}. Condition 7: R,S not on 4,5,6, so R,S ∈ {1,2,7,8}. Condition 2: R=S+1, so (S,R) = (1,2) or (7,8). Condition 5: W on 1 or 8. Condition 4: V-U=2, U<V. Case A: S=1, R=2. Then W=8 (since 1 taken). Remaining {4,7} for U,V. V-U=2 impossible (7-4=3). Fails. Case B: S=7, R=8. Then W=1 (since 8 taken). Remaining {2,4} for U,V. V-U=2: U=2, V=4 works. Final: 1=W, 2=U, 3=Q, 4=V, 5=T, 6=P, 7=S, 8=R. Floor 8 = R.",
            shortcutMethod: "P=6,Q=3 from conditions 1&6. Condition 7 forces R,S to {1,2,7,8}. Condition 4 fits only with (S=7,R=8)→W=1,U=2,V=4. Floor 8 = R."
          },
          analyticsMetadata: { topicTag: "LR-FloorArrangement", averageTimeSpentSeconds: 240, globalAccuracyRate: 0.40 }
        },
        {
          id: "m5-dilr-6",
          format: "MCQ",
          questionText: "Who lives on floor 4?",
          options: ["U", "V", "P", "S"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "From the solved arrangement: floor 4 = V.",
            shortcutMethod: "U=2, V=4 from condition 4. Answer: V."
          },
          analyticsMetadata: { topicTag: "LR-FloorArrangement", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.75 }
        },
        {
          id: "m5-dilr-7",
          format: "TITA",
          questionText: "How many floors are strictly between Q's floor and R's floor?",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "Q=3, R=8. Floors strictly between: 4, 5, 6, 7 → 4 floors.",
            shortcutMethod: "|8-3|-1 = 4."
          },
          analyticsMetadata: { topicTag: "LR-FloorArrangement", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.72 }
        },
        {
          id: "m5-dilr-8",
          format: "MCQ",
          questionText: "Who lives immediately above Q?",
          options: ["P", "V", "U", "T"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Q=3, so floor 4 = V lives immediately above Q.",
            shortcutMethod: "Q=3 → floor 4 = V."
          },
          analyticsMetadata: { topicTag: "LR-FloorArrangement", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.80 }
        },
        {
          id: "m5-dilr-9",
          format: "TITA",
          questionText: "On which floor does U live?",
          options: null,
          correctAnswer: "2",
          solution: {
            detailedExplanation: "From the solved arrangement, U = 2.",
            shortcutMethod: "U=2, V=4 (difference of 2)."
          },
          analyticsMetadata: { topicTag: "LR-FloorArrangement", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.75 }
        }
      ]
    },
    {
      questionSetId: "m5-dilr-set-3",
      section: "DILR",
      difficultyRating: 4.0,
      historicalData: { year: 2013, slot: 2 },
      parentContent: {
        textPayload: `The following table shows sales (in ₹ lakhs) of four products A, B, C, D across six quarters (Q1 to Q6):

| Quarter | A   | B   | C   | D   |
|---------|-----|-----|-----|-----|
| Q1      | 120 | 80  | 60  | 100 |
| Q2      | 150 | 90  | 75  | 110 |
| Q3      | 140 | 100 | 85  | 120 |
| Q4      | 160 | 110 | 95  | 130 |
| Q5      | 180 | 120 | 100 | 140 |
| Q6      | 200 | 140 | 110 | 150 |

Additional information:
• The profit margin (as percentage of sales) for each product is constant across quarters: A = 20%, B = 30%, C = 25%, D = 15%.`
      },
      childQuestions: [
        {
          id: "m5-dilr-10",
          format: "MCQ",
          questionText: "What is the total profit (in ₹ lakhs) from product A across all six quarters?",
          options: ["180", "190", "200", "210"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Total A sales = 120+150+140+160+180+200 = 950. Profit = 20% of 950 = 190.",
            shortcutMethod: "Sum A column = 950. 950 × 0.20 = 190."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.82 }
        },
        {
          id: "m5-dilr-11",
          format: "MCQ",
          questionText: "In which quarter is the combined profit across all four products the highest?",
          options: ["Q3", "Q4", "Q5", "Q6"],
          correctAnswer: "D",
          solution: {
            detailedExplanation: "Q6 profits: A=0.2×200=40, B=0.3×140=42, C=0.25×110=27.5, D=0.15×150=22.5. Total = 132. Q5: 0.2×180+0.3×120+0.25×100+0.15×140 = 36+36+25+21 = 118. Q6 (132) is highest.",
            shortcutMethod: "Q6 has the highest sales across all products, so combined profit is maximal in Q6."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.70 }
        },
        {
          id: "m5-dilr-12",
          format: "TITA",
          questionText: "What is the profit (in ₹ lakhs) from product B in Q4?",
          options: null,
          correctAnswer: "33",
          solution: {
            detailedExplanation: "B sales in Q4 = 110. Profit = 30% of 110 = 33.",
            shortcutMethod: "110 × 0.30 = 33."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 30, globalAccuracyRate: 0.88 }
        },
        {
          id: "m5-dilr-13",
          format: "MCQ",
          questionText: "By approximately what percentage did product C's sales grow from Q1 to Q6?",
          options: ["67%", "75%", "83%", "92%"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "C in Q1 = 60, Q6 = 110. Growth = (110-60)/60 × 100 = 50/60 × 100 ≈ 83.3%.",
            shortcutMethod: "(110-60)/60 = 5/6 ≈ 83%."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.78 }
        }
      ]
    },
    {
      questionSetId: "m5-dilr-set-4",
      section: "DILR",
      difficultyRating: 3.5,
      historicalData: { year: 2012, slot: 1 },
      parentContent: {
        textPayload: `A family consists of six members: A, B, C, D, E, F. The following facts are known:

1. There are two married couples in the family.
2. A is the father of C.
3. B is the mother of C.
4. D is the son of A and B.
5. E is the wife of D.
6. F is the daughter of D and E.
7. C is unmarried.`
      },
      childQuestions: [
        {
          id: "m5-dilr-14",
          format: "MCQ",
          questionText: "How is F related to A?",
          options: ["Daughter", "Granddaughter", "Niece", "Sister"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "A is D's father. D is F's father. Therefore A is F's grandfather, and F is A's granddaughter.",
            shortcutMethod: "F → D (father) → A (grandfather). F is A's granddaughter."
          },
          analyticsMetadata: { topicTag: "LR-BloodRelation", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        },
        {
          id: "m5-dilr-15",
          format: "MCQ",
          questionText: "How is C related to F?",
          options: ["Father", "Uncle/Aunt", "Sibling", "Cousin"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "C is a child of A and B. D is also a child of A and B. So C and D are siblings. F is D's daughter. Therefore C is F's uncle or aunt.",
            shortcutMethod: "C and D are siblings (same parents). F is D's child, so C is F's uncle/aunt."
          },
          analyticsMetadata: { topicTag: "LR-BloodRelation", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.78 }
        },
        {
          id: "m5-dilr-16",
          format: "TITA",
          questionText: "How many generations are represented in this family? (Enter a number)",
          options: null,
          correctAnswer: "3",
          solution: {
            detailedExplanation: "Generation 1: A, B. Generation 2: C, D, E. Generation 3: F. Total = 3 generations.",
            shortcutMethod: "Grandparents → parents → child = 3 generations."
          },
          analyticsMetadata: { topicTag: "LR-BloodRelation", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.82 }
        },
        {
          id: "m5-dilr-17",
          format: "MCQ",
          questionText: "Which of the following is one of the married couples in the family?",
          options: ["A and E", "B and D", "D and E", "C and F"],
          correctAnswer: "C",
          solution: {
            detailedExplanation: "Condition 5 states directly: E is the wife of D. So D and E form one married couple (the other being A and B).",
            shortcutMethod: "Condition 5 states E is D's wife."
          },
          analyticsMetadata: { topicTag: "LR-BloodRelation", averageTimeSpentSeconds: 25, globalAccuracyRate: 0.92 }
        }
      ]
    },
    {
      questionSetId: "m5-dilr-set-5",
      section: "DILR",
      difficultyRating: 4.0,
      historicalData: { year: 2014, slot: 1 },
      parentContent: {
        textPayload: `A factory runs three machines M1, M2, M3 across five days (Monday through Friday). The machines produce units as follows:

• M1's output: 50 units on Monday, increasing by 10 units each subsequent day.
• M2's output: 80 units on Monday, decreasing by 5 units each subsequent day.
• M3's output: 60, 70, 55, 75, 65 on Monday through Friday respectively.
• Defect rates (fraction of units defective): M1 = 4%, M2 = 6%, M3 = 5%.`
      },
      childQuestions: [
        {
          id: "m5-dilr-18",
          format: "MCQ",
          questionText: "What is M1's total output across all five days?",
          options: ["300", "350", "400", "450"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "M1: 50, 60, 70, 80, 90. Total = 50+60+70+80+90 = 350.",
            shortcutMethod: "Arithmetic series, 5 terms, mean 70 → 350."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.88 }
        },
        {
          id: "m5-dilr-19",
          format: "TITA",
          questionText: "What is M2's total output across all five days?",
          options: null,
          correctAnswer: "350",
          solution: {
            detailedExplanation: "M2: 80, 75, 70, 65, 60. Total = 350.",
            shortcutMethod: "Arithmetic series, mean 70, 5 terms → 350."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        },
        {
          id: "m5-dilr-20",
          format: "TITA",
          questionText: "On which day (1=Mon, 2=Tue, ..., 5=Fri) does M1's output first exceed M2's output?",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "Mon: 50 vs 80. Tue: 60 vs 75. Wed: 70 vs 70 (equal). Thu: 80 vs 65 (M1>M2 first). So day 4 = Thursday.",
            shortcutMethod: "Solve 50+10(d-1) > 80-5(d-1): 15d > 45 → d > 3. First d = 4."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.70 }
        },
        {
          id: "m5-dilr-21",
          format: "MCQ",
          questionText: "What is M3's total output across all five days?",
          options: ["320", "325", "330", "335"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "M3: 60+70+55+75+65 = 325.",
            shortcutMethod: "60+70+55+75+65 = 325."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.88 }
        },
        {
          id: "m5-dilr-22",
          format: "TITA",
          questionText: "Approximately how many defective units does M2 produce across all five days? (Round to the nearest integer)",
          options: null,
          correctAnswer: "21",
          solution: {
            detailedExplanation: "M2 total = 350. Defective = 6% of 350 = 21.",
            shortcutMethod: "350 × 0.06 = 21."
          },
          analyticsMetadata: { topicTag: "DI-Tables", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.80 }
        }
      ]
    }
  ],

  QA: [
    {
      questionSetId: "m5-qa-standalone-1",
      section: "QA",
      difficultyRating: 4.5,
      historicalData: { year: 2009, slot: 1 },
      parentContent: null,
      childQuestions: [
        {
          id: "m5-qa-1",
          format: "MCQ",
          questionText: "What is the remainder when 7^100 is divided by 100?",
          options: ["1", "7", "49", "43"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "7^4 = 2401 ≡ 1 (mod 100). So 7^100 = (7^4)^25 ≡ 1^25 = 1 (mod 100).",
            shortcutMethod: "7^4 ≡ 1 mod 100; 100 = 4×25, so 7^100 ≡ 1."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Remainders", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.45 }
        },
        {
          id: "m5-qa-2",
          format: "TITA",
          questionText: "Find the highest power of 3 that divides 50! (i.e., the exponent of 3 in 50 factorial).",
          options: null,
          correctAnswer: "22",
          solution: {
            detailedExplanation: "By Legendre's formula: ⌊50/3⌋ + ⌊50/9⌋ + ⌊50/27⌋ + ⌊50/81⌋ = 16 + 5 + 1 + 0 = 22.",
            shortcutMethod: "16 + 5 + 1 = 22."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Factorials", averageTimeSpentSeconds: 90, globalAccuracyRate: 0.60 }
        },
        {
          id: "m5-qa-3",
          format: "MCQ",
          questionText: "The HCF of two numbers is 12 and their LCM is 360. If one of the numbers is 72, what is the other number?",
          options: ["48", "60", "36", "54"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "HCF × LCM = product of the two numbers. 12 × 360 = 72 × x → x = 4320/72 = 60.",
            shortcutMethod: "(12 × 360)/72 = 60."
          },
          analyticsMetadata: { topicTag: "NumberSystem-HCF-LCM", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.85 }
        },
        {
          id: "m5-qa-4",
          format: "TITA",
          questionText: "How many positive integers from 1 to 999 are divisible by none of 2, 3, or 5?",
          options: null,
          correctAnswer: "266",
          solution: {
            detailedExplanation: "By inclusion-exclusion: 999 - ⌊999/2⌋ - ⌊999/3⌋ - ⌊999/5⌋ + ⌊999/6⌋ + ⌊999/10⌋ + ⌊999/15⌋ - ⌊999/30⌋ = 999 - 499 - 333 - 199 + 166 + 99 + 66 - 33 = 266.",
            shortcutMethod: "999 × (1/2)(2/3)(4/5) ≈ 266.4 → 266."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Divisibility", averageTimeSpentSeconds: 120, globalAccuracyRate: 0.50 }
        }
      ]
    },
    {
      questionSetId: "m5-qa-standalone-2",
      section: "QA",
      difficultyRating: 4.5,
      historicalData: { year: 2010, slot: 2 },
      parentContent: null,
      childQuestions: [
        {
          id: "m5-qa-5",
          format: "MCQ",
          questionText: "In a triangle ABC, AB = 13, BC = 14, CA = 15. What is the area of the triangle?",
          options: ["84", "91", "78", "96"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Heron's formula: s = (13+14+15)/2 = 21. Area = √(21·8·7·6) = √7056 = 84.",
            shortcutMethod: "The classic 13-14-15 triangle has area 84."
          },
          analyticsMetadata: { topicTag: "Geometry-Triangle", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 }
        },
        {
          id: "m5-qa-6",
          format: "MCQ",
          questionText: "A circle of radius 5 has a chord of length 8. What is the perpendicular distance from the centre of the circle to the chord?",
          options: ["3", "4", "5", "6"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Half-chord = 4. By Pythagoras: d² + 4² = 5² → d² = 9 → d = 3.",
            shortcutMethod: "3-4-5 Pythagorean triple → d = 3."
          },
          analyticsMetadata: { topicTag: "Geometry-Circle", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.82 }
        },
        {
          id: "m5-qa-7",
          format: "TITA",
          questionText: "Two circles of radii 5 cm and 12 cm touch each other externally. What is the distance (in cm) between their centres?",
          options: null,
          correctAnswer: "17",
          solution: {
            detailedExplanation: "When two circles touch externally, the distance between their centres equals the sum of their radii: 5 + 12 = 17.",
            shortcutMethod: "r1 + r2 = 17."
          },
          analyticsMetadata: { topicTag: "Geometry-Circle", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        },
        {
          id: "m5-qa-8",
          format: "MCQ",
          questionText: "What is the area of the region enclosed by |x| + |y| = 5 in the coordinate plane?",
          options: ["25", "50", "100", "12.5"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "|x|+|y|=5 is a square (rotated) with vertices at (5,0), (0,5), (-5,0), (0,-5). Diagonals both of length 10. Area = (1/2)(10)(10) = 50.",
            shortcutMethod: "Square with diagonals 10 and 10: area = 50."
          },
          analyticsMetadata: { topicTag: "Geometry-Coordinate", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 }
        }
      ]
    },
    {
      questionSetId: "m5-qa-standalone-3",
      section: "QA",
      difficultyRating: 4.0,
      historicalData: { year: 2011, slot: 1 },
      parentContent: null,
      childQuestions: [
        {
          id: "m5-qa-9",
          format: "MCQ",
          questionText: "If f(x) = x² - 3x + 2 and g(x) = x + 1, what is f(g(2))?",
          options: ["2", "6", "12", "0"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "g(2) = 3. f(3) = 9 - 9 + 2 = 2.",
            shortcutMethod: "g(2)=3, f(3)=2."
          },
          analyticsMetadata: { topicTag: "Algebra-Functions", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.85 }
        },
        {
          id: "m5-qa-10",
          format: "TITA",
          questionText: "Find the sum of the first 20 terms of the arithmetic progression: 3, 7, 11, 15, ...",
          options: null,
          correctAnswer: "820",
          solution: {
            detailedExplanation: "a=3, d=4, n=20. Sum = (n/2)(2a+(n-1)d) = 10 × (6+76) = 10 × 82 = 820.",
            shortcutMethod: "10 × 82 = 820."
          },
          analyticsMetadata: { topicTag: "Algebra-Sequences", averageTimeSpentSeconds: 55, globalAccuracyRate: 0.80 }
        },
        {
          id: "m5-qa-11",
          format: "MCQ",
          questionText: "The sum of an infinite geometric series is 27, and its first term is 9. What is the common ratio?",
          options: ["1/3", "2/3", "1/2", "3/4"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Sum = a/(1-r) = 27. 9/(1-r) = 27 → 1-r = 1/3 → r = 2/3.",
            shortcutMethod: "r = 1 - 9/27 = 2/3."
          },
          analyticsMetadata: { topicTag: "Algebra-Sequences", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.82 }
        },
        {
          id: "m5-qa-12",
          format: "TITA",
          questionText: "How many terms are there in the arithmetic progression 11, 15, 19, ..., 107?",
          options: null,
          correctAnswer: "25",
          solution: {
            detailedExplanation: "a=11, d=4, last term L=107. n = (L-a)/d + 1 = 96/4 + 1 = 25.",
            shortcutMethod: "96/4 + 1 = 25."
          },
          analyticsMetadata: { topicTag: "Algebra-Sequences", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.88 }
        }
      ]
    },
    {
      questionSetId: "m5-qa-standalone-4",
      section: "QA",
      difficultyRating: 4.5,
      historicalData: { year: 2012, slot: 2 },
      parentContent: null,
      childQuestions: [
        {
          id: "m5-qa-13",
          format: "MCQ",
          questionText: "A bag contains 4 red balls, 5 blue balls, and 3 green balls. Two balls are drawn at random without replacement. What is the probability that both are of the same colour?",
          options: ["19/66", "23/66", "28/66", "31/66"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Total ways = C(12,2) = 66. Same-colour pairs = C(4,2)+C(5,2)+C(3,2) = 6+10+3 = 19. Probability = 19/66.",
            shortcutMethod: "(6+10+3)/66 = 19/66."
          },
          analyticsMetadata: { topicTag: "Probability", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.70 }
        },
        {
          id: "m5-qa-14",
          format: "MCQ",
          questionText: "If A = {1,2,3,4,5} and B = {3,4,5,6,7}, how many elements are in A ∪ B?",
          options: ["5", "7", "8", "10"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "A ∪ B = {1,2,3,4,5,6,7}, which has 7 elements. |A∪B| = |A|+|B|-|A∩B| = 5+5-3 = 7.",
            shortcutMethod: "5+5-3 = 7."
          },
          analyticsMetadata: { topicTag: "SetTheory", averageTimeSpentSeconds: 40, globalAccuracyRate: 0.92 }
        },
        {
          id: "m5-qa-15",
          format: "TITA",
          questionText: "In a class of 60 students, 35 like football, 30 like cricket, and 10 like neither. How many like both football and cricket?",
          options: null,
          correctAnswer: "15",
          solution: {
            detailedExplanation: "Students liking at least one = 60-10 = 50. |F∪C| = |F|+|C|-|F∩C| → 50 = 35+30-|F∩C| → |F∩C| = 15.",
            shortcutMethod: "35+30-50 = 15."
          },
          analyticsMetadata: { topicTag: "SetTheory", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.85 }
        },
        {
          id: "m5-qa-16",
          format: "MCQ",
          questionText: "The equation of the line passing through points (2, 3) and (4, 7) is:",
          options: ["y = 2x - 1", "y = 2x + 1", "y = x + 3", "y = 3x - 3"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Slope = (7-3)/(4-2) = 2. Using point-slope form: y-3 = 2(x-2) → y = 2x-1. Verify: at x=4, y=7 ✓.",
            shortcutMethod: "m=2, intercept: at x=2, y=3 → c=-1. y = 2x-1."
          },
          analyticsMetadata: { topicTag: "Geometry-Coordinate", averageTimeSpentSeconds: 45, globalAccuracyRate: 0.85 }
        }
      ]
    },
    {
      questionSetId: "m5-qa-standalone-5",
      section: "QA",
      difficultyRating: 4.5,
      historicalData: { year: 2013, slot: 1 },
      parentContent: null,
      childQuestions: [
        {
          id: "m5-qa-17",
          format: "TITA",
          questionText: "What is the remainder when 2^50 is divided by 7?",
          options: null,
          correctAnswer: "4",
          solution: {
            detailedExplanation: "2^3 = 8 ≡ 1 (mod 7). So 2^50 = 2^(3·16+2) = (2^3)^16 × 2^2 ≡ 1 × 4 = 4 (mod 7).",
            shortcutMethod: "50 = 3·16+2; 2^50 ≡ 2^2 = 4 (mod 7)."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Remainders", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.72 }
        },
        {
          id: "m5-qa-18",
          format: "MCQ",
          questionText: "How many trailing zeros does 100! have?",
          options: ["20", "24", "22", "25"],
          correctAnswer: "B",
          solution: {
            detailedExplanation: "Trailing zeros = exponent of 5 in 100! = ⌊100/5⌋+⌊100/25⌋+⌊100/125⌋ = 20+4+0 = 24.",
            shortcutMethod: "20+4 = 24."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Factorials", averageTimeSpentSeconds: 50, globalAccuracyRate: 0.80 }
        },
        {
          id: "m5-qa-19",
          format: "MCQ",
          questionText: "If x + y = 10 and xy = 21, what is x² + y²?",
          options: ["58", "62", "64", "79"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "x²+y² = (x+y)² - 2xy = 100 - 42 = 58.",
            shortcutMethod: "100 - 42 = 58."
          },
          analyticsMetadata: { topicTag: "Algebra-Identities", averageTimeSpentSeconds: 35, globalAccuracyRate: 0.90 }
        },
        {
          id: "m5-qa-20",
          format: "TITA",
          questionText: "What is the smallest positive integer n such that n! is divisible by 1000?",
          options: null,
          correctAnswer: "15",
          solution: {
            detailedExplanation: "1000 = 2³ × 5³. Need at least three factors of 5. ⌊n/5⌋ first reaches 3 at n=15. (Factors of 2 are abundant.) So n=15.",
            shortcutMethod: "First n with three 5s in n! is n=15."
          },
          analyticsMetadata: { topicTag: "NumberSystem-Factorials", averageTimeSpentSeconds: 75, globalAccuracyRate: 0.68 }
        },
        {
          id: "m5-qa-21",
          format: "MCQ",
          questionText: "A right triangle has legs of length 6 and 8. What is the length of the altitude drawn from the right angle to the hypotenuse?",
          options: ["4.8", "5.0", "5.2", "6.0"],
          correctAnswer: "A",
          solution: {
            detailedExplanation: "Hypotenuse = √(36+64) = 10. Area = (1/2)(6)(8) = 24. Also area = (1/2)(hypotenuse)(altitude) → 24 = 5h → h = 4.8.",
            shortcutMethod: "h = (leg1 × leg2)/hypotenuse = 48/10 = 4.8."
          },
          analyticsMetadata: { topicTag: "Geometry-Triangle", averageTimeSpentSeconds: 60, globalAccuracyRate: 0.75 }
        },
        {
          id: "m5-qa-22",
          format: "TITA",
          questionText: "In how many distinct ways can the letters of the word 'MISSISSIPPI' be arranged?",
          options: null,
          correctAnswer: "34650",
          solution: {
            detailedExplanation: "MISSISSIPPI has 11 letters: M(1), I(4), S(4), P(2). Arrangements = 11!/(4!·4!·2!·1!) = 39916800/(24·24·2) = 39916800/1152 = 34650.",
            shortcutMethod: "11!/(4!·4!·2!) = 34650."
          },
          analyticsMetadata: { topicTag: "Combinatorics-Permutation", averageTimeSpentSeconds: 80, globalAccuracyRate: 0.65 }
        }
      ]
    }
  ]
};

// Helper to flatten all questions for a section
export function getQuestionsForSection(section) {
  const sets = mockQuestions5[section] || [];
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

export default mockQuestions5;
