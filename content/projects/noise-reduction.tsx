import { ProjectFigure } from "@/components/project-figure";

export default function NoiseReductionContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Our team developed a Least Mean Squares (LMS) adaptive filter to reduce
        background noise in campus audio recordings while preserving important
        sounds. I helped implement and tune the MATLAB filter and compare
        waveforms and playback. The processed recordings had lower amplitudes
        while important environmental sounds remained distinguishable.
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
        We first modeled destructive interference in MATLAB, combining
        equal-amplitude waveforms with opposite phase to demonstrate
        cancellation. A fixed inverted waveform was useful for a known signal,
        but it would not track changing background noise. We chose LMS so the
        filter response could adapt over time.
      </p>

      <p>
        The LMS filter forms an output from a weighted combination of recent
        input samples and compares that output with a desired signal. It then
        uses the error to update the filter coefficients, reducing the squared
        error over successive iterations. The step size controls how strongly
        each update changes the coefficients.
      </p>

      <ProjectFigure
        number={2}
        src="/assets/photos/projects/noise_lms.png"
        width={630}
        height={742}
        alt="Desired and LMS output curves converging over iterations"
        caption="Desired signal and LMS output over successive iterations"
        compact
      />

      <h2>MATLAB implementation</h2>

      <p>
        We converted recordings to single-channel signals, generated a
        representative noise signal, and applied the LMS filter to produce
        processed audio. Filter length determined how many recent samples
        contributed to each output, while step size controlled the rate of
        adaptation. We varied both settings to compare convergence speed,
        stability, and output quality.
      </p>

      <p>
        The MATLAB pipeline plotted original and processed signals and supported
        playback for listening comparisons.
      </p>

      <h2>Testing &amp; iteration</h2>

      <p>
        We processed recordings from the gym, buses, lawn, and study areas to
        compare performance across different background sounds. For each
        recording, we compared the original and processed waveforms and listened
        to the audio to check attenuation and whether important environmental
        sounds remained distinguishable.
      </p>

      <p>
        These comparisons informed the filter settings. We used the convergence
        plots to compare how quickly the output approached the desired signal,
        and playback to judge the effect on recognizable sounds. Repeating the
        comparisons with different filter lengths and step sizes helped balance
        adaptation speed with stable output.
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

      <h2>Results</h2>

      <p>
        We completed a MATLAB pipeline for loading campus recordings, applying
        an LMS adaptive filter, and comparing original and processed audio
        through plots and playback. The implementation allowed filter length and
        step size to be varied for different recordings.
      </p>

      <p>
        Waveform comparisons showed up to 95% amplitude reduction in the tested
        recordings, while important environmental sounds remained
        distinguishable in listening checks. Testing across the campus samples
        connected filter tuning to both the signal plots and the audible result.
      </p>
    </>
  );
}
