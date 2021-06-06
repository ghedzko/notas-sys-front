import React, { ChangeEvent } from "react"
import { Input } from "../Input"

export interface DatepickerProps {
    label: string
    id: string
    value: string
    onChange: (arg0: ChangeEvent<HTMLInputElement>) => void
}

export const Datepicker: React.FC<DatepickerProps> = ({
    label,
    id,
    value,
    onChange,
}) => {
    return (
        <Input
            type="date"
            label={label}
            id={id}
            value={value}
            onChange={onChange}
        />
    )
}
