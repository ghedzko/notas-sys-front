import React from "react"
import "./Input.scss"

export interface InputProps {
    label: string
    id: string
    autofocus?: boolean
    value: string
    onChange: (arg0: any) => void
    type?: string
}

export const Input: React.FC<InputProps> = ({
    label,
    id,
    autofocus = false,
    value,
    onChange,
    type = "text",
}) => {
    return (
        <div className="input-container">
            <label className="input-container__label" htmlFor={id}>
                {label}
            </label>
            <input
                className="input-container__input"
                type={type}
                id={id}
                autoFocus={autofocus}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
