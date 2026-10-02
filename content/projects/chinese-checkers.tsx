import Image from "next/image";

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

      <h2>Software Design</h2>

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

      <div className="fig-pair">
        <figure className="fig">
          <Image
            src="/assets/photos/projects/checker_board.png"
            alt="Chinese checkers board with the offset grid of pegs"
            width={300}
            height={340}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 1</span>Chinese checkers board
          </figcaption>
        </figure>

        <figure className="fig">
          <Image
            src="/assets/photos/projects/checker_highlight.png"
            alt="Chinese checkers board highlighting a piece&#x27;s possible moves"
            width={302}
            height={370}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 2</span>Highlighting possible moves
          </figcaption>
        </figure>
      </div>

      <h2>AI &amp; Algorithms</h2>

      <p>
        I implemented Minimax to evaluate future game states and choose moves
        for computer-controlled opponents. The hint system uses the same search
        framework to suggest candidate moves to human players.
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
