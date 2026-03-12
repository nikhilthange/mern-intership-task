import { useState } from "react";
import "../css/DPRForm.css";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function DPRForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [workerCount, setWorkerCount] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      setError("You can upload maximum 3 images only");
      return;
    }

    setError("");
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !weather || !workDescription || !workerCount) {
      setError("Please fill all fields");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await API.post(
        `/projects/${id}/dpr`,
        {
          date,
          work_description: workDescription,
          weather,
          worker_count: Number(workerCount)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("DPR Submitted Successfully");
      navigate("/projects");
    } catch (err) {
      console.log(err);
      setError("Failed to submit DPR");
    }
  };

  return (
    <div className="dpr-container">
      <form className="dpr-form" onSubmit={handleSubmit}>
        <h2>Daily Progress Report</h2>

        {error && <p className="error-text">{error}</p>}

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Weather</label>
        <select
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
          required
        >
          <option value="">Select Weather</option>
          <option value="Sunny">Sunny</option>
          <option value="Cloudy">Cloudy</option>
          <option value="Rainy">Rainy</option>
        </select>

        <label>Work Description</label>
        <textarea
          value={workDescription}
          onChange={(e) => setWorkDescription(e.target.value)}
          required
        />

        <label>Worker Count</label>
        <input
          type="number"
          value={workerCount}
          onChange={(e) => setWorkerCount(e.target.value)}
          required
        />

        <label>Upload Photos</label>
        <input type="file" multiple accept="image/*" onChange={handleImages} />

        <div className="preview">
          {images.map((img, index) => (
            <img
              key={index}
              src={URL.createObjectURL(img)}
              alt={`preview-${index}`}
            />
          ))}
        </div>

        <button type="submit">Submit DPR</button>
      </form>
    </div>
  );
}

export default DPRForm;