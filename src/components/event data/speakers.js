import IMAGE1 from "../../assets/images/alessandra-russo.jpg";
import IMAGE2 from "../../assets/images/giuseppe.jpg";
import IMAGE3 from "../../assets/images/isil.jpg";
import IMAGE4 from "../../assets/images/leonardo.jpg";

export const keyNoteSpeakers = [
  {
    name: "Giuseppe De Giacomo",
    image: IMAGE2,
    date: "20/July",
    title: "Temporal Synthesis as a Foundation for Strategic Reasoning in Artificial Intelligence",
    abstract:
      "Temporal Synthesis studies the automatic synthesis of interactive programs (strategies) from declarative specifications expressed in temporal logic. In this talk, we show how Temporal Synthesis provides a principled foundation for strategic reasoning in autonomous AI systems, grounding deliberative behavior in formally specified temporal goals. The key to this research path lies in the rich body of concepts developed in reasoning about actions and planning, combined with a precise treatment of nondeterministic environments and temporal objectives. In such settings, plans must be treated as strategies rather than being blurred with individual execution traces, and goal satisfaction evolves during execution rather than being reducible to reaching states with fixed properties. These features are naturally captured within the temporal synthesis framework. Technically, we focus on synthesis from Linear Temporal Logic on finite traces (LTLf). LTLf specifications compile into deterministic finite automata (DFAs), which can be viewed as two-player game arenas, yielding efficient and scalable synthesis procedures. We then lift these finite-trace results to infinite traces through the Manna–Pnueli hierarchy, introducing LTLf+ and its obligation fragment while largely preserving algorithmic simplicity. Finally, we move beyond individual strategies to analyze the space of all strategies satisfying a specification. By characterizing the set of compliant execution traces, without assuming individual strategies to be analyzable, we provide formal foundations for guard-railing and responsibility attribution in agentic AI systems composed of multiple agents that make decisions independently.",
    position: "University of Oxford",
    bio: 'Giuseppe De Giacomo is a Professor of Computer Science in the Department of Computer Science at the University of Oxford. He has previously been a Professor at the Department of Computer, Control, and Management Engineering of the University of Rome "La Sapienza". His research spans theoretical, methodological, and practical aspects of Artificial Intelligence and Computer Science, with major contributions in Knowledge Representation, Reasoning about Actions, Generalized Planning, Autonomous Agents, Reactive Synthesis and Verification, Service Composition, Business Process Modeling, and Data Management and Integration. He is a Fellow of AAAI, ACM, and EurAI. He received an ERC Advanced Grant for the project WhiteMech: White-box Self Programming Mechanisms. He has served as Program Chair of ECAI 2020 and KR 2014. He is a member of the Board of EurAI and chairs the steering committee of EurAI’s annual summer school ESSAI.',
    link: "https://www.diag.uniroma1.it/~degiacom/",
  },
  {
    name: "Alessandra Russo",
    image: IMAGE1,
    date: "22/July",
    title: "",
    abstract: "TBA",
    position: "Imperial College London",
    bio: 'Professor Alessandra Russo is a Professor of Applied Computational Logic in the Department of Computing at Imperial College London, where she leads the "Structured and Probabilistic Intelligent Knowledge Engineering (SPIKE)" research group. She currently serves as Head of the Department of Computing, Chair of the IX Imperial initiative on interdisciplinary AI-driven research, and Co-director of the School of Convergence Science in Human and Artificial Intelligence.  Since September 2021, Professor Russo has also been Co-Director of the UKRI Centre for Doctoral Training in Safe and Trusted AI (STAI), and is seconded at the Alan Turing Institute, where she contributes to research on robust inference for Large Language Models. Her research spans a broad range of topics within AI, including Computational Logic, Knowledge Representation, Symbolic Machine Learning, Probabilistic and Distributed Inference, and more broadly, Symbolic AI. She has been a pioneer in the development of several state-of-the-art symbolic machine learning systems, with impactful applications across Intelligent Autonomous Systems, Security, Network Management, and Healthcare.  More recently, Professor Russo has focused on advancing neuro-symbolic methodologies that combine machine learning and probabilistic inference with symbolic learning and reasoning. Her work aims to enhance robustness, generalisation, and transfer learning from multimodal, unstructured data. She has led numerous research projects, has authored over 200 publications in leading AI and Software Engineering conferences and journals. Her editorial contributions include serving as Editor-in-Chief of the IET Software, Associated Editor of the ACM Computing Survey, and Associate Editor of the Theory and Practice of Logic Programming in the area of Logic and Machine Learning.',
    link: "https://wp.doc.ic.ac.uk/arusso/",
  },
  {
    name: "Leonardo de Moura",
    image: IMAGE4,
    date: "26/July",
    title: "The Lean Theorem Prover: Design, Evolution, and Impact",
    abstract:
      "Lean is an open-source theorem prover and dependently-typed programming language that has seen rapid adoption across mathematics, software verification, and AI research. Its Mathlib library is among the largest formalized mathematical developments in existence. Lean's design emphasizes extensibility: the system is implemented in Lean itself, and a powerful meta-programming framework enables users to build custom automation and domain-specific tools. This talk traces Lean's history from its origins in 2013 through four major rewrites to the present day, discusses the design decisions that shaped the system and the lessons learned along the way, and concludes with current priorities at the Lean Focused Research Organization.",
    position: "AWS and Lean FRO",
    bio: "Leo is a Senior Principal Applied Scientist in the Automated Reasoning Group at AWS. In his spare time, he dedicates himself to serving as the Chief Architect of the Lean FRO, a non-profit organization that he proudly co-founded alongside Sebastian Ullrich. He is also honored to hold a position on the Board of Directors at the Lean FRO, where he actively contributes to its growth and development. Before joining AWS in 2023, he was a Senior Principal Researcher in the RiSE group at Microsoft Research, where he worked for 17 years starting in 2006. Prior to that, he worked as a Computer Scientist at SRI International. His research areas are automated reasoning, theorem proving, decision procedures, SAT and SMT. He is the main architect of several automated reasoning tools: Lean, Z3, Yices 1.0 and SAL. Leo’s work in automated reasoning has been acknowledged with a series of prestigious awards, including the CAV, Haifa, and Herbrand awards, as well as the Programming Languages Software Award by the ACM. Leo’s work has also been reported in the New York Times and many popular science magazines such as Wired, Quanta, and Nature News.",
    link: "https://leodemoura.github.io",
  },
  {
    name: "Işıl Dillig",
    image: IMAGE3,
    date: "28/July",
    title: "Trustworthy Neuro-Symbolic Programming with Informal Specifications",
    abstract:
      "Neuro-Symbolic Programming (NSP) treats learning-enabled systems as programs that compose symbolic control structure composed with learned neural primitives for perception and prediction. NSP offers a principled response to a central challenge for logic and formal methods in the age of machine learning: how to obtain trustworthy, compositional behavior when key components are statistical and uncertain. This talk gives an gives an overview of recent advances in NSP along three axes: (1) domain-specific  languages targeting real-world use cases, (2) learning techniques for fitting program structure based on informal specifications, and (3) approaches for ensuring correctness despite noisy neural components and incomplete specifications.",
    position: "University of Texas at Austin",
    bio: "Işıl Dillig is a Professor of Computer Science at the University of Texas at Austin, where she leads the UToPiA research group. Her research interests span formal methods and programming languages. She received her B.S., M.S., and Ph.D. in Computer Science from Stanford University. Her work has been recognized with the SIGPLAN Robin Milner Young Researcher Award, an Alfred P. Sloan Research Fellowship, and an NSF CAREER Award, as well as best paper awards at PLDI, POPL, OOPSLA, and ETAPS. She has served as Program Committee Chair for PLDI 2022 and CAV 2019, and she has received multiple teaching awards at UT Austin.",
    link: "https://www.cs.utexas.edu/~isil/",
  },
];
