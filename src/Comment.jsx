import React from 'react';
import comment from './comment.png'
import heart from './heart.png'
import send from './send.png'
import bookmark from './bookmark.png'
import profile from './profile.jpg'

export function Comment(props){

    const userName = "Junha"
    const commentNum = 8

    return(
        <div>
            <div className="post__comment__icon">
                <img src={heart} alt="heart" className="heart"/>
                <img src={comment} alt="comment" className="comment"/>
                <img src={send} alt="send" className="send"/>
                <img src={bookmark} alt="bookmark" className="bookmark"/>
            </div>
            <div className="post__comment__like">
                <img src={profile} alt="profile" className="post__comment__profile"/>
                <p className="post__comment__like__text"><b>{userName}</b>님 <b>외 00명</b>이 좋아합니다.</p>
            </div>
            <div className="post__comment__title">
                <b className="post__comment__id">{userName}</b>
                <p className="post__title">원준이 개 멍청하게 생겼다 ㄹ...</p>
                <p className="post-more">더보기</p>
            </div>
            <div className="post__comment__text">
                <p className="post__more__comment">댓글 {commentNum}개 모두 보기</p>
                <div className="post__comment__comment">
                    <b>Kim1Jun01</b>
                    <p className="post__comment_comment__text">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ레전드</p>
                </div>
                <div className="post__comment__comment">
                    <b>PaperEd</b>
                    <p className="post__comment_comment__text">개잘찍었네ㄷ</p>
                </div>
            </div>
        </div>
    )
}