import HyperLink from "../Components/HyperLink";

export default function About(){
    return (
        <div>
            <h1>About</h1>
            <HyperLink to={"/"}>
                <p>Go to Home</p>
            </HyperLink>
        </div>
    )
}