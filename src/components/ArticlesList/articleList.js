import React from 'react'
import { ArticleItem } from '../ArticleItem/articleItem'
import { List, Item, ListContainer, ListTitle } from './styles'
import images from '../../../public/assets/images/images'

export const ArticlesList = () => {
  return (
    <ListContainer>
      <ListTitle>
        <h4>Noticias relacionadas</h4>
        <div />
      </ListTitle>
      <List>
        {
      [1, 2, 3, 4, 5].map(articleItem => <Item key={articleItem}>
        <ArticleItem
          image={images.bacterium}
          tagLabel='Noticias'
          itemTitle='Lorem ipsum dolor: Volutpat consequat'
          autor='Lorem Ipsum Dolor'
        />
      </Item>
      )
      }
      </List>
    </ListContainer>
  )
}
