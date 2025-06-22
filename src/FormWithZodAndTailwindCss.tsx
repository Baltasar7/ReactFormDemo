//import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
// import { z } from 'zod';

// const schema = z.object({
//   items: z.array(
//     z.object({ category: z.string(), name: z.string(), price: z.string() })
//   )
// });

// type FormData = z.infer<typeof schema>;

const initialValue = { category: '', name: '', price: '' };

export const FormWithZodAndTailwindCss: FC = () => {
  const { register, handleSubmit, control } = useForm<FormData>({
    // resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      items: [initialValue]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitted(true);
    console.log(data.items);
  };

  return (
    <div className="flex flex-col p-10 items-center justify-center gap-5">
      <h1 className="font-bold text-lg">商品登録</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col items-center justify-center gap-5">
          {fields.map((field, index) => {
            const isFirstField = index === 0;
            return (
              <div
                className="w-full flex items-center gap-3"
                key={field.id}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-xs">カテゴリ</p>
                  <select
                    defaultValue={field.category}
                    className="bg-white border border-black px-2.5 py-1.5 w-32"
                    {...register(
                      `items.${index}.category`
                    )}
                  >
                    <option value="food">食品</option>
                    <option value="drink">飲料</option>
                    <option value="sundries">雑貨</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs">商品名</p>
                  <input
                    defaultValue={field.name}
                    className="w-64 bg-white border border-black px-2.5 py-1.5"
                    {...register(
                      `items.${index}.name`
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs">値段（円）</p>
                  <div className="flex gap-5">
                    <input
                      defaultValue={field.price}
                      className="w-32 bg-white border border-black px-2.5 py-1.5"
                      {...register(
                        `items.${index}.price`
                      )}
                    />
                    <span
                      data-is-first={isFirstField}
                      className="flex items-center px-3 py-2 cursor-pointer rounded-3xl gap-1 text-xs"
                      onClick={() =>
                        isFirstField
                          ? append(initialValue)
                          : remove(index)
                      }
                    >
                      {isFirstField ? '行を追加' : '削除'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="
          p-1.5 rounded w-36 bg-gray">
          登録
        </button>
        {isSubmitted && <p>登録しました</p>}
      </form>
    </div>
  );
};
