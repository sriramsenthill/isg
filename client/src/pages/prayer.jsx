import React, { useEffect } from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";

const Prayer = () => {
    // const { data: session, status } = useSession();
    // const router = useRouter();

    // // Redirect to sign-in page if no active session
    // useEffect(() => {
    //     if (status === "unauthenticated" || !session) {
    //         router.push("/sign-in");
    //     }
    // }, [status, session, router]);

    // if (status === "loading") {
    //     // You might want to render a loading indicator here
    //     return <div>Loading...</div>;
    // }
    const imageFilenames = Array.from({ length: 4 }, (_, index) => `${index + 1}.jpeg`);

    return (
        <WrapperFour>
            <SEO pageTitle={"Prayer"} />
            <Breadcrumb title="Prayer" subtitle="Prayer" isDbbl="" imageUrl="/assets/img/isg/logos/prayer.png" />
            <div style={{ backgroundColor: '#5f096f', backgroundImage: `url(/assets/img/bg/shape-bg-02.png)`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <div className="section-title mb-65">
                            <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>Prayer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {imageFilenames.map((filename, index) => (
                        <div key={index} className="col-md-6">
                            <img
                                src={`/assets/img/isg/p${filename}`}
                                alt={`Image ${index + 1}`}
                                style={{ width: "90%", height: "90%", margin: "10px" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <AudioPlayer
                autoPlay
                src="/assets/img/isg/prayerSong.mp3"
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </WrapperFour>
    );
};

export default Prayer;
