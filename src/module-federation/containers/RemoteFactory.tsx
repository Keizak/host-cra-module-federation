import {ErrorBoundary} from "./ErrorBoundary";
import React, {Suspense} from "react";

const flexBLockStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100vw",
    height:"90vh"
}
export const RemoteFactory = (JSX:JSX.Element):JSX.Element => (
    <ErrorBoundary>
        <Suspense fallback={<div style={flexBLockStyle}>Load...</div>}>{JSX}</Suspense>
    </ErrorBoundary>
)
