import { useForm } from "react-hook-form";
import { FieldArray } from "./FieldArray";

import "./NestedForm.css";

const defaultValues = {
  formArray: [
    {
      type: '',
      label: '',
      nestedArray: [{ field: '' }]
    },
  ]
};

export const FormGenerator = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    errors,
    reset,
    setValue
  } = useForm({
    defaultValues
  });

  const onSubmit = data => {
    console.log("data", data);

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'form_template.json';
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>回答欄編集フォーム</h1>
      <FieldArray
        {...{ control, register, defaultValues, watch, errors }}
      />
      <button type="button" onClick={() => reset(defaultValues)}>
        リセット
      </button>
      <input type="submit" value="登録" />
    </form>
  );
}
