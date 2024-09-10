<template>
    <button :class="buttonClass" :disabled="disabled" :selected="selected" :selectedFemale="selectedFemale" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: 'primary'
      },
      selected: {
        type: Boolean,
        default: false
      },
      selectedFemale: {
        type: Boolean,
        default: false
      },
      point: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClass() {
        return {
          'btn': true,
          // [`btn-${this.variant}`]: true,
          'btn-disabled': this.disabled,
          'btn-selected': this.selected,
          'btn-selected-female': this.selectedFemale,
          'btn-point': this.point,
        };
      }
    },
    methods: {
      // handleClick(event) {
      //   if (!this.disabled) {
      //     this.$emit('click', event);
      //   }
      // }
    }
  };
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    margin: 5px
  }
  
  .btn-primary {
    background-color: rgb(245,250,255);
    color: rgb(121, 121, 121);
  }
  
  .btn-disabled {
    background-color: rgb(245,250,255);
  }

  .btn-selected {
    background-color: #f2f6fcbd;
    color: #4aa1ff;
    box-shadow: 0 0 0 1px #4aa1ff inset;
  }

  .btn-selected-female {
    background-color: rgba(250, 244, 245, .3);
    box-shadow: 0 0 0 1px rgb(255, 136, 221) inset;
    color: #e281bb;
  }

  .btn-point {
    background-color: rgba(250, 244, 245, .3);
    box-shadow: 0 0 0 1px rgb(154,53,69) inset;
    color: #802020;
  }
  </style>
  