import React from "react";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import Sasikumar from "../../components/instructor-profile/professor/Sasikumar";
import Wrapper from "@/src/layout/wrapper";

const profTwo = () => {
    return (
        <>
            <Wrapper>
                <Breadcrumb title="Professor" isDbbl="Professor" subtitle="Professor Profile" />
                <Sasikumar />
            </Wrapper>

        </>
    );
};

export default profTwo;