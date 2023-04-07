export default function Button(props: any){
    return(
        <div>
            <button className="button"> {props.children}</button>
            <style jsx>
                {
                    `
                    .button {
                        padding: 1em;
                        background: green;
                        color: white;
                        border-radius: 20px;
                        border: none
                    }
                    `
                }
            </style>
        </div>
    )
}