
interface IButton {
    text: string
    bgColor?: string
    [key: string]: any
}

function Button({ text, bgColor='bg-slate-400', ...rest }: IButton) {
    return (
        <button {...rest} className={`p-2 rounded-md ${bgColor}`}>{text}</button>

    )
}

export default Button