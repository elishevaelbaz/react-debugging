import React, { Component } from 'react';
import InstructorCard from './InstructorCard'

export default class InstructorContainer extends Component {
  render() {
    return (
        <div className="ui container">
            <InstructorCard instructor = {instructors[0]}/>
            <InstructorCard instructor = {instructors[1]}/>
            <InstructorCard instructor = {instructors[2]}/>
        </div>
    );
  }
}
