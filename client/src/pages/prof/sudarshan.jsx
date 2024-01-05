import React from "react";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import Sudarshan from "../../components/instructor-profile/professor/Sudarshan";
import Wrapper from "@/src/layout/wrapper";

const profOne = () => {
    return (
        <>
            <Wrapper>
                <Breadcrumb title="Professor " isDbbl="Professor" subtitle="Professor Profile" />
                <Sudarshan />
            </Wrapper>

        </>
    );
};

export default profOne;