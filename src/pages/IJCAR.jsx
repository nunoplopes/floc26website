import React, { useState } from "react";

// Reusable component to handle the hide/show state for individual abstracts
const InvitedTalkItem = ({ title, speaker, url, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {/* Clicking the title toggles the abstract */}
      <b
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover:text-indigo-800 hover:underline select-none block transition-colors duration-150"
      >
        {title}
      </b>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href={url}>{speaker}</a>
      {/* Conditional rendering: only renders if isOpen is true */}
      {isOpen && <div className="mt-4 pl-5 border-l-2 border-indigo-200 space-y-4">{children}</div>}
    </li>
  );
};

const IJCAR = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans scroll-smooth">
      {/* Main Header */}
      <header className="bg-indigo-700 text-white py-16 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight">IJCAR 2026</h1>
        <h2 className="text-2xl mt-2 font-medium">
          International Joint Conference on Automated Reasoning
        </h2>
        <h3 className="text-lg mt-1 font-light">Part of FLoC 2026</h3>
        <p className="mt-4 text-gray-200 text-lg">
          Dates: <strong>July 26-29, 2026</strong>
        </p>
      </header>

      {/* Sticky Body Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50 backdropl-blur bg-opacity-95">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ul className="flex items-center space-x-1 sm:space-x-8 overflow-x-auto py-4 text-sm sm:text-base font-medium text-gray-600 whitespace-nowrap scrollbar-none">
            <li>
              <a
                href="#invited-talks"
                className="hover:text-indigo-600 px-3 py-2 rounded-md transition-colors duration-150"
              >
                Invited Talks
              </a>
            </li>
            <li>
              <a
                href="#accepted-papers"
                className="hover:text-indigo-600 px-3 py-2 rounded-md transition-colors duration-150"
              >
                Accepted Papers
              </a>
            </li>
            <li>
              <a
                href="#important-dates"
                className="hover:text-indigo-600 px-3 py-2 rounded-md transition-colors duration-150"
              >
                Dates
              </a>
            </li>
            <li>
              <a
                href="#call-for-papers"
                className="hover:text-indigo-600 px-3 py-2 rounded-md transition-colors duration-150"
              >
                Call for Papers
              </a>
            </li>
            <li>
              <a
                href="#submission"
                className="hover:text-indigo-600 px-3 py-2 rounded-md transition-colors duration-150"
              >
                Submission
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content (With scroll margin adjustments so sticky nav doesn't block headers) */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16 [&>section]:scroll-mt-20">
        {/* Invited Talks Section */}
        <section
          id="invited-talks"
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4"
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Invited Talks
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <ul className="list-inside space-y-6 text-gray-700">
              {/* Talk 1 */}
              <InvitedTalkItem
                title='"A Type-Theoretic Framework for Meta-Programming: Lessons Learned from Writing Meta-Theoretic Proofs as Programs"'
                speaker="Brigitte Pientka"
                url="https://www.cs.mcgill.ca/~bpientka"
              >
                <p className="text-gray-500">
                  Meta-programming is the practice of writing programs that generate and analyze
                  code representations. It enables programmers to automate repetitive and
                  error-prone tasks and to exploit domain-specific knowledge when generating code.
                  As a result, meta-programming plays a central role across a wide range of
                  applications, from splicing in optimized code that exploits memory layout, to
                  generating representations of quantum circuits from classical programs, to writing
                  meta-theoretic proofs as programs that transform derivation trees.
                </p>
                <p className="text-gray-500">
                  A fundamental question across all forms of meta-programming is how to design
                  abstractions that support the correct generation, composition, and analysis of
                  code representations. This question is challenging for two main reasons. First, it
                  is important to distinguish between code as data (static structure) and the
                  programs that generate and manipulate it (dynamic behavior). Second, representing
                  code requires managing variables and scope, a task that is inherently error-prone
                  and often exposes low-level implementation details.
                </p>
                <p className="text-gray-500">
                  In this talk, I discuss how advances in logical frameworks have informed the
                  design of modern meta-programming languages. In particular, I revisit the
                  development of the Beluga framework where formal systems are specified in the
                  logical framework LF, using higher-order abstract syntax (HOAS) to represent
                  binding constructs. On top of the LF layer sits a functional language where
                  programmers write meta-theoretic proofs as transformations over HOAS
                  representations. A key insight enabling recursive analysis and manipulation at the
                  functional programming level is to treat HOAS objects together with their
                  accompanying contexts - so-called contextual objects.
                </p>
                <p className="text-gray-500">
                  Over the past decade, this separation between static syntactic representations and
                  dynamic program behaviour together with the use of contextual objects, has guided
                  the development of a range of meta-programming systems. In particular, these ideas
                  have informed the design of polymorphic and dependently typed meta-programming
                  languages, and more recently, have been extended to support the generation,
                  analysis, and evaluation of concurrent processes within a functional programming
                  setting. These developments illustrate how ideas originating in automated
                  reasoning - particularly techniques for representing and manipulating contextual
                  objects - are having a broad impact beyond their original domain.
                </p>
              </InvitedTalkItem>

              {/* Talk 2 */}
              <InvitedTalkItem
                title='"Polynomial-time Deduction with Orthologic"'
                speaker="Viktor Kunčak"
                url="https://lara.epfl.ch/~kuncak"
              >
                <p className="text-gray-500">
                  Orthologic is a non-classical logic that supports arbitrary conjunction,
                  disjunction and negation operators and is interpreted over ortholattices. If a
                  formula is provable in orthologic, it is also provable in classical logic. I
                  present a complete proof system (formalized in Rocq) and an efficient
                  polynomial-time algorithm for provability in orthologic. We evaluated and deployed
                  orthologic on boolean circuits, program verifiers, proof assistant kernels, and
                  type systems. Joint work with Simon Guilloud.
                </p>
              </InvitedTalkItem>
            </ul>
          </div>
        </section>

        {/* Accepted Papers Section */}
        <section
          id="accepted-papers"
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6 border-b border-indigo-200 pb-2">
            Accepted Papers
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <ul className="list-inside space-y-2 text-gray-700">
              <li>
                <b>"A Unified Formalization of Context-Free Grammar Theory"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tobias Nipkow , Fabian Lehr , Moritz Roos ,
                Akihisa Yamada
              </li>
              <li>
                <b>"Unification of Deterministic Higher-Order Patterns"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Johannes Niederhauser , Aart Middeldorp
              </li>
              <li>
                <b>"Finite Model Finding in First-order Modal Logics"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Happy Khairunnisa Sariyanto , Alexander Steen ,
                Geoff Sutcliffe
              </li>
              <li>
                <b>"Towards Term-based Verification of Diagrammatic Equivalence"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Julie Cailler , Noé Delorme , Simon Perdrix ,
                Sophie Tourret
              </li>
              <li>
                <b>"Tao’s Equational Proof Challenge Accepted"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Lydia Kondylidou , Jasmin Blanchette , Marijn
                Heule
              </li>
              <li>
                <b>"Pitts and Intuitionistic Multi-Succedent: Uniform Interpolation for KM"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hugo Férée , Ian Shillito
              </li>
              <li>
                <b>
                  "The termination of Nielsen transformations applied to word equations with length
                  constraints"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Benjamin Przybocki , Clark Barrett
              </li>
              <li>
                <b>"An Applicative Multiset Path Order"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nao Hirokawa , Teppei Saito , Teppei Tanaka ,
                Wataru Yachi
              </li>
              <li>
                <b>"Free Set Theory - Cut Elimination and Consistency"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Andrzej Indrzejczak
              </li>
              <li>
                <b>"Checking Regular Expressions in cvc5 Proofs"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Ofec Israel , Yoni Zohar , Hitarth Singh , Bruno
                Dutertre , Andrew Reynolds , Clark Barrett , Cesare Tinelli
              </li>
              <li>
                <b>
                  "Completeness of Synthesis under Realizability Assumptions using Superposition"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Márton Hajdu , Petra Hozzová , Laura Kovács , Eva
                Wagner
              </li>
              <li>
                <b>"Uniform interpolation with constructive diamond"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Iris van der Giessen , Ian Shillito
              </li>
              <li>
                <b>"Formally Verified Graph Generation with SAT modulo Symmetries and Lean"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Markus Kirchweger , Pablo Manrique , Stefan
                Szeider
              </li>
              <li>
                <b>"Accelerating Loops with Arrays"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Florian Frohn , Jürgen Giesl
              </li>
              <li>
                <b>"A General Approach for SMT Proof Skeletons"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Joseph E. Reeves , Haniel Barbosa , Andrew
                Reynolds , Marijn J. H. Heule
              </li>
              <li>
                <b>"The ARI Infrastructure for Automated Confluence Analysis"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nao Hirokawa , Aart Middeldorp , Teppei Saito ,
                René Thiemann
              </li>
              <li>
                <b>"Generating Theorems by Generating Proof Structures"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Christoph Wernhard
              </li>
              <li>
                <b>
                  "Avoiding Big Integers: Parallel Multimodular Algebraic Verification of Arithmetic
                  Circuits"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Clemens Hofstadler , Daniela Kaufmann , Chen Chen
              </li>
              <li>
                <b>"A Two-Watched Literal Scheme for First-Order Logic"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Yasmine Briefs , Martin Bromberger , Tobias Gehl
                , Lorenz Leutgeb , Simon Schwarz , Christoph Weidenbach
              </li>
              <li>
                <b>"A Complete Proof System for HyperLTL"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Naijun Zhan , Wen Tang , Dimitar Guelev
              </li>
              <li>
                <b>"Hardware Model Checking Certification with Certifaiger and Cerbtora"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nils Froleyks , Emily Yu
              </li>
              <li>
                <b>"Implementing Fuzzy OSF Logic Unification and Normalization"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gian Carlo Milanese , Gabriella Pasi
              </li>
              <li>
                <b>"A Deductive Refinement-Calculus for Differential-Algebraic Programs"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Jonathan Hellwig , Long Qian , André Platzer
              </li>
              <li>
                <b>"SMT-Based Deontic Reasoning for Aqvist Logics"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Christian Köll , Agata Ciabattoni , Dmitry
                Rozplokhas
              </li>
              <li>
                <b>
                  "Beyond Eager Encodings: A Theory-Agnostic Approach to Theory-Lemma Enumeration in
                  SMT"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Emanuele Civini , Gabriele Masina , Giuseppe
                Spallitta , Roberto Sebastiani
              </li>
              <li>
                <b>"A Superposition Calculus for Separation Logic"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tanguy Bozec , Nicolas Peltier
              </li>
              <li>
                <b>"Twitch: Learning Abstractions for Equational Theorem Proving"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Guy Axelrod , Moa Johansson , Nicholas Smallbone
              </li>
              <li>
                <b>"Verification of Configurable SRA Systems"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Alessandro Cimatti , Alberto Griggio , Christian
                Lidström , Gianluca Redondi , Dylan Trenti
              </li>
              <li>
                <b>"Bringing closure to theory combination properties"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Guilherme Vicentin de Toledo , Benjamin Przybocki
                , Yoni Zohar
              </li>
              <li>
                <b>
                  "Pgeon: Generating Tableau-Based Provers from Declarative Specifications of
                  Logical Calculi"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Romain Sidhoum , Simon Robillard , David Delahaye
              </li>
              <li>
                <b>"Proof Nets for PiL"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Matteo Acclavio , Giulia Manara
              </li>
              <li>
                <b>
                  "Disproving (Positive) Almost-Sure Termination of Probabilistic Term Rewriting via
                  Random Walks"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Jan-Christoph Kassing , Henri Nagel , Alexander
                Schlecht , Jürgen Giesl
              </li>
              <li>
                <b>
                  "Refactoring-as-Propositions: Proved Refactoring of Hybrid Systems via Proved
                  Refinements"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Enguerrand Prebet , André Platzer
              </li>
              <li>
                <b>"Complete Robust Hybrid Systems Reachability"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Noah Abou El Wafa , André Platzer
              </li>
              <li>
                <b>"Automating proof search when equality is a logical connective"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Kaustuv Chaudhuri , Arunava Gantait , Dale Miller
              </li>
              <li>
                <b>"Ordered Adjoint Logic"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sophia Roshal , Frank Pfenning
              </li>
              <li>
                <b>"grind: An SMT-Inspired Tactic for Lean 4"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Kim Morrison , Leonardo de Moura
              </li>
              <li>
                <b>"Saving Craig in the Fluted Fragment"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hongkai Yin
              </li>
              <li>
                <b>"Complexity and Expressivity of the Uniform Fluted Fragment"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hongkai Yin
              </li>
              <li>
                <b>"Semantics for Dependently-Typed Higher-Order Logic"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Florian Rabe
              </li>
              <li>
                <b>"Automatically Translating Proof Systems for SMT Solvers to the λΠ-calculus"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Ciarán Dunne , Guillaume Burel
              </li>
              <li>
                <b>"Complexity of reasoning in Kleene algebra with sum-of-letters hypotheses"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stepan Kuznetsov
              </li>
              <li>
                <b>"Learning Computation Tree Logic with Neural Networks"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Benjamin Bordais , Daniel Neider ,
		Mustafa Yalciner
              </li>
              <li>
                <b>"On Constructing Most General Solutions for Parametric Constraints"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Viorica Sofronie-Stokkermans
              </li>
              <li>
                <b>
                  "Growing HOLMS: A Verified Automated Prover for Grzegorczyk Logic in HOL Light"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Antonella Bilotta , Marco Maggesi , Cosimo Perini
                Brogi
              </li>
              <li>
                <b>"Ethos: A Fast Proof Checker for the Eunoia Logical Framework"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Andrew Reynolds , Hans-Jörg Schurr , Mallku
                Soldevila , Haniel Barbosa , Cesare Tinelli , Clark Barrett
              </li>
              <li>
                <b>
                  "Program Synthesis for Non-Linear Real Arithmetic: Beyond Realizable
                  Specifications"
                </b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; S. Akshay , Supratik Chakraborty , Aniruddha
                Joshi , R. Govind
              </li>
              <li>
                <b>"Automatic Abstraction Refinement for Hyperproperties Verification"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Malak Marrid , Shachar Itzhaky , Sharon Shoham ,
                Yakir Vizel
              </li>
              <li>
                <b>"Toward Fast Automatic Verification of Textbook Proof Steps"</b>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Adam Dingle
              </li>
            </ul>
          </div>
        </section>

        {/* Dates Section */}
        <section
          id="important-dates"
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6 border-b border-indigo-200 pb-2">
            Dates
          </h2>
          <ul className="list-inside space-y-2 text-gray-700">
            <li>
              Abstract submission: <strong>February 6, 2026</strong>
            </li>
            <li>
              Paper submission: &nbsp;<strong>February&nbsp;15,&nbsp;2026</strong>
            </li>
            <li>
              Rebuttal: <strong>March 31 - April 3, 2026</strong> (AoE)
            </li>
            <li>
              Notification: <strong>April 14, 2026</strong>
            </li>
            <li>
              Camera-ready: <strong>May 23, 2026</strong>
            </li>
          </ul>
        </section>

        {/* Call for Papers Section */}
        <section
          id="call-for-papers"
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4"
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
            Call for Papers
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The{" "}
              <a href="https://ijcar.org" className="text-indigo-600 hover:underline">
                International Joint Conference on Automated Reasoning (IJCAR)
              </a>{" "}
              is the premier international venue on all aspects of automated reasoning. It is held
              biannually as a merger of leading events in automated reasoning:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a href="https://cadeinc.org" className="text-indigo-600 hover:underline">
                  CADE – Conference on Automated Deduction
                </a>
              </li>
              <li>
                <a href="https://frocos.cs.uiowa.edu" className="text-indigo-600 hover:underline">
                  FroCoS – Symposium on Frontiers of Combining Systems
                </a>
              </li>
              <li>
                <a
                  href="https://tableaux-conf.github.io/web"
                  className="text-indigo-600 hover:underline"
                >
                  TABLEAUX – Conference on Analytic Tableaux and Related Methods Topics
                </a>
              </li>
            </ul>
            <p>
              IJCAR 2026 will be held in Lisbon, Portugal, as part of the Federate Logic Conference
              FLoC from July 26 to July 29.
            </p>
            <p>
              IJCAR 2026 invites submissions related to all aspects of automated or interactive
              logical reasoning, including foundations, implementations, and applications. Original
              research papers and descriptions/evaluations of working automated deduction systems or
              proof assistant systems are solicited.
            </p>
            <h3 className="text-2xl font-semibold text-indigo-700">IJCAR topics</h3>
            <p>
              Logics of interest include: propositional, first-order, classical, equational,
              higher-order, non-classical, constructive, modal, temporal, many-valued,
              substructural, description, type theory.
            </p>
            <p>
              Methods of interest include: tableaux, sequent calculi, resolution, model-elimination,
              inverse method, paramodulation, term rewriting, induction, unification, constraint
              solving, decision procedures, model generation, model checking, semantic guidance,
              interactive theorem proving, logical frameworks, AI-related methods for deductive
              systems, proof presentation, automated theorem proving, combination of decision or
              proof procedures, SAT and SMT solving, machine learning and theorem proving,
              integration of automated provers/proof assistants in automated test generators,
              program synthesisers, verified compilers, intelligent systems, agent based systems,
              knowledge processing systems, formal methods tools and other symbolic tools, etc.
            </p>
            <p>
              Applications of interest include: verification, formal methods, program analysis and
              synthesis, computer mathematics, declarative programming, deductive databases,
              knowledge representation and processing/engineering, education, formalization of
              mathemathesis, trusted AI, etc.
            </p>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Dates</h3>
            <p className="text-.5xl">All times are &ldquo;Anywhere-on-Earth&rdquo; (AoE).</p>
            <ul className="list-inside space-y-2 text-gray-700">
              <li>
                Abstract submission: <strong>February 6, 2026</strong>
              </li>
              <li>
                Paper submission: &nbsp;<strong>February&nbsp;15,&nbsp;2026</strong>
              </li>
              <li>
                Rebuttal: <strong>March 31 - April 3, 2026</strong>
              </li>
              <li>
                Notification: <strong>April 14, 2026</strong>
              </li>
              <li>
                Camera-ready: <strong>May 23, 2026</strong>
              </li>
              <li>
                Conference: <strong>July 26-29, 2026</strong>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Co-located Events</h3>
            <p>
              IJCAR 2026 will have numerous co-located events including CASC. More information to
              follow.
            </p>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Submission Guidelines</h3>
            <p>IJCAR 2026 invites submissions related to the topics of interest mentioned above.</p>
            <p>
              All papers must be original and not simultaneously submitted to another peer-reviewed
              journal or conference. The following paper categories are welcome:
            </p>
            <p>
              <b>Regular papers</b> describing solid new research results which can be up to{" "}
              <b>15 pages</b> in LNCS style, including figures but excluding references and
              appendices. Where applicable, regular papers are supported by experimental validation.
              Submissions reporting on case studies in an industrial context are strongly invited as
              regular papers.
            </p>
            <p>
              <b>Short papers</b> describing implemented systems, user experiences, case studies and
              domain models, etc.&nbsp;can be up to <b>7 pages</b> in LNCS style, excluding
              references and appendices.
            </p>
            <p>
              The reviewing process is <b>single blind</b> and thus all submissions should list
              authors and their affiliations. Each submission will be judged on relevance,
              originality, significance, correctness, and readability. Proofs of theoretical results
              that do not fit in the page limit, executables of systems, and input data of
              experiments should be made available, e.g., via a reference to a website or in an
              appendix of the paper.
            </p>
            <p>
              The review process will include a <b>rebuttal</b> period where authors will have the
              option to respond to reviewer comments. The PC chairs may solicit further reviews
              after the rebuttal period.
            </p>
            <p>
              All submissions must be formatted using the Springer LNCS styles and submitted in PDF
              via HotCRP:
            </p>
            <p>
              <a
                href="https://submissions.floc26.org/ijcar"
                className="text-indigo-600 hover:underline"
              >
                https://submissions.floc26.org/ijcar
              </a>
            </p>
            <p>Formatting instructions and the LNCS style files can be obtained here:</p>
            <p>
              <a
                href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                className="text-indigo-600 hover:underline"
              >
                https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines
              </a>
            </p>
            <p>
              We adopt the Springer policy on the use of generative AI for preparing IJCAI 2026
              submissions, please see:
            </p>
            <p>
              <a
                href="https://www.springer.com/in/editorial-policies/artificial-intelligence--ai-/25428500"
                className="text-indigo-600 hover:underline"
              >
                https://www.springer.com/in/editorial-policies/artificial-intelligence--ai-/25428500
              </a>
            </p>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Proceedings</h3>
            <p>
              The IJCAR 2026 proceedings will be published in the Springer series{" "}
              <a
                href="https://link.springer.com/series/1244"
                className="text-indigo-600 hover:underline"
              >
                Lecture Notes in Artificial Intelligence
              </a>{" "}
              (
              <a
                href="https://link.springer.com/series/1244"
                className="text-indigo-600 hover:underline"
              >
                LNAI
              </a>{" "}
              /{" "}
              <a
                href="https://link.springer.com/series/558"
                className="text-indigo-600 hover:underline"
              >
                LNCS
              </a>
              ) as Gold Open Access, and is planned to be available online during the conference. At
              least one person must register for IJCAR for each accepted paper. Authors of accepted
              papers are required to ensure that at least one of them will participate in the
              conference and present the work.
            </p>
            <p>
              The papers delivered to us will be processed according to the regular workﬂow, meaning
              Springer will generate both full-text HTML and PDF versions of the papers, to be made
              available in SpringerLink, and the full book will be available in PDF and ePub
              formats. The papers will be published under the{" "}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                className="text-indigo-600 hover:underline"
              >
                CC-BY-4.0-license
              </a>
              .
            </p>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Awards</h3>
            <h4 className="text-1.5xl font-semibold text-indigo-700 pb-0">Herbrand Award</h4>
            <p>
              The{" "}
              <a
                href="https://cadeinc.org/Herbrand-Award"
                className="text-indigo-600 hover:underline"
              >
                Herbrand Award 2026
              </a>{" "}
              for distinguished contributions to automated reasoning is presented.
            </p>
            <h4 className="text-1.5xl font-semibold text-indigo-700 pb-0">Bill McCune Award</h4>
            <p>
              The{" "}
              <a
                href="https://cadeinc.org/McCune-Award"
                className="text-indigo-600 hover:underline"
              >
                Bill McCune Award 2026
              </a>{" "}
              is presented for a PhD thesis defended in 2025.
            </p>
            <h4 className="text-1.5xl font-semibold text-indigo-700 pb-0">Best Paper Award</h4>
            <p>
              IJCAR will recognize the most outstanding submissions with a best paper award and a
              best student paper award at the conference.
            </p>
            <h4 className="text-1.5xl font-semibold text-indigo-700 pb-0">Student Travel Award</h4>
            <p>
              Woody Bledsoe Travel Awards will be available to support selected students in
              attending the conference.
            </p>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Program Chairs</h3>
            <ul className="list-inside space-y-2 text-gray-700">
              <li>
                <a
                  href="https://cca.informatik.uni-freiburg.de/biere"
                  className="text-indigo-600 hover:underline"
                >
                  Armin Biere
                </a>
                , University of Freiburg
              </li>
              <li>
                <a
                  href="https://home.uni-leipzig.de/clu"
                  className="text-indigo-600 hover:underline"
                >
                  Carsten Lutz
                </a>
                , Universität Leipzig
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/saranegri/home"
                  className="text-indigo-600 hover:underline"
                >
                  Sara Negri
                </a>
                , Università degli Studi di Genova
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Program Committee</h3>
            <ul className="list-inside space-y-2 text-gray-700">
              <li>
                <a
                  href="https://informatics.tuwien.ac.at/people/agata-ciabattoni"
                  className="text-indigo-600 hover:underline"
                >
                  Agata Ciabattoni
                </a>
                , TU Wien
              </li>
              <li>
                <a
                  href="https://symbolaris.com/index.html"
                  className="text-indigo-600 hover:underline"
                >
                  André Platzer
                </a>
                , Karlsruhe Institute of Technology
              </li>
              <li>
                <a
                  href="https://sheffield.ac.uk/cs/people/academic/andrei-popescu"
                  className="text-indigo-600 hover:underline"
                >
                  Andrei Popescu
                </a>
                , University of Sheffield
              </li>
              <li>
                <a
                  href="https://homepage.cs.uiowa.edu/~ajreynol"
                  className="text-indigo-600 hover:underline"
                >
                  Andrew Reynolds
                </a>
                , University of Iowa
              </li>
              <li>
                <a
                  href="https://www.filozofia.uni.lodz.pl/andrzej-indrzejczak"
                  className="text-indigo-600 hover:underline"
                >
                  Andrzej Indrzejczak
                </a>
                , University of Lodz
              </li>
              <li>
                <a
                  href="https://cca.informatik.uni-freiburg.de/biere"
                  className="text-indigo-600 hover:underline"
                >
                  Armin Biere
                </a>
                , University of Freiburg
              </li>
              <li>
                <a
                  href="https://home.uni-leipzig.de/clu"
                  className="text-indigo-600 hover:underline"
                >
                  Carsten Lutz
                </a>
                , Leipzig University
              </li>
              <li>
                <a
                  href="https://homepage.cs.uiowa.edu/~tinelli"
                  className="text-indigo-600 hover:underline"
                >
                  Cesare Tinelli
                </a>
                , University of Iowa
              </li>
              <li>
                <a
                  href="https://www.mpi-inf.mpg.de/departments/automation-of-logic/people/christoph-weidenbach"
                  className="text-indigo-600 hover:underline"
                >
                  Christoph Weidenbach
                </a>
                , MPI for Informatics
              </li>
              <li>
                <a
                  href="https://members.loria.fr/CRingeissen"
                  className="text-indigo-600 hover:underline"
                >
                  Christophe Ringeissen
                </a>
                , INRIA Loria
              </li>
              <li>
                <a
                  href="https://engineering.stanford.edu/people/clark-barrett"
                  className="text-indigo-600 hover:underline"
                >
                  Clark Barrett
                </a>
                , Stanford University
              </li>
              <li>
                <a href="https://danielakaufmann.at" className="text-indigo-600 hover:underline">
                  Daniela Kaufmann
                </a>
                , TU Wien
              </li>
              <li>
                <a
                  href="https://members.loria.fr/DGalmiche/files"
                  className="text-indigo-600 hover:underline"
                >
                  Didier Galmiche
                </a>
                , University of Lorraine - CNRS - LORIA
              </li>
              <li>
                <a
                  href="https://profiles.ucl.ac.uk/87847-elaine-pimentel"
                  className="text-indigo-600 hover:underline"
                >
                  Elaine Pimentel
                </a>
                , UCL
              </li>
              <li>
                <a
                  href="https://www.irit.fr/~Emiliano.Lorini"
                  className="text-indigo-600 hover:underline"
                >
                  Emiliano Lorini
                </a>
                , CNRS IRIT
              </li>
              <li>
                <a
                  href="https://www.dhss.phil.fau.de/person/prof-dr-florian-rabe"
                  className="text-indigo-600 hover:underline"
                >
                  Florian Rabe
                </a>
                , FAU Erlangen-Nürnberg
              </li>
              <li>
                <a
                  href="https://www.liverpool.ac.uk/people/frank-wolter"
                  className="text-indigo-600 hover:underline"
                >
                  Frank Wolter
                </a>
                , University of Liverpool
              </li>
              <li>
                <a href="https://jakobnordstrom.se" className="text-indigo-600 hover:underline">
                  Jakob Nordström
                </a>
                , University of Copenhagen and Lund University
              </li>
              <li>
                <a
                  href="https://www.tcs.ifi.lmu.de/staff/jasmin-blanchette"
                  className="text-indigo-600 hover:underline"
                >
                  Jasmin Blanchette
                </a>
                , Ludwig-Maximilians-Universität München
              </li>
              <li>
                <a
                  href="https://www.tu-dortmund.de/universitaet/neuberufene-professorinnen/prof-jean-christoph-jung"
                  className="text-indigo-600 hover:underline"
                >
                  Jean Christoph Jung
                </a>
                , TU Dortmund University
              </li>
              <li>
                <a
                  href="https://people.ciirc.cvut.cz/~urbanjo3"
                  className="text-indigo-600 hover:underline"
                >
                  Josef Urban
                </a>
                , Czech Technical University in Prague
              </li>
              <li>
                <a
                  href="https://verify.rwth-aachen.de/giesl"
                  className="text-indigo-600 hover:underline"
                >
                  Jürgen Giesl
                </a>
                , RWTH Aachen University
              </li>
              <li>
                <a href="https://korovin.gitlab.io" className="text-indigo-600 hover:underline">
                  Konstantin Korovin
                </a>
                , University of Manchester
              </li>
              <li>
                <a
                  href="https://www.cs.toronto.edu/~meel"
                  className="text-indigo-600 hover:underline"
                >
                  Kuldeep S. Meel
                </a>
                , Georgia Institute of Technology
              </li>
              <li>
                <a href="http://lkovacs.com" className="text-indigo-600 hover:underline">
                  Laura Kovacs
                </a>
                , TU Wien
              </li>
              <li>
                <a href="https://www.lironcohenlab.com" className="text-indigo-600 hover:underline">
                  Liron Cohen
                </a>
                , Ben-Gurion University
              </li>
              <li>
                <a
                  href="https://www8.cs.fau.de/people/schroeder"
                  className="text-indigo-600 hover:underline"
                >
                  Lutz Schröder
                </a>
                , Friedrich-Alexander-Universität Erlangen-Nürnberg
              </li>
              <li>
                <a href="https://mariapaola.github.io" className="text-indigo-600 hover:underline">
                  Maria Paola Bonacina
                </a>
                , Università degli Studi di Verona
              </li>
              <li>
                <a
                  href="https://www.mariannagirlando.com/Girlando.html"
                  className="text-indigo-600 hover:underline"
                >
                  Marianna Girlando
                </a>
                , University of Amsterdam
              </li>
              <li>
                <a
                  href="https://www.cs.cmu.edu/~mheule"
                  className="text-indigo-600 hover:underline"
                >
                  Marijn Heule
                </a>
                , Carnegie Mellon University
              </li>
              <li>
                <a
                  href="https://carrick.tifm.cs.uni-kassel.de/~mlange/index.html"
                  className="text-indigo-600 hover:underline"
                >
                  Martin Lange
                </a>
                , University of Kassel
              </li>
              <li>
                <a
                  href="https://people.ciirc.cvut.cz/~sudamar2"
                  className="text-indigo-600 hover:underline"
                >
                  Martin Suda
                </a>
                , Czech Technical University of Prague
              </li>
              <li>
                <a
                  href="https://www.jku.at/institut-fuer-symbolic-artificial-intelligence/team/martina-seidl"
                  className="text-indigo-600 hover:underline"
                >
                  Martina Seidl
                </a>
                , Johannes Kepler University Linz
              </li>
              <li>
                <a href="https://m-fleury.github.io" className="text-indigo-600 hover:underline">
                  Mathias Fleury
                </a>
                , University of Freiburg
              </li>
              <li>
                <a
                  href="https://www.cse.chalmers.se/~jomoa"
                  className="text-indigo-600 hover:underline"
                >
                  Moa Johansson
                </a>
                , Chalmers University of Technology
              </li>
              <li>
                <a
                  href="https://www.microsoft.com/en-us/research/people/nbjorner"
                  className="text-indigo-600 hover:underline"
                >
                  Nikolaj Bjørner
                </a>
                , Microsoft Research
              </li>
              <li>
                <a
                  href="https://lig-membres.imag.fr/peltier"
                  className="text-indigo-600 hover:underline"
                >
                  Nicolas Peltier
                </a>
                , CNRS LIG
              </li>
              <li>
                <a
                  href="https://people.montefiore.uliege.be/pfontain"
                  className="text-indigo-600 hover:underline"
                >
                  Pascal Fontaine
                </a>
                , University of Liège
              </li>
              <li>
                <a
                  href="https://research.vu.nl/en/persons/patrick-koopmann"
                  className="text-indigo-600 hover:underline"
                >
                  Patrick Koopmann
                </a>
                , Vrije Universiteit Amsterdam
              </li>
              <li>
                <a
                  href="https://www.cs.man.ac.uk/~schmidt"
                  className="text-indigo-600 hover:underline"
                >
                  Renate Schmidt
                </a>
                , University of Manchester
              </li>
              <li>
                <a
                  href="http://cl-informatik.uibk.ac.at/users/thiemann"
                  className="text-indigo-600 hover:underline"
                >
                  René Thiemann
                </a>
                , University of Innsbruck
              </li>
              <li>
                <a href="https://disi.unitn.it/rseba" className="text-indigo-600 hover:underline">
                  Roberto Sebastiani
                </a>
                , University of Trento
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/saranegri/home"
                  className="text-indigo-600 hover:underline"
                >
                  Sara Negri
                </a>
                , University of Genoa
              </li>
              <li>
                <a
                  href="http://cl-informatik.uibk.ac.at/users/swinkler/bolzano"
                  className="text-indigo-600 hover:underline"
                >
                  Sarah Winkler
                </a>
                , Free University of Bozen-Bolzano
              </li>
              <li>
                <a
                  href="https://homes.di.unimi.it/ghilardi"
                  className="text-indigo-600 hover:underline"
                >
                  Silvio Ghilardi
                </a>
                , Università degli Studi di Milano
              </li>
              <li>
                <a
                  href="https://members.loria.fr/sophie.tourret"
                  className="text-indigo-600 hover:underline"
                >
                  Sophie Tourret
                </a>
                , INRIA Loria
              </li>
              <li>
                <a
                  href="https://www.cril.univ-artois.fr/~mengel"
                  className="text-indigo-600 hover:underline"
                >
                  Stefan Mengel
                </a>
                , CRIL-CNRS/Université d’Artois
              </li>
              <li>
                <a
                  href="https://lipn.univ-paris13.fr/~guerrini/home"
                  className="text-indigo-600 hover:underline"
                >
                  Stefano Guerrini
                </a>
                , Université Paris 13
              </li>
              <li>
                <a
                  href="https://members.loria.fr/Stephan.Merz"
                  className="text-indigo-600 hover:underline"
                >
                  Stephan Merz
                </a>
                , INRIA Loria
              </li>
              <li>
                <a
                  href="https://wwwlehre.dhbw-stuttgart.de/~sschulz/DHBW_Stephan_Schulz/Stephan_Schulz.html"
                  className="text-indigo-600 hover:underline"
                >
                  Stephan Schulz
                </a>
                , DHBW Stuttgart
              </li>
              <li>
                <a
                  href="https://ai.dmi.unibas.ch/people/schindler"
                  className="text-indigo-600 hover:underline"
                >
                  Tanja Schindler
                </a>
                , University of Basel
              </li>
              <li>
                <a
                  href="https://iccl.inf.tu-dresden.de/web/Tim_Lyon/en"
                  className="text-indigo-600 hover:underline"
                >
                  Tim Lyon
                </a>
                , TU Dresden
              </li>
              <li>
                <a
                  href="https://www21.in.tum.de/~nipkow"
                  className="text-indigo-600 hover:underline"
                >
                  Tobias Nipkow
                </a>
                , Technical University Munich
              </li>
              <li>
                <a
                  href="https://www.mpi-inf.mpg.de/departments/automation-of-logic/people/uwe-waldmann"
                  className="text-indigo-600 hover:underline"
                >
                  Uwe Waldmann
                </a>
                , MPI for Informatics
              </li>
              <li>
                <a
                  href="https://www.uni-koblenz.de/de/informatik/ifi/sofronie-stokkermans/team/viorica-sofronie-stokkermans"
                  className="text-indigo-600 hover:underline"
                >
                  Viorica Sofronie-Stokkermans
                </a>
                , University of Koblenz
              </li>
              <li>
                <a
                  href="https://u.cs.biu.ac.il/~zoharyo1"
                  className="text-indigo-600 hover:underline"
                >
                  Yoni Zohar
                </a>
                , Bar-Ilan University
              </li>
            </ul>
          </div>
        </section>

        <section
          id="submission"
          className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200"
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Paper Submission</h2>
          <a
            href="https://submissions.floc26.org/ijcar/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium transition transform hover:scale-105"
          >
            Submit via HotCrp
          </a>
        </section>
      </main>
    </div>
  );
};

export default IJCAR;
