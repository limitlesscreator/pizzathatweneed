import React from 'react';
import s from './Story.module.sass'
export const Story = () => {
    return (
        <>
            <div className={s.upTitle}>OUR STORY</div>
            <div className={s.title}>About us</div>
            <div className={s.descriptionAbout}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/>
                <br/>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                <br/>
                <br/>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            </div>
            <div style={{marginTop: '80px'}} className={s.upTitle}>OUR STORY</div>
            <div className={s.title}>Contact us</div>
            <div className={s.number}>
                +46 738 123 123
            </div>

        </>
    );
};
