import React, { Component } from 'react';

export default class InstructorCard extends Component {
  render() {
    //   Destructuring Props
    const {image_url, name, hired} = instructor
    return (
        <div class="ui card">
            <div class="image">
                {/* the instructor image goes inside of the src */}
                <img src={image_url} alt ={`${name}`}/>
            </div>
            <div class="content">
                <span class="header">{name}</span>
                <div class="meta">
                    <span class="date">Hired in {hired}</span>
                </div>
                <div class="description">
                    Position: {position}
                </div>
            </div>
        </div>
    );
  }
}
