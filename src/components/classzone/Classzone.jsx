import React, { useState } from 'react';
import './Classzone.css';
import { useNavigate } from 'react-router-dom';

const Classzone = () => {
  const [zones, setZones] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();  // Use the useNavigate hook

  function handleZone() {
    setZones([...zones, `Zone ${zones.length + 1}`]);
  }

  function startEditing(index) {
    setIsEditing(index);
    setNewName(zones[index]);
  }

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function saveName(index) {
    const updatedZones = zones.map((zone, i) => (i === index ? newName : zone));
    setZones(updatedZones);
    setIsEditing(null);
  }

  function deleteZone(index) {
    const updatedZones = zones.filter((_, i) => i !== index);
    setZones(updatedZones);
  }

  function handlenavigate(zoneName) {
    navigate('/Create', { state: { zoneName } });
  }
  

  return (
    <div className='classzone-body'>
      <div className='create-zone-box' onClick={handleZone}>
        <img
          className='create-zone-img'
          src="https://img.icons8.com/?size=48&id=IA4hgI5aWiHD&format=png"
          alt="Create Zone"
        />
        <h1 className='create-zone-name'>Create Zone</h1>
      </div>
      <div className='zone-box-dis'>
        {zones.map((zone, index) => (
          <div key={index} className='zone-box'>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={handleNameChange}
                  className='zone-edit-input'
                />
                <button onClick={() => saveName(index)} className='zone-save-button'>Save</button>
              </>
            ) : (
              <>
                <h2 className='zone-name' onClick={()=>handlenavigate(zone)}>{zone}</h2>
                <button onClick={() => startEditing(index)} className='zone-edit-button'>Edit</button>
                <button onClick={() => deleteZone(index)} className='zone-delete-button'>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classzone;
