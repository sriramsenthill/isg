import React from "react";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import Priyanthi from "../../components/instructor-profile/professor/Priyanthi";
import Wrapper from "@/src/layout/wrapper";

const proffive = () => {
    return (
        <>
            <Wrapper>
                <Breadcrumb title="Professor" isDbbl="Professor" subtitle="Professor Profile" />
                <Priyanthi />
            </Wrapper>

        </>
    );
};

export default proffive;