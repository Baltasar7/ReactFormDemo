import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormTemplate = {
  formArray: {
    type: string;
    label: string;
    nestedArray: { field: string }[];
  }[];
};

export const AnswerForm = () => {
  const [formTemplate, setFormTemplate] = useState<FormTemplate | null>(null);

  const { register, handleSubmit, formState: { errors }} = useForm();

  useEffect(() => {
    fetch("/data/form_template.json")
      .then((res) => res.json())
      .then((data) => setFormTemplate(data));
  }, []);

  const onSubmit = async (data: any) => {
    const result = {
      formArray: formTemplate?.formArray.map((item, index) => ({
        ...item,
        answer: data?.formArray?.[index]?.value || null
      }))
    };

    console.log("回答結果:", result);

    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form_answer.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // ▼ 以下はサーバーに送信する処理（参考：コメントアウト）
    /*
    try {
      const response = await fetch("/data/form_answer.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result)
      });

      if (!response.ok) {
        throw new Error("保存に失敗しました");
      }

      console.log("保存成功");
    } catch (err) {
      console.error("保存エラー:", err);
    }
    */
  };

  if (!formTemplate) return <p>読み込み中...</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h1>質問表回答フォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formTemplate.formArray.map((item, index) => {
          const baseName = `formArray.${index}`;
          const error = errors?.formArray?.[index]?.value;

          return (
            <div key={index} style={{ marginBottom: "1.5rem", textAlign: "left" }}>
              {item.type !== "Checkbox" && (
                <label style={{ display: "block", fontWeight: "bold" }}>{item.label}</label>
              )}

              <div style={{ marginTop: "0.5rem", textAlign: "left" }}>
                {(() => {
                  switch (item.type) {
                    case "Textbox":
                      return (
                        <input
                          type="text"
                          style={{ border: "1px solid #ccc", padding: "0.4rem", width: "100%" }}
                          {...register(`${baseName}.value`, { required: true })}
                        />
                      );
                    case "Textarea":
                      return (
                        <textarea
                          style={{ border: "1px solid #ccc", padding: "0.4rem", width: "100%" }}
                          {...register(`${baseName}.value`, { required: true })}
                        />
                      );
                    case "Checkbox":
                      return (
                        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <input
                            type="checkbox"
                            {...register(`${baseName}.value`, { required: true })}
                          />
                          {item.label}
                        </label>
                      );
                    case "Selectbox":
                      return (
                        <select
                          defaultValue=""
                          {...register(`${baseName}.value`, { required: true })}
                        >
                          <option value="" disabled>選択してください</option>
                          {item.nestedArray.map((opt, i) => (
                            <option key={i} value={opt.field}>
                              {opt.field}
                            </option>
                          ))}
                        </select>
                      );
                    case "Radiobutton":
                      return item.nestedArray.map((opt, i) => (
                        <label key={i} style={{ display: "block" }}>
                          <input
                            type="radio"
                            value={opt.field}
                            {...register(`${baseName}.value`, { required: true })}
                          />
                          {opt.field}
                        </label>
                      ));
                    case "MultiCheckbox":
                      return item.nestedArray.map((opt, i) => (
                        <label key={i} style={{ display: "block" }}>
                          <input
                            type="checkbox"
                            value={opt.field}
                            {...register(`${baseName}.value`, { required: true })}
                          />
                          {opt.field}
                        </label>
                      ));
                    default:
                      return <p>未対応のタイプ: {item.type}</p>;
                  }
                })()}
              </div>

              {error && (
                <p style={{ color: "red", marginTop: "0.5rem" }}>この項目は必須です</p>
              )}

              <hr style={{ width: "90%", marginTop: "1rem", marginBottom: "1rem" }} />
            </div>
          );
        })}
        <button type="submit">回答</button>
      </form>
    </div>
  );
};
