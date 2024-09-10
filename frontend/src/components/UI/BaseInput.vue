<template>
    <div class="base-input">
      <label v-if="label">{{ label }}</label>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "BaseInput",
    props: {
      modelValue: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "text"
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: ""
      },
        required: {
            type: Boolean,
            default: false
        }
    }
  };
  </script>
  
  <style scoped>
  
  label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }
  
  input {
  font-size: 15px;
  color: #222222;
  width: 250px;
  height: 21px;
  border: none;
  padding: 5px 0px 5px 10px;
  margin: 10px 10px 10px 0px;
  border-radius: 8px;
  background-color: #eeeeee;
}
input::placeholder {
  color: #aaaaaa;
}

  </style>
  