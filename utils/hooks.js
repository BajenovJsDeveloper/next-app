import React, { useRef, useState } from "react"
import MainLayout from "../components/MainLayout"
import styled from 'styled-components'


export function withLoading (Component){
    return (props) => {
        const [ isLoading, setLoading ] = useState(false)
        const loading = () => {
            setLoading(true)
        }
        if(isLoading) return <MainLayout> <Loading> Loading... </Loading> </MainLayout>
        return (<Component { ...props } loading={loading}/>)
    }    
}


const Loading = styled.div`
    display: block;
    padding: 4rem 0;
    display: flex;
    justify-content: center;

`