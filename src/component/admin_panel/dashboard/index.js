import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { General_Form } from "./generalForm"
import { Case, CaseElse, Switch } from "react-context-switch"
import { View } from "./View"
import { View_Comments } from "./comments"

export const Dashboard = (props) => {
    return (
        <>
            <Header />
            <Sidebar />
            <Switch value={props.data}>
                <Case when={(val)=> val.includes("form")}>
                    <General_Form />
                </Case>
                <Case when={(val)=> val.includes("view")}>
                    <View />
                </Case>
                <Case when={(val)=> val.includes("comments")}>
                    <View_Comments />
                </Case>
            </Switch>
        </>
    )
}