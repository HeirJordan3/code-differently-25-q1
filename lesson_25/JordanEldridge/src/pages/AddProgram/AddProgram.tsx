import './AddProgram.scss';
import React, {useState} from 'react';

const AddProgram: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() && description.trim()) {
      console.log('New Program Submitted:', {title, description});
      setSubmitted(true);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-program-page">
      <h2>Add a New Program</h2>
      {submitted && <p className="success-message">Program submitted!</p>}
      <form onSubmit={handleSubmit} className="program-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Program</button>
      </form>
    </div>
  );
};

export default AddProgram;
