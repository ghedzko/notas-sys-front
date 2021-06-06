import React, { FormEvent } from "react"

export interface DropdownOptionProps {
    value: string
    label: string
}

export interface DropdownProps {
    handleOnChange: (arg0: string) => void
    label: string
    name: string
    options: DropdownOptionProps[]
    value: string
}

export const Dropdown: React.FC<DropdownProps> = ({
    handleOnChange,
    label,
    name,
    options,
    value,
}) => {
    const handleSelectChange = (event: FormEvent<HTMLSelectElement>) => {
        var safeSearchTypeValue: string = event.currentTarget.value
        handleOnChange(safeSearchTypeValue)
    }

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleSelectChange}
            >
                {options.map((option: any) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    )
}
