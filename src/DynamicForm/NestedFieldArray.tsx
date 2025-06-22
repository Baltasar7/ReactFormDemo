import { useFieldArray } from "react-hook-form";

export const NestedFieldArray = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `formArray.${nestIndex}.nestedArray`
  });

  return (
    <div className="nestedBlock">
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            {k === 0 && <label>選択肢：</label>}
            <input className="nestedInput"
              {...register(`formArray.${nestIndex}.nestedArray.${k}.field`)}
              style={{ marginRight: "25px", display: "inline" }} />
            <button type="button" onClick={() => remove(k)}
              style={{ display: "inline" }}>
              削 除
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() =>
          append({
            field: '',
          })
        }
      >
        追 加
      </button>
    </div>
  );
};
