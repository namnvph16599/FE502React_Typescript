import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const SearchPages = (props: Props) => {
    const { search } = useParams();
    console.log(search);
    return (
        <div>SearchPages</div>
    )
}

export default SearchPages