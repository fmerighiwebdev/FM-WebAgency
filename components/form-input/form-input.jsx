import styles from "../form/form.module.css";

import { forwardRef } from "react";

const FormInput = forwardRef(function FormInput({ children, type, name, textarea }, ref) {
  return (
    <div className={styles["input-block"]}>
      <label htmlFor={name}>{children}</label>
      {textarea ? (
        <textarea id={name} name={name} ref={ref} />
      ) : (
        <input type={type} id={name} name={name} ref={ref} />
      )}
    </div>
  )
});

export default FormInput;