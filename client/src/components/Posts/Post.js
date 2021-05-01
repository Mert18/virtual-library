import React from 'react'

const Post = () => {
    return (
        <div className="post">
            <div className="post__quote">
                <h3>&ldquo;Eğer tanrılar gerçekten var olsaydı, nasıl dayanırdım ben bir tanrı olmayışıma?&rdquo;</h3>
                <h4>-Friedrich Nietzsche</h4>
            </div>
            <div className="post__thoughts">
                <h3>What do you think?</h3>
            </div>
            <div className="post__info">
                <div className="post__info__user">
                    <p>Mert</p>
                </div>
                <div className="post__info__date">
                    <p>19/03/2000</p>
                </div>
            </div>
        </div>
    )
}

export default Post
