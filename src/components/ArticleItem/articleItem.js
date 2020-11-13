import React from 'react'
import TagLabel from '../TagLabel/tagLabel'
import images from '../../../public/assets/images/images'

import { ItemContainer, Image, ItemInfo, ItemIcons, ItemRight, ImageContainer } from './styles'

export const ArticleItem = ({ image, path, tagLabel, itemTitle, autor }) => (
  <ItemContainer href={path}>
    <ImageContainer>
      <Image src={image} />
      <TagLabel text={tagLabel} />
    </ImageContainer>
    <ItemRight>
      <ItemInfo>
        <p><b>{itemTitle}</b></p>
        <p>{`por ${autor}`}</p>
      </ItemInfo>
      <hr />
      <ItemIcons>
        <div>
          <img src={images.star} alt='' srcset='' />
          <span>50</span>
        </div>
        <div>
          <img src={images.comments} alt='' srcset='' />
          <span>40</span>
        </div>
        <div>
          <img src={images.eye} alt='' srcset='' />
          <span>75</span>
        </div>
      </ItemIcons>
    </ItemRight>

  </ItemContainer>
)
