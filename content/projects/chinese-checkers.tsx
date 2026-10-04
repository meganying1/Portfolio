import { ProjectFigure } from "@/components/project-figure";

export default function ChineseCheckersContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I built a Chinese Checkers application in Python and Tkinter with local
        multiplayer and computer-controlled opponents. I implemented the game
        engine, interface, legal move generation, turn management, and win
        detection. The completed game integrated Minimax-based opponents and
        hints alongside human play.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/checker_highlight.png"
        width={302}
        height={370}
        alt="Chinese Checkers board with a selected red piece and outlined legal destinations"
        caption="Python and Tkinter interface highlights legal destinations for a selected piece"
        compact
      />

      <h2>Software design</h2>

      <p>
        I used an object-oriented structure to separate game state, interface
        behavior, and gameplay logic. The board’s offset rows required
        conversions between game coordinates and screen locations for rendering,
        mouse selection, and move validation.
      </p>

      <p>
        The interface highlights legal destinations and supports animations and
        timed turns, with turn progression and win detection managed by the game
        engine.
      </p>

      <h2>AI &amp; algorithms</h2>

      <p>
        I implemented legal move generation for both adjacent moves and chained
        jumps.
      </p>

      <p>
        Minimax evaluates future game states and opponent responses to choose
        computer moves, assuming the opponent chooses its best response. The
        hint system reuses the same search framework to suggest moves to human
        players.
      </p>

      <h2>Results</h2>

      <p>
        The completed application integrates human and computer-controlled
        gameplay in one interface, including legal-move highlighting, chained
        jumps, turn management, and win detection. Reusing the search framework
        for both opponents and hints kept the AI behavior within the same game
        engine.
      </p>
    </>
  );
}
