import { useFieldArray } from "react-hook-form";
import { NestedFieldArray } from "./NestedFieldArray";

let renderCount = 0;

export const FieldArray = ({ control, register, watch }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "formArray"
  });

  const watchFormArray = watch("formArray");
  const watchNestedArrayCount = index => {
    return watchFormArray[index].nestedArray.length > 0 ? true : false;
  }
  const isSingleTypeSelected = index => {
    return watchFormArray[index].type == "Textbox" ||
      watchFormArray[index].type == "Textarea" ||
      watchFormArray[index].type == "Checkbox" ?
      true : false;
  }
  const isNestedTypeSelected = index => {
    return watchFormArray[index].type == "Selectbox" ||
      watchFormArray[index].type == "Radiobutton" ||
      watchFormArray[index].type == "MultiCheckbox" ?
      true : false;
  }
  const isRenderSelectboxPreview = index => {
    return watchNestedArrayCount(index) &&
      watchFormArray[index].type == "Selectbox" ?
      true : false;
  }
  const isRenderRadiobuttonPreview = index => {
    return watchNestedArrayCount(index) &&
      watchFormArray[index].type == "Radiobutton" ?
      true : false;
  }
  const isRenderMultiCheckboxPreview = index => {
    return watchNestedArrayCount(index) &&
      watchFormArray[index].type == "MultiCheckbox" ?
      true : false;
  }

  const renderSelectbox = index => {
    return (
      <>
        <label>{watchFormArray[index].label}</label>
        <select>
          {watchFormArray[index].nestedArray.map((field, fieldIndex) => (
            <option key={fieldIndex} value={field.field}>
              {field.field}
            </option>
          ))}
        </select>
      </>
    );
  }
  const renderRadiobutton = index => {
    return (
      <p>
        {watchFormArray[index].label}
        {watchFormArray[index].nestedArray.map((field, fieldIndex) => (
          <label key={`radioLabel${fieldIndex}`} className='radioLabel'>
            <input key={`radio${fieldIndex}`} type='radio'
              name={`radio${watchFormArray[index].label}`} value={field.field} />
            {field.field}
          </label>
        ))}
      </p>
    );
  }
  const renderMultiCheckbox = index => {
    return (
      <p>
        {watchFormArray[index].label}
        {watchFormArray[index].nestedArray.map((field, fieldIndex) => (
          <label key={`checkboxLabel${fieldIndex}`} className='checkboxLabel'>
            {field.field}
            <input key={`check${fieldIndex}`} type='checkbox'
              name={`radio${watchFormArray[index].label}`} />
          </label>
        ))}
      </p>
    );
  }

  renderCount++;
  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <div className="typeSelectBlock">
                <label>種類：</label>
                <select {...register(`formArray.${index}.type`)}>
                  <option value="Textbox">テキストボックス</option>
                  <option value="Textarea">テキストエリア</option>
                  <option value="Checkbox">チェックボックス</option>
                  <option value="Selectbox">セレクトボックス</option>
                  <option value="Radiobutton">ラジオボタン</option>
                  <option value="MultiCheckbox">複数チェックボックス</option>
                </select>
              </div>
              {isSingleTypeSelected(index) && <>
                <div className="labelBlock">
                  <label>ラベル：</label>
                  <input className="fieldArrayInput" {...register(`formArray.${index}.label`)}
                    style={{ marginRight: "25px", display: "inline" }} />
                  <button type="button" onClick={() => remove(index)}
                    style={{ display: "inline" }}>
                    削 除
                  </button>
                </div>
              </>}
              {isNestedTypeSelected(index) && <>
                <div className="labelBlock">
                  <label>ラベル：</label>
                  <input className="fieldArrayInput" {...register(`formArray.${index}.label`)}
                    style={{ marginRight: "25px", display: "inline" }} />
                  <button type="button" onClick={() => remove(index)}
                    style={{ display: "inline" }}>
                    削 除
                  </button>
                </div>
                <NestedFieldArray nestIndex={index} {...{ control, register }} />
              </>}
              <div className="previewSelectBox">
                {isRenderSelectboxPreview(index) && <>
                  <label>セレクトボックス プレビュー：</label>
                  {renderSelectbox(index)}
                </>}
                {isRenderRadiobuttonPreview(index) && <>
                  <label>ラジオボタン プレビュー：</label>
                  {renderRadiobutton(index)}
                </>}
                {isRenderMultiCheckboxPreview(index) && <>
                  <label>チェックボックス プレビュー：</label>
                  {renderMultiCheckbox(index)}
                </>}
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({
              type: '',
              label: '',
              nestedArray: [{ field: '' }]
            });
          }}
        >
          解答項目追加
        </button>
      </section>
      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
