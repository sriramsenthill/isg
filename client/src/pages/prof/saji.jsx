import React from "react";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import Saji from "../../components/instructor-profile/professor/Saji";
import Wrapper from "@/src/layout/wrapper";

const profThree = () => {
    return (
        <>
            <Wrapper>
                <Breadcrumb title="Professor" isDbbl="Professor" subtitle="Professor Profile" />
                <Saji />
            </Wrapper>

        </>
    );
};

export default profThree;