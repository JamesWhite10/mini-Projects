import React from "react";
import SuperButton from "../HomemadeInpButCheck/common/c2-SuperButton/SuperButton";
import s from "./Loading.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import svg from "./preloader.svg";

function Loading() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))

        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
    }, 3000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            <div style={{fontSize: "20px"}}>Loading:</div>

            {isLoading
                ? (
                    <div className={s.loading}><img src={svg}/></div>
                ) : (
                        <br/>
                )}
            <SuperButton className={s.but} onClick={setLoading}>set loading</SuperButton>
        </div>
    );
}

export default Loading;
