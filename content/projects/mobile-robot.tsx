import { ProjectFigure } from "@/components/project-figure";

export default function MobileRobotContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we built an Arduino-based differential-drive robot
        that followed a curved line and stopped for moving obstacles. We
        integrated three infrared sensors for line detection and an ultrasonic
        sensor for obstacle distance, then tuned detection thresholds, steering
        commands, and line-recovery logic through course testing. The final
        robot completed the challenge in 26 seconds.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/mobile_robot.jpg"
        width={715}
        height={482}
        alt="Differential-drive robot following a curved line beneath the moving obstacle walls"
        caption="Curved-line course tests tracking and recovery beneath moving obstacle walls"
        crop={{ x: 170, y: 40, width: 470, height: 340 }}
      />

      <h2>Sensor integration</h2>

      <p>
        Three infrared sensors distinguish the line from the surrounding
        surface. The ultrasonic sensor provides an independent obstacle check.
        When an obstacle entered the detection range, the controller stopped
        both motors.
      </p>

      <h2>Control algorithm</h2>

      <p>
        The controller adjusted the left and right motor speeds from the
        infrared readings. A centered reading commanded forward motion, while
        side readings commanded differential steering, with stronger corrections
        for larger deviations.
      </p>

      <p>
        The controller stored the side that most recently detected the line. If
        all three sensors lost it, that state determined the search direction.
      </p>

      <h2>Testing &amp; iteration</h2>

      <p>
        We characterized infrared sensor responses and selected line-detection
        thresholds. Course tests guided adjustments to the thresholds,
        motor-speed differences, and recovery logic to balance large-deviation
        recovery with stable tracking.
      </p>

      <h2>Results</h2>

      <p>
        The robot followed the curved course and stopped for moving obstacles,
        completing the challenge in 26 seconds. Testing demonstrated the
        combined line-following, obstacle-stop, and line-recovery logic under
        the course conditions.
      </p>
    </>
  );
}
