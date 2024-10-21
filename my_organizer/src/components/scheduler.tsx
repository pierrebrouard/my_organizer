'use client';

import { ChangeEvent, useState, FormEvent } from 'react';

interface Task {
    date: string;
    time: string;
    task: string;
}

export default function Scheduler() {
    const [schedule, setSchedule] = useState<Task[]>([]);
    const [formData, setFormData] = useState<Task>({
        date: '',
        time: '',
        task: ''
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.date && formData.time && formData.task) {
          if (isEditing && editIndex !== null) {
            const updatedSchedule = schedule.map((item, index) =>
              index === editIndex ? formData : item
            );
            setSchedule(updatedSchedule);
            setIsEditing(false);
            setEditIndex(null);
          } else {
            setSchedule([...schedule, formData]);
          }
          // Reset form data after submission
          setFormData({ date: '', time: '', task: '' });
        }
      };

    return (
        <div>
            <h2>Scheduler</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input 
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Task:</label>
                    <input
                        type="text"
                        name="task"
                        value={formData.task}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Add Task</button>
            </form>
            <div>
                <h3>Scheduled Tasks</h3>
                <ul>
                {schedule.map((item, index) => (
                    <li key={index}>
                    {item.date} at {item.time}: {item.task}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}