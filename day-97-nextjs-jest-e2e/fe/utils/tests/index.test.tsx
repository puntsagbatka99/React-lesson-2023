import Home from "@/pages";
import "@testing-library/jest-dom"
import { fireEvent , render, screen } from "@testing-library/react"

describe("Calculator", () => {
    it("renders the calculator", () => {
        render(<Home/>);
        expect(screen.getByTestId("result")).toBeInTheDocument();
        expect(screen.getByTestId("num1")).toBeInTheDocument();
        expect(screen.getByTestId("num2")).toBeInTheDocument();
        expect(screen.getByTestId("add")).toBeInTheDocument();
        expect(screen.getByTestId("subtract")).toBeInTheDocument();
        expect(screen.getByTestId("multiply")).toBeInTheDocument();
        expect(screen.getByTestId("divide")).toBeInTheDocument();
    })

    it("adds to numbers", () => {
        render(<Home/>)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const result = screen.getByTestId("result")
        const addbutton = screen.getByTestId("add")

        fireEvent.change(num1input, { target: {value: 5}})
        fireEvent.change(num2input, { target: {value: 8}})

        fireEvent.click(addbutton)

        expect(result).toHaveTextContent("13")
    })

    it("minus to numbers", () => {
        render(<Home/>)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const result = screen.getByTestId("result")
        const addbutton = screen.getByTestId("subtract")

        fireEvent.change(num1input, { target: {value: 8}})
        fireEvent.change(num2input, { target: {value: 5}})

        fireEvent.click(addbutton)

        expect(result).toHaveTextContent("3")
    })

    it("multiply to numbers", () => {
        render(<Home/>)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const result = screen.getByTestId("result")
        const addbutton = screen.getByTestId("multiply")

        fireEvent.change(num1input, { target: {value: 8}})
        fireEvent.change(num2input, { target: {value: 5}})

        fireEvent.click(addbutton)

        expect(result).toHaveTextContent("40")
    })

    it("minus to numbers", () => {
        render(<Home/>)
        const num1input = screen.getByTestId("num1")
        const num2input = screen.getByTestId("num2")
        const result = screen.getByTestId("result")
        const addbutton = screen.getByTestId("divide")

        fireEvent.change(num1input, { target: {value: 8}})
        fireEvent.change(num2input, { target: {value: 4}})

        fireEvent.click(addbutton)

        expect(result).toHaveTextContent("2")
    })
})