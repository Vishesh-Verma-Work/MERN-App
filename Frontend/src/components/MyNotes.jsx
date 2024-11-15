import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Title from "./Title";
import "../styles/mynotes.css";
import "../styles/title.css";
import notes from "../utils/Hard Coded Data/notes";

const MyNotes = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const deleteHandler = (x) => {
    alert(`Are you sure, you want to delete ${x}`);
  };

  return (
    <>
      <Title title={"Hey there! Vishesh Verma"} />
      <div className="my-notes-container">
        <button className="create-note-btn">Create New Note</button>

        {notes.map((n) => {
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
