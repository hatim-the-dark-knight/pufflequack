import React from 'react'
import { Stack, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import './Content.css'
import data from '../../utils/categories.json'

const Content = () => {
  return (
    <Stack spacing={4} cols={3} rowHeight={250} className="grid">
      <ImageList>
      {
        data.map((item, i) => {
          return(
            <ImageListItem id={i} >
              <img
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span> {item.items.length}</span>}
                position="below"
              />
            </ImageListItem>
          )
        })
      }
      </ImageList>
        {/* <div className="item-card">
            <img src="/Burger_148.png" alt="" />
            <div className="label">
                Burger * <b>$4.99</b>
            </div>
            <button className="addButton">
                ADD
            </button>
        </div> */}
    </Stack>
  )
}

export default Content


