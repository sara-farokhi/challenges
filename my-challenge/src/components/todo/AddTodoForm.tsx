import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTodoStore } from "../../store/useTodoStore";
import CustomTextField from "../ui/CustomTextField";
import CustomButton from "../ui/CustomButton";
import { checkPersianCharacters } from "../../utils/checkPersianCharacters";

const schema = z.object({
  title: z
    .string()
    .min(3, "حداقل ۳ حرف وارد کنید")
    .regex(checkPersianCharacters, "فقط حروف فارسی مجاز است")
    .refine((val) => val.trim().length > 0, {
      message: "مقدار نمیتواند خالی باشد",
    }),
});

type FormData = z.infer<typeof schema>;

const AddTodoForm = () => {
  const { addTodo } = useTodoStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    addTodo(data.title);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
    >
      <CustomTextField
        label="عنوان"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        fullWidth
        variant="filled"
        bgColor="#fff8e1"
        borderColor="#ff9800"
      />

      <CustomButton
        type="submit"
        variant="contained"
        bgColor="#ff9800"
        textColor="#fff"
        hoverBgColor="#e65100"
      >
        افزودن
      </CustomButton>
    </form>
  );
};

export default AddTodoForm;
