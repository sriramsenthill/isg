import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Chat from "../components/chat/chat"
import PostComment from "../components/form/post-comment";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Chat'} />
            <PostComment />
        </Wrapper>
    );
};

export default index;