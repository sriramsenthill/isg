import React from "react";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import Caleb from "../../components/instructor-profile/professor/Caleb";
import Wrapper from "@/src/layout/wrapper";

const profThree = () => {
    return (
        <>
            <Wrapper>
                <Breadcrumb title="Professor" isDbbl="Professor" subtitle="Professor Profile" />
                <Caleb />
            </Wrapper>

        </>
    );
};

export default profThree;