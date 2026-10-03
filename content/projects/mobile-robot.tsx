import { ProjectFigure } from "@/components/project-figure";

export default function MobileRobotContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we built an Arduino-based differential-drive robot
        that followed a curved line and stopped for moving obstacles. We
        integrated three infrared sensors for line detection and an ultrasonic
        sensor for obstacle distance.
      </p>

      <p>
        We tuned detection thresholds, steering commands, and line-recovery
        logic through course testing. The final robot completed the challenge in
        26 seconds.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/mobile_robot.jpg"
        width={715}
        height={482}
        alt="Differential-drive robot following a curved line beneath the moving obstacle walls"
        caption="Robot combines IR line tracking and ultrasonic obstacle detection for course navigation"
        crop={{ x: 170, y: 40, width: 470, height: 340 }}
      />

      <h2>Sensor integration</h2>

      <p>
        We characterized the infrared sensor responses and selected thresholds
        to distinguish the line from the surrounding surface.
      </p>

      <p>
        The ultrasonic sensor provided an independent obstacle check. When an
        obstacle entered the detection range, the controller stopped both
        motors.
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

      <p>
        We tuned thresholds and motor-speed differences on the course to balance
        recovery from large deviations with stable tracking.
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
