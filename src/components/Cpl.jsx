import React from 'react';
// Assuming you have a styles.css file for styling

const Cpl = () => {
  return (
    <div className="course-body">
      <h1>Commercial Pilot License (CPL) Course Details</h1>

      <div className="course-container">
        {/* <h2>Qualifications and Prerequisites</h2> */}
        <strong>
          <p>SUBJECTS:</p>
        </strong>
        <br />
        <ul>
          <li>Navigation</li>
          <li>Meteorology</li>
          <li>Regulation</li>
          <li>Technical General</li>
          <li>RTR (A)</li>
          <br />
        </ul>
        <ol type="1">
          <li>
            For all Subjects, regular mock tests are taken so that the student
            can access himself at every level.
          </li>
          <li>
            After completion of the course, no. of tests are taken of the whole
            syllabus to give the student an exam like experience so he can
            prepare to finish the exam on time.
          </li>
          <li> All study material will be provided by the Academy.</li>
        </ol>
        <br />
        <strong>
          <p>Air Navigation</p>
        </strong>
        <br />
        <ul>
          <li>
            Air navigation, including the use of aeronautical charts,
            instruments and navigation aids; an understanding of the principles
            and characteristics of appropriate navigation systems; operation of
            airborne equipment; practical aspects of air navigation and dead
            reckoning techniques.
          </li>
          <li>Practical air navigation using radio navigation aids.</li>
          <li>
            Use, accuracy and reliability of navigation systems used in
            departure en-route, approach and landing phases of flight;
            identification of radio navigation aids.
          </li>
        </ul>
        <strong>
          <p>Meteorology</p>
        </strong>
        <br />
        <ul>
          <li>
            An Interpretation and application of aeronautical meteorological
            reports, charts and forecasts, use of, and procedures for obtaining,
            meteorological information, pre-flight and in-flight;
            altimetry."Dgca Exam"
          </li>

          <li>
            Aeronautical meteorology; climatology of relevant areas in respect
            of the elements having an effect upon aviation; the movement of
            pressure systems, the structure of fronts and the origin and
            characteristics of significant weather phenomenon which affect
            take-off, en-route and landing conditions; hazardous weather
            avoidance.
          </li>
        </ul>

        <strong>
          <p>Air Regulation</p>{' '}
        </strong>
        <br />
        <ul>
          <li>
            Aircraft Act, 1934 - Chapter I, Section Short title and extent,
            definitions, the power to detain aircraft, the penalty for an act in
            contravention of rules made under the act, the penalty for flying so
            as to cause danger.
          </li>
          <li>Aircraft Rules, 1937</li>
          <li>Rules of the air</li>
          <li>Appropriate air traffic services practices and procedures.</li>
        </ul>
        <strong>
          <p>Technical General</p>
        </strong>
        <br />
        <ul>
          <li>Theory of Flight</li>
          <li>Airframe and Systems </li>
          <li>Electrical Systems</li>
          <li>Power Plant</li>
          <li>Emergency Equipment </li>
          <li>Subsonic Aerodynamics</li>
          <li>Transonic Aerodynamics </li>
          <li>Stability </li>
        </ul>
        <strong>
          <p>Radio Telephony Restricted RTR (A)</p>
        </strong>
        <br />
        <ul>
          <li>Part I - Transmission</li>

          <li>Part II - Theory</li>
          <li>RTR (A) Exam is conducted by WPC in every 2 months.</li>
          <li>Professional Training includes -75 hrs of Instruction.</li>
        </ul>
      </div>

      {/* <div className="course-container">
        <h2>Flight Training Requirements</h2>
        <ul>
          <li>Minimum Flight Hours: Around 150-250 hours</li>
          <li>
            Types of Flights: Cross-country, night, instrument flight, complex
            aircraft training
          </li>
          <li>Pass Practical Flight Test (Checkride)</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Ground School Training</h2>
        <ul>
          <li>
            Advanced Subjects: Advanced aerodynamics, navigation, aviation
            regulations, flight planning
          </li>
          <li>Pass Written Knowledge Test</li>
        </ul>
      </div>

      <div className="course-container">
        <h2>Additional Information</h2>
        <p>
          A Commercial Pilot License (CPL) allows you to work as a pilot for
          hire or compensation. It is a stepping stone towards becoming an
          airline transport pilot.
        </p>
      </div> */}
    </div>
  );
};

export default Cpl;
