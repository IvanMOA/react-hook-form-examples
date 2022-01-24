import React from 'react';
import './style.css';
import { BlogForm } from './BlogForm';
import { useForm } from 'react-hook-form';
export default function App() {
  const firstForm = useForm();
  const values = firstForm.watch();
  console.log(values);
  return (
    <div>
      <BlogForm form={firstForm} />
      {/* <BlogForm /> */}
    </div>
  );
}
