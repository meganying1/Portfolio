import { ProjectFigure } from "@/components/project-figure";

export default function NoiseReductionContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of four, we implemented a Least Mean Squares (LMS) adaptive
        filter in MATLAB and evaluated it on recordings from Carnegie Mellon’s
        campus. The goal was to reduce background noise while keeping important
        environmental sounds distinguishable. The project reported up to 95%
        lower waveform amplitude across its evaluation.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/noise_signal.png"
        width={780}
        height={700}
        alt="Original and processed audio waveforms with time axes and separate amplitude scales"
        caption="Original and processed waveforms with different amplitude scales"
        crop={{ x: 25, y: 125, width: 715, height: 565 }}
      />

      <h2>Algorithm development</h2>

      <p>
        We first explored cancellation using an inverted waveform. This
        illustrated destructive interference, but a fixed waveform would not
        track changing background noise. We also explored a recursive FFT and
        band-pass filtering to inspect and filter frequency content.
      </p>

      <p>
        We instead implemented an LMS filter that updates its coefficients using
        an error signal. Unlike the initial fixed-waveform approach, the filter
        can adapt its response over time.
      </p>

      <p>
        We varied filter length and step size to explore convergence speed,
        stability, and filtering performance. Plots and audio playback supported
        comparison of the original and processed recordings.
      </p>

      <ProjectFigure
        number={2}
        src="/assets/photos/projects/noise_lms.png"
        width={630}
        height={742}
        alt="Illustrative LMS desired-signal and array-output curves approaching one another over iterations"
        caption="Desired signal and LMS output over successive iterations"
        compact
      />

      <h2>Implementation &amp; testing</h2>

      <p>
        We converted the recordings to single-channel signals, generated a
        representative noise signal, and applied the LMS filter to produce
        processed audio. Gym, bus, lawn, and study-area recordings tested the
        approach across different background sounds.
      </p>

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/noise_samples.png"
        width={936}
        height={708}
        alt="Waveform examples from four campus recordings used to evaluate filtering across different environments"
        caption="Original and processed waveforms from four campus recordings"
        wide
      />

      <p>
        We compared waveform amplitudes and listened to the processed recordings
        to assess whether important sounds remained distinguishable. These were
        visual and listening checks rather than a controlled measure of
        selective noise removal.
      </p>

      <h2>Results</h2>

      <p>
        The project reported up to 95% reduction in waveform amplitude, with
        important sounds remaining distinguishable in listening checks.
      </p>
    </>
  );
}
