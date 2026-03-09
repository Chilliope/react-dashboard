type Color = {
    color: string,
    name: string
}

type ColorPickerProps = {
    colors: Color[],
    color: string,
    setColor: (color: string) => void
}

export default function ColorPicker({ setColor, color, colors }: ColorPickerProps) {
    return (
        <select className="border p-2 mt-2"
        value={color}
        onChange={(e) => setColor(e.target.value)}>
            {colors.map((col) => (
                <option key={col.name} value={col.color}>{col.name}</option>
            ))}
        </select>
    )
}