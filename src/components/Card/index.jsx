import React from 'react';


import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/17478933?v=4' />
                <div>
                    <h4>Lucian Cardoso</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito em curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    {/* <FiThumbsUp /> 16 */} 16 likes
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  );
}

export { Card };