import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import 'react-h5-audio-player/lib/styles.css';
import CheckoutArea from "../components/check-out/checkout-area";
import CouponArea from "../components/check-out/coupon-area";


const registration = () => {
    return (
        <>
            <SEO pageTitle={'2025 Registration'} />
            <br />
            <CheckoutArea />
        </>
    );
};

export default registration;