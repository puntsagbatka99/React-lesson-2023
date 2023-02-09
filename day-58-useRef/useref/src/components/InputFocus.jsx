import { useRef } from "react"

export default function InputFocus() {
    const inputUseRef = useRef(null)
    function handleFocus() {
        inputUseRef.current.focus();
    }
    function handleBlur() {
        inputUseRef.current.blur();
    }
    return (
        <div>
            <input type="text" ref={inputUseRef} />
            <div>
                <button onClick={handleFocus}>Focus</button>
                <button onClick={handleBlur}>Blur</button>
            </div>
        </div>
    )
}