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
        caption="Line-following robot on the obstacle course"
        crop={{ x: 170, y: 40, width: 470, height: 340 }}
      />

      <h2>Control algorithm</h2>

      <p>
        Three infrared sensors detect the line, and the controller uses their
        readings to adjust the left and right motor speeds. When the line is
        centered, both motors drive forward. When it moves to one side, the
        controller changes the motor speeds to steer back toward it, applying
        stronger corrections for larger deviations. An ultrasonic sensor
        measures obstacle distance and stops both motors when an obstacle enters
        the detection range.
      </p>

      <p>
        If all three infrared sensors lose the line, the controller searches
        toward the side that detected it most recently. We used sensor-response
        measurements and course testing to refine the detection thresholds,
        motor-speed differences, and recovery logic, balancing stable tracking
        with recovery from larger deviations.
      </p>

      <h2>Results</h2>

      <p>
        The robot followed the curved course and stopped for moving obstacles,
        completing the challenge in 26 seconds and outperforming 75% of the
        other robots. Testing demonstrated the combined line-following,
        obstacle-stop, and line-recovery logic under the course conditions.
      </p>
    </>
  );
}
