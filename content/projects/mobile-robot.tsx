import { ProjectFigure } from "@/components/project-figure";

export default function MobileRobotContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I worked with a team to develop an Arduino-based robot that followed a
        curved line and stopped for moving obstacles. I helped develop and tune
        sensor thresholds, steering commands, and line-recovery logic. The robot
        completed the course and finished ahead of most competing robots.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/mobile_robot.jpg"
        width={715}
        height={482}
        alt="Differential-drive robot following a curved line beneath the moving obstacle walls"
        caption="Line-following robot on the obstacle course"
        crop={{ x: 170, y: 40, width: 470, height: 340 }}
      />

      <h2>Sensor integration &amp; control algorithm</h2>

      <p>
        We characterized infrared readings over the line and surrounding surface
        to set detection thresholds. An independent ultrasonic check stopped
        both motors when an obstacle entered the detection range.
      </p>

      <p>
        The controller varied left and right motor speeds from the infrared
        readings. When the center sensor detected the line, the robot moved
        forward. Side readings adjusted the relative motor speeds to steer it
        back, with stronger corrections for larger deviations.
      </p>

      <p>
        When all three sensors lost the line, the controller searched toward the
        side that had most recently detected it. Retaining that last sensor
        state gave the robot a recovery direction even when its current readings
        no longer located the path.
      </p>

      <h2>Testing &amp; iteration</h2>

      <p>
        We tested the robot repeatedly on the course to compare infrared
        thresholds and left-to-right motor-speed combinations. Each run showed
        how a setting affected turning and line tracking, which informed the
        correction strength used for small and large deviations.
      </p>

      <p>
        We adjusted the recovery logic and motor speeds to balance returning to
        the line with completing the course quickly. The same course runs
        checked that ultrasonic obstacle detection could stop the motors while
        line tracking continued to determine the steering commands.
      </p>

      <h2>Results</h2>

      <p>
        The robot completed the curved obstacle course in 26 seconds, following
        the line and stopping for moving obstacles. It finished faster than 75%
        of the competing robots.
      </p>

      <p>
        The final controller integrated three infrared sensors, an ultrasonic
        sensor, and independent left and right motor commands. Threshold tuning
        and recovery based on the last sensor state allowed it to combine path
        following, obstacle stopping, and recovery after temporarily losing the
        line.
      </p>
    </>
  );
}
