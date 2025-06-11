<template>
  <div class="mt-6">
    <form class="w-full rounded-lg" @submit.prevent="handleSubmit">
      <div class="space-y-5">
        <FormInput
          id="name"
          v-model="form.name"
          label="الاسم كامل"
          placeholder="الاسم"
          :error="errors.name"
          :is-dirty="formState.name.dirty"
          :is-blurred="formState.name.blurred"
          @blur="handleBlur('name')"
          @dirty="setDirty('name', $event)"
        />

        <FormInput
          id="email"
          v-model="form.email"
          label="البريد الالكتروني"
          placeholder="البريد الخاص بك"
          type="email"
          :error="errors.email"
          :is-dirty="formState.email.dirty"
          :is-blurred="formState.email.blurred"
          @blur="handleBlur('email')"
          @dirty="setDirty('email', $event)"
        />
        <FormInput
          id="phone"
          v-model="form.phone"
          label="الجوال"
          placeholder="(+966) | 564 633 241"
          type="tel"
          :error="errors.phone"
          :is-dirty="formState.phone.dirty"
          :is-blurred="formState.phone.blurred"
          @blur="handleBlur('phone')"
          @dirty="setDirty('phone', $event)"
        />
        <FormOptionInput
          id="type"
          v-model="form.type"
          label="نوع الرسالة"
          placeholder="اختر نوع الرسالة"
          type="select"
          :error="errors.type"
          :is-dirty="formState.type.dirty"
          :is-blurred="formState.type.blurred"
          @blur="handleBlur('type')"
          @dirty="setDirty('type', $event)"
        />
        <FormTextarea
          id="message"
          v-model="form.message"
          label="الرسالة"
          placeholder="التفاصيل"
          :rows="2"
          :error="errors.message"
          :is-dirty="formState.message.dirty"
          :is-blurred="formState.message.blurred"
          @blur="handleBlur('message')"
          @dirty="setDirty('message', $event)"
        />
        <Button
          type="submit"
          class="py-5 px-12 font-medium text-xs bg-primary text-white"
        >
          {{ loading ? "جاري الارسال" : "إرسال الرسالة" }}
        </Button>
      </div>
    </form>
    <div
      v-if="showPopup"
      class="fixed inset-0 px-4 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div v-if="!err" class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h3 class="text-2xl font-bold text-darkblue-500 mb-4">
          تم الإرسال بنجاح!
        </h3>
        <p class="text-darkblue-500">شكرًا لتواصلك معنا. سنرد عليك قريبًا.</p>
        <button
          class="mt-4  bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
          @click="showPopup = false"
        >
          إغلاق
        </button>
      </div>
      <!-- <div v-else class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h3 class="text-2xl font-bold text-red-500 mb-4">
          حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى لاحقًا
        </h3>
        <p class="text-gray-700">شكرًا لتواصلك معنا.</p>
        <button
          class="mt-4 bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          @click="showPopup = false"
        >
          إغلاق
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";

const schema = yup.object().shape({
  type: yup.string().required("نوع الرسالة مطلوب"), // Added validation for type
  name: yup.string().required("الاسم مطلوب"),
  phone: yup.string()
  .required('رقم الجوال مطلوب')
  .matches(/^\+?[0-9]{10,}$/, 'يجب أن يحتوي على أرقام فقط (10 أرقام على الأقل)')
  .min(10, 'يجب أن يكون طول الرقم 10 أرقام على الأقل')
  .max(15, 'يجب ألا يتجاوز طول الرقم 15 رقماً'),
  email: yup
    .string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),
  message: yup.string().required("الرسالة مطلوبة"),
});

interface Form {
  type: string;
  name: string;
  email: string;
  phone:string;
  message: string;
  [key: string]: string;
}

const form = ref<Form>({
  type: "", // Added type field
  name: "",
  email: "",
  phone:"",
  subject: "",
  message: "",
});

const errors = ref<Errors>({});
const formState = ref<FormState>(createFormState());
const showPopup = ref(false);
const err = ref(false);
const loading = ref(false);

function createFormState(): FormState {
  return ["type", "name", "email", "phone", "message"].reduce(
    (state, field) => {
      state[field] = { dirty: false, blurred: false };
      return state;
    },
    {} as FormState,
  );
}

function setDirty(field: string, isDirty: boolean) {
  formState.value[field].dirty = isDirty;
  validateField(field);
}

function handleBlur(field: string) {
  formState.value[field].blurred = true;
  validateField(field);
}

async function validateField(field: string) {
  try {
    const fieldSchema = yup.reach(schema, field) as yup.StringSchema;
    await fieldSchema.validate(form.value[field]);
    errors.value[field] = "";
  }
 catch (err) {
    if (err instanceof Error) {
      errors.value[field] = err.message;
    }
  }
}

async function handleSubmit() {
  try {
    Object.keys(formState.value).forEach((field) => {
      formState.value[field].dirty = true;
      formState.value[field].blurred = true;
    });
    loading.value = true
    await schema.validate(form.value, { abortEarly: false });
    showPopup.value = true;
    resetForm();
  }
 catch (err: any) {
    if (yup.ValidationError.isError(err)) {
      err.inner.forEach((error: any) => {
        if (error.path) {
          errors.value[error.path] = error.message;
        }
      });
    }
 else {
      console.error("حدث خطأ غير متوقع:", err);
    }
  }
 finally {
    loading.value = false
  }
}

function resetForm() {
  form.value = {
    type: "",
    name: "",
    email: "",
    phone:"",
    message: "",
  };
  errors.value = {};
  formState.value = createFormState();
}
</script>
