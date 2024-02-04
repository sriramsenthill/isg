import React, { useEffect } from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";


const pastorFellowship = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    // Redirect to sign-in page if no active session
    useEffect(() => {
        if (status === "unauthenticated" || !session) {
            router.push("/sign-in");
        }
    }, [status, session, router]);

    if (status === "loading") {
        // You might want to render a loading indicator here
        return <div>Loading...</div>;
    }
    return (
        <WrapperFour>
            <SEO pageTitle={"Pastor Fellowship"} />
            <Breadcrumb title="Pastor Fellowship" subtitle="Pastor Fellowship" isDbbl="" imageUrl="/assets/img/isg/logos/pastor.png" />
            <AudioPlayer
                autoPlay
                src="/assets/img/isg/pastor.mp3"
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </WrapperFour>
    );
};

export default pastorFellowship;