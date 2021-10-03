import Course from './Course.js';
import { terms, getCourseTerm } from '../utilities/times.js';
import React, {useState} from 'react';

const CourseList = ({ courses }) => {
    const [term, setTerm] = useState('Fall');
    const termCourses = Object.values(courses).filter(course => term === getCourseTerm(course));
    const [selected, setSelected] = useState([]);
  
    return (
      <>
        <TermSelector term={term} setTerm={setTerm} />
        <div className="course-list">
        { termCourses.map(course => <Course key={course.id} course={ course } 
          selected={selected} setSelected={ setSelected } 
          />) 
        }
        </div>
     </>
    );
};

  
const TermButton = ({term, setTerm, checked}) => (
    <>
      <input type="radio" id={term} className="btn-check" checked={checked} autoComplete="off"
        onChange={() => setTerm(term)} />
      <label class="btn btn-success m-1 p-2" htmlFor={term}>
      { term }
      </label>
    </>
);
  
const TermSelector = ({term, setTerm}) => (
    <div className="btn-group">
    { 
      Object.values(terms).map(value => (
        <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
      ))
    }
    </div>
);
  

export default CourseList