import { ProjectFigure } from "@/components/project-figure";

export default function ChineseCheckersContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I built a Chinese Checkers application in Python and Tkinter with local
        multiplayer and a computer-controlled opponent. I implemented the game
        engine, interface, legal move generation, turn management, and win
        detection. The completed game integrated a Minimax-based opponent and
        hints alongside human play.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/checkers_gameplay.gif"
        width={320}
        height={422}
        alt="Recorded Chinese Checkers gameplay with a hint button, highlighted moves, and animated red and yellow pieces"
        caption="Recorded gameplay highlights moves and animates pieces between board positions"
        compact
      />

      <h2>Software design</h2>

      <p>
        Piece objects store positions and animation state, while a board grid
        represents occupancy. Event callbacks handle input and animation, and
        separate functions validate moves, advance turns, and detect wins. The
        board’s offset rows required conversions between game coordinates and
        screen locations for rendering, mouse selection, and move validation.
      </p>

      <p>
        The interface highlights legal destinations and supports animations and
        timed turns, with turn progression and win detection managed by the game
        engine.
      </p>

      <h2>AI &amp; algorithms</h2>

      <p>
        Human turns allow adjacent moves and successive jumps. A jump-state flag
        blocks ordinary steps after a jump and keeps follow-up jumps within the
        same turn.
      </p>

      <p>
        I compared candidate moves and opponent responses with a depth-three
        Minimax search using a simple row-progress score. The same search
        supplies hints in single-player mode. AI search considers individual
        steps and jumps rather than complete multi-jump turns.
      </p>

      <h2>Results</h2>

      <p>
        The completed application integrates human and computer-controlled
        gameplay in one interface, including legal-move highlighting, human jump
        sequences, turn management, and win detection. Reusing the search
        framework for the opponent and hints kept the AI behavior within the
        same game engine.
      </p>
    </>
  );
}
