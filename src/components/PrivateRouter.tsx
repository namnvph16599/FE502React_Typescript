import React from 'react'
import { Navigate } from 'react-router-dom';
import { getLocalStorage } from '../utils/localStorage';

type Props = {
    children: JSX.Element
}

const PrivateRouter = (props: Props) => {
    const { user: { role } } = getLocalStorage()

    if (role == 0) {
        return <Navigate to="/signin" />
    }
    return props.children
}

export default PrivateRouter