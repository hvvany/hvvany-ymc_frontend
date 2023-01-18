import {TagTypesExample, CheckBtn} from "./button";
import style from "../login/login.module.css"


function GroupBtn(prob) {
    return (
        <div className={style.btnGroup}>
            <TagTypesExample name={prob.name} />
            <CheckBtn check={prob.check} />
        </div>
    )
}

export default GroupBtn