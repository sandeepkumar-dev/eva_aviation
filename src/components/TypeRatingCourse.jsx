// CourseDetail.js
import React from 'react';
import {useParams} from 'react-router-dom';

const TypeRatingCourse = () => {
  const {courseId} = useParams();

  const coursesData = {
    a320: {
      maintitle: 'AIRBUS A320 TYPE RATING ',
      description:
        'Type rating is a type of aircraft certification that is granted by aviation authorities to pilots who have completed training and testing on a specific type of aircraft. This type of certification allows the pilot to operate that type of aircraft  This course includes both theoretical training and training in Full Flight Simulator . ',
      promis:
        'Eva Aviation Academy offers you the best quality type rating for Airbus A320 in accordance with the Indian DGCA curriculum .',
      subtitle1: ' Prerequisite for Airbus 320 type rating - ',
      course_point: [
        'CPL + IR ( With minimum 25 hours of Multi engine experience , not more than 10 hours in multi engine simulator )',
        'Class 1 Medical',
        'ELP, ICAO Level 4',
        'FRTOL ',
      ],
      subtitle2: 'Airbus A320 Type rating + MCC/ JOC Course details  - ',
      course_point2: [
        'Minimum 72 hours A320 ground training ',
        'APT sessions ',
        'Technical and Performance exam',
        'Minimum 12 hours of MCC/JOC ground training',
        '11 FFS sessions ( including Skill test by Day and Night with IR/PPC ) ( Each session 4 hours  )',
      ],
      p: 'We are partnered with Top type rating training organisations around the world and each of these organisations have experience of training students from India as per Indian DGCA syllabus . These TRTO s offer top class training , they have great reputation in the market ,  training is done with highly experienced instructors , they have state of the art training facilities , Modern Full flight simulators and nice accommodation facilities . ',
    },
    atr72: {
      maintitle: ' ATR 72-600 TYPE RATING',
      description:
        'Type rating is a type of aircraft certification that is granted by aviation authorities to pilots who have completed training and testing on a specific type of aircraft. This type of certification allows the pilot to operate that type of aircraft  This course includes both theoretical training and training in Full Flight Simulator . ',
      promis:
        'Eva Aviation Academy  offers you the best quality type rating for ATR72-600 in accordance with the Indian DGCA curriculum .',
      subtitle1: ' Prerequisite for ATR72-600 type rating - ',
      course_point: [
        'DGCA CPL + IR ',
        'Technical and Performance exam',
        'Class 1 Medical',
        'ELP, ICAO Level 4',
        'FRTOL ',
      ],
      subtitle2: 'ATR72-600 Type rating + MCC Course details  - ',
      course_point2: [
        'Minimum 72 hours ground training  ',
        'Minimum 12 hours of MCC ground training ',
        '3 FBS sessions of MCC ( Each session 4 hours ) ',

        '11 FFS sessions ( including Skill test by Day and Night & IR/PPC ) ( Each session 4 hours  )',
      ],
      p: 'We are partnered with Top type rating training organisations around the world and each of these organisations have experience of training students from India as per Indian DGCA syllabus . These TRTO s offer top class training , they have great reputation in the market ,  training is done with highly experienced instructors , they have state of the art training facilities , Modern Full flight simulators and nice accommodation facilities . ',
    },
    b737: {
      maintitle: 'BOEING B737 TYPE RATING',
      description:
        'Type rating is a type of aircraft certification that is granted by aviation authorities to pilots who have completed training and testing on a specific type of aircraft. This type of certification allows the pilot to operate that type of aircraft  This course includes both theoretical training and training in Full Flight Simulator . ',
      promis:
        'Eva Aviation Academy offers you the best quality type rating for  Boeing B737 in accordance with the Indian DGCA curriculum .',
      subtitle1: ' Prerequisite for Boeing B737 type rating - ',
      course_point: [
        'DGCA CPL + IR ',
        'Class 1 Medical',
        'ELP, ICAO Level 4',
        'FRTOL  ',
      ],
      subtitle2: 'Boeing B737 Type rating + MCC/ JOC Course details  - ',
      course_point2: [
        'Minimum 72 hours B737 ground training  ',
        'Technical and Performance exam ',
        'Minimum 12 hours of MCC/JOC ground training ',
        '5 FBS sessions of MCC/JOC ( Each session 4 hours )',
        '11 FFS sessions (including Skill test by Day and night &IR/PPC) (Each sessions 4 hours )',
      ],
      p: 'We are partnered with Top type rating training organisations around the world and each of these organisations have experience of training students from India as per Indian DGCA syllabus . These TRTO s offer top class training , they have great reputation in the market ,  training is done with highly experienced instructors , they have state of the art training facilities , Modern Full flight simulators and nice accommodation facilities . ',
    },
  };

  const course = coursesData[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-body">
      <h1>{course.maintitle}</h1>
      <div className="course-container">
        <p className="Type-rating-content">{course.description}</p>
        <h3 className="Type-rating-content">{course.promis}</h3>
        <div>
          <strong>
            <p>{course.subtitle1}</p>
          </strong>
          <br />

          <ul>
            {course.course_point.map((index) => (
              <li>{index}</li>
            ))}
          </ul>
        </div>
        <br />
        <div>
          <strong>
            <p>{course.subtitle2}</p>
          </strong>
          <br />
          <ul>
            {course.course_point2.map((index) => (
              <li>{index}</li>
            ))}
            {/* <li>Minimum 72 hours A320 ground training </li>
            <li>APT sessions </li>
            <li>Technical and Performance exam</li>
            <li>Minimum 12 hours of MCC/JOC ground training </li>
            <li>
              11 FFS sessions ( including Skill test by Day and Night with
              IR/PPC ) ( Each session 4 hours )
            </li> */}
          </ul>
        </div>
        <br />
        <div>
          <br />
          <p className="Type-rating-content">{course.p}</p>
        </div>
      </div>
    </div>
  );
};

export default TypeRatingCourse;
