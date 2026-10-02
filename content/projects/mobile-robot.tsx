import Image from "next/image";

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

      <h2>Sensor Integration</h2>

      <p>
        We characterized the infrared sensor responses and selected thresholds
        to distinguish the line from the surrounding surface.
      </p>

      <p>
        The ultrasonic sensor provided an independent obstacle check. When an
        obstacle entered the detection range, the controller stopped both
        motors.
      </p>

      <h2>Control Algorithm</h2>

      <p>
        The controller adjusted the left and right motor speeds from the
        infrared readings. A centered reading commanded forward motion; side
        readings commanded differential steering, with stronger corrections for
        larger deviations.
      </p>

      <p>
        The controller stored the side that most recently detected the line. If
        all three sensors lost it, that state determined the search direction.
      </p>

      <p>
        We tuned thresholds and motor-speed differences on the course to balance
        recovery from large deviations with stable tracking.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/mobile_robot.jpg"
          alt="Mobile robot navigating an obstacle course with sliding walls"
          width={715}
          height={482}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 1</span>Robot navigating obstacle
          course
        </figcaption>
      </figure>

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
