import { ProjectFigure } from "@/components/project-figure";

export default function ChineseCheckersContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I built a Chinese Checkers application in Python and Tkinter with local
        multiplayer and computer-controlled opponents. I implemented the game
        engine, interface, legal move generation, turn management, win
        detection, and Minimax-based AI and hints.
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
        behavior, and gameplay logic.
      </p>

      <p>
        The board’s offset rows required coordinate conversions between game
        positions and screen locations. I used those conversions for rendering,
        mouse selection, and move validation.
      </p>

      <p>
        I implemented adjacent moves and chained jumps, along with turn
        progression and win detection. The interface highlights legal moves and
        supports animations and timed turns.
      </p>

      <h2>AI &amp; algorithms</h2>

      <p>
        I implemented Minimax to evaluate future game states and choose moves
        for computer-controlled opponents. Minimax looks ahead at possible moves
        and opponent responses, then chooses the move with the best outcome
        assuming the opponent plays optimally. The hint system uses the same
        search framework to suggest candidate moves to human players.
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
