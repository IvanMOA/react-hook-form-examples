import React from 'react';
import './style.css';
import { BlogForm } from './BlogForm';
import { useForm } from 'react-hook-form';
export default function App() {
  const firstForm = useForm();
  const firstFormValues = firstForm.watch();
  const secondForm = useForm();
  const secondFormValues = secondForm.watch();
  return (
    <div>
      <BlogForm form={firstForm} />
      <BlogForm form={secondForm} />
    </div>
  );
}
