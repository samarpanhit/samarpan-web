function FallbackRender({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
        <div role="alert">
            <p>Something went wrong:</p>
            {/* <pre style={{ color: "red" }}>{error.message}</pre> */}
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    );
}

export default FallbackRender;
