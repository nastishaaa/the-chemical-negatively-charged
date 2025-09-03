import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from "./redux/auth/selectors";

export default function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
}
