import React, { useEffect, useRef } from "react";
// import styles from "./style.module.css";
// import markdown from "./markdown.md";
// import { useLocation } from "react-router";
import * as markmap from "markmap-view";
import { Transformer } from "markmap-lib";
import { useLocation, useParams } from "react-router-dom";
const { Markmap, loadCSS, loadJS } = markmap;

const transformer = new Transformer();
// const mdStr = window.atob(markdown.split(",")[1]);

const useM = (md, option) => {
    // const str =
    //   "- optic agnosia arcuate sulcus broad streams intraparietal sulcus ventral\n\t- diff layers despond\n\t\t- communicable mach score legitamate power expert personal power reward referent coercive good attitude\n\t\t- chapter management intro\n";

    const ref = useRef(null);
    useEffect(() => {
        ref.current.innerHTML = "";
        const { root, features } = transformer.transform(md);
        const { styles, scripts } = transformer.getUsedAssets(features);
        if (styles) loadCSS(styles);
        if (scripts) loadJS(scripts, { getMarkmap: () => markmap });
        Markmap.create(ref.current, option, root);
    }, [md, option]);
    return <svg ref={ref} style={{ width: "100vw", height: "100vh" }}></svg>;
};

export default function Results({ mark }) {
    // const { result } = useParams();
    // const location = useLocation();
    // const result = location.state?.result;
    console.log(mark);
    const M = useM(mark);

    return <>{M}</>;
}
