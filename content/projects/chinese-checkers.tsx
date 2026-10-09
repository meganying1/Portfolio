import { ProjectFigure } from "@/components/project-figure";

export default function ChineseCheckersContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I built a Chinese Checkers game in Python with a Tkinter interface,
        allowing players to compete against each other on one computer or play
        against a computer opponent. I programmed the board, movement rules,
        turns, and win detection, along with a computer opponent and move hints.
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
        I used object-oriented programming to represent each game piece as an
        object that stores its position and animation state. A board grid tracks
        which spaces are occupied. Because the board’s rows are staggered, I
        mapped board positions to screen locations so clicks and movement
        matched the visible spaces.
      </p>

      <p>
        Clicking a piece highlights where it can move, and the program checks
        each move before updating the board, advancing the turn, or declaring a
        winner. Players can move to a neighboring space or jump over other
        pieces. After a jump, they can continue jumping within the same turn,
        but cannot switch to an ordinary step. The interface animates pieces
        between spaces and shows the time remaining in each turn.
      </p>

      <h2>AI and algorithms</h2>

      <p>
        The AI component uses Minimax, which looks ahead at possible moves and
        the opponent’s replies, then chooses the move that gives it the best
        outcome assuming the opponent also plays well. My implementation looks
        three moves ahead and scores positions by how far pieces have advanced
        toward the opposite side. The same approach suggests hints when playing
        against the computer. It compares individual steps and jumps rather than
        complete chains of jumps.
      </p>

      <h2>Results</h2>

      <p>
        The completed game’s graphical user interface (GUI) supports human and
        AI opponents, highlighted moves, successive jumps, timed turns, and win
        detection. The AI component and hints share the same move-selection
        logic.
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
