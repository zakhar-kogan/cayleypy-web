---
eyebrow: What it is
title: A graph research toolkit for problems where brute-force enumeration is not an option.
intro: CayleyPy is built for the moment when the graph definition is compact, but the graph itself is too large to store outright.
noteLabel: Why this matters
noteText: State-transition systems, permutation groups, matrix groups, and puzzles routinely explode past adjacency-list scale. CayleyPy keeps the algebraic structure visible so analysis and search can stay honest about that scale.
---
CayleyPy starts from the reality that many interesting graphs are easier to define than to materialize. Puzzle state spaces, permutation groups, and matrix groups quickly grow beyond what standard graph tooling can store outright.

Instead of asking you to build the whole graph first, CayleyPy keeps the generating structure explicit so you can search, sample, benchmark, and learn on top of the graph you actually care about.
