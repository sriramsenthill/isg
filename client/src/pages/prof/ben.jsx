import React from "react";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import Ben from "../../components/instructor-profile/professor/ben"
import Wrapper from "@/src/layout/wrapper";

const proffour = () => {
    return (
        <>
            <Wrapper>
                <Breadcrumb title="Professor" isDbbl="Professor" subtitle="Professor Profile" />
                <Ben />
            </Wrapper>

        </>
    );
};

export default proffour;