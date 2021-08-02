import React from "react";
import "./input.scss";

export const Input = ({
  type,
  value,
  placeholder,
  error,
  className,
  onChange,
  onChangeText,
  onBlur,
  onKeyPress,
  onEnter,
  spanClassName,
  ...restProps
}) => {
  const onChangeCallback = (e) => {
    onChange && onChange(e);

    onChangeText && onChangeText(e.currentTarget.value);
  };

  const onKeyPressCallback = (e) => {
    onKeyPress && onKeyPress(e);

    onEnter && e.key === "Enter" && onEnter();
  };

  const onBlurCallback = (e) => {
    onBlur && onBlur(e);
  };

  const errorInput = "errorInput";
  const finalSpanClassName = `error ${spanClassName ? spanClassName : ""}`;
  const finalInputClassName = `input ${error ? errorInput : ""} ${className}`;

  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        onBlur={onBlurCallback}
        placeholder={placeholder}
        className={finalInputClassName}
        {...restProps}
      />
      {error && <div className={finalSpanClassName}>{error}</div>}
    </>
  );
};
