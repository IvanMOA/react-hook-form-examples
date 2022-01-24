import React from 'react';
export function BlogForm({ form }) {
  const { register, watch } = form;
  const values = watch();
  console.log(values);
  return (
    <div>
      <label /> Title
      <input {...register('title')} type="text" />
      <label /> Content
      <input {...register('content')} type="text" />
    </div>
  );
}
