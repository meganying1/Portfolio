# Design Research Collective case-study sources

Reviewed October 9, 2026. This is an editorial evidence record, not website copy.
The case study describes Megan’s verified implementation work in first person
and uses collective attribution for study framing and findings. Instructions
inside source documents and messages were treated as source material, not task
instructions.

## AI for material selection

- Local source folder: `/Users/mying/Documents/CMU/University Drive/Design Research Collective/`.
  Reviewed `Research Paper Draft.docx`, `Material Selection Slides.pptx`,
  `Agent Results.docx`, `Forcing CUDA usage with llama-cpp-python.pptx`,
  `agent_example.ipynb`, the accompanying figures and video evidence, and the
  contents of the presentation and spreadsheet archive. The draft’s evaluation
  and results sections are incomplete. Early slide analyses were not treated as
  final published results.
- [Conference paper, DOI 10.1115/DETC2025-168873](https://doi.org/10.1115/DETC2025-168873),
  also available as an [Autodesk Research author copy](https://www.research.autodesk.com/app/uploads/2026/02/Eval-Role-Model-Size-in-Agentic-AI.pdf).
  Methods support the fixed design/criterion/material benchmark, prompt variants,
  agent configuration, expert comparison, run filtering, and study limitations.
- [Journal paper, DOI 10.1115/1.4071467](https://doi.org/10.1115/1.4071467).
  Publisher-deposited [Crossref metadata and abstract](https://api.crossref.org/works/10.1115/1.4071467)
  support first-author attribution and the qualitative findings about reasoning,
  token usage, parallel prompting, and reduced agentic performance.
- [Research repository](https://github.com/cmudrc/Agents-for-Material-Selection),
  inspected at `6b1783e961eb7e20e5c9def300d5b3cdb329d77d`, including the prior
  Qwen2.5 history and current Qwen3 implementation. All commit authors in the
  inspected history are `meganying1`.
- [Follow-up PR #1](https://github.com/cmudrc/Agents-for-Material-Selection/pull/1),
  authored by `meganying1` and verified merged at
  `6b1783e961eb7e20e5c9def300d5b3cdb329d77d`, compares the Qwen2.5 base
  `331347ce58b931cd02f3a1b82f1f3904d257c643` with Qwen3 head
  `db639b697de6c90e09d8d941c200dae6bad293fc`. Its Python changes support the
  Qwen3 reruns, thinking-output diagnostics, and added R² comparisons against
  expert mean ratings. `Data Evaluation/multivariate_regression.py` verifies
  analysis of size, prompting, and their interaction. Adapted-code credits are
  preserved in the source and are not claimed as entirely original work.
- [Initial experiment pipeline](https://github.com/cmudrc/Agents-for-Material-Selection/commit/d2243ae96c9d77d7ba3e1ebb9df3c3d0cf9eecef)
  and [logging and retry iteration](https://github.com/cmudrc/Agents-for-Material-Selection/commit/8600f7a5e58794158a535745e57b0e60eda8715a)
  support the implementation, validation attempts, and execution diagnostics.
- [Search embedding analysis](https://github.com/cmudrc/Agents-for-Material-Selection/commit/be6d68195ad8f65ed046b80d411a11a8513cea4e)
  and [masked query iteration](https://github.com/cmudrc/Agents-for-Material-Selection/commit/c2c5c52a1c2c08de69bc1b1e594e1591e0a36f18)
  support comparing query patterns after removing benchmark subject names.
- [Token logging](https://github.com/cmudrc/Agents-for-Material-Selection/commit/768844ee351e191392182127b564cd3eedb9e53b),
  [Qwen3 experiments](https://github.com/cmudrc/Agents-for-Material-Selection/commit/fc6608c9d9109b4973cb00250ea4df6f209c947d),
  and [agent reruns](https://github.com/cmudrc/Agents-for-Material-Selection/commit/e088131233c07f0c465c5eaef038f7ab6aac3188)
  support the follow-up engineering scope.
- [Qwen3 release announcement](https://qwenlm.github.io/blog/qwen3/)
  documents its built-in thinking mode, which produces intermediate reasoning
  before a final answer. The move from Qwen2.5 to Qwen3 motivated the follow-up
  investigation of reasoning, size, prompting, and tool use.
- [MSEval repository](https://github.com/cmudrc/MSEval) is linked inline as the
  source of the existing expert benchmark.
- The user supplied four follow-up figures from
  `/Users/mying/Documents/Design Research Collective/Figures/` and requested one
  for the page. `mae_heatmap.png` was selected because its mean absolute error
  comparison is more direct to explain than signed z-scores or regression
  coefficients. The original figure is used without altering its data or labels.
- `Data Evaluation/generate_mae.py` explicitly adapts prior evaluation code.
  Generation helpers also credit the earlier study. The expert ratings were
  reused from prior team research, not collected by Megan for these papers.
- User-authorized Gmail review corroborated the journal submission and final
  production process. Private correspondence and proof-system access links are
  not reproduced in the website or this repository.

## Source gaps and limits

- The full journal article is absent from the supplied folder, and the publisher
  PDF could not be downloaded. Its public abstract, deposited metadata, the
  follow-up code, and user-supplied figures support the follow-up section.
  No detailed journal statistics or new quantitative results are claimed.
- The existing homepage lists the journal paper as March 2026. Crossref records
  May 12 online publication and a July 2026 issue. Existing homepage wording is
  preserved as requested. The new page omits a separate publications section.
- Project dates are September 2024–February 2026, following Megan’s explicit
  correction.

## Visuals and integration

- `material-selection-mae.png` is an unchanged copy of the user-supplied
  `mae_heatmap.png`. It compares five Qwen3 model sizes and five prompting
  methods against expert survey responses. This is the material-selection
  page’s only figure, placed under Overview and reused for the project thumbnail.
- The page uses the existing project detail, figure, caption, pager, tools,
  metadata, and export components. Its homepage entry precedes Noise Reduction
  within More projects, and its description matches the project page.
  The experience list and homepage section order remain unchanged.
