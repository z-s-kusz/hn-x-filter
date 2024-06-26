export default function Post(props) {
    const hnCommentUrl = 'https://news.ycombinator.com/item?id=' + props.post.id;
    const link = props.post.url || hnCommentUrl;

    const getBaseUrl = (url) => {
        if (!url) return '';

        const pathArray = url.split('/');
        const protocol = pathArray[0];
        const host = pathArray[2];
        const baseUrl = protocol + '//' + host;
        return baseUrl;
    };

    const baseUrl = getBaseUrl(link);

    return (
        <div class="post">
            <a href={link}>
                {props.post.title}
            </a>
            <div class="post-line-2">
                <span class="baseurl">{baseUrl}</span>
                <a class="comments" href={hnCommentUrl}>View Comments</a>
            </div>
        </div>
    );
}
