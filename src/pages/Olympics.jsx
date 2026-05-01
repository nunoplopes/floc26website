import { useState } from "react";
import { Link } from "react-router";

const Olympics = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-indigo-700 text-white py-16 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight">
          FLoC Olympics 2026
        </h1>
        <h3 className="text-lg mt-1 font-light">Challenges and Solving Competitions</h3>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <section className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200">
          <p align={"justify"}>
            At the core of the practical success story of automated reasoning and constraint solving
            are solvers, sophisticated and complex pieces of software that enable tackling
            computationally hard problems at scale. Solver competitions and evaluations, typically
            organized annually across different subareas of automated reasoning and constraint
            solving, play a significant role in this practical success. Solver competitions enable
            research communities to showcase the current state of the art, document practical
            advancements, identify challenges across research and industry, and push solver
            developers to aim not only for reliable, robust tools for a wide range of applications,
            but also to improve their tools beyond current limitations. Importantly, competitions
            are often considered the gold standard for empirical evaluation and have a significant
            impact on the research community and its empirical methods. Since competitions are a
            driving force for new advancements in the field, decisions about competition
            organization have a significant impact, as they often establish standards for formats
            and experimental evaluations. Organizing a competition that yields meaningful results
            for both developers and users of the tools is challenging and requires a tremendous
            amount of work. As such, competitions deserve proper recognition and celebration
            alongside other types of research advances in the realm of the Federated Logic
            Conferences.
            <br />
            <br />
            The FLoC Olympic Games, spanning back to 2014, serve to provide the recognition and
            celebratory platform for the various competitions and related evaluation events
            organized by the various research communities represented in the FLoC program every four
            years. FLoC Olympic Games 2026 continue this tradition by highlighting over a dozen
            competitions taking place during the two weeks of FLoC 2026. This includes celebrating
            the competitions and significant advances made by solver developers through special FLoC
            Olympic Games 2026 award ceremonies during both weeks of FLoC 2026, in conjunction with
            the main banquets. In addition to promoting the various established competitive events
            in the general area of FLoC, FLoC Olympic Games 2026 also includes a special FLoC-wide
            Modeling Competition and highlights workshops focusing on practical evaluations of
            automated reasoning and constraint reasoning systems.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p></p>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Result Presentations</h3>
            Detailed results each event will be presented individually at the affiliated conferences
            or workshops; please consult the FLoC program for details on the competition
            presentations as they are announced.
            {/*We will add dates here as soon as they are confirmed.*/}
            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>Short name</th>*/}
            {/*        <th>Community</th>*/}
            {/*        <th>Full name</th>*/}
            {/*        <th>Organizers</th>*/}
            {/*        <th>Description</th>*/}
            {/*        <th>Webpage</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            <br />
            <br />
            <br />
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">
              Special Award Ceremonies
            </h3>
            <p>
              FLoC'26 features two joint award ceremonies during the Banquets. Renowned scientists
              will present the victors of each award and provide a FLoC Olympic Games award
              certificate.
            </p>
            <ol>
              <li>
                <strong>Week 1 Banquet (22/07) [click on items for more details]</strong>
                <br />
                <details>
                  <summary id="det">
                    FLoC Modeling Competition
                    {/*<a href="https://lpcp-contest.github.io">*/}
                    {/*  FLoC Modeling Competition*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>FLoC Modeling Competition</b>
                  <br />
                  <i>Organizers: Mario Alviano, Arnaud Lequen, Johannes Fichte</i>
                  <br />
                  <i>Affiliated Event: FLoC / ICLP</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://lpcp-contest.github.io"
                      className="text-indigo-600 hover:underline"
                    >
                      https://lpcp-contest.github.io
                    </a>
                  </i>
                  <br />
                  The LP/CP Programming Contest is a long-standing tradition of the International
                  Conference on Logic Programming (ICLP), evolving from the original Prolog
                  programming contests of the 1990s.
                  This year, the competition will feature a
                  <b> FLoC-wide Modeling Competition</b>.
                  It challenges teams to solve complex
                  combinatorial and logic problems using a "Model and Solve" approach. Unlike
                  traditional competitive programming, this contest emphasizes declarative
                  programming, allowing participants to leverage Prolog, Answer Set Programming
                  (ASP), Constraint Programming (CP) and SAT/MaxSAT/SMT systems, and other systems. While modern
                  editions permit the integration of imperative languages, the core of every
                  solution must remain predominantly declarative. It serves as a high-energy
                  showcase for the versatility and efficiency of logic-based paradigms in tackling
                  real-world puzzles.
                  <br />
                  <hr />
                </details>
                <details>
                  <summary>
                    {/*<a href="https://www.minizinc.org/challenge/2026/">MiniZinc Challenge 2026</a>*/}
                    MiniZinc Challenge 2026
                  </summary>
                  <hr />
                  <b>MiniZinc Challenge 2026</b>
                  <br />
                  <i>Organizers: Peter J. Stuckey, Guido Tack, Jip J. Dekker, Jason Nguyen</i>
                  <br />
                  <i>Affiliated Event: CP</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://www.minizinc.org/challenge/2026/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://www.minizinc.org/challenge/2026/
                    </a>
                  </i>
                  <br />
                  The MiniZinc Challenge is an annual solver competition in the Constraint
                  Programming (CP) community held before the International Conference on Principles
                  and Practice of Constraint Programming. The aim of the challenge is to compare
                  various constraint solving technologies on the same problem sets. The focus is on
                  finite domain propagation solvers. An auxiliary aim is to build up a library of
                  interesting problem models, which can be used to compare solvers and solving
                  technologies.
                  <hr />
                </details>
                <details>
                  <summary>
                    MCC 2026: Model Counting Competition 2026
                    {/*<a href="https://mccompetition.org/2026/mc_description">*/}
                    {/*  MCC 2026: Model Counting Competition 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>Model Counting Competition 2026</b>
                  <br />
                  <i>Organizers: Johannes Fichte, Markus Hecher, Arijit Shaw</i>
                  <br />
                  <i>Affiliated Event: SAT</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://mccompetition.org/2026/mc_description"
                      className="text-indigo-600 hover:underline"
                    >
                      https://mccompetition.org/2026/mc_description
                    </a>
                  </i>
                  <br />
                  The 7th Model Counting Competition (MC 2026) is a competition to deepen the
                  relationship between latest theoretical and practical development on the various
                  model counting problems and their practical applications. It targets the problem
                  of counting the number of models of a propositional formula and extensions
                  thereof.
                  <hr />
                </details>
                <details>
                  <summary>
                    MSE 2026: MaxSAT Evaluation 2026
                    {/*<a href="https://maxsat-evaluations.github.io/2026/index.html">*/}
                    {/*  MSE 2026: MaxSAT Evaluation 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>MaxSAT Evaluation 2026</b>
                  <br />
                  <i>
                    Organizers: Jeremias Berg, Johannes Fichte, Christoph Jabs, George Katsirelos,
                    Ruben Martins, André Schidler, Dominik Schreiber, Dieter Vandesande
                  </i>
                  <br />
                  <i>Affiliated Event: SAT</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://maxsat-evaluations.github.io/2026/index.html"
                      className="text-indigo-600 hover:underline"
                    >
                      https://maxsat-evaluations.github.io/2026/index.html
                    </a>
                  </i>
                  <br />
                  The 2026 MaxSAT Evaluation (MSE 2026) is the 20th edition of the MaxSAT
                  evaluations, the primary competition-style event focused on evaluating MaxSAT
                  solvers, organized (almost) yearly since 2006. The main goals of MaxSAT Evaluation
                  2026 are: to assess the state of the art in the field of MaxSAT solvers, to
                  collect and re-distribute a heterogeneous MaxSAT benchmark set for further
                  scientific evaluations, and to promote MaxSAT as a viable option for solving
                  instances of a wide range of NP hard optimization problems. The evaluation
                  welcomes two types of contributions from the community at large: new benchmarks
                  encoding instances of interesting NP-hard optimization problems, and
                  implementations of solvers to be evaluated within MSE 2026 across a heterogeneous
                  collection of benchmarks. Please see the webpage for details on the submission
                  process.
                  <hr />
                </details>
                <details>
                  <summary>
                    PB 2026: Pseudo-Boolean Competition 2026
                    {/*<a href="https://www.cril.univ-artois.fr/PB26/">*/}
                    {/*  PB 2026: Pseudo-Boolean Competition 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>Pseudo-Boolean Competition 2026</b>
                  <br />
                  <i>Organizers: Olivier Roussel</i>
                  <br />
                  <i>Affiliated Event: SAT</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://www.cril.univ-artois.fr/PB26/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://www.cril.univ-artois.fr/PB26/
                    </a>
                  </i>
                  <br />
                  The goal of the PB26 competition is to assess the state of the art in the field of
                  pseudo-Boolean solvers, in the same spirit as the previous competitions and
                  evaluations organized since 2005. Pseudo-Boolean constraints generalize SAT
                  constraints and are a special case of ILP. They offer a modelling framework that
                  is richer than in the SAT case but still close enough. Inference rules are also
                  more powerful than in the SAT framework.
                  <hr />
                </details>
                <details>
                  <summary>
                    SAT Comp 2026: SAT Competition 2026
                    {/*<a href="https://satcompetition.github.io/2026/">*/}
                    {/*  SAT Comp 2026: SAT Competition 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>SAT Competition 2026</b>
                  <br />
                  <i>Organizers: Katalin Fazekas, Marijn Heule, Ashlin Iser</i>
                  <br />
                  <i>Affiliated Event: SAT</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://satcompetition.github.io/2026/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://satcompetition.github.io/2026/
                    </a>
                  </i>
                  <br />
                  The SAT Competitions have been driving progress in SAT solving for decades,
                  beginning with three pioneering events in the 1990s (1992, 1993, 1996) and
                  expanding into large-scale annual competitions since 2002. These events bring
                  together the world’s leading solvers in a rigorous, head-to-head evaluation of
                  performance on diverse and demanding benchmarks. A central goal is to promote the
                  development of faster, sophisticated, and trustworthy SAT solvers while raising
                  the bar with newly collected, challenging problem instances. The competitions also
                  provide a definitive snapshot of the current state of the art, guiding both
                  research and industrial adoption.
                  <hr />
                </details>
                <details>
                  <summary>
                    QBFGallery 2026
                    {/*<a href="https://qbf.pages.sai.jku.at/gallery26/">QBFGallery 2026</a>*/}
                  </summary>
                  <hr />
                  <b>QBFGallery 2026</b>
                  <br />
                  <i>Organizers: Martina Seidl, Cynthia Peyrer, Luca Pulina</i>
                  <br />
                  <i>Affiliated Event: SAT</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://qbf.pages.sai.jku.at/gallery26/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://qbf.pages.sai.jku.at/gallery26/
                    </a>
                  </i>
                  <br />
                  Quantified Boolean formulas (QBF) and Dependency Quantified Boolean formulas
                  (DQBF) are extensions of propositional logic which allows for explicit
                  quantification over propositional variables. Many problems from application
                  domains such as model checking, formal verification, synthesis and AI can be
                  efficiently encoded in QBF or DQBF.
                  <br />
                  The QBF Gallery 2026 continues a well-established tradition of events—the QBF
                  Gallery and QBF Evaluations—dedicated to surveying and documenting the state of
                  the art in solving quantified Boolean formulas and their extensions, while also
                  fostering the collection of challenging and representative benchmarks.
                  <hr />
                </details>
                <details>
                  <summary>
                    xCSP3 2026: 8th International XCSP3 Competition
                    {/*<a href="https://xcsp.org/competitions/">*/}
                    {/*  xCSP3 2026: 8th International XCSP3 Competition*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>8th International XCSP3 Competition</b>
                  <br />
                  <i>Organizers: Gilles Audemard, Christophe Lecoutre, Emmanuel Lonca</i>
                  <br />
                  <i>Affiliated Event: CP</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://xcsp.org/competitions/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://xcsp.org/competitions/
                    </a>
                  </i>
                  <br />
                  The eighth international XCSP3 constraint solver competition is organized to
                  improve our knowledge about components (e.g., filtering algorithms, heuristics,
                  search strategies, encodings, reformulation techniques and learning procedures)
                  that are behind the efficiency of solving systems (constraint solvers) for
                  combinatorial constrained problems. Problem instances to be solved are given in
                  format XCSP3 (see xcsp.org) from models written in PySCP3 (see pycsp.org). Two
                  classical problems are considered in the competition: CSP (Constraint Satisfaction
                  Problem) and COP (Constrained Optimization Problem).
                  <hr />
                </details>
              </li>
              <br />
              <li>
                <strong>Week 2 Banquet (28/07) [click on items for more details]</strong>
                <details>
                  <summary>
                    CASC-J13: CADE ATP System Competition 2026
                    {/*<a href="https://tptp.org/CASC/J13/">*/}
                    {/*  CASC-J13: CADE ATP System Competition 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>CADE ATP System Competition 2026</b>
                  <br />
                  <i>Organizers: Geoff Sutcliffe</i>
                  <br />
                  <i>Affiliated Event: IJCAR</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://tptp.org/CASC/J13/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://tptp.org/CASC/J13/
                    </a>
                  </i><br/>
                  <i>
                    Workshop:{" "}
                    <a
                        href="https://tptp.org/TPTPTParty/2026/"
                        className="text-indigo-600 hover:underline"
                    >
                      https://tptp.org/TPTPTParty/2026/
                    </a>
                  </i>
                  <br />
                  The CADE ATP System Competition (CASC) is the annual evaluation of fully
                  automatic, classical logic, ATP systems - the world championship for such systems.
                  One purpose of CASC is to provide a public evaluation of the relative capabilities
                  of ATP systems. Additionally, CASC aims to stimulate ATP research, motivate
                  development and implementation of robust ATP systems that can be easily and
                  usefully deployed in applications, provide an inspiring environment for personal
                  interaction between ATP researchers, and expose ATP systems within and beyond the
                  ATP community. CASC evaluates the performance of ATP systems in terms of the
                  number of problems solved with an acceptable solution output, and the average time
                  taken for problems solved, in the context of a bounded number of eligible problems
                  and specified time limits.
                  <hr />
                </details>
                <details>
                  <summary>
                    CoCo 2026: 15th Confluence Competition
                    {/*{" "}*/}
                    {/*<a href="https://project-coco.uibk.ac.at/2026/">*/}
                    {/*  {" "}*/}
                    {/*  CoCo 2026: 15th Confluence Competition*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>15th Confluence Competition</b>
                  <br />
                  <i>
                    Organizers: Aart Middeldorp, Naoki Nishida, Teppei Saito, René Thiemann, Sarah
                    Winkler
                  </i>
                  <br />
                  <i>Affiliated Event: IWC Workshop @FSCD/IJCAR</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://project-coco.uibk.ac.at/2026/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://project-coco.uibk.ac.at/2026/
                    </a>
                  </i>
                  <br />
                  Confluence provides a general notion of determinism and has been conceived as one
                  of the central properties of rewriting. The Confluence Competition, established in
                  2012, is an annual competition of software tools that aim to (dis)prove confluence
                  and related (undecidable) properties of various kinds of rewrite systems
                  automatically.
                  <hr />
                </details>
                <details>
                  <summary>
                    ProoVer 2026: ProoVer Competition 2026
                    {/*<a href="https://proover-competition.github.io">*/}
                    {/*  ProoVer 2026: ProoVer Competition 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>ProoVer Competition 2026</b>
                  <br />
                  <i>Organizers: Julie Cailler, Simon Guilloud</i>
                  <br />
                  <i>Affiliated Event: IJCAR</i>
                  <br />
                  <i>Results:</i> <b>July 27th, 10AM</b>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://proover-competition.github.io"
                      className="text-indigo-600 hover:underline"
                    >
                      https://proover-competition.github.io
                    </a>
                  </i>
                  <br />
                  Inspired by the CADE ATP System Competition (CASC), ProoVer aims to benchmark the
                  correctness and robustness of proof checkers within the TPTP ecosystem.
                  Participants are submitted both correct and "buggy" proofs, and their systems must
                  determine the validity of each proof. Contestants are required to implement a
                  proof checker that can call an external prover for some steps, while verifying
                  specific proof steps internally within their tool.
                  <hr />
                </details>
                <details>
                  <summary>
                    SMT-Comp 2026: 21th International Satisfiability Modulo Theories Competition
                    {/*<a href="https://smt-comp.github.io">*/}
                    {/*  SMT-Comp 2026: 21th International Satisfiability Modulo Theories Competition*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>21th International Satisfiability Modulo Theories Competition</b>
                  <br />
                  <i>Organizers: Dominik Winterer, Martin Jonáš, Tomáš Kolárik</i>
                  <br />
                  <i>Affiliated Event: IJCAR</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://smt-comp.github.io"
                      className="text-indigo-600 hover:underline"
                    >
                      https://smt-comp.github.io
                    </a>
                  </i>
                  <br />
                  The International Satisfiability Modulo Theories Competition (SMT-COMP) is an
                  annual competition between Satisfiability Modulo Theories (SMT) solvers, organized
                  since 2005. The aim is to spur advances in SMT solver implementations on benchmark
                  formulas of practical interest. Researchers are highly encouraged to submit both
                  new benchmarks and new or improved solvers to raise the level of competition and
                  advance the state of the art in automated SMT problem solving.
                  <hr />
                </details>
                <details>
                  <summary>
                    SYNTCOMP 2026: Reactive Synthesis Competition 2026
                    {/*<a href="https://www.syntcomp.org/syntcomp-2026-call-for-benchmarks-and-solvers/">*/}
                    {/*  SYNTCOMP 2026: Reactive Synthesis Competition 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>Reactive Synthesis Competition 2026</b>
                  <br />
                  <i>
                    Organizers: Guillermo Alberto Perez, Swen Jacobs, Philipp Schlehuber-Caissier
                  </i>
                  <br />
                  <i>Affiliated Event: CAV</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://www.syntcomp.org/syntcomp-2026-call-for-benchmarks-and-solvers/"
                      className="text-indigo-600 hover:underline"
                    >
                      https://www.syntcomp.org/syntcomp-2026-call-for-benchmarks-and-solvers/
                    </a>
                    <br/>
                    Workshop on Synthesis:{" "}
                    <a href="https://synt2026.github.io/" className="text-indigo-600 hover:underline">
                      https://synt2026.github.io/</a>
                  </i>
                  <br />
                  The Reactive Synthesis Competition (SYNTCOMP) is an annual event founded in 2014
                  to foster research into well-engineered, scalable, and user-friendly reactive
                  synthesis tools. It provides a public platform for the objective comparison of
                  tools that automatically construct systems from formal specifications, ensuring
                  they are correct by construction. The competition is organized into different
                  tracks based on specification formats, including safety, linear-temporal-logic
                  (LTL), and parity games. Participants are evaluated in subtracks for realizability
                  (determining if a system exists) and synthesis (computing the actual system
                  strategy), with rankings based on both the quantity of solved problems and the
                  quality (size) of the resulting solutions.
                  <hr />
                </details>
                <details>
                  <summary>
                    termCOMP 2026: Termination Competition 2026
                    {/*<a href="https://termination-portal.org/wiki/Termination_Competition_2026">*/}
                    {/*  termCOMP 2026: Termination Competition 2026*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>Termination Competition 2026</b>
                  <br />
                  <i>Organizers: Florian Frohn</i>
                  <br />
                  <i>Affiliated Event: WST Workshop</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://termination-portal.org/wiki/Termination_Competition_2026"
                      className="text-indigo-600 hover:underline"
                    >
                      https://termination-portal.org/wiki/Termination_Competition_2026
                    </a>
                  </i>
                  <br />
                  The termination and complexity competition (termCOMP) focuses on automated
                  termination and complexity analysis for various kinds of programming paradigms,
                  including categories for term rewriting, integer transition systems, imperative
                  programming, logic programming, and functional programming. In all categories, the
                  competition also welcomes the participation of tools providing certifiable output.
                  The goal of the competition is to demonstrate the power and advances of the
                  state-of-the-art tools in each of these areas.
                  <hr />
                </details>
                <details>
                  <summary>
                    VNN-COMP 2026: 7th International Verification of Neural Networks Competition
                    {/*<a href="https://vnn-comp.github.io">*/}
                    {/*  VNN-COMP 2026: 7th International Verification of Neural Networks Competition*/}
                    {/*</a>*/}
                  </summary>
                  <hr />
                  <b>7th International Verification of Neural Networks Competition</b>
                  <br />
                  <i>Organizers: Taylor Johnson, Stanley Bak, Changliu Liu, ThanhVu H. Nguyen</i>
                  <br />
                  <i>Affiliated Event: SAIV 2026@CAV</i>
                  <br />
                  <i>
                    Webpage:{" "}
                    <a
                      href="https://vnn-comp.github.io"
                      className="text-indigo-600 hover:underline"
                    >
                      https://vnn-comp.github.io
                    </a>
                  </i>
                  <br />
                  The literature on the verification of traditionally designed systems is wide and
                  successful, neural network verification remains an open problem, despite
                  significant efforts over the last years. In 2020, the International Verification
                  of Neural Networks Competition (VNN-COMP) was established to facilitate comparison
                  between existing approaches, bring researchers working on this problem together,
                  and help shape future directions of the field. VNN-COMP has been held annually
                  since then. In 2026, the 7th iteration of the annual VNN-COMP will be held as part
                  of the 9th International Symposium on AI Verification (SAIV, collocated with the
                  38th International Conference on Computer-Aided...
                  <hr />
                </details>
              </li>
            </ol>
            <p></p>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0"> Live Events</h3>
            Some competitions will take place during FLoC. The evaluation progress and results will
            be presented live and on-site. The Programming Contest 2026 will host a live modeling
            contest.
            <br />
            <br />
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">
              {/*FLoC Olympics Related Workshops*/}
              Cross-topic Workshops on Benchmarks and Empirical Evaluations
            </h3>
            <ul>
              <li>
                <a
                  href="https://sites.google.com/view/compbench2026/"
                  className="text-indigo-600 hover:underline"
                >
                  CompBench 2026: 1st Workshop on Comparative Evaluation and Benchmarking, July 25
                </a>
              </li>
              <li>
                <a href="https://ml4sp.github.io" className="text-indigo-600 hover:underline">
                  ML4SP: 2nd Workshop on Machine Learning on Solvers and Provers, July 18
                </a>
              </li>
              <li>
                <a href="https://rcra2026.github.io" className="text-indigo-600 hover:underline">
                  RCRA 2026: 33rd International Workshop on Experimental Evaluation of Algorithms
                  for Solving Problems with Combinatorial Explosion, July 18
                </a>
              </li>
              <li>
                <a
                  href="https://www.pragmaticsofssat.org/2026/"
                  className="text-indigo-600 hover:underline"
                >
                  PoS 2026: 17th International Workshop on Pragmatics of SAT, July 19
                </a>
              </li>
              <li>
                <a href="https://paar2026.github.io" className="text-indigo-600 hover:underline">
                  PAAR 2026: 10th Workshop on Practical Aspects of Automated Reasoning, July 25
                </a>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-indigo-700 pb-0">Organizers</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <a
                  href="https://liu.se/en/employee/johfi52"
                  className="text-indigo-600 hover:underline"
                >
                  Johannes Fichte
                </a>
                , Linköping University
              </li>
              <li>
                <a
                  href="https://www.cs.helsinki.fi/u/mjarvisa/"
                  className="text-indigo-600 hover:underline"
                >
                  Matti Järvisalo
                </a>
                , University of Helsinki
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Olympics;
