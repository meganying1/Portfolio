import { LinkArrow } from "@/components/link-arrow";
import { ProjectFigure } from "@/components/project-figure";

export default function DesignResearchAgentsContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Design Research Agents is a modular Python framework for studying AI
        agents in engineering design, with common interfaces for model calls,
        tools, and multistep workflows. I implemented a simulated annealing
        search pattern and developed an episodic reinforcement learning pattern
        with the team. My work connected these algorithms to the framework’s
        existing workflows, configuration, and result reporting.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/design-research-ecosystem.svg"
        width={1500}
        height={760}
        alt="Framework documentation diagram showing Experiments coordinating Problems, Agents, and Analysis, with agent executions and traces feeding the study artifacts"
        caption={
          <>
            Agents supplies participants, workflows, tools, and traces within
            the research ecosystem shown in the{" "}
            <a
              href="https://cmudrc.github.io/design-research-agents/#integration-with-the-ecosystem"
              target="_blank"
              rel="noreferrer"
            >
              project documentation
            </a>
          </>
        }
        wide
      />

      <h2>Simulated annealing</h2>

      <p>
        Design search can require exploring options that temporarily score worse
        before finding a better solution. I implemented simulated annealing with
        temperature-dependent acceptance of proposed designs. Higher
        temperatures allow more exploration, while cooling makes the search more
        selective.
      </p>

      <p>
        I separated the search loop from the design problem so researchers could
        supply their own objective, constraints, and local changes. The module
        supports minimizing or maximizing an objective, supplied or generated
        starting states, and optional checks on the design representation.
      </p>

      <p>
        I added adaptive cooling based on objective history. In a later API
        review, I made temperature schedules directly importable and added
        schedule settings and objective history to the results. I also fixed the
        output to preserve generated starting designs, making runs easier to
        inspect and analyze.
      </p>

      <h2>Reinforcement learning</h2>

      <p>
        We scoped the learning pattern around complete episodes because design
        tasks may only yield meaningful feedback after a finished design. I
        connected a user-defined environment to a policy that selects actions
        and learns from episode rewards.
      </p>

      <p>
        I implemented an epsilon-greedy policy that balances random exploration
        with selecting the action with the highest estimated return. My initial
        version learned one value per discrete action from discounted episode
        rewards.
      </p>

      <p>
        I defined the policy interface and implemented a workflow with episode
        and step limits, recording actions, rewards, and policy parameters.
        During iteration, I fixed state capture to preserve the history when an
        environment modifies a design in place.
      </p>

      <p>
        I reviewed how repeated state-action pairs affected learning and changed
        the update to first-visit Monte Carlo. Only the return following a
        pair’s first occurrence in an episode updates its estimate.
      </p>

      <h2>Results</h2>

      <p>
        My code adds configurable simulated annealing and episodic reinforcement
        learning to the open-source library. Shared workflow and result
        contracts let researchers supply their own objectives, environments, and
        policies while retaining run records for analysis.
      </p>

      <div className="files">
        <h3 className="label">Links</h3>
        <div className="files__list">
          <a
            className="chip label-link"
            href="https://github.com/cmudrc/design-research-agents"
          >
            <span>
              <span className="link-label">Source Code</span>
              {"\u00a0"}
              <LinkArrow direction="external" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
