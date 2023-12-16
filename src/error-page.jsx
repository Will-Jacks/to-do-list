import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
                width:"100vw",
                height:"100vh"
            }}>
            <h1>Oops!</h1>
            <p>Desculpe, aconteceu um erro inesperado!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}