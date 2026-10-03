import Image from "next/image";

export default function NoiseReductionContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of four, we implemented a Least Mean Squares (LMS) adaptive
        filter in MATLAB and evaluated it on recordings from Carnegie Mellon’s
        campus. The goal was to reduce background noise while keeping important
        environmental sounds distinguishable.
      </p>

      <h2>Algorithm Development</h2>

      <p>
        We first explored cancellation using an inverted waveform. This
        illustrated destructive interference, but a fixed waveform would not
        track changing background noise.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/noise_destructive.png"
          alt="Two waveforms of equal amplitude and opposite phase canceling each other out"
          width={936}
          height={592}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 1</span>Example of destructive
          interference
        </figcaption>
      </figure>

      <p>
        We instead implemented an LMS filter that updates its coefficients using
        an error signal. Unlike the initial fixed-waveform approach, the filter
        can adapt its response over time.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/noise_lms.png"
          alt="Plot showing the LMS algorithm&#x27;s output signal converging toward the desired signal"
          width={630}
          height={742}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 2</span>Convergence between desired
          signal and output signal using LMS
        </figcaption>
      </figure>

      <h2>MATLAB Implementation</h2>

      <p>
        We converted the recordings to single-channel signals, generated a
        representative noise signal, and applied the LMS filter to produce
        processed audio.
      </p>

      <p>
        We varied filter length and step size to explore convergence speed,
        stability, and filtering performance. Plots and audio playback supported
        comparison of the original and processed recordings.
      </p>

      <h2>Testing</h2>

      <p>
        We evaluated recordings from the gym, buses, lawn, and study areas to
        examine performance across different background sounds.
      </p>

      <p>
        We compared waveform amplitudes and listened to the processed recordings
        to assess whether important sounds remained distinguishable. These
        checks provided an initial evaluation rather than a controlled measure
        of selective noise removal.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/noise_samples.png"
          alt="Original and cleaned audio waveforms from real-world campus noise samples"
          width={936}
          height={708}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 3</span>Original and cleaned audio
          files from real-world audio samples
        </figcaption>
      </figure>

      <h2>Results</h2>

      <p>
        The project reported up to 95% reduction in waveform amplitude, with
        important sounds remaining distinguishable in listening checks.
        Amplitude reduction alone does not establish improved signal-to-noise
        ratio; a stronger evaluation would define the amplitude metric and
        compare noise attenuation with distortion of the desired signal.
      </p>
    </>
  );
}
