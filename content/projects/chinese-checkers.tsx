import { ProjectFigure } from "@/components/project-figure";

export default function ChineseCheckersContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I built a Chinese Checkers application in Python and Tkinter for local
        multiplayer and play against the computer. I implemented the board, move
        rules, turn management, and Minimax search. The finished game provides
        legal-move highlights, animated movement, computer opponents, and player
        hints.
      </p>

      <h2>Software design</h2>

      <p>
        I used a Ball class to store each piece’s board position, owner, color,
        and animation state. A board array stores occupancy, while separate
        functions handle drawing, mouse input, and game rules.
      </p>

      <p>
        The star-shaped board has offset rows, so a rectangular array alone does
        not describe valid moves. I used row-specific board boundaries and
        separate neighbor offsets for odd and even rows. Coordinate-conversion
        functions map between board positions and screen locations for rendering
        and mouse selection.
      </p>

      <h2>Game logic</h2>

      <p>
        Move validation checks that the selected piece belongs to the current
        player and that the destination is on the board and unoccupied. A move
        must reach an adjacent hole or jump over an occupied neighbor into an
        empty hole. The interface highlights the legal destinations for the
        selected piece.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/checker_highlight.png"
        width={302}
        height={370}
        alt="Chinese Checkers board with a selected red piece and outlined legal destinations"
        caption="Legal destinations highlighted for the selected piece"
        compact
      />

      <p>
        An adjacent move advances the turn, while a jump keeps the piece
        selected so the player can continue a jump sequence. I tracked the
        active player, a 30-second turn timer, and the occupancy of each target
        triangle. A player wins when all ten pieces reach the opposite triangle.
      </p>

      <p>
        For animated moves, timer callbacks update the piece’s screen position
        until it reaches its new cell. Separating the board state from the
        moving piece’s display coordinates lets the rules track the move while
        the interface shows the transition.
      </p>

      <h2>AI &amp; algorithms</h2>

      <p>
        I implemented a Minimax search three levels deep for single-player
        games. It generates legal moves, simulates each on a copied board, and
        recursively alternates between the computer’s move and the human’s
        response. The search stops at the depth limit or when a player has won.
      </p>

      <p>
        The evaluation score uses the pieces’ row positions to measure each
        side’s progress toward the opposite triangle. The computer chooses the
        highest score, while the simulated human response chooses the lowest, so
        a move is judged against an opponent’s strongest reply.
      </p>

      <p>
        After evaluating each branch, the search restores the trial board before
        testing another move. It returns the piece and destination for the
        selected move. The hint system uses the same search from the human
        player’s perspective.
      </p>

      <h2>Results</h2>

      <p>
        I completed a Chinese Checkers application with two-, four-, and
        six-player local games and a single-player mode against the computer.
        The interface supports legal-move highlighting, chained jumps, animated
        movement, timed turns, and win detection.
      </p>

      <p>
        The computer opponent and player hints use the same depth-three Minimax
        search and board evaluation. Shared move-validation functions connect
        the game rules, interface highlights, and candidate moves considered by
        the search.
      </p>

      <div className="files">
        <h3 className="label">Links</h3>
        <div className="files__list">
          <a
            className="chip"
            href="https://github.com/meganying1/Chinese-Checkers"
          >
            GitHub code
          </a>
          <a
            className="chip"
            href="https://www.youtube.com/watch?v=EQbkK0stQs8&feature=youtu.be"
          >
            Project demo
          </a>
        </div>
      </div>
    </>
  );
}
