import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Chat from "../components/chat/chat"

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Chat'} />
            <Chat />
        </Wrapper>
    );
};

export default index;