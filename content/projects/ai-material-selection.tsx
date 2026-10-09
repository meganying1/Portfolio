import { LinkArrow } from "@/components/link-arrow";
import { ProjectFigure } from "@/components/project-figure";

export default function AIMaterialSelectionContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Material selection requires balancing performance, manufacturing, cost,
        and context. At Carnegie Mellon’s Design Research Collective, I
        investigated how model size, prompting, and access to search affect
        whether AI recommendations align with expert judgment.
      </p>

      <p>
        I built the experiment pipeline, ran the studies, and analyzed the
        outputs as first author on two papers with Daniele Grandi, Allin Groom,
        and Christopher McComb.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/material-selection-mae.png"
        width={1000}
        height={700}
        alt="Heatmap of mean absolute error between expert survey responses and Qwen3 ratings across five model sizes and five prompting methods"
        caption="Mean absolute error between Qwen3 ratings and expert responses across model sizes and prompting methods, where lower values indicate closer alignment."
        wide
      />

      <h2>Research approach</h2>

      <p>
        We used an existing expert survey dataset,{" "}
        <a
          href="https://github.com/cmudrc/MSEval"
          target="_blank"
          rel="noreferrer"
        >
          MSEval
        </a>
        , with suitability ratings from 138 professionals across four design
        applications, four criteria, and nine material categories. I used the
        same 0–10 rating task for the models, comparing them with expert
        responses rather than assuming one correct answer.
      </p>

      <p>
        We compared a search-equipped agent with four standalone prompting
        approaches across the Qwen 2.5 model family, keeping the design
        questions fixed. The prompts asked directly, supplied examples,
        separated explanation from scoring, or requested all nine material
        ratings together.
      </p>

      <h2>Agent implementation</h2>

      <p>
        I built the Python experiment pipeline by adapting generation and
        evaluation scripts from the earlier material selection study. Hugging
        Face’s ReAct code agent coordinates reasoning with Python tool calls,
        while llama-cpp-python runs the models locally. I added a Wikipedia
        search tool and a system prompt with examples outside the survey cases
        so the agent could inspect summaries before scoring.
      </p>

      <p>
        Reviewing execution logs, I added checks for successful final answers,
        errors, and the rating range, with up to five attempts before omitting a
        failed response. Logs recorded searches, retries, and token usage to
        assess reliability and computational effort alongside alignment.
      </p>

      <h2>Expert comparison</h2>

      <p>
        I compared each score with matching expert responses using mean absolute
        error and z-scores, which express deviation relative to the expert
        distribution. Because signed deviations can cancel when averaged, I
        interpreted both metrics together. I used regression to examine model
        size, prompting, and their interaction.
      </p>

      <p>
        I also compared search-query wording using text embeddings, numerical
        representations of sentence meaning. Removing design, criterion, and
        material names helped isolate query patterns beyond their subject
        matter.
      </p>

      <h2>Iteration</h2>

      <p>
        The initial study showed that increasing model size did not consistently
        improve alignment or execution. Extensive execution failures led us to
        exclude the 14B agent from most analyses, while standalone prompts
        achieved lower mean absolute error than the agent.
      </p>

      <p>
        Qwen3 introduced built-in reasoning before the final answer, motivating
        us to repeat the comparison and examine whether reasoning changed the
        roles of prompting, size, and tool use. I extended the pipeline to Qwen3
        and added reasoning diagnostics while retaining the benchmark. I also
        added R² checks to assess how well model scores predicted expert mean
        ratings.
      </p>

      <h2>Results</h2>

      <p>
        In the follow-up, reasoning increased token use, parallel prompting
        improved alignment compared with the earlier models, and agentic
        performance declined. The experiments exposed trade-offs between expert
        alignment, execution reliability, and computational effort.
      </p>

      <p>
        These findings are specific to the tested models and benchmark.
        Wikipedia summaries, broad material categories, and the initial study’s
        single-run evaluation limit conclusions about practical engineering
        decisions.
      </p>

      <div className="files">
        <h3 className="label">Links</h3>
        <div className="files__list">
          <a
            className="chip label-link"
            href="https://github.com/cmudrc/Agents-for-Material-Selection"
          >
            <span>
              <span className="link-label">Source code</span>
              {"\u00a0"}
              <LinkArrow direction="external" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
