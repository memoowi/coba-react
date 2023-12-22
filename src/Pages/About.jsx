import HyperLink from "../Components/HyperLink";

export default function About(){
    return (
        <div>
            <h1>About</h1>
            <img src="/coba-react/vite.svg" alt="Vite logo" />
            <HyperLink to={"/"}>
                <p>Go to Home</p>
            </HyperLink>
        </div>
    )
}