import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import Swal from "sweetalert2";
import { Rating } from 'react-simple-star-rating'



export default function AddFeedback() {
    const [rating, setRating] = useState(0);
    const [course, setCourse] = useState('');
    const [student, setStudent] = useState('');
    const [feedback, setFeedback] = useState('');
    const [checkbox, setCheckbox] = useState(false);

  // Function to get current time in hh:mm format (12-hour clock)
const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let period = "AM";
  
    // Determine the period (AM or PM)
    if (hours >= 12) {
      period = "PM";
      hours = hours === 12 ? 12 : hours - 12;
    }
  
    // Add leading zero if hours/minutes is less than 10
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
  
    return `${hours}:${minutes} ${period}`;
  };

  // Function to get current date in yyyy-mm-dd format
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    // Add leading zero if month/day is less than 10
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const [vehicleNumberError, setVehicleNumberError] = useState('');

  const handleStudentChange = (e) => {
    setStudent(e.target.value);
    validateVehicleNumber(e.target.value);
  };

  const validateVehicleNumber = (value) => {
    const pattern = /^[A-Za-z]{2}-\d{4}$/;
    const isValid = pattern.test(value);

    if (isValid) {
      setVehicleNumberError('');
    } else {
      setVehicleNumberError('Please enter a valid Sri Lanka vehicle number (e.g., AB-1234)');
    }
  };

    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    const postData = () => {
        const feedbacks = {
            course: course,
            student: student,
            rating: rating,
            feedback: feedback
        }

        console.log(feedbacks);

        if(course.length < 3){
            Swal.fire({
                icon: 'warning',
                title: 'Attention',
                text: 'Vehicle Name is too short!!',
                background: '#fff',
                confirmButtonColor: '#eb4034',
                confirmButton:true,
                iconColor: '#60e004',
                closeOnConfirm: true,
                
            })
            

        }else if(student.length < 3){
            Swal.fire({
                icon: 'warning',
                title: 'Attention',
                text: 'Vehicle Name is too short!!',
                background: '#fff',
                confirmButtonColor: '#eb4034',
                confirmButton:true,
                iconColor: '#60e004',
                closeOnConfirm: false,
                timer:2800000
            })
            
        }
        // else if(rating <= 0 || rating >5){
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'Attention',
        //         text: 'Invalid Rating Value!!',
        //         background: '#fff',
        //         confirmButtonColor: '#eb4034',
        //         confirmButton:true,
        //         iconColor: '#60e004',
        //         closeOnConfirm: false,
        //         timer:2800000
        //     })
        // }
        // else if(feedback.length <= 5){
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'Attention',
        //         text: 'Feedback can not be shorter than 5 characters!!',
        //         background: '#fff',
        //         confirmButtonColor: '#eb4034',
        //         confirmButton:true,
        //         iconColor: '#60e004',
        //         closeOnConfirm: false,
        //         timer:2800000
        //     })
        // }
        else{
        axios.post('http://localhost:5000/feedback/',
            feedbacks,

        ).then(res => {

            console.log(res);

            if (res.status === 200) {
                // this.clearData();
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Vehicle has been added!!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004',
                    timer:2800000
                });



            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error in adding!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#e00404',
                    timer:2800000
                })

            }



        })
    }


    }



    return (
        <div className="flex flex-col px-5 pt-2 ">

            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className='items-center overflow-hidden'>
                        <div className=''>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' >
                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>Add Vehicle</p>
                                        <div class="">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Selection 
                                            number</label>
                                            <select
                                                type="text"
                                                required
                                                className="form-control "
                                                onChange={(e) => setCourse(e.target.value)}
                                                
                                            >
                                                 <option>Select From Here</option>
                                                <option>section 01</option>
                                                <option>section 02</option>
                                                <option>section 03</option>
                                                <option>section 04</option>
                                                <option>section 05</option>
                                                <option>section 06</option>
                                            </select>

                                        </div>
                                        <div className="form-group">
                                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Vehicle Number</label>
      <input
        type="text"
        required
        className="form-control"
        value={student}
        onChange={handleStudentChange}
      />
    {vehicleNumberError && <p className="error-message" style={{ color: 'red' }}>{vehicleNumberError}</p>}
  

                                        </div><p />

                                        <div className="grid  form-group">
                                            
                                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Time</label>
                                            <input
                                                type="text"
                                                required
                                                className="form-control"
                                                value={`${getCurrentDate()}       ${getCurrentTime()} `}
                                                onChange={(e) => setFeedback(e.target.value)}
                                            />

                                                                                
                                        </div><p />

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Feedback" onClick={postData} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}