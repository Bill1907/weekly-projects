import styled from "@emotion/styled";
import {ReactNode} from "react";

type TodoContainerProps = {
    children: ReactNode[] | ReactNode
}
const Container = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export function TodoContainer({ children }: TodoContainerProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}