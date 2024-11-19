//MyNotes.jsx(frontend)
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Title from "./Title";
import "../styles/mynotes.css";
import "../styles/title.css";
// import notes from "../utils/Hard Coded Data/notes";
import axios from "axios";



const MyNotes = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const deleteHandler = (x) => {
    alert(`Are you sure, you want to delete ${x}`);
  };

  const [ notesData, setNotesData ] = useState([]);

  const fetchNotesData = async () => {
    try {
      const  data  = await axios.get("/mynotes");
      console.log(data);
      setNotesData(data);
    } catch (error) {
      console.error("Error fetching notesss:", error);
    }
  };

  useEffect(()=>{
    fetchNotesData();
  },[]);
  
  return (
    <>
      <Title title={"Hey there! Vishesh Verma"} />
      <div className="my-notes-container">
        <button className="create-note-btn">Create New Note</button>

        {notesData.map((n) => {
          return (
            <div className="accordion" key={n._id}>
              <div className="accordion-header">
                <h3 className="accordion-title">{n.title}</h3>
                <div className="accordion-buttons">
                  <NavLink to={`/mynotes/${n._id}`}>
                    <button className="edit-btn">Edit</button>
                  </NavLink>
                  <button className="delete-btn" onClick={() => deleteHandler(n._id)}>
                    Delete
                  </button>
                </div>
              </div>

              {activeAccordion === n._id && (
                <div className="accordion-body">
                  <p className="note-date">Date: {new Date().toLocaleDateString()}</p>
                  <p className="note-description">{n.content}</p>
                  <button className="category-btn">{n.category}</button>
                  <h5 className="note-id">ID: {n._id}</h5>
                </div>
              )}

              <button
                className="toggle-accordion-btn"
                onClick={() => toggleAccordion(n._id)}
              >
                {activeAccordion === n._id ? "Close" : "View Details"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyNotes;
